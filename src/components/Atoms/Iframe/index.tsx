import React, { FC } from "react";
import "./types";

const Iframe: FC<IframeProps> = ({
  src,
  height,
  allowFullScreen = false,
  loading = "lazy",
}) => {
  if (!src) {
    return <p>Error: Invalid iframe source.</p>;
  }

  return (
    <iframe
      src={src}
      style={{ height: height }}
      allowFullScreen={allowFullScreen}
      loading={loading}
    />
  );
};

export default Iframe;
