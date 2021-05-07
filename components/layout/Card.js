import { Button, Typography } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Card.module.scss";
import cx from "classnames";
import en from "../../locales/en";
import ar from "../../locales/ar";
const Card = ({ style, title, level, location, skills, id }) => {
    const router = useRouter();
    const { locale } = router;
    const handleClick = () => {
        router.push(`/jobs/${id}`);
    };
    const t = locale === "en" ? en : ar;
    return (
        <div
            className={style ? cx(style, styles.card) : styles.card}
            onClick={handleClick}
        >
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Typography variant={"body1"}>{location}</Typography>
            <Typography variant={"body1"}>{level}</Typography>
            <Typography variant={"body1"}>{skills.join(", ")}</Typography>
            <div className={styles.action}>
                <Button variant="outlined" color="primary">
                    <Link
                        href={{
                            pathname: "/jobs/[id]",
                            query: { id },
                        }}
                        locale={locale}
                    >
                        {t.view}
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default Card;
