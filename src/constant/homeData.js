import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export const homeJson = {
    club_name: "DEVS",
    introduce: "우송대학교 IT 융합학부 동아리",
    intro_nav: [
        {
            "id": 1,
            "name": "홈"
        },
        {
            "id": 2,
            "name": "소개"
        },
        {
            "id": 3,
            "name": "구성원"
        },
        {
            "id": 4,
            "name": "활동"
        }
    ],
    other_menu: [
        {
            "list_name":"Login",
            "img_src": "/image/user.png",
            "url": ""
        },
        {
            "list_name":"Activity",
            "img_src": "/image/activity.png",
            "url": ""
        },
        {
            "list_name":"Minutes",
            "img_src": "/image/minutes.png",
            "url": ""
        }
    ],
    activity: [
        {
            "id": 1,
            iconImg: icon({ name: 'circle-nodes' }),
            "summary": "토이 프로젝트 진행",
            "detail": "주기적인 단기 프로젝트를 진행합니다. 주제는 모든 동아리원이 결정합니다."
        },
        {
            "id": 2,
            iconImg: icon({ name: 'cubes' }),
            "summary": "공모전 참여",
            "detail": "주기적인 교외 활동을 진행합니다. 교외 활동에 관심있다면 대환영!"
        },
        {
            "id": 3,
            iconImg: icon({ name: 'school' }),
            "summary": "교내 대회 및 행사 참가",
            "detail": `창업 대회, 셀프 스터디 등 교내 활동에 적극 참여합니다. 
            ※우송지수 부여 활동 참여가능! 단, 우송지수 활동만은 불가능합니다.`
        },
        {
            "id": 4,
            iconImg: icon({ name: 'location-arrow' }),
            "summary": "IT 박람회 참관",
            "detail": "다양한 IT 관련 업종을 경험하고, IT에 대한 시야를 넓힐 수 있습니다."
        }
    ]
}