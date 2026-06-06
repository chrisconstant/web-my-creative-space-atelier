import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/ChatGPT_Image_May_29_2026_10_22_47_AM.png.asset.json";

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
          <div className="mx-auto max-w-[66%] overflow-hidden bg-foreground/5">
            <img
              src={hero.url}
              alt="Atelier Blank — storefront"
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
          className="mt-20 md:mt-40 px-6 md:px-10 grid grid-cols-12 gap-x-6 md:gap-x-10"
        >
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <h2 className="text-xs md:text-sm tracking-tight text-foreground/50 mb-4 md:mb-6 uppercase">
              contact
            </h2>
            <p className="text-2xl md:text-4xl lg:text-5xl leading-snug md:leading-tight tracking-tight text-balance">
              Let's Create Your Space
            </p>
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-x-16">
              <div className="sm:col-span-2 space-y-1 text-sm md:text-base leading-relaxed text-foreground/70">
                <p className="text-foreground font-medium text-base md:text-lg">Ioanna Engrafou</p>
                <p>Master of Interior Design</p>
                <p className="mt-2">Università degli Studi Guglielmo Marconi</p>
              </div>
              <div className="space-y-1 text-sm md:text-base leading-relaxed text-foreground/70">
                <p>Hamburg, Germany · Limassol, Cyprus</p>
              </div>
              <div className="space-y-1 text-sm md:text-base leading-relaxed text-foreground/70">
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
              <div className="sm:col-span-2 text-sm md:text-base leading-relaxed text-foreground/70">
                E-mail:{" "}
                <a
                  href="mailto:joanna-eng@hotmail.com"
                  className="hover:opacity-60 transition-opacity"
                >
                  joanna-eng@hotmail.com
                </a>
              </div>
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
