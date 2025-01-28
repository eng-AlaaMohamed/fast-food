import "./offers.css";
import offerOne from "../../images/offerOne.jpg";
import offerTwo from "../../images/offerTwo.jpg";

function Offers() {
    return (
        <div className="offers-page container">
            <div className="section-title">
                Our Offers
            </div>
            <div className="offers-boxes">
                <div className="box">
                    <div className="offer-img">
                        <img src={offerOne} alt="offer one" />
                    </div>
                    <div className="offer-info">
                        <h4 className="offer-title">Tasty Thursdays</h4>
                        <div className="discount-rate">20% <span className="off">off</span></div>
                        <button className="button">Order Online</button>
                    </div>
                </div>
                <div className="box">
                    <div className="offer-img">
                        <img src={offerTwo} alt="offer one" />
                    </div>
                    <div className="offer-info">
                        <h4 className="offer-title">Tasty Thursdays</h4>
                        <div className="discount-rate">20% <span className="off">off</span></div>
                        <button className="button">Order Online</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers;
