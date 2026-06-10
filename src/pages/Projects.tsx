import { Link } from "react-router-dom";

const featured = [
  {
    src: "/images/under-construction-limassol-2.png",
    alt: "Under construction, Limassol — exterior",
    caption: "Under construction, Limassol",
  },
  {
    src: "/images/kitchen-limassol.png",
    alt: "Under construction, Limassol — kitchen",
    caption: "Under construction, Limassol",
  },
  { src: "/images/living.png", alt: "Wohnhaus Apartment", caption: "Penthouse, Blankenese Hamburg" },
  { src: "/images/kitchen.png", alt: "Cuisine Noire", caption: "Penthouse, Blankenese Hamburg" },
  { src: "/images/library.png", alt: "Salon Bibliothèque", caption: "Penthouse, Blankenese Hamburg" },
  { src: "/images/bedroom.png", alt: "Chambre Bronze", caption: "Hamburg" },
  { src: "/images/lamp.png", alt: "Étude Lumière", caption: "Hamburg" },
];

const visionary = [
  { src: "/images/final22.png", alt: "Concept — Atelier" },
  { src: "/images/website.png", alt: "Concept — Studio" },
  { src: "/images/ChatGPT_Image_May_29_2026_10_22_47_AM.png", alt: "Concept — Window" },
  { src: "/images/ChatGPT_Image_May_29_2026_09_42_19_AM.png", alt: "Concept — Café" },
  { src: "/images/ChatGPT_Image_May_29_2026_11_35_26_AM.png", alt: "Concept — Counter" },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 md:px-10 py-6 bg-background/80 backdrop-blur">
        <Link to="/" className="text-base md:text-lg tracking-tight font-medium">
          Atelier Blankenese
        </Link>
        <nav className="flex gap-6 md:gap-10 text-sm tracking-tight">
          <a href="/#studio" className="hover:opacity-60 transition-opacity">
            Studio
          </a>
          <Link to="/projects" className="hover:opacity-60 transition-opacity">
            Projects
          </Link>
        </nav>
      </header>

      <main className="pt-24 md:pt-28 px-6 md:px-10">
        <h1 className="text-3xl md:text-5xl tracking-tight mb-12 md:mb-16">Projects</h1>

        <section className="mb-20 md:mb-32">
          <h3 className="text-sm tracking-tight text-foreground/70 mb-6">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {featured.map((p, i) => (
              <div key={p.alt}>
                <div className="overflow-hidden bg-foreground/5">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="w-full h-auto object-contain"
                  />
                </div>
                {p.caption && (
                  <p className="mt-3 text-sm tracking-tight text-foreground/70">{p.caption}</p>
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
              <div key={p.alt} className="overflow-hidden bg-foreground/5">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-10 py-8 text-xs text-foreground/50 flex justify-between">
        <span>© Atelier Blankenese</span>
        <span>Blankenese — Hamburg — Limassol</span>
      </footer>
    </div>
  );
}
