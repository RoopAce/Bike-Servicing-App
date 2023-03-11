import ChooseUs from "../../components/ChooseUs";
import Hero from "../../components/Hero"
import MakeAppointment from "../../components/MakeAppointment";
import MoreInfo from "../../components/MoreInfo";
import RepairService from "../../components/RepairServices";

const Home = () => {
    return (
        <>
            <Hero />
            <ChooseUs />
            <MakeAppointment />
            <MoreInfo />
            <RepairService />
        </>

    )
}

export default Home;