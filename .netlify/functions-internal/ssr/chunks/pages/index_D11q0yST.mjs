import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, k as renderSlot } from '../astro_Drz9_Bhe.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as images, e as $$Image, c as $$Layout } from './about-us_DM3rOQce.mjs';
import '@astrojs/internal-helpers/path';
/* empty css                          */
import 'clsx';

const concreteData = [
  {
    title: "Concrete Restoration & Waterproofing",
    image: images.waterproofing,
    description:
      "We specialize in restoring and waterproofing concrete structures. Whether it’s repairing cracks, reinforcing foundations, or applying protective coatings, we ensure longevity and resilience.",
  },

  {
    title: "Concrete Works",
    image: images.concrete,
    description:
      "Our expertise extends to all aspects of concrete construction. From pouring foundations to creating custom designs, we bring precision and creativity to every project.",
  },

  {
    title: "Driveways & Floors",
    image: images.driveway,
    description:
      "Need a stunning driveway or durable flooring? Look no further. We craft driveways that enhance curb appeal and floors that withstand daily wear and tear.",
  },

  {
    title: "Home & Apartment Renovations",
    image: images.home,
    description:
      "Transforming living spaces is our passion. Whether it’s a cozy apartment or a spacious home, we handle renovations with care, from layout adjustments to aesthetic upgrades.",
  },

  {
    title: "Home Additions",
    image: images.additions,
    description:
      "Expanding your property? We’re here to help. Our team designs and constructs thoughtful additions, seamlessly integrating them with your existing structure.",
  },
];

const generalQuestions = [
  {
    question: "What services do you provide?",
    answer:
      "We provide a full range of construction services, we specializes in concrete restoration, home additions, and apartment renovations.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Maros Construction proudly serves the vibrant communities of South Florida, including Miami-Dade County, Broward County, and West Palm Beach",
  },
  {
    question: "What types of materials do you use?",
    answer:
      "We use high-quality materials for all of our projects, including wood, metal, and stone.",
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer several financing options for our clients.",
  },
  {
    question: "Do you provide warranties?",
    answer: "Yes, we provide a limited warranty on all of our projects.",
  },
  {
    question: "Do you offer design services?",
    answer:
      "Yes, we have a team of experienced designers who can help you create the perfect space.",
  },
  {
    question: "What is your timeline for completing projects?",
    answer:
      "We strive to complete all projects within the agreed-upon timeline.",
  },
  {
    question: "Are your contractors insured?",
    answer: "Yes, all of our contractors are fully insured and bonded.  ",
  },
];

const opinions = [
  {
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVWsA9x0kVsG6wTdod5CY93YxN9Q4XNrF5wPqz-mMfIYNev-Svh=w36-h36-p-rp-mo-br100",
    username: "Javier Guzman",
    date: "6/05/2024",
    text: "Maros Construction exceeded my expectations with their outstanding concrete work. Their attention to detail and precision craftsmanship transformed my project into a masterpiece. I highly recommend Maros Construction for anyone seeking top-notch concrete services.",
  },
  {
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUcAuKTJ28h1d5g7VEoV5IPbnujY-LZdqxbuMjhXYDFJyyPayc=w36-h36-p-rp-mo-br100",
    username: "Ritchard Nuccio",
    date: "6/05/2024",
    text: "I recently had the pleasure of working with Maros Construction on a home renovation project, and I couldn't be more impressed with the results. From start to finish, their team demonstrated an unparalleled level of craftsmanship and professionalism that truly sets them apart in the industry.",
  },
  {
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocIhyj9pfOY_t23snqeN9Vgy0tbN3OUnQ8qWx02WJTpyvD7gQg=w36-h36-p-rp-mo-br100",
    username: "Sata Gusty",
    date: "6/05/2024",
    text: "",
  },
];

const staticData = {
  concreteData,
  generalQuestions,
  opinions,
};

const $$Astro$8 = createAstro();
const $$ImagePresentation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ImagePresentation;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`imageContent principal`, "class")} data-astro-cid-xaqbfght> <picture data-astro-cid-xaqbfght> <source${addAttribute(images.imagePresentation1Medium.src, "srcset")} media="(max-width: 1050px)" type="image/webp" data-astro-cid-xaqbfght> <source${addAttribute(images.imagePresentation1Small.src, "srcset")} media="(max-width: 500px)" type="image/webp" data-astro-cid-xaqbfght> ${renderComponent($$result, "Image", $$Image, { "src": images.imagePresentation1, "alt": "Presentation 1", "class": "background-image image1", "loading": "eager", "width": 1200, "height": 1e3, "data-astro-cid-xaqbfght": true })} </picture> <picture data-astro-cid-xaqbfght> <source${addAttribute(images.imagePresentation2Medium.src, "srcset")} media="(max-width: 1050px)" type="image/webp" data-astro-cid-xaqbfght> ${renderComponent($$result, "Image", $$Image, { "src": images.imagePresentation2, "alt": "Presentation 2", "class": "background-image image2", "width": 1200, "height": 1e3, "data-astro-cid-xaqbfght": true })} <source${addAttribute(images.imagePresentation2Small.src, "srcset")} media="(max-width: 500px)" type="image/webp" data-astro-cid-xaqbfght> </picture> <h3 data-astro-cid-xaqbfght>Committed to your project</h3> </div> `;
}, "C:/Users/david/maros-construction/src/components/index/ImagePresentation.astro", void 0);

const reel1 = "/_astro/reel1.BUEVGNBH.webm";

const reel2 = "/_astro/reel2.CccOU4q6.webm";

const reel3 = "/_astro/reel3.Bftzm-mG.webm";

const $$Astro$7 = createAstro();
const $$ExampleVideo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ExampleVideo;
  let { src } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<video autoplay muted loop class="video" data-astro-cid-dmmnjlyt> <source${addAttribute(src, "src")} type="video/webm" data-astro-cid-dmmnjlyt></video> `;
}, "C:/Users/david/maros-construction/src/components/index/ExampleVideo.astro", void 0);

const $$Astro$6 = createAstro();
const $$Videos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Videos;
  return renderTemplate`${maybeRenderHead()}<section class="videos" data-astro-cid-v4a3mkpq> ${renderComponent($$result, "ExampleVideo", $$ExampleVideo, { "src": reel1, "data-astro-cid-v4a3mkpq": true })} ${renderComponent($$result, "ExampleVideo", $$ExampleVideo, { "src": reel2, "data-astro-cid-v4a3mkpq": true })} ${renderComponent($$result, "ExampleVideo", $$ExampleVideo, { "src": reel3, "data-astro-cid-v4a3mkpq": true })} </section> `;
}, "C:/Users/david/maros-construction/src/components/index/Videos.astro", void 0);

const $$Astro$5 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate`${maybeRenderHead()}<form data-astro-cid-bxoixt2l> <span data-astro-cid-bxoixt2l> Help us to help you </span> <h3 data-astro-cid-bxoixt2l>Contact Us</h3> <input type="text" placeholder="Your Name" required data-astro-cid-bxoixt2l> <input type="email" placeholder="Email" required data-astro-cid-bxoixt2l> <input type="tel" placeholder="Phone" id="tel" data-astro-cid-bxoixt2l> <textarea placeholder="Message" required data-astro-cid-bxoixt2l></textarea> <button type="submit" data-astro-cid-bxoixt2l>SUBMIT</button> </form> `;
}, "C:/Users/david/maros-construction/src/components/index/contactForm.astro", void 0);

const $$Astro$4 = createAstro();
const $$ContactUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ContactUs;
  return renderTemplate`${maybeRenderHead()}<section class="contact" data-astro-cid-gnywcqoy> <div data-astro-cid-gnywcqoy> <p data-astro-cid-gnywcqoy>We want to get to know you and for you to know us</p> <h2 data-astro-cid-gnywcqoy>
Get a <span data-astro-cid-gnywcqoy>free</span> consultation
</h2> </div> ${renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-gnywcqoy": true })} </section> `;
}, "C:/Users/david/maros-construction/src/components/index/ContactUs.astro", void 0);

const $$Astro$3 = createAstro();
const $$AboutPresentation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AboutPresentation;
  return renderTemplate`${maybeRenderHead()}<section class="aboutPresentation" data-astro-cid-u5srh6iw> <div class="main" data-astro-cid-u5srh6iw> <div data-astro-cid-u5srh6iw> <span data-astro-cid-u5srh6iw>About Us</span> <h2 data-astro-cid-u5srh6iw>Your best option</h2> <p data-astro-cid-u5srh6iw>
MAROS CONSTRUCTION is a company specialized in a wide variety of
        concrete services, ranging from concrete restoration to custom concrete
        applications. Our goal is to enhance existing buildings in South
        Florida, serving clients in the residential, condominium, and commercial
        markets. At MAROS CONSTRUCTION, quality isn’t just a buzzword—it’s our
        foundation.
</p> <a href="/about-us" aria-label="About Us" data-astro-cid-u5srh6iw>About Us</a> </div> </div> <div class="image" data-astro-cid-u5srh6iw> ${renderComponent($$result, "Image", $$Image, { "src": images.imageAboutPresentation, "alt": "About Us", "width": 800, "height": 600, "data-astro-cid-u5srh6iw": true })} </div> </section> `;
}, "C:/Users/david/maros-construction/src/components/index/AboutPresentation.astro", void 0);

const $$Astro$2 = createAstro();
const $$Opinion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Opinion;
  const { image, rating, username, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="opinion" data-astro-cid-hdng3fiw> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "Opinion", "width": 36, "height": 36, "data-astro-cid-hdng3fiw": true })} <div data-astro-cid-hdng3fiw> ${Array.from({ length: rating }).map((_, index) => renderTemplate`<span data-astro-cid-hdng3fiw>★</span>`)} </div> <p data-astro-cid-hdng3fiw>${renderSlot($$result, $$slots["default"])}</p> <a href="https://www.google.com/maps/place/Maros+Construction/@25.9883759,-80.4482804,9z/data=!3m1!4b1!4m6!3m5!1s0x691fa2b3593a81:0xdd0f387040f5ff0e!8m2!3d25.9883759!4d-80.4482804!16s%2Fg%2F11l737smp1?authuser=0&hl=es-419&entry=ttu" target="_blank" data-astro-cid-hdng3fiw>${username}</a> </div> `;
}, "C:/Users/david/maros-construction/src/components/index/Opinion.astro", void 0);

const $$Astro$1 = createAstro();
const $$Opinions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Opinions;
  return renderTemplate`${maybeRenderHead()}<section class="opinions" data-astro-cid-cs5hlrtq> ${staticData.opinions.map((opinion) => renderTemplate`${renderComponent($$result, "Opinion", $$Opinion, { ...opinion, "data-astro-cid-cs5hlrtq": true }, { "default": ($$result2) => renderTemplate`${opinion.text && renderTemplate`<p data-astro-cid-cs5hlrtq>${opinion.text}</p>`}` })}`)} </section> `;
}, "C:/Users/david/maros-construction/src/components/index/Opinions.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mainPage" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ImagePresentation", $$ImagePresentation, { "data-astro-cid-j7pv25f6": true })} <div class="body" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "AboutPresentation", $$AboutPresentation, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Videos", $$Videos, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ContactUs", $$ContactUs, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Opinions", $$Opinions, { "data-astro-cid-j7pv25f6": true })} </div> </main>  ` })}`;
}, "C:/Users/david/maros-construction/src/pages/index.astro", void 0);

const $$file = "C:/Users/david/maros-construction/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as i, staticData as s };
