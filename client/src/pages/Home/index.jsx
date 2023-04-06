import ChooseUs from "../../components/ChooseUs";
import Hero from "../../components/Hero"
import MakeAppointment from "../../components/MakeAppointment";
import MoreInfo from "../../components/MoreInfo";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RepairService from "../../components/RepairServices";
import GetServices from '../../components/GetServices';
import Login from '../Login/index'

const Home = () => {
    return (
        <>
        <Navbar/>
            <Hero />
            <ChooseUs />
            <MakeAppointment />
            <MoreInfo />
            <RepairService />
            
            <GetServices/>

            <Login/>
         <Footer/>
        </>

    )
}

export default Home;