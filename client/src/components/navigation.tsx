import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand/Logo */}
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            DakshinaMurthy Technologies
          </span>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              className="text-blue-900 hover:text-blue-600 px-3 py-2 text-m font-medium transition-colors"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className="text-blue-900 hover:text-blue-600 px-3 py-2 text-m font-medium transition-colors"
              onClick={() => scrollToSection("about")}
            >
              About Us
            </button>
            {/* <button className="text-blue-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Price
            </button> */}
            <button
              className="text-blue-900 hover:text-blue-600 px-3 py-2 text-m font-medium transition-colors"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
            <button
              className="text-blue-900 hover:text-blue-600 px-3 py-2 text-m font-medium transition-colors"
              onClick={() => scrollToSection("about")}
            >
              Blog
            </button>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="inline-block bg-blue-900 text-white px-6 py-2 mt-2 rounded-xl font-semibold transition hover:bg-blue-700 text-center"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="inline-block border-2 border-blue-900 text-blue-900 px-6 py-2 mt-2 rounded-xl font-semibold transition hover:bg-blue-900 hover:text-white bg-white text-center"
            >
              Register
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <button className="text-blue-900 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors text-left">
                Home
              </button>
              <button className="text-blue-900 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors text-left">
                About Us
              </button>
              <button className="text-blue-900 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors text-left">
                Price
              </button>
              <button className="text-blue-900 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors text-left">
                Contact
              </button>
              <button className="text-blue-900 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors text-left">
                Blog
              </button>
              <Link to="/login">
                <button className="text-blue-900 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors text-left">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="text-blue-900 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors text-left">
                  Register
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
