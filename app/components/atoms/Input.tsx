import { CustomInputProps } from "~/types/components/Input.types";

const Input: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-4 py-2 border rounded-md bg-white text-gray-800 placeholder-gray-500 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
    />
  );
};

export default Input;
