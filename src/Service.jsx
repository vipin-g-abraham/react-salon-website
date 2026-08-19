import "./Service.css"
const Service = ({ serviceHeading, descriptionList, imageUrl }) => {
    return (
        <div className="service">

            <h2>{serviceHeading}</h2>
            <img src={imageUrl} />
            <div className="service-body">
                {descriptionList.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

        </div>
    )
}
export default Service