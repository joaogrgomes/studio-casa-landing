import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { Clients } from "@/components/site/Clients";
import { Cta } from "@/components/site/Cta";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Studio CASA — Meaning before motion" },
      {
        name: "description",
        content:
          "Studio CASA is a brand strategy, creative direction and content studio operating between Brazil and UAE. We help brands move with clarity, strategy and purpose.",
      },
      { property: "og:title", content: "Studio CASA — Meaning before motion" },
      {
        property: "og:description",
        content:
          "Brand strategy, creative direction & content. Movement without meaning is just noise.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="bg-bone text-ink min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Work />
      <Process />
      <Clients />
      <Cta />
      <Footer />
    </main>
  );
}
