import styles from "./component.module.css";
import "./intro.css";
import StarShine from "./starShine";
import IntroMonitor from "./introMonitor";

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
                <IntroMonitor></IntroMonitor>
            </div>
            <div className="starShine">
                {stars().map(component => component)}
            </div>
        </div>
    );
}
