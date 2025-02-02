import "../styles/seventh_page.css"
import {FC, useEffect, useState} from "react";
import {ExchangeRates, getExchangeRates} from "../api.ts";
import thaiFlag from "../assets/seventh_page/thai.png"
import russianFlag from "../assets/seventh_page/russia.png";
import usaFlag from "../assets/seventh_page/usa.png";
import earthFlag from "../assets/seventh_page/earth.png";

interface CourseProps {
    courseName: string;
    from: number;
    to: number;
    flag: boolean;
}

const CourseBox: FC<CourseProps> = ({courseName, from, to, flag}) => {
    return (
        <div className="course-box">
            <p className="course-name">{courseName}</p>
            {flag ? (
                <p className="course-range">От {from} до {to}</p>
            ): (
                <p className="course-range">От {from}</p>
            )}
        </div>
    );
};

function SeventhPage() {
    const [course, setCourse] = useState<ExchangeRates | null>(null)
    const [, setIsLoading] = useState(true);

    const fetchExchangeRates = async () => {
        try {
            const data = await getExchangeRates();
            setCourse(data);
        } catch (error) {
            console.log('Ops, error!', error)
        }
    };

    useEffect(() => {

        setTimeout(() => setIsLoading(false), 3000);
        fetchExchangeRates();
    }, []);

    if (course?.isHidden) {
        return null;
    }

    return (
        <div className="seventh-screen-container">
            <div className={"seventh-white-text-container"}>
                <div className="seventh-white-text">ЧЕСТНЫЕ КУРСЫ</div>
                <div className="seventh-white-text">ОБМЕНА</div>
            </div>

            <div className="vstack-container">
                <p className="header-text">КУРСЫ ВАЛЮТ</p>

                {course ? (
                    <>
                        <div className="hstack">
                            <img className="flag-icon" src={thaiFlag} alt="Thai Flag"/>
                            <p className="section-title">Покупка THB</p>
                        </div>
                        <CourseBox courseName="RUB/THB" from={course.rubToThbFrom} to={course.rubToThbTo} flag={course.flag}/>
                        <CourseBox courseName="USDT/THB" from={course.usdtToThbFrom} to={course.usdtToThbTo} flag={course.flag}/>

                        <div className="hstack">
                            <img className="flag-icon" src={russianFlag} alt="Russian Flag"/>
                            <p className="section-title">Покупка RUB</p>
                        </div>
                        <CourseBox courseName="USDT/RUB" from={course.usdtToRubFrom} to={course.usdtToRubTo} flag={course.flag}/>
                        <CourseBox courseName="THB/RUB" from={course.thbToRubFrom} to={course.thbToRubTo} flag={course.flag}/>
                        <CourseBox courseName="USD/RUB" from={course.usdToRubFrom} to={course.usdToRubTo} flag={course.flag}/>

                        <div className="hstack">
                            <img className="flag-icon" src={earthFlag} alt="Earth Icon"/>
                            <p className="section-title">Покупка USDT</p>
                        </div>
                        <CourseBox courseName="RUB/USDT" from={course.rubToUsdtFrom} to={course.rubToUsdtTo} flag={course.flag}/>
                        <CourseBox courseName="THB/USDT" from={course.thbToUsdtFrom} to={course.thbToUsdtTo} flag={course.flag}/>
                        <CourseBox courseName="USD/USDT" from={course.usdToUsdtFrom} to={course.usdToUsdtTo} flag={course.flag}/>

                        <div className="hstack">
                            <img className="flag-icon" src={usaFlag} alt="USA Flag"/>
                            <p className="section-title">Покупка USD</p>
                        </div>
                        <CourseBox courseName="RUB/USD" from={course.rubToUsdFrom} to={course.rubToUsdTo} flag={course.flag}/>
                        <CourseBox courseName="USDT/USD" from={course.usdtToUsdFrom} to={course.usdtToUsdTo} flag={course.flag}/>
                    </>
                ) : (
                    <p className="loading-text">ЗАГРУЗКА...</p>
                )}
            </div>
        </div>
    )
}

export default SeventhPage;