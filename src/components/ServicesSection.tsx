import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  FileText, 
  PieChart, 
  Users, 
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Indicadores Económicos",
    description: "Métricas cuantitativas del PIB, empleo y actividad económica de Morelos",
    features: ["Datos del INEGI", "Series temporales", "Análisis comparativo"]
  },
  {
    icon: TrendingUp,
    title: "Análisis de Tendencias",
    description: "Identificación de patrones y proyecciones económicas del estado",
    features: ["Predicciones estadísticas", "Análisis de ciclos", "Reportes trimestrales"]
  },
  {
    icon: Database,
    title: "Base de Datos Económica",
    description: "Acceso a información estadística confiable y actualizada",
    features: ["Datos oficiales", "Actualización automática", "API de acceso"]
  },
  {
    icon: FileText,
    title: "Reportes Especializados",
    description: "Documentos analíticos para la toma de decisiones informadas",
    features: ["Análisis sectorial", "Comparativas regionales", "Metodología transparente"]
  },
  {
    icon: PieChart,
    title: "Visualización de Datos",
    description: "Gráficos interactivos y dashboards para interpretar la información",
    features: ["Gráficos dinámicos", "Filtros personalizables", "Exportación de datos"]
  },
  {
    icon: Users,
    title: "Consultoría Estadística",
    description: "Asesoría especializada en interpretación de datos económicos",
    features: ["Análisis personalizado", "Capacitación en datos", "Soporte técnico"]
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
            <span className="text-primary">Servicios de Datos</span>
          </h2>
          <p className="text-xl text-gray-600">
            Proporcionamos herramientas y análisis cuantitativos para comprender 
            el desarrollo económico de Morelos
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
                  Explorar datos
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
              ¿Necesitas datos específicos para tu análisis?
            </span>
            <button className="rounded-xl bg-white/20 px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors">
              Solicitar Datos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 