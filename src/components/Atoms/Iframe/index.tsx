import React, { FC } from 'react';

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
  width = "100%",
  height = 300,
  allowFullScreen = false,
  loading = "lazy",
  style = { border: 0 },
}) => {
  if (!src) {
    return <p>Error: Invalid iframe source.</p>;
  }

  return (
    <iframe
      src={src}
      width={typeof width === "number" ? `${width}px` : width}
      height={typeof height === "number" ? `${height}px` : height}
      allowFullScreen={allowFullScreen}
      loading={loading}
      style={style}
    />
  );
};

export default Iframe;