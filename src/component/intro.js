import styles from "./style/component.module.css";
import "./style/intro.css";
import StarShine from "./starShine";

export default function Intro() {

    function stars() {
        const starComponents = [];
        for (let i = 0; i < 100; i++) {
            starComponents.push(<StarShine key={i} id={i} />);
        }
        return starComponents;
    }

    return (
        <div className={`introContainer ${styles.darkBackground}`}>
            <div className={styles.backdropFilter}>
                <div className="introMonitor">
                    {stars()} {/* Call the stars function to render the StarShine components */}
                </div>
            </div>
        </div>
    );
}
