import { createFileRoute } from "@tanstack/react-router";
import living from "@/assets/living.png.asset.json";

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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 md:px-10 py-6">
        <a href="/" className="text-base md:text-lg tracking-tight font-medium">
          Atelier Blank
        </a>
        <nav className="flex gap-6 md:gap-10 text-sm tracking-tight">
          <a href="/projects" className="hover:opacity-60 transition-opacity">
            Projects
          </a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">
            Contact
          </a>
        </nav>
      </header>

      <main className="pt-24 md:pt-28">
        <h1 className="sr-only">Atelier Blank — Interior Architecture Studio</h1>

        <section className="px-6 md:px-10">
          <div className="overflow-hidden bg-foreground/5">
            <img
              src={living.url}
              alt="Wohnhaus Apartment, Hamburg"
              width={1024}
              height={1280}
              loading="eager"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        <section id="studio" className="mt-24 md:mt-40 px-6 md:px-10 grid grid-cols-12 gap-x-6 md:gap-x-10">
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <h2 className="text-sm tracking-tight text-foreground/50 mb-6">what we do</h2>
            <p className="text-2xl md:text-4xl leading-snug tracking-tight text-balance">
              We are redefining spaces. Exceptional spaces begin with the art of good design. We
              create bespoke interiors that elevate individuality.
            </p>
            <p className="text-2xl md:text-4xl leading-snug tracking-tight text-balance mt-8">
              From tailor made concept to holistic planning, from hospitality, to a single room to an
              office space.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="mt-24 md:mt-40 px-6 md:px-10 grid grid-cols-12 gap-x-6 md:gap-x-10"
        >
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <h2 className="text-sm tracking-tight text-foreground/50 mb-6">contact</h2>
            <p className="text-2xl md:text-4xl leading-snug tracking-tight text-balance">
              Let's Create Your Space
            </p>
            <div className="mt-10 space-y-6 text-base md:text-lg leading-relaxed text-foreground/80">
              <div>
                <p className="text-foreground">Ioanna Engrafou</p>
                <p>Master of Interior Design</p>
                <p>Università degli Studi Guglielmo Marconi</p>
              </div>
              <p>Hamburg, Germany · Limassol, Cyprus</p>
              <div>
                <p>
                  <a href="tel:+491776690208" className="hover:opacity-60 transition-opacity">
                    +49 177 669 0208
                  </a>
                </p>
                <p>
                  <a href="tel:+35799248800" className="hover:opacity-60 transition-opacity">
                    +357 99 248800
                  </a>
                </p>
              </div>
              <p>
                <a
                  href="mailto:joanna-eng@hotmail.com"
                  className="hover:opacity-60 transition-opacity"
                >
                  joanna-eng@hotmail.com
                </a>
              </p>
            </div>
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
