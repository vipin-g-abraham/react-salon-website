import HeroSection from "./HeroSection"
import "./Home.css"
import AppDownloadButtons from "./AppDownloadButtons"
import InstagramCarousel from "./InstagramCarousel"
export default function Home() {
    return (
        <div className="home">
            <HeroSection />
            <div className="rewards">
                <div className="equal-columns">
                    <div>
                        <h2>Enroll in Rewards And Receive 50 Points</h2>
                        <p>Earn points on every dollar you spend! Redeem points in-salon toward the reward of your choice.</p>
                        <button className="primary-button-dark-bg">Start earning</button>
                    </div>
                    <div><img src="/home-rewards.png" /></div>
                </div>
            </div>
            <div className="home-benefit">
                <h2>Confidence Without Compromise</h2>
                <p>Saving time and money shouldn’t mean sacrificing style. Visit an expert stylist today to walk out with a look you love.</p>
                <img src="/home-benefit.jpg" />
                <button className="primary-button">Find a salon</button>
            </div>
            <div className="download-app">
                <div className="equal-columns">
                    <div><img className="home-app-img" src="/home-app.png" /></div>
                    <div>
                        <h2>Download The App</h2>
                        <p>Download The App Booking ahead with your stylist has never been easier — book now on the app.</p>
                        <button className="primary-button">Learn more</button>
                        <p>Online booking available at participating locations only.</p>
                        <AppDownloadButtons/>
                    </div>

                </div>
            </div>
            <div className="home-careers">
                <div className="equal-columns">
                    <div>
                        <h2>Our Team of Expert Stylists is Growing</h2>
                        <p>From ongoing training to benefits that support your lifestyle, our mission is to empower every stylist to grow in their personal artistry and professional career.</p>
                        <button className="primary-button-dark-bg">See opportunities</button>
                    </div>
                    <div><img src="/home-careers.png" /></div>
                </div>
            </div>
            <div className="insta-section">
                    <div>
                        <h2>Social Is Our Style</h2>
                        <button className="primary-button">Follow on instagram</button>
                    </div>
                    <InstagramCarousel/>
            </div>
        </div>
    )

}