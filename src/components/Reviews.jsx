import React from "react";
import { Review } from "./Review";
import { reviews } from "@/data/reviews";
import { useBoost } from "@/hooks/useBoost";

export const Reviews = () => {
  const { darkMode } = useBoost();
  return (
    <div className={
      darkMode ? 'bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 ' : 'bg-gray-800 py-24 px-4 sm:px-6 lg:px-8'
    }>
      <div className="max-w-7xl mx-auto">
        <h2 className={
          darkMode ? 'text-3xl font-extrabold text-gray-800 text-center my-2' : 'text-3xl font-extrabold text-gray-50 text-center my-2'
        }>
         Que dicen nuestros clientes
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Review
            darkMode={darkMode}
            key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}

