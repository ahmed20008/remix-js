export type CardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  footerContent?: React.ReactNode;
  onClick?: () => void;
};
