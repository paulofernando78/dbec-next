import React, { FC } from "react";
import { IframeProps } from "./Iframe.types";

export const Iframe = ({
  src,
  height,
  allowFullScreen = false,
  loading = "lazy",
}: IframeProps) => {
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
