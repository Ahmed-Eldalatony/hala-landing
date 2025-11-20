import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "../ui/button";

interface NavbarProps {
  showNavItems?: boolean;
}

const Navbar = ({ showNavItems = true }: NavbarProps) => {
  const appUrl =
    typeof window !== "undefined"
      ? `https://seller.${window.location.hostname}`
      : "https://seller.halakommers.com";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "المزايا", href: "#features" },
    { label: "كيف تعمل المنصة", href: "#how-it-works" },
    { label: "الأسعار", href: "#pricing" },
    { label: "قصص النجاح", href: "#testimonials" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-smooth ${isScrolled
          ? "bg-card/95 backdrop-blur-lg shadow-card"
          : "bg-transparent"
        }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center">
              <Logo className="h-10 md:h-12" />
            </a>

            {showNavItems && (
              <div className="hidden lg:flex items-center gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-gray-800 hover:text-primary transition-smooth"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`${appUrl}/auth/login`}
              className="hidden hover:bg-secondary rounded-xl md:inline-flex px-4 py-2 text-sm font-medium"
            >
              دخول
            </a>
            <a
              href={`${appUrl}/auth/register`}
              className="bg-secondary text-secondary-foreground shadow-glow rounded-xl transition-smooth px-4 py-2 text-sm font-medium"
            >
              سجّل الآن
            </a>

            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden p-4  rounded-md border-t border-border bg-card">
            <div className="flex flex-col gap-4">
              {showNavItems &&
                navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
