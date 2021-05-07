import { Typography } from "@material-ui/core";
import { useContext } from "react";
import Player from "react-player";
import { LayoutContext } from "../../LayoutContext/LayoutProvider";
import styles from "./About.module.scss";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
const About = () => {
    const data = useContext(LayoutContext);
    const url = data.about_us && data.about_us.data.url;
    const description = data.about_us && data.about_us.data.description;
    const { locale } = useRouter();
    const t = locale === "en" ? en : ar;
    return (
        <section className={styles.about}>
            <div className={styles.innerRow}>
                <Typography
                    variant="h4"
                    color="textPrimary"
                    className={styles.title}
                >
                    {t.about}
                </Typography>
                <div className={styles.wrapper}>
                    <div className={styles.player}>
                        <Player url={url ? url : ""} width="auto" />
                    </div>
                    <Typography
                        variant="h4"
                        color="textPrimary"
                        variant="body1"
                        className={styles.text}
                    >
                        {description}
                    </Typography>
                </div>
            </div>
        </section>
    );
};

export default About;
