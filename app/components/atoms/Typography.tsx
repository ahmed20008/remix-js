import React from "react";
import { TypographyProps } from "~/types/components/Typography.types";

const Typography: React.FC<TypographyProps> = ({
  variant,
  size = "medium",
  weight = "normal",
  className = "",
  children,
}) => {
  // Tailwind classes for font sizes
  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };

  // Tailwind classes for font weights
  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    bold: "font-bold",
  };

  // Tailwind class for each variant (heading, paragraph, etc.)
  const variantClasses = {
    h1: "text-4xl font-extrabold",
    h2: "text-3xl font-extrabold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-semibold",
    h6: "text-base font-semibold",
    p: "text-base font-normal",
    span: "inline-block",
    small: "text-sm font-light",
  };

  const baseClasses = `${sizeClasses[size]} ${weightClasses[weight]} ${variantClasses[variant]} ${className}`;

  switch (variant) {
    case "h1":
      return <h1 className={baseClasses}>{children}</h1>;
    case "h2":
      return <h2 className={baseClasses}>{children}</h2>;
    case "h3":
      return <h3 className={baseClasses}>{children}</h3>;
    case "h4":
      return <h4 className={baseClasses}>{children}</h4>;
    case "h5":
      return <h5 className={baseClasses}>{children}</h5>;
    case "h6":
      return <h6 className={baseClasses}>{children}</h6>;
    case "p":
      return <p className={baseClasses}>{children}</p>;
    case "span":
      return <span className={baseClasses}>{children}</span>;
    case "small":
      return <small className={baseClasses}>{children}</small>;
    default:
      return <p className={baseClasses}>{children}</p>;
  }
};

export default Typography;
