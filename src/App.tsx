import {useMediaQuery} from 'usehooks-ts'
import FirstPageMobile from "./components/FirstPageMobile.tsx";
import FirstPage from "./components/FirstPage.tsx";

function App() {
    const isMobile = useMediaQuery('(max-width: 768px)')

    return (
        <>
            {isMobile ? (<FirstPageMobile/>) : (<FirstPage/>)}
        </>
    )
}

export default App
