import "../styles/tenth_page.css"
import {FC, useState} from "react";
import plus from "../assets/tenth_page/plus.png"
import minus from "../assets/tenth_page/minus.png"

interface FAQItemProps {
    question: string;
    answer: string;
}

const FaqItem: FC<FAQItemProps> = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

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
            <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                {answer}
            </div>
        </div>
    );
};

function TenthPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    /*useEffect(() => {
        if (answerRef.current) {
            answerRef.current.style.height = isOpen
                ? `${answerRef.current.scrollHeight}px`
                : "0px";
        }
    }, [isOpen]);*/

    const faqData = [
        {
            question: "Доставка курьером",
            answer: "Где: Пхукет, Паттайя, Бангкок, Самуи, Панган.\n" +
                "\n" +
                "Как это работает:\n" +
                "1. Оставьте заявку в боте @MoneyLexBot.\n" +
                "2. Дождитесь ответа оператора и согласуйте место и время встречи.\n" +
                "3. При встрече повторно рассчитайте курс через калькулятор в боте.\n" +
                "4. Оплатите удобным способом и получите деньги у курьера."
        }, {
            question: "Выдача через банкомат (без карты)",
            answer: "Где: по всей территории Таиланда.\n" +
                "\n" +
                "Как это работает:\n" +
                "1. Оставьте заявку в боте @MoneyLexBot.\n" +
                "2. Выберите удобный банкомат из предложенного списка.\n" +
                "3. Оплатите по реквизитам и получите инструкцию для снятия денег.",
        }, {
            question: "Переводы на тайские банковские счета или оплата через QR",
            answer: "Что можно оплатить:\n" +
                "Переводы на счета физических и юридических лиц.\n" +
                "Оплата аренды, покупок или услуг через QR-код.\n" +
                "\n" +
                "Как это работает:\n" +
                "1. Оставьте заявку в боте @MoneyLexBot\n" +
                "2. Отправьте данные счёта на оплату оператору.\n" +
                "3. Дождитесь реквизитов на оплату.\n" +
                "4. Оплатите и получите подтверждение о завершении перевода.",
        }, {
            question: "🌍 Международные операции",
            answer: "Что можно оплатить:\n" +
                "Переводы на счета физических и юридических лиц.\n" +
                "Оплата аренды, покупок или услуг через QR-код.\n" +
                "\n" +
                "Как это работает:\n" +
                "1. Оставьте заявку в боте @MoneyLexBot\n" +
                "2. Отправьте данные счёта на оплату оператору.\n" +
                "3. Дождитесь реквизитов на оплату.\n" +
                "4. Оплатите и получите подтверждение о завершении перевода.",
        }
    ];

    return (
        <div className="tenth-screen-container">
            <div className={"tenth-white-text-container"}>
                <div className="tenth-white-text">FAQ</div>
            </div>

            <div className={`faq-container ${isOpen ? "open" : ""}`}>
                <div className="faq-outer-item">
                    <div className="faq-question" onClick={toggleOpen}>
                        <span>{"КАК ЭТО РАБОТАЕТ?"}</span>
                        <div className="icon">
                            <img src={isOpen ? minus : plus} alt={isOpen ? "Minus" : "Plus"}/>
                        </div>
                    </div>
                    <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                        <span>Мы делаем обмен валют и переводы максимально простыми и удобными. Воспользуйтесь нашими услугами, следуя понятным шагам.</span>
                        <span
                            style={{fontWeight: 700}}><br/><br/>Выберите способ получения тайских батов в Таиланде:</span>

                        <div className="faq-inner-container">
                            {faqData.map((item, index) => (
                                <FaqItem key={index} question={item.question} answer={item.answer}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TenthPage;