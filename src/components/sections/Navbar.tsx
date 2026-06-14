"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Services", href: "#services" },
	{ label: "Trainer", href: "#trainer" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "FAQ", href: "#faq" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = (href: string) => {
		setMenuOpen(false);
		const el = document.querySelector(href);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<nav
				className={cn(
					"fixed top-0 left-0 right-0 z-50 transition-all duration-500",
					scrolled
						? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-3"
						: "bg-transparent py-5"
				)}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
					{/* Desktop Nav */}
					<ul className="hidden lg:flex items-center gap-8">
						{navLinks.map((link) => (
							<li key={link.label}>
								<button
									onClick={() => handleNavClick(link.href)}
									className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 animated-underline"
								>
									{link.label}
								</button>
							</li>
						))}
					</ul>

					{/* CTA */}
					<div className="hidden lg:flex items-center gap-4">
						<a
							href={getWhatsAppUrl()}
							target="_blank"
							rel="noopener noreferrer"
							className="px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-full hover:bg-red-700 transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30 magnetic-btn"
						>
							Join Now
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="lg:hidden p-2 text-white"
						aria-label="Toggle menu"
					>
						{menuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div
				className={cn(
					"fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 lg:hidden",
					menuOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				)}
			>
				<ul className="flex flex-col items-center gap-8">
					{navLinks.map((link) => (
						<li key={link.label}>
							<button
								onClick={() => handleNavClick(link.href)}
								className="text-2xl font-display text-white hover:text-brand-red transition-colors"
							>
								{link.label}
							</button>
						</li>
					))}
				</ul>
				<a
					href={getWhatsAppUrl()}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-10 px-8 py-3.5 bg-brand-red text-white font-semibold rounded-full"
				>
					Join Now
				</a>
			</div>
		</>
	);
}