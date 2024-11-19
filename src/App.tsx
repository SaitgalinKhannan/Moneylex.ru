import FirstPage from "./components/FirstPage.tsx";
import SecondPage from "./components/SecondPage.tsx";
import ThirdPage from "./components/ThirdPage.tsx";
import ForthPage from "./components/ForthPage.tsx";

function App() {
    /*const isMobile = useMediaQuery('(max-width: 768px)')*/

    return (
        <>
            {/*{isMobile ? (<FirstPageMobile/>) : (<FirstPage/>)}*/}
            <FirstPage/>
            <SecondPage/>
            <ThirdPage/>
            <ForthPage/>
        </>
    )
}

export default App
