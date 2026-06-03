import { createFileRoute } from "@tanstack/react-router";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Blank — Interior Architecture" },
      { name: "description", content: "Atelier Blank is an interior architecture studio designing retail, residential and hospitality spaces worldwide." },
      { property: "og:title", content: "Atelier Blank — Interior Architecture" },
      { property: "og:description", content: "Interior architecture studio designing retail, residential and hospitality spaces worldwide." },
    ],
  }),
  component: Index,
});

const projects = [
  { img: p1, name: "Maison Cèdre", place: "Paris", size: "large" },
  { img: p2, name: "Orris & Vetiver", place: "Milano", size: "small" },
  { img: p3, name: "Studio Hélène", place: "Antwerp", size: "small" },
  { img: p4, name: "Sartoria Lindgren", place: "Stockholm, Östermalm", size: "large" },
  { img: p5, name: "Atelier des Sens", place: "Berlin, Mitte", size: "small" },
  { img: p6, name: "Villa Solveig", place: "Gotland", size: "small" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 md:px-10 py-6">
        <a href="/" className="text-base md:text-lg tracking-tight font-medium">
          Atelier Blank
        </a>
        <nav className="flex gap-6 md:gap-10 text-sm tracking-tight">
          <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
          <a href="#studio" className="hover:opacity-60 transition-opacity">Studio</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </nav>
      </header>

      <main className="pt-28 md:pt-32 px-6 md:px-10 pb-32">
        <h1 className="sr-only">Atelier Blank — Interior Architecture Studio</h1>

        <section id="projects" className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-24 md:gap-y-40">
          {projects.map((p, i) => {
            const layouts = [
              "col-span-12 md:col-span-7 md:col-start-1",
              "col-span-12 md:col-span-4 md:col-start-9 md:mt-48",
              "col-span-12 md:col-span-5 md:col-start-2",
              "col-span-12 md:col-span-6 md:col-start-7",
              "col-span-12 md:col-span-4 md:col-start-2 md:mt-24",
              "col-span-12 md:col-span-5 md:col-start-8",
            ];
            return (
              <figure key={p.name} className={layouts[i]}>
                <a href="#" className="block group">
                  <div className="overflow-hidden bg-foreground/5">
                    <img
                      src={p.img}
                      alt={`${p.name}, ${p.place}`}
                      width={1024}
                      height={1376}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-baseline justify-between text-sm md:text-base">
                    <span className="italic">{p.name}</span>
                    <span className="text-foreground/60">{p.place}</span>
                  </figcaption>
                </a>
              </figure>
            );
          })}
        </section>

        <section id="studio" className="mt-48 md:mt-64 grid grid-cols-12 gap-x-6 md:gap-x-10">
          <p className="col-span-12 md:col-span-7 md:col-start-3 text-2xl md:text-4xl leading-snug tracking-tight text-balance">
            Atelier Blank is an interior architecture studio founded in 2011.
            We design retail, residential and hospitality interiors with a quiet,
            material-led sensibility — favouring stone, oak, linen and the slow
            passage of light.
          </p>
        </section>

        <section id="contact" className="mt-40 md:mt-56 grid grid-cols-12 gap-x-6 md:gap-x-10 text-sm">
          <div className="col-span-12 md:col-span-3 md:col-start-3">
            <p className="text-foreground/50 mb-2">Studio</p>
            <p>Blankenese, Hamburg</p>
            <p>Limassol, Cyprus</p>
          </div>
          <div className="col-span-12 md:col-span-3 mt-8 md:mt-0">
            <p className="text-foreground/50 mb-2">Contact</p>
            <p>studio@atelierblank.com<br />+46 8 000 00 00</p>
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-10 py-8 text-xs text-foreground/50 flex justify-between">
        <span>© Atelier Blank</span>
        <span>Hamburg — Limassol</span>
      </footer>
    </div>
  );
}
