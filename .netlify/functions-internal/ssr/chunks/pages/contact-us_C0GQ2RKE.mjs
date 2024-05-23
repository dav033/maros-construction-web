import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_ULg2rZTi.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Location, a as $$Phone, b as $$Mail, c as $$Layout } from './about-us_BknxQ6Hd.mjs';
/* empty css                               */

const $$Astro = createAstro();
const $$ContactUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactUs;
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-5c24fmmt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="contact-us" data-astro-cid-5c24fmmt> <div class="container" data-astro-cid-5c24fmmt> <h1 data-astro-cid-5c24fmmt>Contact Us</h1> <div class="body" data-astro-cid-5c24fmmt> <form data-astro-cid-5c24fmmt> <input type="text" placeholder="Name" data-astro-cid-5c24fmmt> <input type="email" placeholder="Email" data-astro-cid-5c24fmmt> <input type="text" placeholder="Service" data-astro-cid-5c24fmmt> <textarea placeholder="Message" data-astro-cid-5c24fmmt></textarea> <button data-astro-cid-5c24fmmt>Send</button> </form> <div class="information" data-astro-cid-5c24fmmt> <div data-astro-cid-5c24fmmt> ${renderComponent($$result2, "Location", $$Location, { "class": "icon", "data-astro-cid-5c24fmmt": true })} <span data-astro-cid-5c24fmmt>Miami, Florida</span> </div> <div data-astro-cid-5c24fmmt> ${renderComponent($$result2, "Phone", $$Phone, { "class": "icon", "data-astro-cid-5c24fmmt": true })} <span data-astro-cid-5c24fmmt>(786) 707-0815</span> </div> <div data-astro-cid-5c24fmmt> ${renderComponent($$result2, "Mail", $$Mail, { "class": "icon", "data-astro-cid-5c24fmmt": true })} <span data-astro-cid-5c24fmmt>info@marosconstruction.com</span> </div> </div> </div> </div> </div> ` })} `;
}, "C:/Users/david/maros-construction/src/pages/contact-us.astro", void 0);

const $$file = "C:/Users/david/maros-construction/src/pages/contact-us.astro";
const $$url = "/contact-us";

export { $$ContactUs as default, $$file as file, $$url as url };
