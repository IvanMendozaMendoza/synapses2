import { TrendingUp, TrendingDown, Users, Database, BarChart3 } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      label: "Indicadores Disponibles",
      value: "50+",
      icon: BarChart3,
      trend: "up",
      color: "text-success",
      description: "Métricas económicas activas"
    },
    {
      label: "Cobertura Temporal",
      value: "15+",
      suffix: "años",
      icon: TrendingUp,
      trend: "up", 
      color: "text-success",
      description: "Series históricas disponibles"
    },
    {
      label: "Fuentes de Datos",
      value: "8",
      icon: Database,
      trend: "stable",
      color: "text-primary",
      description: "Instituciones oficiales"
    },
    {
      label: "Actualización",
      value: "24/7",
      icon: TrendingDown,
      trend: "up",
      color: "text-accent",
      description: "Monitoreo en tiempo real"
    },
    {
      label: "Precisión",
      value: "99.9%",
      icon: Users,
      trend: "stable",
      color: "text-primary",
      description: "Datos verificados oficialmente"
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