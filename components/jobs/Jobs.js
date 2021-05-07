import { useContext, useEffect, useState } from "react";
import Card from "../layout/Card";
import styles from "./Jobs.module.scss";
import { JobsContext } from "../../JobsContext/JobsProvider";
import Pagination from "@material-ui/lab/Pagination";
import { Button, TextField, Typography } from "@material-ui/core";

const Jobs = () => {
    const [title, setTitle] = useState("");
    const [skills, setSkills] = useState("");
    const { jobs, setLimit, setPage, setQuery, total } = useContext(
        JobsContext
    );
    const limit = 7;
    const pageCount = Math.ceil(total / limit);
    useEffect(() => {
        setLimit(limit);
        setPage(0);
    }, []);
    const handelChange = (e, value) => {
        setPage(value - 1);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        title && setQuery(title);
        skills && setQuery(skills);
    };
    return (
        <div className={styles.innerRow}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    placeholder="Skill"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />
                <button>Search</button>
            </form>
            <Typography
                variant="h4"
                color="textPrimary"
                className={styles.title}
            >
                Recent Opining
            </Typography>
            <div className={styles.jobs}>
                {jobs &&
                    jobs.map((job) => {
                        return (
                            <Card
                                style={styles.job}
                                title={job.title}
                                location={job.location.country}
                                level={job.career_level}
                                skills={job.skills}
                                id={job.uri}
                                key={job.uuid}
                            />
                        );
                    })}
            </div>
            <div className={styles.pagination}>
                <Pagination
                    count={pageCount}
                    color="primary"
                    onChange={handelChange}
                />
            </div>
        </div>
    );
};

export default Jobs;
