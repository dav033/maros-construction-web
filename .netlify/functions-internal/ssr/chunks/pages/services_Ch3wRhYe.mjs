import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderSlot, f as renderComponent } from '../astro_BsXYIyI9.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './about-us_D-zAp1oq.mjs';
import 'clsx';
/* empty css                             */

const lath = new Proxy({"src":"/_astro/concrete.UyDwUEMg.webp","width":740,"height":421,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/maros-construction/src/assets/images/concrete.webp";
							}
							
							return target[name];
						}
					});

const lathMedium = new Proxy({"src":"/_astro/concrete-medium.D0xLWin-.webp","width":600,"height":341,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/maros-construction/src/assets/images/concrete-medium.webp";
							}
							
							return target[name];
						}
					});

const driveway = new Proxy({"src":"/_astro/driveway.-1-AyotT.webp","width":740,"height":421,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/maros-construction/src/assets/images/driveway.webp";
							}
							
							return target[name];
						}
					});

const sidewalk = new Proxy({"src":"/_astro/sidewalk.C0nYUs4a.webp","width":740,"height":421,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/maros-construction/src/assets/images/sidewalk.webp";
							}
							
							return target[name];
						}
					});

const decks = new Proxy({"src":"/_astro/decks.D5iDxEqW.webp","width":740,"height":421,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/maros-construction/src/assets/images/decks.webp";
							}
							
							return target[name];
						}
					});

const images = { lath, driveway, sidewalk, decks, lathMedium };

const $$Astro$3 = createAstro("https://www.my-site.dev");
const $$ServicePageItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServicePageItem;
  let { title, images, idSection } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="servicePageItem"${addAttribute(idSection, "id")} data-astro-cid-hgqjkrva> <div class="imagesContainer" data-astro-cid-hgqjkrva> <picture data-astro-cid-hgqjkrva> <source media="(max-width: 1150px) and (min-width: 1081px)"${addAttribute(images.medium.src, "srcset")} data-astro-cid-hgqjkrva> <source media="(max-width: 1080px) "${addAttribute(images.default.src, "srcset")} data-astro-cid-hgqjkrva> <img${addAttribute(images.default.src, "src")} " alt="{title}class=" image" data-astro-cid-hgqjkrva> </picture> </div> <div class="body" data-astro-cid-hgqjkrva> <h1 data-astro-cid-hgqjkrva>${title}</h1> <p data-astro-cid-hgqjkrva>${renderSlot($$result, $$slots["default"])}</p> <a${addAttribute(`/contact-us/?service=${idSection}`, "href")} data-astro-cid-hgqjkrva>Order Now</a> </div> </div> `;
}, "C:/Users/david/maros-construction/src/components/services/ServicePageItem.astro", void 0);

const $$Astro$2 = createAstro("https://www.my-site.dev");
const $$PresentationBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PresentationBanner;
  return renderTemplate`${maybeRenderHead()}<div class="titleContainer" data-astro-cid-ovcawr7u> <h3 data-astro-cid-ovcawr7u>Services</h3> <h1 data-astro-cid-ovcawr7u>Shape Your Vision</h1> </div> <div class="services-presentation" data-astro-cid-ovcawr7u></div> `;
}, "C:/Users/david/maros-construction/src/components/services/PresentationBanner.astro", void 0);

const $$Astro$1 = createAstro("https://www.my-site.dev");
const $$Introduction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Introduction;
  return renderTemplate`${maybeRenderHead()}<div class="service-introduction" data-astro-cid-yeogtc6k> <p data-astro-cid-yeogtc6k>
Rockford Construction develops, builds and manages spaces that make a
    positive impact on our team, our clients and our communities.
<button data-astro-cid-yeogtc6k>LEARN MORE</button> </p> </div> `;
}, "C:/Users/david/maros-construction/src/components/services/Introduction.astro", void 0);

const $$Astro = createAstro("https://www.my-site.dev");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const services = [
    {
      title: "Concrete Repair",
      image: images.lath,
      id: "concrete",
      imageMedium: images.lathMedium
    },
    {
      title: "Driveways",
      image: images.driveway,
      id: "driveways",
      imageMedium: images.lathMedium
    },
    {
      title: "Sidewalks",
      image: images.sidewalk,
      id: "sidewalks",
      imageMedium: images.lathMedium
    },
    {
      title: "Decks",
      image: images.decks,
      id: "decks",
      imageMedium: images.lathMedium
    }
  ];
  const serviceDescription = `Enhance the beauty and ambiance of your spaces with our expert
painting services. Whether you require interior or exterior painting,
our team will provide meticulous attention to detail, ensuring a
flawless and long-lasting finish. We work closely with our clients to
understand their preferences and deliver personalized results`;
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="servicesPage" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "PresentationBanner", $$PresentationBanner, { "data-astro-cid-ucd2ps2b": true })} ${renderComponent($$result2, "Introduction", $$Introduction, { "data-astro-cid-ucd2ps2b": true })} ${services.map((service) => renderTemplate`${renderComponent($$result2, "ServicePageItem", $$ServicePageItem, { "title": service.title, "images": { default: service.image, medium: service.imageMedium }, "idSection": service.id, "data-astro-cid-ucd2ps2b": true }, { "default": ($$result3) => renderTemplate`${serviceDescription}` })}`)} </main> ` })} `;
}, "C:/Users/david/maros-construction/src/pages/services.astro", void 0);

const $$file = "C:/Users/david/maros-construction/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
