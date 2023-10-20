import BrandsSection from "../Components/HomeComponents/BrandsSection/BrandsSection";
import HomeBanner from "../Components/HomeComponents/HomeBanner/HomeBanner";
import SaleBanner from "../Components/HomeComponents/SaleBanner/SaleBanner";
import ServiceHighlight from "../Components/HomeComponents/ServiceHighlight/ServiceHighlight";
import SubscriptionSection from "../Components/HomeComponents/SubscriptionSection/SubscriptionSection";

const Home = () => {
    return (
        <div>
            <h2>
                <HomeBanner></HomeBanner>
                <ServiceHighlight></ServiceHighlight>
                <BrandsSection></BrandsSection>
                <SaleBanner></SaleBanner>
                <SubscriptionSection></SubscriptionSection>
            </h2>
        </div>
    );
};

export default Home;