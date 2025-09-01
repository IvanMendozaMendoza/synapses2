import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    position: "CEO, TechStart Morelos",
    company: "Empresa de Tecnología",
    content: "La Secretaría nos brindó el apoyo necesario para escalar nuestro negocio. Su programa de incubación fue fundamental para nuestro crecimiento.",
    rating: 5,
    avatar: "/avatars/maria.jpg"
  },
  {
    name: "Carlos Mendoza",
    position: "Director General",
    company: "Restaurante Tradicional",
    content: "Gracias a la capacitación en gestión empresarial, hemos mejorado significativamente nuestra operación y rentabilidad.",
    rating: 5,
    avatar: "/avatars/carlos.jpg"
  },
  {
    name: "Ana Rodríguez",
    position: "Fundadora",
    company: "EcoTurismo Morelos",
    content: "El apoyo para el sector turístico nos permitió desarrollar productos innovadores y acceder a nuevos mercados.",
    rating: 5,
    avatar: "/avatars/ana.jpg"
  },
  {
    name: "Luis Torres",
    position: "Gerente de Operaciones",
    company: "Manufactura Avanzada",
    content: "La vinculación con instituciones académicas nos ha permitido implementar tecnologías de vanguardia en nuestros procesos.",
    rating: 5,
    avatar: "/avatars/luis.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Lo que dicen{" "}
            <span className="text-primary">nuestros beneficiarios</span>
          </h2>
          <p className="text-xl text-gray-600">
            Historias de éxito que demuestran el impacto real de nuestros programas 
            en el desarrollo económico de Morelos
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-0 bg-gray-50 shadow-card"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-warm text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-gray-900">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {testimonial.position}
                    </CardDescription>
                    <div className="text-xs text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                  <p className="text-gray-700 leading-relaxed pl-4">
                    "{testimonial.content}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">98%</div>
            <div className="text-sm text-gray-600">Satisfacción del Cliente</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">1,200+</div>
            <div className="text-sm text-gray-600">Proyectos Exitosos</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">85%</div>
            <div className="text-sm text-gray-600">Tasa de Retención</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">4.9/5</div>
            <div className="text-sm text-gray-600">Calificación Promedio</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center rounded-2xl bg-gradient-warm px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Compartir tu Historia de Éxito
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 