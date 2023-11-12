import styles from "./style/intro.module.css"
import StarShine from "./starShine";

export default function Intro() {

    return (
        <div className={`${styles.introContainer} ${styles.darkBackground}`}>
            <div className={styles.backdropFilter}>
                <div className={styles.introMonitor}>
                    <StarShine></StarShine>
                </div>
            </div>
        </div>
    );
}