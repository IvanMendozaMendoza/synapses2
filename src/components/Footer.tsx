import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "PIB Morelos", href: "#pib-morelos" },
    { label: "Empleo Estatal", href: "#empleo" },
    { label: "Turismo", href: "#turismo" },
    { label: "Industria", href: "#industria" }
  ];

  const resources = [
    { label: "Reportes Económicos", href: "#reportes" },
    { label: "Estadísticas INEGI", href: "#estadisticas" },
    { label: "Metodología", href: "#metodologia" },
    { label: "Datos Abiertos", href: "#datos-abiertos" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="w-32 h-8 bg-primary-foreground/20 rounded-md flex items-center justify-center mb-4">
              <span className="text-sm font-semibold">LOGO</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Portal oficial de indicadores económicos del Estado de Morelos. 
              Información confiable del INEGI y fuentes gubernamentales para la toma de decisiones económicas y empresariales.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Cuernavaca, Morelos, México
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +52 (777) 362-5050
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  desarrollo.economico@morelos.gob.mx
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Gobierno del Estado de Morelos. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#terms" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;