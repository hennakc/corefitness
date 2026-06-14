import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrainerSection from "@/components/sections/TrainerSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
	return (
		<main className="relative bg-black">
			<Navbar />
			<HeroSection />
			<TrustSection />
			<AboutSection />
			<ServicesSection />
			<TrainerSection />
			<FAQSection />
			<ContactSection />
			<Footer />
		</main>
	);
}