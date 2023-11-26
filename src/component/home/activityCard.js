import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ActivityCard({iconImg, summary, detail}) {

    return (
        <div className="activityCardContents">
            <div className="activityIcon">
                <FontAwesomeIcon icon={iconImg} color='white' size='2x' />
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