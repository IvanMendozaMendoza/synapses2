import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Activity, PieChart } from "lucide-react";

const EconomicCyclesSection = () => {
  const cycleData = [
    { phase: "Sector Turismo", percentage: 40, color: "bg-success" },
    { phase: "Industria", percentage: 25, color: "bg-accent" },
    { phase: "Servicios", percentage: 20, color: "bg-primary" },
    { phase: "Agropecuario", percentage: 15, color: "bg-muted-foreground" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Activity className="h-5 w-5 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">Análisis Económico</span>
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-6">
              CICLOS ECONÓMICOS DEL ESTADO DE MORELOS
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              El análisis de los ciclos económicos de Morelos muestra las fases de crecimiento y contracción de la 
              economía estatal a través del tiempo. Esta herramienta visualiza las fluctuaciones económicas sectoriales 
              y su impacto en el desarrollo del estado, facilitando el análisis de tendencias y la toma de decisiones 
              para el crecimiento económico regional.
            </p>

            <div className="space-y-4 mb-8">
              {cycleData.map((cycle, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-4 h-4 rounded-full ${cycle.color} mr-3`}></div>
                  <span className="text-sm font-medium text-foreground mr-3">{cycle.phase}</span>
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${cycle.color} transition-all duration-500`}
                      style={{ width: `${cycle.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground ml-3">{cycle.percentage}%</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              <BarChart3 className="h-5 w-5 mr-2" />
              VER RELOJ
            </Button>
          </div>

          {/* Circular Chart Visualization */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Outer circle */}
              <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
              
              {/* Chart segments */}
              <div className="absolute inset-4 rounded-full overflow-hidden">
                <div className="w-full h-full relative">
                  {/* Expansion segment */}
                  <div className="absolute inset-0 bg-success/20 rounded-full" 
                       style={{ 
                         background: `conic-gradient(from 0deg, hsl(var(--success)) 35%, transparent 35%)` 
                       }}>
                  </div>
                  
                  {/* Central info */}
                  <div className="absolute inset-16 bg-card rounded-full shadow-card flex flex-col items-center justify-center border-4 border-primary/20">
                    <PieChart className="h-8 w-8 text-primary mb-2" />
                    <span className="text-lg font-bold text-foreground">Ciclos</span>
                    <span className="text-sm text-muted-foreground">Económicos</span>
                    <div className="mt-2 flex items-center">
                      <TrendingUp className="h-4 w-4 text-success mr-1" />
                      <span className="text-xs text-success font-medium">En crecimiento</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicCyclesSection;