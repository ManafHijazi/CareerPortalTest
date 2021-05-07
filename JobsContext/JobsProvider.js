import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const JobsContext = createContext();
const JobsContextProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [limit, setLimit] = useState(7);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [query, setQuery] = useState("");
    limit;
    const fetchData = async () => {
        try {
            const { data } = await axios(
                `https://devapi-indexer.elevatustesting.xyz/api/v1/jobs?language_profile_uuid=ee5d991c-cdc6-4e83-b0b3-96f147208549&limit=${limit}&page=${page}&query=${query}`,
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
            setJobs(data.results.jobs);
            setTotal(data.results.total);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, [limit, page, query]);
    return (
        <JobsContext.Provider
            value={{ jobs, total, limit, setPage, setLimit, setQuery }}
        >
            {children}
        </JobsContext.Provider>
    );
};

export default JobsContextProvider;
