import { Typography } from "@material-ui/core";
import { useContext } from "react";
import { LayoutContext } from "../../LayoutContext/LayoutProvider";
import styles from "./Footer.module.scss";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
const Footer = () => {
    const { website_and_social } = useContext(LayoutContext);
    const data = website_and_social && website_and_social.data;
    const { locale } = useRouter();
    const t = locale === "en" ? en : ar;
    return (
        <footer className={styles.footer}>
            <div className={styles.innerRow}>
                <Typography variant="h4">{t.followUs}</Typography>
                <div className={styles.icons}>
                    <a href={data && data.website_url}>
                        <i className="fas fa-globe fa-fw"></i>
                    </a>
                    <a href={data && data.linkedin_url}>
                        <i className="fab fa-linkedin-in fa-fw"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
