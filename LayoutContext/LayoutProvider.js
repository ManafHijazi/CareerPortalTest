import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const LayoutContext = createContext();
const LayoutContextProvider = ({ children }) => {
    const [layout, setLayout] = useState([]);
    const fetchData = async () => {
        try {
            const {
                data: { results },
            } = await axios(
                "https://devapi.elevatustesting.xyz/api/candidate/v1/portal?sub_domain=esraa",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Accept-Language": "en",
                    },
                }
            );
            setLayout(results.portal.career);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <LayoutContext.Provider value={layout}>
            {children}
        </LayoutContext.Provider>
    );
};

export default LayoutContextProvider;
