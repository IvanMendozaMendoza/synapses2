import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp, BarChart3 } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      category: "NUEVO DATASET",
      title: "Actualización de indicadores económicos Q4 2023 disponible",
      description: "Nuevos datos del INEGI sobre PIB, empleo y actividad económica de Morelos ya están disponibles en nuestra plataforma con análisis comparativo y visualizaciones interactivas.",
      date: "15 de Enero, 2024",
      readTime: "3 min lectura",
      image: "bg-gradient-warm"
    },
    {
      category: "ANÁLISIS ESTADÍSTICO", 
      title: "Tendencias económicas de Morelos: Análisis de series temporales",
      description: "Nuestro equipo de análisis presenta un estudio detallado sobre las tendencias económicas del estado, incluyendo patrones estacionales y proyecciones para 2024.",
      date: "12 de Enero, 2024",
      readTime: "7 min lectura",
      image: "bg-gradient-primary"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ACTUALIZACIONES DE DATOS
          </h2>
          <p className="text-lg text-muted-foreground">
            Mantente informado sobre nuevos datasets, análisis estadísticos y mejoras metodológicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {news.map((article, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-card hover:shadow-warm transition-all duration-300 border border-border overflow-hidden group"
            >
              {/* Image/Gradient Header */}
              <div className={`h-48 ${article.image} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center text-white">
                  <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-80" />
                  <span className="text-sm font-medium px-3 py-1 bg-white/20 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {article.description}
                </p>

                <Button variant="economic" className="group">
                  Ver datos
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;