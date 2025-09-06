import FirstPage from "./components/FirstPage.tsx";
import SecondPage from "./components/SecondPage.tsx";
import ThirdPage from "./components/ThirdPage.tsx";
import ForthPage from "./components/ForthPage.tsx";
import FifthPage from "./components/FifthPage.tsx";
import SixthPage from "./components/SixthPage.tsx";
import EighthPage from "./components/EighthPage.tsx";
import NinthPage from "./components/NinthPage.tsx";
import TenthPage from "./components/TenthPage.tsx";
import EleventhPage from "./components/EleventhPage.tsx";
import SeventhPage from "./components/SeventhPage.tsx";
import {useEffect, useState} from "react";
import {ExchangeRates, getExchangeRates} from "./api.ts";

function App() {
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

    return (
        <>
            <FirstPage course={course}/>
            <SecondPage/>
            <ThirdPage/>
            <ForthPage/>
            <FifthPage/>
            <SixthPage/>
            <SeventhPage course={course}/>
            <EighthPage/>
            <NinthPage/>
            <TenthPage/>
            <EleventhPage/>
        </>
    )
}

export default App;