import "../styles/tenth_page.css"
import {FC, useEffect, useRef, useState} from "react";
import plus from "../assets/tenth_page/plus.png"
import minus from "../assets/tenth_page/minus.png"

interface FAQItemProps {
    question: string;
    answer: string;
}

const FaqItem: FC<FAQItemProps> = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef<HTMLDivElement>(null);

    const toggleOpen = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (answerRef.current) {
            answerRef.current.style.height = isOpen
                ? `${answerRef.current.scrollHeight}px`
                : "0px";
        }
    }, [isOpen]);

    return (
        /*<div className="faq-item">
            <div className="faq-question" onClick={toggleOpen}>
                <span>{question}</span>
                <div className={`icon`}>{isOpen ? "-" : "+"}</div>
            </div>
            {isOpen && <div ref={answerRef} className="faq-answer">{answer}</div>}
        </div>*/
        <div className="faq-item">
            <div className="faq-question" onClick={toggleOpen}>
                <span>{question}</span>
                <div className="icon">
                    <img src={isOpen ? minus : plus} alt={isOpen ? "Minus" : "Plus"}/>
                </div>
            </div>
            <div ref={answerRef} className="faq-answer">
                {answer}
            </div>
        </div>
    );
};

function TenthPage() {
    const faqData = [
        {
            question: "Как это работает?",
            answer: "Ответ на вопрос о том, как это работает."
        }, {
            question: "Как оставить заявку?",
            answer: "Написать нашему менеджеру по контактам указанным на сайте, либо в телеграм канале. Также вы можете оставить заявку на сайте в разделе выше. ",
        }, {
            question: "Какие гарантии вы предоставляете?",
            answer: "Мы предоставляем гарантии качества на все наши услуги.Мы предоставляем гарантии качества на все наши услуги.Мы предоставляем гарантии качества на все наши услуги.Мы предоставляем гарантии качества на все наши услуги.",
        }
    ];

    return (
        <div className="tenth-screen-container">
            <div className={"tenth-white-text-container"}>
                <div className="tenth-white-text">FAQ</div>
            </div>

            <div className="faq-container">
                {faqData.map((item, index) => (
                    <FaqItem key={index} question={item.question} answer={item.answer}/>
                ))}
            </div>
        </div>
    )
}

export default TenthPage;