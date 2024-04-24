import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, s as spreadAttributes } from '../astro_BsXYIyI9.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './about-us_D-zAp1oq.mjs';
import 'clsx';
/* empty css                          */
/* empty css                             */

const $$Astro$9 = createAstro("https://www.my-site.dev");
const $$ImagePresentation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ImagePresentation;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`imageContent principal`, "class")} data-astro-cid-xaqbfght> <h3 data-astro-cid-xaqbfght>Building your dreams, one by one.</h3> </div> `;
}, "C:/Users/david/maros-construction/src/components/index/ImagePresentation.astro", void 0);

const reel1 = "/_astro/reel1.DvDD99Ko.webm";

const reel2 = "/_astro/reel2.DUqjQpM-.webm";

const reel3 = "/_astro/reel3.CAeC0qHc.webm";

const $$Astro$8 = createAstro("https://www.my-site.dev");
const $$ExampleVideo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ExampleVideo;
  let { src } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<video autoplay muted loop class="video" data-astro-cid-dmmnjlyt> <source${addAttribute(src, "src")} type="video/webm" data-astro-cid-dmmnjlyt></video> `;
}, "C:/Users/david/maros-construction/src/components/index/ExampleVideo.astro", void 0);

const $$Astro$7 = createAstro("https://www.my-site.dev");
const $$Videos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Videos;
  return renderTemplate`${maybeRenderHead()}<section class="videos" data-astro-cid-v4a3mkpq> ${renderComponent($$result, "ExampleVideo", $$ExampleVideo, { "src": reel1, "data-astro-cid-v4a3mkpq": true })} ${renderComponent($$result, "ExampleVideo", $$ExampleVideo, { "src": reel2, "data-astro-cid-v4a3mkpq": true })} ${renderComponent($$result, "ExampleVideo", $$ExampleVideo, { "src": reel3, "data-astro-cid-v4a3mkpq": true })} </section> `;
}, "C:/Users/david/maros-construction/src/components/index/Videos.astro", void 0);

const $$Astro$6 = createAstro("https://www.my-site.dev");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate`${maybeRenderHead()}<form data-astro-cid-bxoixt2l> <span data-astro-cid-bxoixt2l> Help us to help you </span> <h3 data-astro-cid-bxoixt2l>Contact Us</h3> <input type="text" placeholder="Your Name" required data-astro-cid-bxoixt2l> <input type="email" placeholder="Email" required data-astro-cid-bxoixt2l> <input type="tel" placeholder="Phone" id="tel" data-astro-cid-bxoixt2l> <textarea placeholder="Message" required data-astro-cid-bxoixt2l></textarea> <button type="submit" data-astro-cid-bxoixt2l>SUBMIT</button> </form> `;
}, "C:/Users/david/maros-construction/src/components/index/contactForm.astro", void 0);

const $$Astro$5 = createAstro("https://www.my-site.dev");
const $$ContactUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ContactUs;
  return renderTemplate`${maybeRenderHead()}<section class="contact" data-astro-cid-gnywcqoy> <div data-astro-cid-gnywcqoy> <p data-astro-cid-gnywcqoy>We want to get to know you and for you to know us</p> <h2 data-astro-cid-gnywcqoy>
Get a <span data-astro-cid-gnywcqoy>free</span> consultation
</h2> </div> ${renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-gnywcqoy": true })} </section> `;
}, "C:/Users/david/maros-construction/src/components/index/ContactUs.astro", void 0);

const $$Astro$4 = createAstro("https://www.my-site.dev");
const $$Remodelation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Remodelation;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"${spreadAttributes(props)}><path fill="currentColor" d="m13.783 15.172l2.121-2.121l5.996 5.996l-2.121 2.121zM17.5 10c1.93 0 3.5-1.57 3.5-3.5c0-.58-.16-1.12-.41-1.6l-2.7 2.7l-1.49-1.49l2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85l-1.78-1.78l.71-.71l-1.41-1.41L12 3.49a3 3 0 0 0-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71l3.54 3.54l.71-.71V9.15l1.41 1.41l.71-.71l1.78 1.78l-7.41 7.41l2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21"></path></svg>`;
}, "C:/Users/david/maros-construction/src/assets/icons/remodelation.icon.astro", void 0);

const $$Astro$3 = createAstro("https://www.my-site.dev");
const $$Concrete = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Concrete;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"${spreadAttributes(props)}><path fill="currentColor" d="M172.416 41.021c-39.47.351-78.748 5.972-114.732 14.827c10.094 15.264 27.17 26.95 46.898 34.865c23.65 9.488 50.72 13.333 70.959 12.299c20.826-1.065 47.765-9.524 68.764-21.008c10.5-5.742 19.542-12.245 25.652-18.5c3.24-3.317 5.517-6.486 6.99-9.316c-30.874-8.778-63.696-12.865-96.635-13.167a438 438 0 0 0-7.896 0m111.541 33.877c-.372.396-.743.793-1.125 1.184c-7.888 8.075-18.231 15.34-29.889 21.715c-23.314 12.75-51.772 21.928-76.484 23.191c-23.227 1.188-52.158-2.967-78.58-13.568c-18.094-7.26-35.189-17.651-47.762-31.873C33.802 206.86 19.325 353.169 39.992 473.012c19.598 6.163 40.992 10.825 63.008 13.95V423h64v-64h109.957c-.024-3.013.152-6.295.486-9.97c.96-10.546 3.217-24.018 6.338-39.007c5.408-25.967 13.412-56.318 21.948-82.152c-4.95-49.133-12.133-100.876-21.772-152.973m152.682.59c-.909.002-1.93.107-2.87.137l-56.949 71.28c7.692 2.471 14.598 7.387 19.639 14.052l55.268-66.045c.901-2.06.935-7.813-2.174-12.293c-2.433-3.505-5.967-6.446-12.051-7.092q-.407-.041-.863-.039m-69.506 87.742a32 32 0 0 0-4.278 6.745c-3.85 8.26-4.52 17.07-3.816 24.61l.022.224l3.507 24.408a201 201 0 0 0-5.46.586c-11.149 1.362-23.392 3.885-31.805 6.601c-9.124 26.31-18.124 59.552-23.9 87.29c-3.034 14.562-5.182 27.607-6.034 36.966c-.268 2.945-.188 4.657-.203 6.729c2.338-1.204 5.048-2.731 8.326-4.871c9.674-6.317 22.502-16.22 36.13-27.565c25.535-21.259 53.706-47.399 71.997-65.816c-2.982-7.624-8.213-16.243-13.951-23.516c-6.682-8.469-14.49-15.144-16.53-16.408c-.057.008-.262-.026-.392-.04l-3.783-26.323c-.448-4.91.237-11.044 2.207-15.27c.975-2.092 2.012-3.727 3.46-4.951c-3.847-5.382-9.725-8.894-15.497-9.399M377 313v46h110v-46zm-192 64v46h110v-46zm128 0v46h110v-46zm128 0v46h46v-46zm-320 64v46h110v-46zm128 0v46h110v-46zm128 0v46h110v-46z"></path></svg>`;
}, "C:/Users/david/maros-construction/src/assets/icons/concrete.icon.astro", void 0);

const $$Astro$2 = createAstro("https://www.my-site.dev");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${maybeRenderHead()}<section class="servicesHome" data-astro-cid-na62ad7e> <div class="serviceItem" data-astro-cid-na62ad7e> ${renderComponent($$result, "Concrete", $$Concrete, { "class": "icon", "data-astro-cid-na62ad7e": true })} <a data-astro-cid-na62ad7e>Concrete Solutions</a> </div> <div class="serviceItem" data-astro-cid-na62ad7e> ${renderComponent($$result, "Remodelation", $$Remodelation, { "class": "icon", "data-astro-cid-na62ad7e": true })} <a data-astro-cid-na62ad7e>Remodeling Solutions</a> </div> </section> `;
}, "C:/Users/david/maros-construction/src/components/index/Services.astro", void 0);

const image = new Proxy({"src":"/_astro/xviiizz-Vgv6OOwkTqc-unsplash.CBlgoWjy.jpg","width":2736,"height":3648,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/maros-construction/src/assets/images/xviiizz-Vgv6OOwkTqc-unsplash.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://www.my-site.dev");
const $$AboutPresentation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutPresentation;
  return renderTemplate`${maybeRenderHead()}<section class="aboutPresentation" data-astro-cid-u5srh6iw> <div class="main" data-astro-cid-u5srh6iw> <div data-astro-cid-u5srh6iw> <span data-astro-cid-u5srh6iw>About Us</span> <h2 data-astro-cid-u5srh6iw>Your best option</h2> <p data-astro-cid-u5srh6iw>
Your trusted partner in construction, we offer the most flexible and
        reliable team for all your concrete projects and full remodeling.
</p> <a href="/about-us" data-astro-cid-u5srh6iw> Learn more </a> </div> </div> <div class="image" data-astro-cid-u5srh6iw> <img${addAttribute(image.src, "src")} alt="placeholder" data-astro-cid-u5srh6iw> </div> </section> `;
}, "C:/Users/david/maros-construction/src/components/index/AboutPresentation.astro", void 0);

const $$Astro = createAstro("https://www.my-site.dev");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mainPage" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ImagePresentation", $$ImagePresentation, { "data-astro-cid-j7pv25f6": true })} <div class="body" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "AboutPresentation", $$AboutPresentation, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Services", $$Services, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Videos", $$Videos, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ContactUs", $$ContactUs, { "data-astro-cid-j7pv25f6": true })} </div> </main>  ` })}`;
}, "C:/Users/david/maros-construction/src/pages/index.astro", void 0);

const $$file = "C:/Users/david/maros-construction/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
