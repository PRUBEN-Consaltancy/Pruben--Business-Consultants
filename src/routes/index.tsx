import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import {
  About,
  Advisory,
  Contact,
  Footer,
  Hero,
  Process,
  Services,
  TrustStrip,
  WhatsAppFab,
  WhyRegister,
} from "@/components/site/sections";

const title = "PRUBEN Business Consultants | Register Your Business in Malawi";
const description =
  "Register your company, NGO or sole proprietorship in Malawi within 7 working days. TPIN, TCC, PPDA, funding proposals and business consultancy in Blantyre.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Advisory />
        <Process />
        <WhyRegister />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
