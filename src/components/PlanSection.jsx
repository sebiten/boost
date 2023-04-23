import React from "react";
import PlanCard from "./PlanCard";
import { useBoost } from "@/hooks/useBoost";
import { motion } from "framer-motion";

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
      "Integración con plataformas de email marketing y re  des sociales.",
      "Servicio de seguimiento de métricas y análisis de resultados.",
    ],
    color: "bg-yellow-500",
    textColor: "text-gray-800",
  },
  {
    title: "Plan Personalizado",
    price: "$XXX",
    features: [
      "Creación de una landing page funcional y personalizada con hasta 20 secciones.",
      "Animaciones y efectos visuales avanzados para hacer la página más atractiva.",
      "Diseño de logotipo y manual de identidad visual (colores y tipografías).",
      "5 revisiones antes de la entrega final.",
      "Integración con plataformas de email marketing y redes sociales.",
      "Servicio de seguimiento de métricas y análisis de resultados.",
      "Servicio de mantenimiento y actualización de la página.",
    ],
    color: "bg-red-500",
    textColor: "text-white",
  },
];

const PlansSection = () => {
  const { darkMode } = useBoost();

  return (
    <section
      id="planes"
      className={
        darkMode ? "bg-gray-50 py-20 pb-40" : "bg-gray-800 py-20 pb-40"
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
        whileInView={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2
          className={
            darkMode
              ? "text-3xl text-gray-800 text-center mb-10"
              : "text-3xl  text-white text-center mb-10"
          }
        >
          Nuestros planes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index}>
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PlansSection;
