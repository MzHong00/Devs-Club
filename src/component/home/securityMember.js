import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SecurityMember() {


    return (
        <div className='securityBox'>
            <FontAwesomeIcon icon={icon({name: "lock"})} size='2x'/>
            <div>로그인 후 이용해 주세요</div>
        </div>
    )
}