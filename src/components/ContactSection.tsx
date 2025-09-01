"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Database,
  BarChart3,
  TrendingUp
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Oficinas Centrales",
    content: "Av. Morelos Sur #123, Col. Centro, Cuernavaca, Morelos",
    description: "Secretaría de Desarrollo Económico"
  },
  {
    icon: Phone,
    title: "Soporte Técnico",
    content: "+52 777 123 4567",
    description: "Línea de datos y análisis"
  },
  {
    icon: Mail,
    title: "Consultas de Datos",
    content: "datos@desarrollo.morelos.gob.mx",
    description: "Solicitudes de información"
  },
  {
    icon: Clock,
    title: "Horarios de Atención",
    content: "Lunes a Viernes: 8:00 AM - 6:00 PM",
    description: "Soporte para consultas técnicas"
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-dark text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            ¿Necesitas{" "}
            <span className="text-blue-200">datos específicos</span> para tu análisis?
          </h2>
          <p className="text-xl text-blue-100">
            Conecta con nuestro equipo de análisis de datos y obtén la información 
            cuantitativa que necesitas para tus proyectos
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Solicitar Datos</CardTitle>
              <CardDescription className="text-blue-100">
                Completa el formulario y te proporcionaremos la información que necesitas en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-blue-100">
                    Nombre Completo
                  </label>
                  <Input 
                    placeholder="Tu nombre completo" 
                    className="border-white/20 bg-white/10 text-white placeholder:text-blue-200 focus:border-white/40"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-blue-100">
                    Institución
                  </label>
                  <Input 
                    placeholder="Tu institución o empresa" 
                    className="border-white/20 bg-white/10 text-white placeholder:text-blue-200 focus:border-white/40"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-blue-100">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="border-white/20 bg-white/10 text-white placeholder:text-blue-200 focus:border-white/40"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-blue-100">
                    Teléfono
                  </label>
                  <Input 
                    placeholder="+52 777 123 4567" 
                    className="border-white/20 bg-white/10 text-white placeholder:text-blue-200 focus:border-white/40"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-blue-100">
                  Tipo de Datos Requeridos
                </label>
                <select className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-white/40 focus:outline-none">
                  <option value="" className="text-gray-800">Selecciona el tipo de datos</option>
                  <option value="macroeconomic" className="text-gray-800">Indicadores Macroeconómicos</option>
                  <option value="sectorial" className="text-gray-800">Datos Sectoriales</option>
                  <option value="demographic" className="text-gray-800">Indicadores Demográficos</option>
                  <option value="time-series" className="text-gray-800">Series Temporales</option>
                  <option value="comparative" className="text-gray-800">Análisis Comparativo</option>
                  <option value="projections" className="text-gray-800">Proyecciones Económicas</option>
                  <option value="custom" className="text-gray-800">Datos Personalizados</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-blue-100">
                  Descripción de la Solicitud
                </label>
                <Textarea 
                  placeholder="Describe específicamente qué datos necesitas, el período de tiempo, y el propósito de tu análisis..." 
                  rows={4}
                  className="border-white/20 bg-white/10 text-white placeholder:text-blue-200 focus:border-white/40"
                />
              </div>

              <Button 
                className="w-full bg-gradient-warm text-white hover:bg-gradient-warm/90 py-3 text-lg font-semibold shadow-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Solicitar Datos
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="border-0 bg-white/10 backdrop-blur-sm text-white shadow-lg hover:bg-white/20 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-warm text-white shadow-lg">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {info.title}
                    </h3>
                    <p className="mb-1 text-blue-100 font-medium">
                      {info.content}
                    </p>
                    <p className="text-sm text-blue-200">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="border-0 bg-white/10 backdrop-blur-sm text-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  ¿Por qué elegir nuestros datos?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">Datos oficiales del INEGI y fuentes gubernamentales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">Metodología transparente y verificable</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">Actualización continua y monitoreo en tiempo real</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="text-center">
              <p className="mb-4 text-blue-100">Síguenos para actualizaciones de datos</p>
              <div className="flex justify-center gap-4">
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                  <span className="text-lg font-bold">f</span>
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                  <span className="text-lg font-bold">in</span>
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                  <span className="text-lg font-bold">@</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 