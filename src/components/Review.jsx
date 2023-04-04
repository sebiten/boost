import Image from "next/image";
import React from "react";

export const Review = ({
  name,
  date,
  rating,
  review,
  male,
  female,
  darkMode,
}) => {
  return (
    <div className="bg-red rounded-lg shadow-2xl p-6">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
            src={`https://avatars.dicebear.com/api/avataaars/${name}.svg`}
            alt="avatar"
          />
        </div>
        <h3
          className={
            darkMode
              ? "text-gray-900 text-lg font-semibold"
              : "text-gray-100 text-lg font-semibold"
          }
        >
          {name}
        </h3>
        <p
          className={
            darkMode
            ? "text-gray-900 text-lg font-semibold"
            : "text-gray-100 text-lg font-semibold"
          }
        >
          {date}
        </p>
      </div>
      <div className="flex items-center mt-2">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              d="M10 3.16l1.65 3.35 3.69.54-2.67 2.6.63 3.68-3.3-1.73L6.67 14l.63-3.68-2.67-2.6 3.69-.54L10 3.16z"
              fill="currentColor"
            />
          </svg>
        ))}
      </div>
      <p
        className={
          darkMode
            ? "text-gray-800 text-sm "
            : "text-gray-50 text-sm "
        }
      >
        {review}
      </p>
    </div>
  );
};
