import Location from '/assets/location.svg'


const Card = ({ card }) => {
    const { title, description, imageUrl, location, googleMapsUrl, startDate, endDate } = card
    return (
        <div className="card">
            <img className="card__image" src={imageUrl} alt={title} />
            <div className="card__content">
                <div className="find-place">
                    <p className="country">
                        <img src={Location} alt="" />
                        <span className="card__location">{location}</span>
                    </p>
                    <a className="card__link" href={googleMapsUrl}>Open in Google Maps</a>
                </div>
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>

                <p className="card__dates">Dates: {startDate} - {endDate}</p>

            </div>
        </div>
    )
}

export default Card