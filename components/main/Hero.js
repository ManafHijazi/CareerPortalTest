import { Typography } from "@material-ui/core";
import { useContext } from "react";
import { LayoutContext } from "../../LayoutContext/LayoutProvider";
import styles from "./Hero.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
SwiperCore.use([Pagination]);

const Hero = () => {
    const { appearance, perk } = useContext(LayoutContext);
    const data = appearance && appearance.data;
    const details = perk && perk.data;
    const { locale } = useRouter();
    const t = locale === "en" ? en : ar;
    return (
        <section
            className={styles.hero}
            style={{
                backgroundImage: `url(${
                    data ? data.hero_background.media : ""
                })`,
            }}
        >
            <div className={styles.innerRow}>
                <Typography variant="h3" component="h1" gutterBottom>
                    {t.title}
                </Typography>
                <Typography variant="h6" className={styles.subtitle}>
                    {t.subtitle}
                </Typography>
                <Swiper
                    className={styles.slider}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        500: {
                            // width: 500,
                            slidesPerView: 1,
                        },
                        768: {
                            // width: 768,
                            slidesPerView: 2,
                        },
                        992: {
                            // width: 992,
                            slidesPerView: 3,
                        },
                    }}
                >
                    {details &&
                        details.map((slide, index) => {
                            return (
                                <SwiperSlide
                                    className={styles.slide}
                                    key={index}
                                >
                                    <div className={styles.card}>
                                        <i
                                            className={`${slide.icon} fa-fw`}
                                        ></i>
                                        <Typography
                                            variant="subtitle1"
                                            component="h6"
                                            color="textPrimary"
                                        >
                                            {slide.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="p"
                                            color="textPrimary"
                                        >
                                            {slide.description}
                                        </Typography>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </div>
        </section>
    );
};

export default Hero;
