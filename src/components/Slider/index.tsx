"use client";

import { register } from "swiper/element/bundle";
register();
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./style.module.css"

import { cat1, labEmbryo , cat3 } from "@/img/index";
import Image from "next/image";

export default function Slider() {
  return (
    <>
      <div className={styles["container"]}>
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles["swipe-container"]}
          >
            <SwiperSlide className={styles["swipe-slide-container"]}>
              <Image src={cat1} alt="" className={styles["image"]}/>
            </SwiperSlide>
            <SwiperSlide className={styles["swipe-slide-container"]}>
              <Image src={labEmbryo} alt="" className={styles["image"]}/>
            </SwiperSlide>
            <SwiperSlide className={styles["swipe-slide-container"]}>
              <Image src={cat3} alt="" className={styles["image"]}/>
            </SwiperSlide>
          </Swiper>
      </div>
    </>
  );
}
