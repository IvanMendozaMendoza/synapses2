"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{
            backgroundImage: `url('/assets/synapses/images/analisis-de-los-datos.jpg')`,
          }}
        ></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Impulsando el{" "}
            <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Desarrollo Económico
            </span>{" "}
            de Morelos
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-blue-100 md:text-xl">
            Proporcionamos métricas cuantitativas y análisis de datos para impulsar decisiones informadas y el desarrollo económico sostenible de Morelos
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-blue-500/50 backdrop-blur-sm text-primary hover:bg-blue-500/60 px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-102 border border-white/20"
            >
              Explorar Oportunidades
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-black/20 hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-102"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Video Institucional
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-200">50+</div>
              <div className="text-sm text-blue-100">Indicadores Económicos</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-200">95%</div>
              <div className="text-sm text-blue-100">Cobertura de Datos</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-200">24/7</div>
              <div className="text-sm text-blue-100">Monitoreo en Tiempo Real</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/10 blur-3xl z-10"></div>
      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl z-10"></div>
    </section>
  );
};

export default HeroSection; 