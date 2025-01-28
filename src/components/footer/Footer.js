import './footer.css';

function Footer() {
    return (
        <div className='footer-section'>
            <div className="footer-section-content container">
                <div className="footer-boxes">
                    <div className="box">
                        <h3 className="box-title">Contact us</h3>
                        <div className="location"><i className="bi bi-geo-alt-fill"></i> Location</div>
                        <div className="phone"><i className="bi bi-telephone-fill"></i> Call +20 1121865085</div>
                        <div className="email"><i className="bi bi-envelope"></i> test@gmail.com</div>
                    </div>
                    <div className="box">
                        <h3 className="box-title">Fast Food</h3>
                        <p className="des">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Reiciendis, aut et eius nemo sit repellendus voluptatibus
                            explicabo incidunt magni excepturi!
                        </p>
                    </div>
                    <div className="box">
                        <h3 className="box-title">Opening Hours</h3>
                        <div className="open-time">
                            <span>Everyday</span>
                            <span>10.00 Am -10.00 Pm</span>
                        </div>
                    </div>
                </div>
                <div className="sochial-icon">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter-x"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-instagram"></i>
                </div>
                <div className="copy-right">©2023 All Rights Reserved By <span>en:Alaa Mohamed</span></div>
            </div>
        </div>
    )
}

export default Footer;
