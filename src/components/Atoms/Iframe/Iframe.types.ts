export interface IframeProps {
  src: string;
  height?: string | number;
  allowFullScreen?: boolean;
  loading?: "lazy" | "eager";
  referrerPolicy?: string;
}