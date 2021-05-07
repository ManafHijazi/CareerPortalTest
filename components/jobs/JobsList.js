import styles from "./JobsList.module.scss";
import cx from "classnames";
import Card from "../layout/Card";
const JobsList = ({ data, style, getData }) => {
    return (
        <aside
            className={style ? cx(style, styles.list) : styles.list}
            onClick={getData}
        >
            {data.length &&
                data.map((job) => {
                    return (
                        <Card
                            style={styles.card}
                            title={job.title}
                            key={job.uuid}
                            id={job.uri}
                            location={job.location.city}
                            skills={job.skills}
                        />
                    );
                })}
        </aside>
    );
};

export default JobsList;
