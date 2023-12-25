import React, { useState, useEffect } from 'react';
import { homeJson } from '../../constant/homeData';

const ClubIntro = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const animateText = async () => {
            const textContent = homeJson.clubIntroDetail; // 보여줄 텍스트
            let index = 0;

            for (const char of textContent) {
                setText((prevText) => prevText + char);
                await delay(50); // 0.1초마다 글자 보여주기
            }
        };

        animateText();

        return () => {
            // 필요하다면 clear 또는 작업 정리
        };
    }, []);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    return (
        <div className="club-intro-box">
            <h1 className="club-intro-text">{text}</h1>
        </div>
    );
};

export default ClubIntro;
