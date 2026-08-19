import "./Card.css"
const Card=({image})=>{
    return (
    <div className="card" style={{backgroundImage:`url(${image})`}}>
        <img src={"/instagram-logo.svg"}/>
    </div>
    
    )
}
export default Card;