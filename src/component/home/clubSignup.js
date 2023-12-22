import { useState } from "react";


export default function ClubSingup() {

    const [phoneNumber, setPhoneNumber] = useState('');

    const phoneNumInput = (e) => {
        const formattedNum = e.target.value
            .replace(/[^0-9]/g, '')
            .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3");

        setPhoneNumber(formattedNum);
    }


    return (
        <div className="singupFrame">
            <form method="post" className="clubForm">
                <h1>가입 신청서</h1>
                <label>
                    이름
                    <input name="name" type="text"></input>
                </label>
                <label>
                    나이
                    <input name="age" type="number"></input>
                </label>
                <label>
                    학번
                    <select name="student_num">
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                    </select>
                </label>
                <label>
                    전화번호
                    <input name="student_num" type="tel" onChange={phoneNumInput} value={phoneNumber} maxLength="13"></input>
                </label>
                <input type="submit" value="제출"/>
            </form>
        </div>
    )
}