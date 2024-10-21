import Navbar from "../../Navbar/navbar"
import TitleOfMnt from "../Tittle/Tittle"
import bgImage from "C:/Users/LENOVO/currencyChange/MNT/MNT/public/images/BG Hero.png"
import "./hero.css"
const HeroSection=()=>{
    return(
        <div className="hero-Bg  ">
          <img src={bgImage} alt="" className="absolute h-[100%] w-[100%] object-cover " />
          <div className="navBar px-[100px] relative pt-7">
            <Navbar/>
          </div>
          <div className="Headding relative top-[30px]  flex justify-center items-center h-[500px] px-[100px] ">
            <TitleOfMnt/>
          </div>
        </div>
    )
}
export default HeroSection