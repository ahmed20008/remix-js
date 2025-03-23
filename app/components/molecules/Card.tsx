import React from "react";
import { CardProps } from "~/types/components/Card.types";
import { Typography } from "../atoms";

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  footerContent,
  onClick,
}) => {
  return (
    <button
      className="bg-white rounded-lg shadow-md overflow-hidden"
      onClick={onClick}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        <Typography variant="h3" size="xl" weight="normal" className="mt-6">
          {title}
        </Typography>
        <Typography variant="p" className="mt-2 text-gray-500">
          {description}
        </Typography>
        {footerContent && (
          <div className="mt-4 border-t pt-2 text-sm text-gray-500">
            {footerContent}
          </div>
        )}
      </div>
    </button>
  );
};

export default Card;
