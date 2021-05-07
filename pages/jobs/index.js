import Head from "next/head";
import Jobs from "../../components/jobs/Jobs";

const JobsPage = () => {
    return (
        <>
            <Head>
                <title>Elevatus | Jobs</title>
            </Head>
            <Jobs />
        </>
    );
};

export default JobsPage;
