import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      category: "ECONOMÍA MORELOS",
      title: "Morelos registra crecimiento del 4.2% en PIB estatal durante 2023",
      description: "El estado de Morelos muestra una recuperación sólida en sectores como turismo, industria automotriz y servicios, posicionándose como uno de los estados con mayor dinamismo económico.",
      date: "15 de Enero, 2024",
      readTime: "5 min lectura",
      image: "bg-gradient-warm"
    },
    {
      category: "DESARROLLO INDUSTRIAL", 
      title: "Nueva zona industrial en Cuautla generará 2,500 empleos directos",
      description: "La inversión de empresas nacionales e internacionales en el corredor industrial Cuautla-Yautepec fortalece la competitividad del estado y diversifica su economía.",
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
            NOTICIAS
          </h2>
          <p className="text-lg text-muted-foreground">
            Mantente actualizado con las últimas noticias económicas del Estado de Morelos
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
                  <TrendingUp className="h-12 w-12 mx-auto mb-2 opacity-80" />
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
                  Leer más
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