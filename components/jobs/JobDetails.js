import styles from "./jobDetails.module.scss";
import cx from "classnames";
import { Button, Typography } from "@material-ui/core";
import { format } from "date-fns";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
import Head from "next/head";
const JobDetails = ({ data, style }) => {
    const { locale } = useRouter();
    const t = locale === "en" ? en : ar;
    return (
        <>
            <Head>
                <title>
                    {!data.title ? "Elevatus" : `Elevatus | ${data.title}`}
                </title>
            </Head>
            <div className={style ? cx(style, styles.job) : styles.job}>
                <Typography variant="h5" color="primary">
                    {data.title}
                    {data.job_type && (
                        <span className={styles.badge}>{data.job_type}</span>
                    )}
                    <Typography variant="body1" color="textSecondary">
                        Posted on:{" "}
                        {data.posted_at &&
                            format(
                                new Date(data.posted_at),
                                "EEEE, MMMM do, Y"
                            )}
                    </Typography>
                </Typography>
                {data.description && (
                    <Typography variant="h6" color="primary">
                        Description:
                        <p
                            dangerouslySetInnerHTML={{
                                __html: data.description,
                            }}
                        ></p>
                    </Typography>
                )}
                {data.requirements && (
                    <Typography variant="h6" color="primary">
                        Requirements:
                        <p
                            dangerouslySetInnerHTML={{
                                __html: data.requirements,
                            }}
                        ></p>
                    </Typography>
                )}
                <Typography variant="h6" color="primary">
                    {t.summary}
                    <ul className={styles.summary}>
                        <li>
                            <Typography variant="body1" color="textSecondary">
                                {data.salary && (
                                    <>
                                        <span>{t.salary}:</span>
                                        <span>
                                            {data.salary.min} -{" "}
                                            {data.salary.max}
                                        </span>
                                    </>
                                )}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" color="textSecondary">
                                {data.industry && (
                                    <>
                                        <span>{t.industry}:</span>
                                        <span>{data.industry.join(", ")}</span>
                                    </>
                                )}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" color="textSecondary">
                                {data.years_of_experience && (
                                    <>
                                        <span>{t.experience}:</span>
                                        <span>
                                            {data.years_of_experience.join(
                                                ", "
                                            )}
                                        </span>
                                    </>
                                )}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" color="textSecondary">
                                {data.major && (
                                    <>
                                        <span>
                                            {t.major}:{"  "}
                                        </span>
                                        <span>{data.major.join(", ")}</span>
                                    </>
                                )}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" color="textSecondary">
                                {data.career_level && (
                                    <>
                                        <span>{t.level}:</span>
                                        <span>{data.career_level}</span>
                                    </>
                                )}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" color="textSecondary">
                                {data.gpa && (
                                    <>
                                        <span>{t.gpa}:</span>
                                        <span>{data.gpa}</span>
                                    </>
                                )}
                            </Typography>
                        </li>
                    </ul>
                </Typography>
                {data.skills && (
                    <Typography variant="h6" color="primary">
                        {data.skills.map((skill, index) => {
                            <span className={styles.badge} key={index}>
                                {skill}
                            </span>;
                        })}
                    </Typography>
                )}
                <Button variant="contained" color="primary">
                    {t.submit}
                </Button>
            </div>
        </>
    );
};

export default JobDetails;
