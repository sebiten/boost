import React from "react";
import PlanCard from "./PlanCard";

const plans = [
  {
    title: "Plan Básico",
    price: "$XXX",
    features: [
      "Creación de una landing page funcional y personalizada con hasta 5 secciones.",
      "Animaciones y efectos visuales para hacer la página más atractiva.",
      "Diseño de logotipo y manual de identidad visual (colores y tipografías).",
      "2 revisiones antes de la entrega final.",
    ],
    color: "bg-indigo-500",
    textColor: "text-white",
  },
  {
    title: "Plan Estándar",
    price: "$XXX",
    features: [
      "Creación de una landing page funcional y personalizada con hasta 10 secciones.",
      "Animaciones y efectos visuales avanzados para hacer la página más atractiva.",
      "Diseño de logotipo y manual de identidad visual (colores y tipografías).",
      "3 revisiones antes de la entrega final.",
      "Integración con plataformas de email marketing y redes sociales.",
    ],
    color: "bg-purple-500",
    textColor: "text-white",
  },
  {
    title: "Plan Premium",
    price: "$XXX",
    features: [
      "Creación de una landing page funcional y personalizada con hasta 15 secciones.",
      "Animaciones y efectos visuales avanzados para hacer la página más atractiva.",
      "Diseño de logotipo y manual de identidad visual (colores y tipografías).",
      "4 revisiones antes de la entrega final.",
      "Integración con plataformas de email marketing y redes sociales.",
      "Servicio de seguimiento de métricas y análisis de resultados.",
    ],
    color: "bg-yellow-500",
    textColor: "text-gray-800",
  },
];

const PlansSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Nuestros planes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
