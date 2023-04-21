import moment from "moment";
import styles from "./DayBanner.module.scss";

export default function EventItem() {
    return <div className={styles.banner}>{moment().format("ddd M/D")}</div>;
}
