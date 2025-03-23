export type ButtonProps = {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  label: string;
  onClick?: () => void;
};
