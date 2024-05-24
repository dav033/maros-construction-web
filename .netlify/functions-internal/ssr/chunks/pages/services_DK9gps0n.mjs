import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, i as renderComponent, k as renderSlot } from '../astro_Drz9_Bhe.mjs';
import 'kleur/colors';
import 'html-escaper';
import { e as $$Image, c as $$Layout } from './about-us_DM3rOQce.mjs';
import 'clsx';
/* empty css                             */
import { s as staticData } from './index_D11q0yST.mjs';

const $$Astro$5 = createAstro();
const $$PresentationBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PresentationBanner;
  return renderTemplate`${maybeRenderHead()}<div class="titleContainer" data-astro-cid-ovcawr7u> <h3 data-astro-cid-ovcawr7u>Services</h3> </div> `;
}, "C:/Users/david/maros-construction/src/components/services/PresentationBanner.astro", void 0);

const $$Astro$4 = createAstro();
const $$Introduction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Introduction;
  return renderTemplate`${maybeRenderHead()}<div class="service-introduction" data-astro-cid-yeogtc6k> <p data-astro-cid-yeogtc6k>
From the initial design phase to the finishing touches, we adhere to the
    highest industry standards. Our skilled team combines technical expertise
    with an unwavering eye for detail. Whether it’s a historic restoration, a
    modern addition, or a custom application, we pour our passion into every
    project. Trust us to elevate your vision, one concrete masterpiece at a
    time.
<button data-astro-cid-yeogtc6k>LEARN MORE</button> </p> </div> `;
}, "C:/Users/david/maros-construction/src/components/services/Introduction.astro", void 0);

const $$Astro$3 = createAstro();
const $$Arrow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Arrow;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"${spreadAttributes(props)}><path fill="currentColor" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32"></path></svg>`;
}, "C:/Users/david/maros-construction/src/assets/icons/arrow.icon.astro", void 0);

const $$Astro$2 = createAstro();
const $$ServicePageItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServicePageItem;
  const { title, image, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="serviceItem" data-astro-cid-hgqjkrva> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": title, "width": 380, "height": 400, "loading": index < 2 ? "eager" : "lazy", "data-astro-cid-hgqjkrva": true })} <h1 data-astro-cid-hgqjkrva>${title}</h1> <p data-astro-cid-hgqjkrva> ${renderSlot($$result, $$slots["default"])} </p> <a href="/contact-us" data-astro-cid-hgqjkrva>Order Now ${renderComponent($$result, "Arrow", $$Arrow, { "class": "icon", "data-astro-cid-hgqjkrva": true })} </a> </div> `;
}, "C:/Users/david/maros-construction/src/components/services/ServicePageItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContentSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentSection;
  return renderTemplate`${maybeRenderHead()}<div class="serviceSection" data-astro-cid-r4ftykj5> <div class="servicesContainer" data-astro-cid-r4ftykj5> ${staticData.concreteData.map((service, index) => renderTemplate`${renderComponent($$result, "ServicePageItem", $$ServicePageItem, { "title": service.title, "image": service.image, "key": index, "index": index, "data-astro-cid-r4ftykj5": true }, { "default": ($$result2) => renderTemplate`${service.description}` })}`)} </div> </div> `;
}, "C:/Users/david/maros-construction/src/components/services/ContentSection.astro", void 0);

const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="servicesPage" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "PresentationBanner", $$PresentationBanner, { "data-astro-cid-ucd2ps2b": true })} ${renderComponent($$result2, "Introduction", $$Introduction, { "data-astro-cid-ucd2ps2b": true })} ${renderComponent($$result2, "ContentSection", $$ContentSection, { "data-astro-cid-ucd2ps2b": true })} <!-- <FrequentQuestions client:load /> --> </main> ` })} `;
}, "C:/Users/david/maros-construction/src/pages/services.astro", void 0);

const $$file = "C:/Users/david/maros-construction/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
