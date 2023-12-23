

export default function Profiles({profilesImg, name, studentNum, introduce, major}) {

    return (
        <div className="profiles">
            <div className="profilesImg" style={{backgroundImage: `url('${profilesImg}')`}}></div>
            <div className="memberInfo">
                <div className="studName">{major} {studentNum} {name}</div>
                <p className="introduce">{introduce}</p>
            </div>
        </div>
    )
}