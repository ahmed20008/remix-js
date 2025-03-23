import { ButtonProps } from "~/types/components/Button.types";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  loading = false,
  label = "Button",
  onClick,
}) => {
  const sizeClasses = {
    small: "px-3 py-2 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/80",
    secondary: "bg-secondary text-white hover:bg-secondary/80",
    accent: "bg-accent text-white hover:bg-accent/80",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary/10",
  };

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary
                      ${sizeClasses[size]} ${variantClasses[variant]} ${
        loading && "opacity-50 cursor-not-allowed"
      }`}
    >
      {loading ? (
        <div className="w-5 h-5 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
