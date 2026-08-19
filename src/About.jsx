import "./About.css"
import WalkInsBanner from "./WalksInsBanner";
const About = () => {
    return (
        <div className="about-page">
            <h1 className="main-title">The <span className="main-title-part-2">SUPERCUTS STORY</span></h1>
            <div className="about-content">

                <h2>A household name for over 50 years</h2>
                <img src="/about-rJfUWpnt.jpg" />
                <div className="about-body">
                    <p>Affordable, quality haircuts didn't exist before 1975. Supercuts changed that.</p>
                    <p>Our story began in Albany, California, when Geoffrey M. Rappaport and Frank E. Emmett created a 20-minute technique that streamlined haircuts. For the first time, no appointments were required and a la carte services empowered customers to pay for what they needed.</p>
                    <p>Today, we’re proud to operate 1,700+ salons across the country where expert stylists deliver quality services that leave you feeling confident after every visit. </p>
                    <button>Find a salon </button>
                </div>
                
            </div>
        </div>
    );
}
export default About