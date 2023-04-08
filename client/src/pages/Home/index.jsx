import ChooseUs from "../../components/ChooseUs";
import Hero from "../../components/Hero"
import MakeAppointment from "../../components/MakeAppointment";
import MoreInfo from "../../components/MoreInfo";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RepairService from "../../components/RepairServices";
import GetServices from '../../components/GetServices';


const Home = () => {
    return (
        <>
        <Navbar/>
            <Hero />
            <ChooseUs />
            
            <MoreInfo />
            <RepairService />
         <Footer/>
        </>

    )
}

export default Home;