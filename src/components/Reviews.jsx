import React from "react";
import { Review } from "./Review";
import { reviews } from "@/data/reviews";

export const Reviews = () => {
  return (
    <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 my-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white">
          What our customers are saying
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Review key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}

