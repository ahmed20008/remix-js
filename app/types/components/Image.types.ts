export type ImageProps = {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  loading?: "lazy" | "eager";
};
