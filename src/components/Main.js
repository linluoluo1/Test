import Bikes from './pages/Bikes'
import Place from './pages/Place'
import Vehicle from './pages/Vehicle'
import StopPoint from './pages/StopPoint'
import './main.css'
import Footer from './Footer'

export default function Main() {
    return (
        <>
            <header className='header-main'>
                <h1>Your personal help desk</h1>
            </header>
            <div className='content'>
                <img className="main-img" src={require("./pages/img/8849f84cf158b18d285188fa373d1ae8 (1).jpg")} alt="transport"></img>
                <h3> Every one from time to time needs random numbers and names. We are here happy to help you find your perfect random stuff for today!</h3>

            </div>

            <div className='main-wrapper'>
                <Bikes />
                <Place />
                <Vehicle />
                <StopPoint />
            </div>
            <Footer />
        </>
    )
}
