import { 
    BarChart3, 
    TrendingUp, 
    Database, 
    FileText, 
    PieChart, 
    Users, 
    Search,
    Calendar
  } from "lucide-react";
  
  const CategoriesSection = () => {
    const categories = [
      {
        name: "Indicadores Macroeconómicos",
        icon: BarChart3,
        description: "PIB, inflación, empleo y otros indicadores fundamentales",
        href: "#macroeconomic"
      },
      {
        name: "Series Temporales",
        icon: TrendingUp,
        description: "Análisis de tendencias y patrones económicos",
        href: "#time-series"
      },
      {
        name: "Datos Sectoriales",
        icon: Database,
        description: "Información desagregada por actividad económica",
        href: "#sectorial"
      },
      {
        name: "Indicadores Demográficos",
        icon: Users,
        description: "Población, migración y características sociales",
        href: "#demographic"
      },
      {
        name: "Análisis Comparativo",
        icon: PieChart,
        description: "Comparaciones regionales y nacionales",
        href: "#comparative"
      },
      {
        name: "Proyecciones",
        icon: TrendingUp,
        description: "Estimaciones y predicciones económicas",
        href: "#projections"
      },
      {
        name: "Metodología",
        icon: FileText,
        description: "Documentación técnica y procedimientos",
        href: "#methodology"
      },
      {
        name: "API y Datos Abiertos",
        icon: Search,
        description: "Acceso programático a la información",
        href: "#api"
      }
    ];
  
    return (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              CATEGORÍAS DE DATOS
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Explora nuestras categorías de datos económicos. Cada categoría ofrece información 
              especializada y metodología transparente para facilitar el análisis económico 
              y la toma de decisiones basada en datos cuantitativos.
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <a
                  key={index}
                  href={category.href}
                  className="group bg-card rounded-xl p-6 shadow-card hover:shadow-warm transition-all duration-300 border border-border hover:border-primary/20 text-center"
                >
                  <div className="bg-gradient-warm p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default CategoriesSection; 