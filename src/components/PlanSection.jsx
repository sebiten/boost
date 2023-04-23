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
  }
];

const PlansSection = () => {
  const { darkMode } = useBoost();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      id="planes"
      className={darkMode ? "bg-gray-50 py-20 pb-40" : "bg-gray-800 py-20 pb-40"}
      initial="hidden"
      animate="visible"
      whileInView={true}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className={
            darkMode
              ? "text-3xl text-gray-800 text-center mb-10"
              : "text-3xl  text-white text-center mb-10"
          }
          variants={itemVariants}
        >
          Nuestros planes
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PlansSection;
