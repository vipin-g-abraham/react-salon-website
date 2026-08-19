import Card from "./Card"
import "./InstagramCarousel.css"
const InstagramCarousel = () => {
    
    const imageLinks = [
        "/pexels-katianaidenko-30476667.jpg",
        "/pexels-oktay-koseoglu-42034955-37397597.jpg",
        "/pexels-vinicius-wiesehofer-289347-4219911.jpg"
    ];
    //TODO make it into a scrollable element with several images
    return (
        <div className="insta-carousel">
            {imageLinks.map((imageLink,index)=><Card key={index} image={imageLink}/>)}
        </div>
    );

}
export default InstagramCarousel