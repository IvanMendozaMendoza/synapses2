"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Programas", href: "#programas" },
    { label: "Convocatorias", href: "#convocatorias" },
    { label: "Noticias", href: "#noticias" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/synapses/logotipo/logo_blue.png"
              alt="Logo Secretaría de Desarrollo Económico"
              className="w-24 h-24 object-contain"
              width={80}
              height={80}
              priority
              unoptimized={false}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-hero text-white hover:shadow-warm transition-all duration-300">
              Registrarse
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-700 block px-3 py-2 text-xm font-medium transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <hr className="border-gray-200 mt-2" />
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-gradient-hero text-white">
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
