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

import Image from "next/image";
import styles from "./style.module.css";
import { SwiperFractionProps } from "./types";

export default function SwiperFraction({ images }: SwiperFractionProps) {
  const baseImgSrc = "/assets/img";

  return (
    <>
      <div className={styles["container"]}>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          modules={[Pagination, Navigation]}
        >
          {images.map((image, index) => {
            const fullImgSrc = `${baseImgSrc}${image.imgSrc}`; // Correctly reference image here.

            return (
              <SwiperSlide key={index} className={styles["swipe-slide"]}>
                {image.imgSrc && image.imgAlt && (
                  <Image
                    src={fullImgSrc}
                    alt={image.imgAlt}
                    width={1000}
                    height={1000}
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
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
