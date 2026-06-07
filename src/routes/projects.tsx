import { createFileRoute } from "@tanstack/react-router";
import living from "@/assets/living.png.asset.json";
import kitchen from "@/assets/kitchen.png.asset.json";
import bedroom from "@/assets/bedroom.png.asset.json";
import library from "@/assets/library.png.asset.json";
import lamp from "@/assets/lamp.png.asset.json";
import underConstructionLimassol from "@/assets/under-construction-limassol.png.asset.json";
import websiteAd from "@/assets/Website_ad.png.asset.json";
import websiteConcept from "@/assets/website.png.asset.json";
import conceptWindow from "@/assets/ChatGPT_Image_May_29_2026_10_22_47_AM.png.asset.json";
import conceptCafe from "@/assets/ChatGPT_Image_May_29_2026_09_42_19_AM.png.asset.json";
import conceptCounter from "@/assets/ChatGPT_Image_May_29_2026_11_35_26_AM.png.asset.json";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Atelier Blank" },
      {
        name: "description",
        content:
          "Featured projects and visionary interior concepts by Atelier Blank.",
      },
      { property: "og:title", content: "Projects — Atelier Blank" },
      {
        property: "og:description",
        content:
          "Featured projects and visionary interior concepts by Atelier Blank.",
      },
    ],
  }),
  component: Projects,
});

const featured = [
  {
    src: underConstructionLimassol,
    alt: "Under construction, Limassol",
    caption: "Under construction, Limassol",
  },
  { src: living, alt: "Wohnhaus Apartment", caption: "Penthouse, Blankenese Hamburg" },
  { src: kitchen, alt: "Cuisine Noire", caption: "Penthouse, Blankenese Hamburg" },
  { src: library, alt: "Salon Bibliothèque", caption: "Penthouse, Blankenese Hamburg" },
  { src: bedroom, alt: "Chambre Bronze", caption: "Penthouse, Blankenese Hamburg" },
  { src: lamp, alt: "Étude Lumière", caption: "Penthouse, Blankenese Hamburg" },
] as { src: { url: string }; alt: string; caption?: string }[];

const visionary = [
  { src: websiteAd, alt: "Concept — Atelier" },
  { src: websiteConcept, alt: "Concept — Studio" },
  { src: conceptWindow, alt: "Concept — Window" },
  { src: conceptCafe, alt: "Concept — Café" },
  { src: conceptCounter, alt: "Concept — Counter" },
];

function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 md:px-10 py-6 bg-background/80 backdrop-blur">
        <a href="/" className="text-base md:text-lg tracking-tight font-medium">
          Atelier Blank
        </a>
        <nav className="flex gap-6 md:gap-10 text-sm tracking-tight">
          <a href="/#studio" className="hover:opacity-60 transition-opacity">
            Studio
          </a>
          <a href="/projects" className="hover:opacity-60 transition-opacity">
            Projects
          </a>
        </nav>
      </header>

      <main className="pt-24 md:pt-28 px-6 md:px-10">
        <h1 className="text-3xl md:text-5xl tracking-tight mb-12 md:mb-16">Projects</h1>

        <section className="mb-20 md:mb-32">
          <h3 className="text-sm tracking-tight text-foreground/70 mb-6">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {featured.map((p, i) => (
              <div key={p.alt}>
                <div className="overflow-hidden bg-foreground/5 aspect-[4/5]">
                  <img
                    src={p.src.url}
                    alt={p.alt}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="w-full h-full object-cover"
                  />
                </div>
                {p.caption && (
                  <p className="mt-3 text-sm tracking-tight text-foreground/70">
                    {p.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 md:mb-32">
          <h3 className="text-sm tracking-tight text-foreground/70 mb-6">
            Visionary Interior Concepts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {visionary.map((p) => (
              <div key={p.alt} className="overflow-hidden bg-foreground/5 aspect-[4/5]">
                <img
                  src={p.src.url}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
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