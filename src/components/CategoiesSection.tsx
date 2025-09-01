import { 
    BarChart3, 
    DollarSign, 
    TrendingUp, 
    FileText, 
    Zap, 
    Users, 
    Search 
  } from "lucide-react";
  
  const CategoriesSection = () => {
    const categories = [
      {
        name: "PIB Morelos",
        icon: BarChart3,
        description: "Producto Interno Bruto Estatal",
        href: "#pib-morelos"
      },
      {
        name: "IMAE",
        icon: TrendingUp,
        description: "Índice Mensual de Actividad Económica",
        href: "#imae-morelos"
      },
      {
        name: "Empleo Estatal",
        icon: Users,
        description: "Estadísticas de empleo y ocupación",
        href: "#empleo-morelos"
      },
      {
        name: "Turismo",
        icon: Zap,
        description: "Indicadores del sector turístico",
        href: "#turismo-morelos"
      },
      {
        name: "Sector Agropecuario",
        icon: DollarSign,
        description: "Agricultura y ganadería estatal",
        href: "#agropecuario"
      },
      {
        name: "Industria",
        icon: FileText,
        description: "Sector industrial y manufacturero",
        href: "#industria-morelos"
      },
      {
        name: "Demografía",
        icon: Users,
        description: "Población y características demográficas",
        href: "#demografia"
      },
      {
        name: "Finanzas Públicas",
        icon: Search,
        description: "Presupuesto y finanzas del estado",
        href: "#finanzas-publicas"
      }
    ];
  
    return (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              CATEGORÍAS
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Explora los indicadores económicos clave del Estado de Morelos. Estas categorías ofrecen una visión integral del panorama 
              económico estatal, con datos del INEGI y fuentes oficiales para la toma de decisiones informadas sobre el desarrollo económico de Morelos.
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