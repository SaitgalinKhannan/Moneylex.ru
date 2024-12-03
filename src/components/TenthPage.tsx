import "../styles/tenth_page.css"
import {FC, ReactNode, useState} from "react";
import plus from "../assets/tenth_page/plus.png"
import minus from "../assets/tenth_page/minus.png"

interface FAQItemProps {
    question: string;
    children: ReactNode;
}

const FaqItem: FC<FAQItemProps> = ({question, children}) => {
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
                {children}
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
            question: "ДОСТАВКА КУРЬЕРОМ",
            answerComponent: (
                <div>
                    <p>
                        Таиланд - доставка курьером осуществляется без предоплаты по всем основным направлениям:
                        Пхукет, Паттайя, Бангкок, Самуи, Панган
                    </p>
                    <br/>
                    <p className={"bold-text"}>Правила взаимодействия:</p>
                    <br/>
                    <p>
                        1. Оставьте заявку в боте
                        <a className={"link-text"} href="https://t.me/MoneyLexBot" target="_blank"> @MoneyLexBot.</a>
                    </p>
                    <p>2. Дождитесь ответа от оператора.</p>
                    <p>3. Отправьте местоположение в чат и договоритесь о времени встречи с курьером.</p>
                    <p>4. При встрече с курьером необходимо повторно произвести расчёт через кнопку «Калькулятор сделки»
                        (в связи с волатильностью на рынке, курс может отличаться +-)</p>
                    <p>5. Дождитесь реквизиты на оплату Российского банка или USDT кошелёк, в случае оплаты
                        криптовалютой.</p>
                    <p>6. Оплатите и отправьте ЧЕК 🧾 или TxId оператору.</p>
                    <p>7. Дождитесь подтверждения об успешной оплате.</p>
                    <p>8. Получите деньги.</p>
                    <br/>
                    <p className={"bold-text"}>
                        ❗️Точная корректировка курса происходит на момент сделки по боту <a className={"link-text"} href="https://t.me/MoneyLexBot" target="_blank">@MoneyLexBot</a> в разделе «калькулятор сделки».
                    </p>
                </div>
            ),
        },
        {
            question: "ВЫДАЧА ЧЕРЕЗ БАНКОМАТ",
            answerComponent: (
                <div>
                    <p>
                        Выдача через банкомат по коду без использования пластиковой карты, осуществляется по всей
                        территории Таиланда.
                    </p>
                    <br/>
                    <p className={"bold-text"}>Правила взаимодействия:</p>
                    <br/>
                    <p>
                        1. Оставьте заявку в боте
                        <a className={"link-text"} href="https://t.me/MoneyLexBot" target="_blank"> @MoneyLexBot.</a>
                    </p>
                    <p>2. Дождитесь ответа от оператора.</p>
                    <p>3. Вам будут представлены на выбор доступные банкоматы для получения денежных средств и
                        инструкция.</p>
                    <p>4. Подтвердите свою готовность произвести оплату.</p>
                    <p>5. Дождитесь реквизиты на оплату Российского банка или USDT кошелёк, в случае оплаты
                        криптовалютой.</p>
                    <p>6. Оплатите и отправьте ЧЕК 🧾 или TxId оператору.</p>
                    <p>7. Дождитесь подтверждения об успешной оплате.</p>
                    <p>8. Следуйте инструкции и получите деньги.</p>
                    <br/>
                    <p className={"bold-text"}>❓С каких банкоматов можно снять наличные.</p>
                    <br/>
                    <p>Kasikorn bank (зеленый банкомат)</p>
                    <br/>
                    <p>Bangkok bank (синий банкомат)</p>
                    <br/>
                    <p>Krunghtai bank (голубой банкомат)</p>
                    <br/>
                    <p className={"bold-text"}>
                        Банкоматы можно найти в приложение Google maps путём ввода названия банка в поисковой строке.
                    </p>
                </div>
            ),
        },
        {
            question: "ПЕРЕВОД НА ТАЙСКИЙ СЧЁТ",
            answerComponent: (
                <div>
                    <p>
                        Осуществляем переводы на счета любых Тайских банков физических и юридических лиц, оплата аренды,
                        перевод средств на счёт застройщика, покупки по QR и многое другое.
                    </p>
                    <br/>
                    <p className={"bold-text"}>Правила взаимодействия:</p>
                    <br/>
                    <p>
                        1. Оставьте заявку в боте
                        <a className={"link-text"} href="https://t.me/MoneyLexBot" target="_blank"> @MoneyLexBot.</a>
                    </p>
                    <p>2. Дождитесь ответа от оператора.</p>
                    <p>3. Предоставьте номер банковского аккаунта и укажите название банка.</p>
                    <p>4. Подтвердите свою готовность произвести оплату.</p>
                    <p>5. Вам предоставят реквизиты на оплату Российского банка или USDT кошелёк, в случае оплаты
                        криптовалютой.</p>
                    <p>6. Оплатите и отправьте ЧЕК 🧾 или TxId оператору.</p>
                    <p>7. Дождитесь подтверждения об успешной оплате.</p>
                    <p>8. Получите деньги на счёт и чек 🧾.</p>
                    <br/>
                    <p className={"bold-text"}>
                        ❗️В случае если Вы оставили заявку, но ответили нам спустя
                        продолжительное время, то просим Вас сформировать новую заявку (из-за возможной волатильности на
                        рынке курс может отличаться +-).
                    </p>
                </div>
            ),
        },
        {
            question: "🌍 Международные операции",
            answerComponent: (
                <div>
                    <p>Мы также осуществляем обмен валют в ключевых странах, представленных в списке на нашем сайте.</p>
                    <br/>
                    <p>Для уточнения деталей перейдите в раздел "Перестановки" в боте и оставьте заявку, указав сумму и
                        направление выдачи.</p>
                </div>
            ),
        },
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
                        <br/>
                        <br/>
                        <span className={"bold-text"}>Выберите способ получения тайских батов в Таиланде:</span>

                        <div className="faq-inner-container">
                            {faqData.map((item, index) => (
                                <FaqItem key={index} question={item.question} children={item.answerComponent}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TenthPage;