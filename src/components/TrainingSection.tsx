import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Trophy } from "lucide-react";

const TrainingSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Desarrollo Empresarial",
      description: "Programas para fortalecer MiPyMes morelenses"
    },
    {
      icon: BookOpen,
      title: "Innovación y Tecnología",
      description: "Capacitación en herramientas digitales y tecnológicas"
    },
    {
      icon: Users,
      title: "Red de Empresarios",
      description: "Conecta con el ecosistema empresarial de Morelos"
    },
    {
      icon: Trophy,
      title: "Certificaciones Oficiales",
      description: "Reconocimientos del Gobierno del Estado de Morelos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary-foreground/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 rounded-full mb-6">
              <GraduationCap className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Desarrollo Profesional</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              SECRETARÍA DE DESARROLLO ECONÓMICO DE MORELOS TE CAPACITA
            </h2>
            
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              La Secretaría de Desarrollo Económico del Estado de Morelos impulsa el crecimiento económico mediante programas de 
              capacitación especializada para empresarios, emprendedores y profesionales. Ofrecemos formación en desarrollo de 
              negocios, competitividad empresarial, innovación tecnológica y acceso a mercados, fortaleciendo el ecosistema 
              empresarial morelense con capacitación gratuita presencial y en línea.
            </p>

            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              VER CURSOS
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300"
                >
                  <div className="bg-primary-foreground/20 p-3 rounded-lg w-fit mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-primary-foreground/80">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;