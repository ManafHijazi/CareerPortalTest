import { useRouter } from "next/router";
import styles from "./Job.module.scss";
import JobsList from "./JobsList";
import JobDetails from "./JobDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../layout/Loader";
const Job = () => {
    const [jobsList, setJobsList] = useState([]);
    const [jobDetails, setJobDetails] = useState([]);
    const router = useRouter();
    const {
        query: { id },
    } = router;
    const fetchData = async () => {
        try {
            const {
                data: { results: job },
            } = await axios(
                `https://devapi-indexer.elevatustesting.xyz/api/v1/jobs/uri?uri=${
                    id ? id : "test-job-pwq"
                }&language_profile_uuid=ee5d991c-cdc6-4e83-b0b3-96f147208549`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Accept-Company":
                            "069e122d-0718-4136-bb4f-c9d3c05539a4",
                    },
                }
            );
            setJobDetails(job);

            const {
                data: {
                    results: { jobs },
                },
            } = await axios(
                `https://devapi-indexer.elevatustesting.xyz/api/v1/jobs?language_profile_uuid=ee5d991c-cdc6-4e83-b0b3-96f147208549&limit=30&page=0`,
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Accept-Language": "en",
                        "Accept-Company":
                            "069e122d-0718-4136-bb4f-c9d3c05539a4",
                    },
                }
            );
            setJobsList(jobs);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <section className={styles.job}>
            <div className={styles.innerRow}>
                {!jobsList.length && !jobDetails.length ? (
                    <Loader />
                ) : (
                    <>
                        <JobsList
                            data={jobsList}
                            style={styles.list}
                            getData={() => null}
                        />
                        <JobDetails data={jobDetails} style={styles.job} />
                    </>
                )}
            </div>
        </section>
    );
};

export default Job;
