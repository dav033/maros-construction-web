import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderSlot, F as Fragment } from '../astro_BsXYIyI9.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                             */
/* empty css                             */
import { IoIosArrowDown } from 'react-icons/io';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';

const image = new Proxy({"src":"/_astro/howei-wang-iPMUXsSjrmE-unsplash.CAhng4sc.webp","width":5919,"height":3946,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/maros-construction/src/assets/images/howei-wang-iPMUXsSjrmE-unsplash.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$a = createAstro("https://www.my-site.dev");
const $$AboutUsPrincipal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$AboutUsPrincipal;
  return renderTemplate`${maybeRenderHead()}<section class="principal" data-astro-cid-wk2j4euz> <div data-astro-cid-wk2j4euz> <h1 data-astro-cid-wk2j4euz>Who Are We?</h1> <img${addAttribute(image.src, "src")} alt="sampleImage" data-astro-cid-wk2j4euz> <p data-astro-cid-wk2j4euz>
Welcome to Maros Construction, your trusted partner for your project, we
      offer the most flexible and reliable team for all your construction ideas.
      We understand every project is unique, That’s why we offer a dedicated
      team who bring diverse expertise and creative options to the table. This
      ensures we craft a custom-tailored solution for each client, exceeding
      expectations and delivering results.
</p> </div> </section> `;
}, "C:/Users/david/maros-construction/src/components/about-us/AboutUsPrincipal.astro", void 0);

const $$Astro$9 = createAstro("https://www.my-site.dev");
const $$DropdownMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$DropdownMenu;
  return renderTemplate` ${maybeRenderHead()}<div data-astro-cid-qrzpxo4s> <a href="/services" class="services-drop" data-astro-cid-qrzpxo4s>
Services ${renderComponent($$result, "IoIosArrowDown", IoIosArrowDown, { "data-astro-cid-qrzpxo4s": true })} </a> <ul class="menu" data-astro-cid-qrzpxo4s> <li data-astro-cid-qrzpxo4s> <a href="/services?option=concrete" data-astro-cid-qrzpxo4s>Concrete Repair</a> </li> <li data-astro-cid-qrzpxo4s> <a href="/services?option=driveways" data-astro-cid-qrzpxo4s>Driveways</a> </li> <li data-astro-cid-qrzpxo4s> <a href="/services?option=sidewalks" data-astro-cid-qrzpxo4s>Sidewalks</a> </li> <li data-astro-cid-qrzpxo4s> <a href="/services?option=decks" data-astro-cid-qrzpxo4s>Decks</a> </li> </ul> </div> `;
}, "C:/Users/david/maros-construction/src/components/navbar/DropdownMenu.astro", void 0);

const $$Astro$8 = createAstro("https://www.my-site.dev");
const $$LinksDesktop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LinksDesktop;
  return renderTemplate`${maybeRenderHead()}<div class="links-desktop" data-astro-cid-t7zmfc2u> <a href="/about-us" data-astro-cid-t7zmfc2u>About Us</a> ${renderComponent($$result, "DropdownMenu", $$DropdownMenu, { "data-astro-cid-t7zmfc2u": true })} <a href="/about-us" data-astro-cid-t7zmfc2u>Contact Us</a> </div> `;
}, "C:/Users/david/maros-construction/src/components/navbar/LinksDesktop.astro", void 0);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "sidebarContainer", children: [
    /* @__PURE__ */ jsx("button", { onClick: handleMenu, className: "hamburger", children: /* @__PURE__ */ jsx(CiMenuBurger, { className: "icon" }) }),
    /* @__PURE__ */ jsxs("div", { className: `sidebar ${isOpen ? "open" : ""}`, children: [
      /* @__PURE__ */ jsx("button", { onClick: handleMenu, className: "close", children: /* @__PURE__ */ jsx(AiOutlineClose, { className: "icon" }) }),
      /* @__PURE__ */ jsxs("div", { className: "services", children: [
        /* @__PURE__ */ jsx("h4", { children: "Services" }),
        /* @__PURE__ */ jsx("a", { href: "/services?option=concrete", children: "Concrete Repair" }),
        /* @__PURE__ */ jsx("a", { href: "/services?option=driveways", children: "Driveways" }),
        /* @__PURE__ */ jsx("a", { href: "/services?option=sidewalks", children: "Sidewalks" }),
        /* @__PURE__ */ jsx("a", { href: "/services?option=decks", children: "Decks" })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "/services", children: "About Us" }),
      /* @__PURE__ */ jsx("a", { href: "/services", children: "Contact Us" })
    ] })
  ] });
};

const mobileIconLight = new Proxy({"src":"/_astro/marosicon1-light.CxraTHgt.png","width":763,"height":327,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/maros-construction/src/assets/images/marosicon1-light.png";
							}
							
							return target[name];
						}
					});

const mobileIconDark = new Proxy({"src":"/_astro/marosicon1-dark.D0kmY9CK.png","width":763,"height":327,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/maros-construction/src/assets/images/marosicon1-dark.png";
							}
							
							return target[name];
						}
					});

const $$Astro$7 = createAstro("https://www.my-site.dev");
const $$MobileLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MobileLogo;
  let { src, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="mobile-logo" href="/"${addAttribute(id, "id")} data-astro-cid-gnqgsriz> <img${addAttribute(src, "src")} data-astro-cid-gnqgsriz> </a> `;
}, "C:/Users/david/maros-construction/src/components/index/MobileLogo.astro", void 0);

const $$Astro$6 = createAstro("https://www.my-site.dev");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate` ${maybeRenderHead()}<nav${addAttribute(`navbar-v2`, "class")} data-astro-cid-5blmo7yk> <a class="logo" href="/" data-astro-cid-5blmo7yk> Maros Construction</a> ${renderComponent($$result, "MobileLogo", $$MobileLogo, { "src": mobileIconLight.src, "id": "light", "data-astro-cid-5blmo7yk": true })} ${renderComponent($$result, "MobileLogo", $$MobileLogo, { "src": mobileIconDark.src, "id": "dark", "data-astro-cid-5blmo7yk": true })} ${renderComponent($$result, "LinksDesktop", $$LinksDesktop, { "data-astro-cid-5blmo7yk": true })} ${renderComponent($$result, "Sidebar", Sidebar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/david/maros-construction/src/components/navbar/Sidebar.jsx", "client:component-export": "default", "data-astro-cid-5blmo7yk": true })} </nav> `;
}, "C:/Users/david/maros-construction/src/components/Navbar.astro", void 0);

const $$Astro$5 = createAstro("https://www.my-site.dev");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta charset="UTF-8"><meta name="description" content="Astro description"><link rel="stylesheet" href="../styles/global.css"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>` })}${maybeRenderHead()}<body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "C:/Users/david/maros-construction/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro("https://www.my-site.dev");
const $$Mision = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Mision;
  return renderTemplate`${maybeRenderHead()}<section class="mision" data-astro-cid-wvao3l6t> <h1 data-astro-cid-wvao3l6t>Our Mission</h1> <p data-astro-cid-wvao3l6t>
Our mission at Maros Construction is to transform your vision into a
    reality. As a General Contractor specializing in concrete work and full
    renovations for residential and commercial projects, we take pride in our
    organized and dedicated team. We collaborate closely with our clients from
    project conception to final delivery, ensuring transparency and unwavering
    commitment every step of the way. Your peace of mind is our priority.
</p> </section> `;
}, "C:/Users/david/maros-construction/src/components/about-us/Mision.astro", void 0);

new Proxy({"src":"/_astro/rich-rhubbardstockfootage-Z2gExshMSCk-unsplash.4r50ozLF.jpg","width":6144,"height":3456,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/maros-construction/src/assets/images/rich-rhubbardstockfootage-Z2gExshMSCk-unsplash.jpg";
							}
							
							return target[name];
						}
					});

const BricksIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.5em",
    height: "1.5em",
    viewBox: "0 0 256 256",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeWidth: "1",
        d: "M224 52H32a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4M84 148v-40h88v40Zm-48 0v-40h40v40Zm144-40h40v40h-40Zm40-8h-88V60h88Zm-96-40v40H36V60Zm-88 96h88v40H36Zm96 40v-40h88v40Z"
      }
    )
  }
);

function ServiceAbout({ title, children, data }) {
  if (title) {
    return /* @__PURE__ */ jsxs("div", { className: "serviceSection", children: [
      /* @__PURE__ */ jsx("div", { className: "servicesList", children: data.map((item) => {
        const Icon = item.Icon;
        return /* @__PURE__ */ jsxs("a", { className: "item", href: "/", children: [
          /* @__PURE__ */ jsx(Icon, { class: "icon" }),
          /* @__PURE__ */ jsx("h1", { children: item.title })
        ] });
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "body", children: [
        /* @__PURE__ */ jsx("h2", { children: title }),
        /* @__PURE__ */ jsx("p", { children }),
        /* @__PURE__ */ jsx("button", { children: " DETAILS " })
      ] })
    ] });
  }
}

const TailIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.5em",
    height: "1.5em",
    viewBox: "0 0 48 48",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1",
        d: "M7 7h17v17H7zm17 0h17v17H24zM7 24h17v17H7zm19.8 2.8h17v17h-17z"
      }
    )
  }
);

const DrivewayIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.55em",
    height: "1.55em",
    viewBox: "0 0 256 256",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeWidth: "1",
        d: "M240 196h-12V98.67a12 12 0 0 0-5.34-10l-88-58.67a12 12 0 0 0-13.32 0l-88 58.67a12 12 0 0 0-5.34 10V196H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 98.67a4 4 0 0 1 1.78-3.33l88-58.66a4 4 0 0 1 4.44 0l88 58.66a4 4 0 0 1 1.78 3.33V196h-32v-60a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v60H36ZM180 140v24h-48v-24Zm-56 24H76v-24h48Zm-48 8h48v24H76Zm56 0h48v24h-48Z"
      }
    )
  }
);

function MaterialSymbolsLightDeckOutlineRounded(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1.5em",
      height: "1.5em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M11.5 21V8.5H4.863q-.298 0-.388-.283t.152-.444l6.913-4.835q.221-.142.462-.142t.458.142l6.913 4.835q.242.162.152.444t-.388.283H12.5V21q0 .213-.144.356q-.144.144-.357.144t-.356-.144T11.5 21M12 7.5h5.227H6.773zM3.5 21v-4.673l-.625-3.483q-.037-.213.076-.374t.327-.198q.2-.037.365.08t.201.315l.633 3.448h3.215q.344 0 .576.233t.232.575V21q0 .213-.144.356q-.144.144-.357.144t-.356-.144T7.5 21v-3.885h-3V21q0 .213-.144.356q-.144.144-.357.144t-.356-.144T3.5 21m12 0v-4.077q0-.343.232-.575q.232-.233.576-.233h3.215l.633-3.448q.035-.197.188-.315t.37-.08t.332.198t.079.374l-.625 3.483V21q0 .213-.144.356q-.144.144-.357.144t-.356-.144T19.5 21v-3.885h-3V21q0 .213-.144.356q-.144.144-.357.144t-.356-.144T15.5 21M6.773 7.5h10.454L12 3.835z"
        }
      )
    }
  );
}

function GuidanceKitchen(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1.5em",
      height: "1.5em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          d: "M12 22.5H1.5v-20s2-1 5.25-1s5.25 1 5.25 1zm0 0v-10h.25s1.75 1 5 1s5-1 5-1h.25v10zM1.5 9.5s2-1 5.25-1s5.25 1 5.25 1m-8-5v2M4 11v2m14.5.449V9.75a1.25 1.25 0 1 0-2.5 0V10"
        }
      )
    }
  );
}

function IonConstructOutline(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1.5em",
      height: "1.5em",
      viewBox: "0 0 512 512",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-miterlimit": "10",
            "stroke-width": "20",
            d: "M436.67 184.11a27.17 27.17 0 0 1-38.3 0l-22.48-22.49a27.15 27.15 0 0 1 0-38.29l50.89-50.89a.85.85 0 0 0-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 0 1-7.67 27.14l-173 160.76a40.76 40.76 0 1 0 57.57 57.54l162.15-173.3a27 27 0 0 1 26.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94c27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 0 0-1.36-.22Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "20",
            d: "M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 0 1-3.33-21.35a20.76 20.76 0 0 1 3.5-4.62l15.68-15.29a18.66 18.66 0 0 1 5.63-3.87a18.11 18.11 0 0 1 20 3.62c5.45 5.29 15.43 15 33.41 32.52m49.18 46.58c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 0 1 .94 19.92L394.63 444a14 14 0 0 1-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "20",
            d: "m17.34 193.5l29.41-28.74a4.71 4.71 0 0 1 3.41-1.35a4.85 4.85 0 0 1 3.41 1.35h0a9.86 9.86 0 0 0 8.19 2.77c3.83-.42 7.92-1.6 10.57-4.12c6-5.8-.94-17.23 4.34-24.54a207 207 0 0 1 19.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 0 1 206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0 1 10.28 11.64a78.92 78.92 0 0 0-9.21-2.77a68.82 68.82 0 0 0-20-1.26c-13.33 1.09-29.41 7.26-38 14c-13.9 11-19.87 25.72-20.81 44.71c-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 0 1-.34 9.16l-18.22 18a6.88 6.88 0 0 1-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 0 0-18.27 3.87a11.39 11.39 0 0 0-2.64 2a14.14 14.14 0 0 0 .42 20.08l1.71 1.6a4.63 4.63 0 0 1 0 6.64L71.73 246.6a4.71 4.71 0 0 1-3.41 1.4a4.86 4.86 0 0 1-3.41-1.35l-47.57-46.43a4.88 4.88 0 0 1 0-6.72"
          }
        )
      ]
    }
  );
}

function IconamoonSignPlusThin(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1.5em",
      height: "1.5em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M12 6v12m-6-6h12"
        }
      )
    }
  );
}

function IconParkOutlineInternalExpansion(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1.5em",
      height: "1.5em",
      viewBox: "0 0 48 48",
      ...props,
      children: /* @__PURE__ */ jsxs(
        "g",
        {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          children: [
            /* @__PURE__ */ jsx("path", { d: "M8 42h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2" }),
            /* @__PURE__ */ jsx("path", { d: "M42 8a2 2 0 0 0-2-2H28v14h14z", clipRule: "evenodd" }),
            /* @__PURE__ */ jsx("path", { d: "m13 35l10-10m0 0v7m0-7h-7" })
          ]
        }
      )
    }
  );
}

const $$Astro$3 = createAstro("https://www.my-site.dev");
const $$ServicesAbout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServicesAbout;
  const concreteData = [
    {
      title: "Concrete Repair",
      Icon: BricksIcon
    },
    {
      title: "Driveways",
      Icon: DrivewayIcon
    },
    {
      title: "Sidewalks",
      Icon: TailIcon
    },
    {
      title: "Decks",
      Icon: MaterialSymbolsLightDeckOutlineRounded
    }
  ];
  const remodelateData = [
    {
      title: "Kitchen Renovation",
      Icon: GuidanceKitchen
    },
    {
      title: "Full Renovation",
      Icon: IonConstructOutline
    },
    {
      title: "Home Additions",
      Icon: IconamoonSignPlusThin
    },
    {
      title: "Expansions",
      Icon: IconParkOutlineInternalExpansion
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="servicesAbout" data-astro-cid-r7qfz3gs> <h1 data-astro-cid-r7qfz3gs>What do we do?</h1> <div class="services" data-astro-cid-r7qfz3gs> ${renderComponent($$result, "ServiceAbout", ServiceAbout, { "title": "Full Remodeling", "data": remodelateData, "data-astro-cid-r7qfz3gs": true }, { "default": ($$result2) => renderTemplate`
Transform your space and unlock its full potential with, your trusted
      full-service, licensed contractor. Our team of qualified professionals is
      passionate about making your vision a reality, no matter the size or
      complexity. Whether it's a cozy kitchen refresh, a complete home
      transformation, or a seamless addition, we're your one-stop shop for
      expert guidance and impeccable execution.
` })} ${renderComponent($$result, "ServiceAbout", ServiceAbout, { "title": "Concrete Work", "data": concreteData, "data-astro-cid-r7qfz3gs": true }, { "default": ($$result2) => renderTemplate`
We specialize in transforming your property with high-quality concrete
      solutions. From driveways and sidewalks to building stunning stamped
      concrete patios and decks, we're your one-stop shop for all things
      concrete.
` })} </div> </section> `;
}, "C:/Users/david/maros-construction/src/components/about-us/ServicesAbout.astro", void 0);

const design = new Proxy({"src":"/_astro/design.6GW7JLmf.jpg","width":7360,"height":4912,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/maros-construction/src/assets/images/design.jpg";
							}
							
							return target[name];
						}
					});

const laws = new Proxy({"src":"/_astro/laws.DQFlOpD0.jpg","width":6000,"height":4000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/maros-construction/src/assets/images/laws.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://www.my-site.dev");
const $$ProcessItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProcessItem;
  let { image, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="process-item" data-astro-cid-ec7uhi44> <div class="image" data-astro-cid-ec7uhi44> <img${addAttribute(image, "src")} alt="Design" data-astro-cid-ec7uhi44> </div> <h3 data-astro-cid-ec7uhi44>${title}</h3> <p data-astro-cid-ec7uhi44> ${renderSlot($$result, $$slots["default"])} </p> </div> `;
}, "C:/Users/david/maros-construction/src/components/about-us/ProcessItem.astro", void 0);

const $$Astro$1 = createAstro("https://www.my-site.dev");
const $$Process = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Process;
  return renderTemplate`${maybeRenderHead()}<section class="process" data-astro-cid-lgh2v675> <h2 data-astro-cid-lgh2v675>Understand our process</h2> <div class="container" data-astro-cid-lgh2v675> ${renderComponent($$result, "ProcessItem", $$ProcessItem, { "title": "Collaboration and Design", "image": design.src, "data-astro-cid-lgh2v675": true }, { "default": ($$result2) => renderTemplate`
We work closely with you to understand your unique needs, style, and
      budget, translating your ideas into a stunning and functional design plan
      that reflects your personality.
` })} ${renderComponent($$result, "ProcessItem", $$ProcessItem, { "title": "Permits and Approvals", "image": laws.src, "data-astro-cid-lgh2v675": true }, { "default": ($$result2) => renderTemplate`
We navigate the complexities of legal and construction permits, ensuring
      your project adheres to all regulations and progresses smoothly.
` })} </div> </section> `;
}, "C:/Users/david/maros-construction/src/components/about-us/Process.astro", void 0);

const $$Astro = createAstro("https://www.my-site.dev");
const $$AboutUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutUs;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-gkq7oefr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="about-us" data-astro-cid-gkq7oefr> ${renderComponent($$result2, "AboutUsPrincipal", $$AboutUsPrincipal, { "data-astro-cid-gkq7oefr": true })} ${renderComponent($$result2, "Mision", $$Mision, { "data-astro-cid-gkq7oefr": true })} ${renderComponent($$result2, "ServicesAbout", $$ServicesAbout, { "data-astro-cid-gkq7oefr": true })} ${renderComponent($$result2, "Process", $$Process, { "data-astro-cid-gkq7oefr": true })} </main> ` })} `;
}, "C:/Users/david/maros-construction/src/pages/about-us.astro", void 0);

const $$file = "C:/Users/david/maros-construction/src/pages/about-us.astro";
const $$url = "/about-us";

const aboutUs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AboutUs,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, aboutUs as a };
