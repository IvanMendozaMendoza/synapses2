import { Button } from "@/components/ui/button";
import { UserPlus, Bell, Mail, Smartphone, CheckCircle } from "lucide-react";

const RegistrationSection = () => {
  const benefits = [
    "Notificaciones sobre indicadores económicos de Morelos",
    "Boletines informativos del desarrollo económico estatal", 
    "Acceso prioritario a convocatorias y programas gubernamentales",
    "Alertas sobre oportunidades de inversión en Morelos",
    "Recursos exclusivos para empresarios y emprendedores morelenses"
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Section */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-glow border border-primary/20">
              <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">TGRS</span>
                  <span className="text-sm">#Miércoles 10 de julio</span>
                </div>
                <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center">
                  <div className="w-12 h-12 bg-primary-foreground/30 rounded-full mr-4 flex items-center justify-center">
                    <Bell className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Notificación Económica</h4>
                    <p className="text-sm opacity-90">Nuevos datos disponibles</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-accent" />
                </div>
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                  <Bell className="h-8 w-8 text-success" />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-4 left-4 w-72 h-72 bg-primary/5 rounded-2xl"></div>
            <div className="absolute -z-20 top-8 left-8 w-72 h-72 bg-accent/5 rounded-2xl"></div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <UserPlus className="h-5 w-5 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">Únete a Nosotros</span>
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-6">
              REGÍSTRATE
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Únete al portal oficial de información económica del Estado de Morelos. Recibe notificaciones sobre cambios en 
              los indicadores económicos estatales, nuevas oportunidades de negocio, convocatorias gubernamentales y 
              beneficios exclusivos para el desarrollo empresarial en Morelos.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex-1">
                <UserPlus className="h-5 w-5 mr-2" />
                REGISTRARSE
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Más información
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;