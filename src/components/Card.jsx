import Location from '/assets/location.svg'
import PropTypes from 'prop-types'

const Card = ({ card }) => {
    const { title, description, imageUrl, location, googleMapsUrl, startDate, endDate } = card
    return (
        <div className="card">
            <img className="card__image" src={imageUrl} alt={title} />
            <div className="card__content">
                <div className="find-place">
                    <p className="country">
                        <img className="location-icon" src={Location} alt="Location icon" />
                        <span className="card__location">{location}</span>
                    </p>
                    <a className="card__link" href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="card__title">{title}</h2>
                <p className="card__dates">{startDate} - {endDate}</p>
                <p className="card__description">{description}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        googleMapsUrl: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
    }).isRequired
}

export default Card