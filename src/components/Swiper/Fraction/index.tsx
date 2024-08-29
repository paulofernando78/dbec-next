"use client";

// Swiper
import { register } from "swiper/element/bundle";
register();
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./navigation-custom.css";

import Image, { StaticImageData } from "next/image";
import styles from "./style.module.css";

export interface SwiperFractionImages {
  imgSrc?: StaticImageData;
  imgAlt?: string;
  imgSrcLink?: string;
  imgAltLink?: string;
}

interface SwiperFractionProps {
  images: SwiperFractionImages[];
}

export default function SwiperFraction({ images }: SwiperFractionProps) {
  return (
    <>
      <div className={styles["container"]}>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          // navigation={true}
          modules={[Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className={styles["swipe-slide"]}>
              {image.imgSrc && image.imgAlt && (
                <Image
                  src={image.imgSrc}
                  alt={image.imgAlt}
                  className={styles["image"]}
                />
              )}
              {image.imgSrcLink && image.imgAltLink && (
                <Image
                  src={image.imgSrcLink}
                  alt={image.imgAltLink}
                  width={1000}
                  height={1000}
                  className={styles["image"]}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
