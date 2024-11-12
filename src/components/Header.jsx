import Globe from '/assets/globe.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-img" src={Globe} alt="Globe icon" />
                <span className="header__logo-text">my travel journal.</span>
            </div>
        </header>
    )
}

export default Header