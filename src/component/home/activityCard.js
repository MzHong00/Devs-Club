import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ActivityCard({id, iconImg, summary, detail}) {

    return (
        <div className="activityCardContents" style={{animationDelay: `${id}s`}}>
            <div className="activityIcon">
                <FontAwesomeIcon icon={iconImg} color='purple' size='2x' />
            </div>
            <div className="activitySummary">
                {summary}
            </div>
            <div className="activityDetail">
                {detail}
            </div>
        </div>
    )
}