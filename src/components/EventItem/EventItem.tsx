import moment from "moment";
import styles from "./EventItem.module.scss";

export interface EventItemProps {
    end: string;
    event_id: number;
    event_name: string;
    location: string;
    start: string;
}

export default function EventItem({ event }: { event: EventItemProps }) {
    const { event_name, location, start } = event;

    return (
        <div className={styles.eventItem}>
            <h2>{event_name}</h2>
            <div className={styles.details}>
                <h5>{location}</h5>
                <h5>|</h5>
                <h5>{moment(start).format("h:mm A")}</h5>
            </div>
        </div>
    );
}
