import React, { useState } from "react";
import { ImageProps } from "~/types/components/Image.types";

const LazyImage: React.FC<ImageProps> = ({
  src,
  alt,
  width = "auto",
  height = "auto",
  className = "",
  loading = "lazy",
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="w-8 h-8 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        loading={loading}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default LazyImage;
