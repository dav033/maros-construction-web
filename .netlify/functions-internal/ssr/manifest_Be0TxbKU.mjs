import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_Drz9_Bhe.mjs';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CTmc-uub.js"}],"styles":[{"type":"external","src":"/_astro/about-us.NqgKPPJp.css"},{"type":"external","src":"/_astro/about-us.A_XJmHr9.css"}],"routeData":{"route":"/about-us","isIndex":false,"type":"page","pattern":"^\\/about-us\\/?$","segments":[[{"content":"about-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-us.astro","pathname":"/about-us","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B1OcN7Gf.js"}],"styles":[{"type":"external","src":"/_astro/about-us.A_XJmHr9.css"},{"type":"external","src":"/_astro/contact-us.CpOBfpJz.css"}],"routeData":{"route":"/contact-us","isIndex":false,"type":"page","pattern":"^\\/contact-us\\/?$","segments":[[{"content":"contact-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact-us.astro","pathname":"/contact-us","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZi0tDYl.js"}],"styles":[{"type":"external","src":"/_astro/services.deiJy21M.css"},{"type":"external","src":"/_astro/about-us.A_XJmHr9.css"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D69LUDxC.js"}],"styles":[{"type":"external","src":"/_astro/about-us.A_XJmHr9.css"},{"type":"external","src":"/_astro/index.CM3MDRko.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/david/maros-construction/src/pages/about-us.astro",{"propagation":"none","containsHead":true}],["C:/Users/david/maros-construction/src/pages/contact-us.astro",{"propagation":"none","containsHead":true}],["C:/Users/david/maros-construction/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/david/maros-construction/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/contact-us.astro":"chunks/pages/contact-us_CXNdF1WL.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DpE03_6g.mjs","/src/pages/services.astro":"chunks/pages/services_DK9gps0n.mjs","\u0000@astrojs-manifest":"manifest_Be0TxbKU.mjs","C:/Users/david/maros-construction/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_GEGeBkWE.mjs","\u0000@astro-page:src/pages/about-us@_@astro":"chunks/about-us_8FvF_R_I.mjs","\u0000@astro-page:src/pages/contact-us@_@astro":"chunks/contact-us_nepm0itX.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_B8rEix7B.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Cod9jbnL.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CTmc-uub.js","/astro/hoisted.js?q=1":"_astro/hoisted.B1OcN7Gf.js","/astro/hoisted.js?q=2":"_astro/hoisted.DZi0tDYl.js","/astro/hoisted.js?q=3":"_astro/hoisted.D69LUDxC.js","C:/Users/david/maros-construction/src/components/navbar/Sidebar.jsx":"_astro/Sidebar.DkZHZxwn.js","@astrojs/react/client.js":"_astro/client.OBjSpQF5.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/sandy-millar-u1kg_wztnkg-unsplash.IIvWXIRv.webp","/_astro/startae-team-7tXA8xwe4W4-unsplash.lYdiOoCP.webp","/_astro/reel3.Bftzm-mG.webm","/_astro/reel2.CccOU4q6.webm","/_astro/reel1.BUEVGNBH.webm","/_astro/marosicon1-light.aY0LrFl6.webp","/_astro/marosicon1-dark.BuD52T6u.webp","/_astro/1000229765_1740c.BUvHsZP1.webp","/_astro/1000249305_0194e.DF1faH2g.webp","/_astro/1200_800.DE7mz5kg.webp","/_astro/aboutUsPrincipal.Bno7jax3.webp","/_astro/1000246271_c561b.CbreqlaU.webp","/_astro/1000247660_69036.Dx8P-VZF.webp","/_astro/aboutUsPrincipal-medium.C9O8x7s_.webp","/_astro/1000243960_d832b.W-9i4OWe.webp","/_astro/aboutUsPrincipal-small.CW4Lufk-.webp","/_astro/imagePresentation1.Mkl90NSm.webp","/_astro/1000229731_e0979.DQ1NYWVk.webp","/_astro/ImagePresentation2.CmR-1g1T.webp","/_astro/imagePresentation1-medium.C1l0CtB2.webp","/_astro/imagePresentation1-small.C5loiii7.webp","/_astro/ImagePresentation2-medium.DTQowsJd.webp","/_astro/ImagePresentation2-small.B3DuYVow.webp","/_astro/design.BwgiDSFK.webp","/_astro/aboutImage.C2FIPZ5Q.webp","/_astro/laws.BB5qnHkq.webp","/_astro/about-us.NqgKPPJp.css","/_astro/about-us.A_XJmHr9.css","/_astro/contact-us.CpOBfpJz.css","/_astro/index.CM3MDRko.css","/_astro/services.deiJy21M.css","/favicon.svg","/fonts/AvenirNextCyr-Demi.ttf","/fonts/AvenirNextCyr-Light.ttf","/fonts/Barlow-Light.ttf","/fonts/Barlow-Regular.ttf","/fonts/Barlow-Thin.ttf","/fonts/gotham-black.woff2","/fonts/gotham-book.woff2","/fonts/Gotham-Light.otf","/fonts/gotham-medium.woff2","/fonts/Gotham-Thin.otf","/fonts/HindSiliguri-SemiBold.ttf","/fonts/MaisonNeueExtended-Demi.otf","/fonts/MaisonNeueExtended-Light.otf","/fonts/montserrat-latin-700-normal.ttf","/fonts/OpenSans-Regular.ttf","/fonts/roboto-cyrillic-400-italic.ttf","/fonts/Roboto-Light.ttf","/fonts/Roboto-Thin.ttf","/fonts/SquadaOne-Regular.ttf","/_astro/about-us.GQPeFJcV.css","/_astro/client.OBjSpQF5.js","/_astro/hoisted.B1OcN7Gf.js","/_astro/hoisted.CTmc-uub.js","/_astro/hoisted.D69LUDxC.js","/_astro/hoisted.DZi0tDYl.js","/_astro/index.BG0d_8j_.js","/_astro/Navbar.astro_astro_type_script_index_0_lang.BOgS18wE.js","/_astro/Sidebar.DkZHZxwn.js","/images/1000229731_e0979.webp","/images/1000229765_1740c.webp","/images/1000243960_d832b.webp","/images/1000246271_c561b.webp","/images/1000247660_69036.webp","/images/1000249305_0194e.webp","/images/1200_800.webp","/images/aboutImage.webp","/images/aboutUsPrincipal-medium.webp","/images/aboutUsPrincipal-small.webp","/images/aboutUsPrincipal.webp","/images/concrete-1259094_1280.webp","/images/design.webp","/images/imagePresentation1-medium.webp","/images/imagePresentation1-small.webp","/images/imagePresentation1.webp","/images/ImagePresentation2-medium.webp","/images/ImagePresentation2-small.webp","/images/ImagePresentation2.webp","/images/laws.webp","/images/maros-icon.webp","/images/marosicon1-dark.webp","/images/marosicon1-light.webp","/images/marosicon1.webp","/images/marosicon2.webp","/images/rich-rhubbardstockfootage-Z2gExshMSCk-unsplash.webp","/images/sandy-millar-u1kg_wztnkg-unsplash.webp","/images/sidewalk.webp","/images/startae-team-7tXA8xwe4W4-unsplash.webp","/styles/FrequentQuestions.css","/styles/global.css","/styles/questioItem.css","/styles/serviceSection.css","/styles/sidebar.css"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
