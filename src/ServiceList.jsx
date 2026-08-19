import "./ServiceList.css"
const ServiceList = ({ serviceListItems }) => {
    return (
        <div className="service-list">
        <div className="service-list-grid">
            {serviceListItems.map((serviceListItem, index) => (
                <div key={index}>
                    <h3>{serviceListItem.serviceName}</h3>
                    <p>{serviceListItem.description}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default ServiceList