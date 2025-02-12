import React, { FC } from "react";

interface IframeProps {
  src: string;
  width?: string | number;
  height?: string | number;
  allowFullScreen?: boolean;
  loading?: "lazy" | "eager";
  referrerPolicy?: string;
  style?: React.CSSProperties;
}

const Iframe: FC<IframeProps> = ({
  src,
  height = "86vh", // Add default value
  allowFullScreen = false,
  loading = "lazy",
}) => {
  if (!src) {
    return <p>Error: Invalid iframe source.</p>;
  }

  return (
    <iframe
      src={src}
      style={{ height }}
      allowFullScreen={allowFullScreen}
      loading={loading}
    />
  );
};

export default Iframe;
