import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Lightbulb, 
  Target, 
  Network,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Desarrollo Empresarial",
    description: "Apoyo integral para la creación y crecimiento de empresas en Morelos",
    features: ["Incubación de negocios", "Consultoría especializada", "Acceso a financiamiento"]
  },
  {
    icon: Users,
    title: "Capacitación Laboral",
    description: "Programas de formación profesional para impulsar la empleabilidad",
    features: ["Cursos técnicos", "Certificaciones", "Vinculación laboral"]
  },
  {
    icon: TrendingUp,
    title: "Inversión y Comercio",
    description: "Facilitamos la atracción de inversiones y el comercio internacional",
    features: ["Promoción de Morelos", "Enlaces comerciales", "Apoyo logístico"]
  },
  {
    icon: Lightbulb,
    title: "Innovación Tecnológica",
    description: "Impulsamos la transformación digital y la innovación empresarial",
    features: ["Centros de innovación", "Transferencia tecnológica", "Ecosistema startup"]
  },
  {
    icon: Target,
    title: "Sector Turístico",
    description: "Desarrollo sostenible del turismo como motor económico",
    features: ["Promoción turística", "Capacitación hotelera", "Productos turísticos"]
  },
  {
    icon: Network,
    title: "Vinculación Académica",
    description: "Conectamos empresas con instituciones educativas y de investigación",
    features: ["Proyectos colaborativos", "Prácticas profesionales", "Investigación aplicada"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Nuestros{" "}
            <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600">
            Ofrecemos soluciones integrales para impulsar el desarrollo económico 
            y social de Morelos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-0 bg-white shadow-card"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-warm text-white shadow-lg">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="mr-2 h-2 w-2 rounded-full bg-success"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors group-hover:translate-x-1">
                  Conocer más
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-warm px-8 py-4 text-white shadow-lg">
            <span className="mr-2 text-lg font-semibold">
              ¿Necesitas asesoría personalizada?
            </span>
            <button className="rounded-xl bg-white/20 px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors">
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 