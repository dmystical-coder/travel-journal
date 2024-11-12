const Footer = () => {
    const yearNow = new Date().getFullYear()
    return (
        <footer className="footer">
            <small className="footer__text">&copy; {yearNow}, dmystical-coder
            </small>
        </footer>
    )
}

export default Footer