import ActivityCard from "./activityCard";
import { homeJson } from "../../constant/homeData";

export default function Activity() {

    return (
        <div className="activityContainer">
            {
                homeJson.activity.map((activity) => {
                    return <ActivityCard {...activity} key={activity.id} />
                })
            }
        </div>
    )
}