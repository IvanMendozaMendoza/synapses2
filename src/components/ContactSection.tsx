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
  Building2,
  Users,
  TrendingUp
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Av. Morelos Sur #123, Col. Centro, Cuernavaca, Morelos",
    description: "Oficinas Centrales"
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+52 777 123 4567",
    description: "Línea Directa"
  },
  {
    icon: Mail,
    title: "Email",
    content: "contacto@desarrollo.morelos.gob.mx",
    description: "Atención General"
  },
  {
    icon: Clock,
    title: "Horarios",
    content: "Lunes a Viernes: 8:00 AM - 6:00 PM",
    description: "Atención al Público"
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-dark text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            ¿Listo para{" "}
            <span className="text-blue-200">transformar</span> tu futuro?
          </h2>
          <p className="text-xl text-blue-100">
            Conecta con nosotros y descubre cómo podemos impulsar tu proyecto 
            empresarial en Morelos
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Envíanos un Mensaje</CardTitle>
              <CardDescription className="text-blue-100">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
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
                    Empresa
                  </label>
                  <Input 
                    placeholder="Nombre de tu empresa" 
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
                  Servicio de Interés
                </label>
                <select className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-white/40 focus:outline-none">
                  <option value="" className="text-gray-800">Selecciona un servicio</option>
                  <option value="desarrollo-empresarial" className="text-gray-800">Desarrollo Empresarial</option>
                  <option value="capacitacion" className="text-gray-800">Capacitación Laboral</option>
                  <option value="inversion" className="text-gray-800">Inversión y Comercio</option>
                  <option value="innovacion" className="text-gray-800">Innovación Tecnológica</option>
                  <option value="turismo" className="text-gray-800">Sector Turístico</option>
                  <option value="vinculacion" className="text-gray-800">Vinculación Académica</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-blue-100">
                  Mensaje
                </label>
                <Textarea 
                  placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..." 
                  rows={4}
                  className="border-white/20 bg-white/10 text-white placeholder:text-blue-200 focus:border-white/40"
                />
              </div>

              <Button 
                className="w-full bg-gradient-warm text-white hover:bg-gradient-warm/90 py-3 text-lg font-semibold shadow-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensaje
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
                  ¿Por qué elegirnos?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">Más de 15 años de experiencia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">Equipo de expertos certificados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">Resultados comprobados</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="text-center">
              <p className="mb-4 text-blue-100">Síguenos en redes sociales</p>
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