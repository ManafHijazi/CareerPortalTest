import { useContext } from "react";
import { LayoutContext } from "../../LayoutContext/LayoutProvider";
import styles from "./Interest.module.scss";
import { Typography } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
SwiperCore.use([Pagination]);
const Interest = () => {
    const data = useContext(LayoutContext);
    const urls = data.gallery && data.gallery.data;
    const { locale } = useRouter();
    const t = locale === "en" ? en : ar;
    return (
        <section className={styles.interest}>
            <div className={styles.innerRow}>
                <Typography
                    variant="h4"
                    color="textPrimary"
                    className={styles.title}
                >
                    {t.ourInterest}
                </Typography>
                <div className={styles.wrapper}>
                    <Swiper
                        className={styles.slider}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: {
                                // width: 768,
                                slidesPerView: 1,
                            },
                            850: {
                                // width: 768,
                                slidesPerView: 2,
                            },
                            992: {
                                // width: 992,
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {urls &&
                            urls.map(({ url }) => {
                                return (
                                    <SwiperSlide
                                        key={url}
                                        className={styles.slide}
                                    >
                                        <div className={styles.img}>
                                            <img src={url}></img>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Interest;
