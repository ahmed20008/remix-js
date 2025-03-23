export interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "small";
  size?: "small" | "medium" | "large" | "xl" | "2xl";
  weight?: "light" | "normal" | "bold";
  className?: string;
  children: React.ReactNode;
}
