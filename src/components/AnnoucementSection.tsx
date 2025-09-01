import { Button } from "@/components/ui/button";
import { Calendar, FileText, Award, DollarSign, ArrowRight } from "lucide-react";

const AnnouncementsSection = () => {
  const announcements = [
    {
      title: "Programa MORELOS EMPRENDE 2024",
      description: "Convocatoria para el apoyo a micro, pequeñas y medianas empresas del estado de Morelos con financiamiento y capacitación empresarial.",
      category: "MiPyME",
      deadline: "31 de Marzo, 2024",
      icon: DollarSign,
      color: "bg-success/10 text-success"
    },
    {
      title: "Fondo de Desarrollo Turístico Morelos",
      description: "Programa de inversión para proyectos turísticos sustentables que fortalezcan la competitividad del destino Morelos.",
      category: "Turismo",
      deadline: "15 de Abril, 2024",
      icon: FileText,
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Impulso a la Industria Automotriz",
      description: "Convocatoria para el desarrollo del clúster automotriz en Morelos, dirigida a empresas del sector manufacturero.",
      category: "Industria",
      deadline: "20 de Mayo, 2024",
      icon: Award,
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            CONVOCATORIAS
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Programas, apoyos económicos y créditos que otorga el Gobierno del Estado de Morelos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {announcements.map((announcement, index) => {
            const IconComponent = announcement.icon;
            return (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${announcement.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-primary-foreground/60 bg-primary-foreground/10 px-2 py-1 rounded-full">
                    {announcement.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {announcement.title}
                </h3>

                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  {announcement.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-primary-foreground/70">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Hasta {announcement.deadline}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary group"
                >
                  VER MÁS
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;