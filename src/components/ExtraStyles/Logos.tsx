import cross from "../../images/cross.png";
import heart from "../../images/heart.png";
import va from "../../images/va.png";
import styles from "./Styles.module.scss";
export default function Mission() {
    return (
        <div className={styles.logos}>
            <img src={cross} />
            <img src={heart} />
            <img src={va} />
        </div>
    );
}
