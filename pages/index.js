import Head from "next/head";
import About from "../components/main/About";
import Hero from "../components/main/Hero";
import Interest from "../components/main/Interest";
import RecentJobs from "../components/main/RecentJobs";

export default function Home() {
    return (
        <>
            <Head>
                <title>Elevatus | Home</title>
            </Head>
            <Hero />
            <RecentJobs />
            <About />
            <Interest />
        </>
    );
}
