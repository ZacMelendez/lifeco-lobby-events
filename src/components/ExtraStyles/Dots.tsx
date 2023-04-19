import styles from "./Styles.module.scss";
export default function Dots() {
    return (
        <svg
            className={styles.dots}
            width="233"
            height="33"
            viewBox="0 0 233 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 16.5C0 7.3873 7.3873 0 16.5 0H28.5C37.6127 0 45 7.3873 45 16.5C45 25.6127 37.6127 33 28.5 33H16.5C7.3873 33 0 25.6127 0 16.5Z"
                fill="white"
            />
            <path
                d="M51 16.5C51 7.3873 58.3873 0 67.5 0H177.5C186.613 0 194 7.3873 194 16.5C194 25.6127 186.613 33 177.5 33H67.5C58.3873 33 51 25.6127 51 16.5Z"
                fill="white"
            />
            <path
                d="M200 16.5C200 7.3873 207.387 0 216.5 0C225.613 0 233 7.3873 233 16.5C233 25.6127 225.613 33 216.5 33C207.387 33 200 25.6127 200 16.5Z"
                fill="white"
            />
        </svg>
    );
}
