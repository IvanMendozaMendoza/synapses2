import { TrendingUp, TrendingDown, Users, MapPin, Factory, Plane } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      label: "PIB Estatal Morelos",
      value: "428.9B",
      suffix: "MXN",
      icon: TrendingUp,
      trend: "up",
      color: "text-success",
      description: "Producto Interno Bruto 2023"
    },
    {
      label: "Tasa de Desempleo",
      value: "2.8%",
      icon: TrendingDown,
      trend: "down", 
      color: "text-success",
      description: "Trimestre IV 2023"
    },
    {
      label: "Población Total",
      value: "2.04M",
      suffix: "hab",
      icon: Users,
      trend: "up",
      color: "text-primary",
      description: "Censo INEGI 2023"
    },
    {
      label: "Actividad Turística",
      value: "+8.2B",
      suffix: "MXN",
      icon: Plane,
      trend: "up",
      color: "text-accent",
      description: "Derrama económica anual"
    },
    {
      label: "Actividad Industrial",
      value: "34.5%",
      suffix: "PIB",
      icon: Factory,
      trend: "stable",
      color: "text-primary",
      description: "Participación en PIB estatal"
    }
  ];

  return (
    <section className="bg-background py-4 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-4 shadow-card hover:shadow-warm transition-all duration-300 border border-border"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground font-medium mb-1">
                      {stat.label}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <p className={`text-lg font-bold ${stat.color}`}>
                        {stat.value}
                      </p>
                      {stat.suffix && (
                        <span className="text-xs text-muted-foreground font-medium">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.description}
                    </p>
                  </div>
                  <div className={`p-2 rounded-full bg-muted ${stat.color} flex-shrink-0 ml-2`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;