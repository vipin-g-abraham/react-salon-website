import "./Services.css"
import Service from "./Service"
import ServiceList from "./ServiceList"
export default function Services() {
    const haircutServiceList = [
        { serviceName:"Supercut", description:"Haircut & complimentary hot towel" },
        { serviceName:"Supercut Plus Shampoo", description:"Haircut, complimentary hot towel, shampoo" },
        { serviceName:"Supercut Plus Shampoo & Blowout", description:"Haircut, shampoo & blow dry with round brush" },
        { serviceName:"Supercut Kids", description:"Kids Haircut & complimentary hot towel" },
        { serviceName:"Supercut Senior", description:"Senior Haircut & complimentary hot towel" },
        { serviceName:"Bang Trim", description:"Trim of bangs; complexity increases price" }
    ]
    const colorServiceList = [
        { serviceName:"Color", description:"Single process root touch-up, all over color or gloss service" },
        { serviceName:"Mini Highlights or Lowlights", description:"Up to 5 quick-accent foils" },
        { serviceName:"Partial Highlights or Lowlights", description:"6-15 foils in targeted area" },
        { serviceName:"Full Highlights or Lowlights", description:"All over highlights" },
        { serviceName:"Gray Blending", description:"For guests with 50% gray or less to blend gray into natural color" },
        { serviceName:"Specialty Color", description:"Call for details on other color services available" }
    ]
    return <div className="services-page">
        <div className="services-banner">
            <div className="equal-columns">
                <div>
                    <h2>Confidence is <br /><span>our expertise</span></h2>
                    <p>From quick trims and touch-ups to fades and kids cuts, our stylists are expertly trained to help you find your perfect look.</p>
                    <button className="primary-button">Find a salon</button>
                </div>
                <div><img src="/services-top-banner.png" /></div>
            </div>
        </div>
        <Service serviceHeading="Haircut Services" descriptionList={["We kick things off with a consultation. We have expert men’s hair stylists and women’s hair stylists who learn about what you have in mind, then recommend the right look to complement your face shape, lifestyle and overall preferences.", "And the Hot Towel Refresher® isn't just for show. It removes stray hairs from your face and neck, leaving you feeling sharp and ready to get back to it. Whatever it may be.", "Visit your local Supercuts salon webpage for pricing."]} imageUrl="/services-supercut-DtvZEyy_.jpg" />
        <ServiceList serviceListItems={haircutServiceList}/>
            <Service serviceHeading="Color Services" descriptionList={["Whether a root touch-up will do the trick, or you're looking for a whole new look, our stylists will give you just what you're after. Your Super Color service starts with a consultation, where our expert stylists assess your skin tone, hair condition and look you have in mind.", "We offer a variety of techniques and options. View them all here.", "Visit your local Supercuts salon webpage for pricing."]} imageUrl="/services-supercolor-wz0zVapq.jpg" />
            <ServiceList serviceListItems={colorServiceList}/>
    </div>

}