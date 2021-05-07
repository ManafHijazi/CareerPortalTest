import Link from "next/link";
import { Button, Grid, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { JobsContext } from "../../JobsContext/JobsProvider";
import Card from "../layout/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Pagination]);
import styles from "./RecentJobs.module.scss";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
const RecentJobs = () => {
    const { jobs } = useContext(JobsContext);
    const jobsList = jobs && jobs.slice(0, 4);
    const { locale } = useRouter();
    const t = locale === "en" ? en : ar;
    return (
        <div className={styles.innerRow}>
            <Typography
                variant="h4"
                color="textPrimary"
                className={styles.title}
            >
                {t.recentOpining}
            </Typography>
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
                {jobsList &&
                    jobsList.map((job) => {
                        return (
                            <SwiperSlide
                                key={job.uuid}
                                className={styles.slide}
                            >
                                <Card
                                    title={job.title}
                                    location={job.location.country}
                                    level={job.career_level}
                                    skills={job.skills}
                                    id={job.uri}
                                />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
            <div className={styles.action}>
                <Button variant="outlined" color="primary">
                    <Link href="/jobs">{t.viewAll}</Link>
                </Button>
            </div>
        </div>
    );
};

export default RecentJobs;
