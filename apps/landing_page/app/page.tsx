import CTASection from "../(clients)/landing_menu/CTASection";
import DemoSection from "../(clients)/landing_menu/demoSection";
import FeaturesSection from "../(clients)/landing_menu/featuresSection";
import FooterSection from "../(clients)/landing_menu/footerSection";
import Hero from "../(clients)/landing_menu/heroSection";
import NavSection from "../(clients)/landing_menu/navSection";

export default function Home() {
  return(
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <section id='Home'>
          <NavSection/>
      </section>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>
        <Hero/>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
      <FeaturesSection/>
      </section>

      {/* Demo Section */}
      <section id='Demo' className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <DemoSection/>
      </section>

      {/* CTA Section */}
      <section id='About' className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <CTASection/>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <FooterSection/>
      </footer>
    </div>
  );
}