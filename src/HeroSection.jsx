import './HeroSection.css'
export default function HeroSection() {
    return (
        <div className="hero-section">
            <video muted autoPlay playsInline loop id="hero-video" poster="/video-poster.png" >
                <source src="/supercuts-home.mp4" type="video/mp4"/>
            </video>
            <div className="hero-text">
            <h1>Confidence Without Compromise</h1>
            <p>For a style that turns heads, turn to Supercuts. Watch our new video and see how quality haircuts spark real confidence—and a few well-deserved double takes.</p>
            
            </div>
            <div className='find-salon-container'>
            <div className="find-salon">
            <h2>Find A Salon</h2>
            <input placeholder='Zipcode'></input>
            <button className='primary-button'>Find a Salon</button>
            </div>
            </div>
        </div>

    )
}