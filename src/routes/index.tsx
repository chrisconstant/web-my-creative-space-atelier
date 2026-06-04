import { createFileRoute } from "@tanstack/react-router";
import kitchen from "@/assets/kitchen.png.asset.json";
import bedroom from "@/assets/bedroom.png.asset.json";
import living from "@/assets/living.png.asset.json";
import library from "@/assets/library.png.asset.json";
import lamp from "@/assets/lamp.png.asset.json";
import websiteAd from "@/assets/Website_ad.png.asset.json";
import websiteConcept from "@/assets/website.png.asset.json";
import conceptWindow from "@/assets/ChatGPT_Image_May_29_2026_10_22_47_AM.png.asset.json";
import conceptCafe from "@/assets/ChatGPT_Image_May_29_2026_09_42_19_AM.png.asset.json";
import conceptCounter from "@/assets/ChatGPT_Image_May_29_2026_11_35_26_AM.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Blank — Interior Architecture" },
      {
        name: "description",
        content:
          "Atelier Blank is an interior architecture studio designing retail, residential and hospitality spaces worldwide.",
      },
      { property: "og:title", content: "Atelier Blank — Interior Architecture" },
      {
        property: "og:description",
        content:
          "Interior architecture studio designing retail, residential and hospitality spaces worldwide.",
      },
    ],
  }),
  component: Index,
});

const projects = [
  { img: living.url, name: "Wohnhaus Apartment", place: "Hamburg" },
  { img: kitchen.url, name: "Cuisine Noire", place: "Blankenese" },
  { img: library.url, name: "Salon Bibliothèque", place: "Hamburg" },
  { img: bedroom.url, name: "Chambre Bronze", place: "Blankenese" },
  { img: lamp.url, name: "Étude Lumière", place: "Hamburg" },
];

const visionaryConcepts = [
  { img: websiteAd.url, alt: "Warm-toned interior showroom with sculptural staircase" },
  { img: websiteConcept.url, alt: "Minimal café interior with curved stone counter" },
  { img: conceptWindow.url, alt: "Street-facing café window framed in dark stone" },
  { img: conceptCafe.url, alt: "Softly lit café interior with wood shelving and pendant lights" },
  { img: conceptCounter.url, alt: "Refined café counter with illuminated ribbed detailing" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 md:px-10 py-6">
        <a href="/" className="text-base md:text-lg tracking-tight font-medium">
          Atelier Blank
        </a>
        <nav className="flex gap-6 md:gap-10 text-sm tracking-tight">
          <a href="#projects" className="hover:opacity-60 transition-opacity">
            Projects
          </a>
          <a href="#studio" className="hover:opacity-60 transition-opacity">
            Studio
          </a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">
            Contact
          </a>
        </nav>
      </header>

      <main className="pt-28 md:pt-32 px-6 md:px-10 pb-32">
        <h1 className="sr-only">Atelier Blank — Interior Architecture Studio</h1>

        <section id="projects" className="space-y-24 md:space-y-32">
          <div>
            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl tracking-tight">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {projects.map((p, i) => (
                <figure key={p.name}>
                  <a href="#" className="block group">
                    <div className="overflow-hidden bg-foreground/5 aspect-[4/5]">
                      <img
                        src={p.img}
                        alt={`${p.name}, ${p.place}`}
                        width={1024}
                        height={1280}
                        loading={i < 2 ? "eager" : "lazy"}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                    <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-sm md:text-base">
                      <span className="italic">{p.name}</span>
                      <span className="text-foreground/60">{p.place}</span>
                    </figcaption>
                  </a>
                </figure>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl tracking-tight">Visionary Interior Concepts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {visionaryConcepts.map((concept, i) => (
                <figure key={concept.img}>
                  <div className="overflow-hidden bg-foreground/5 aspect-[4/5]">
                    <img
                      src={concept.img}
                      alt={concept.alt}
                      width={1024}
                      height={1280}
                      loading={i < 2 ? "eager" : "lazy"}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.02]"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="studio" className="mt-48 md:mt-64 grid grid-cols-12 gap-x-6 md:gap-x-10">
          <p className="col-span-12 md:col-span-7 md:col-start-3 text-2xl md:text-4xl leading-snug tracking-tight text-balance">
            We are redefining spaces. Exceptional spaces begin with the art of good design. We
            create bespoke interiors that elevate individuality.
          </p>
          <p className="col-span-12 md:col-span-7 md:col-start-3 text-2xl md:text-4xl leading-snug tracking-tight text-balance mt-8">
            From tailor made concept to holistic planning, from hospitality, to a single room to an
            office space.
          </p>
        </section>

        <section
          id="contact"
          className="mt-40 md:mt-56 grid grid-cols-12 gap-x-6 md:gap-x-10 text-sm"
        >
          <div className="col-span-12 md:col-span-3 md:col-start-3">
            <p className="text-foreground/50 mb-2">Studio</p>
            <p>Blankenese, Hamburg</p>
            <p>Limassol, Cyprus</p>
          </div>
          <div className="col-span-12 md:col-span-3 mt-8 md:mt-0">
            <p className="text-foreground/50 mb-2">Contact</p>
            <p>
              studio@atelierblank.com
              <br />
              +46 8 000 00 00
            </p>
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-10 py-8 text-xs text-foreground/50 flex justify-between">
        <span>© Atelier Blank</span>
        <span>Blankenese — Hamburg — Limassol</span>
      </footer>
    </div>
  );
}
