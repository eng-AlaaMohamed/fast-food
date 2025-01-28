import "./bookAtable.css";

function BookAtable() {
    return (
        <div className='bookAtable-section container'>
            <div className="section-title bookAtable-title">Book A Table</div>
            <div className="section-content">
                <form className="form">
                    <div className="name-input">
                        <input type="text" placeholder=' Your Name' />
                    </div>
                    <div className="phone-input">
                        <input type="number" placeholder=' Your Phone Number' />
                    </div>
                    <div className="email-input">
                        <input type="email" placeholder=' Your email' />
                    </div>
                    <div className="people-input">
                        <select name="people">
                            <option value="howmanypeople">How Many People</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="date-input">
                        <input type="date" />
                    </div>
                    <button className="btn">Book Now</button>
                </form>
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7292341.082550717!2d25.5836258996085!3d26.817252257236447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2seg!4v1737646341999!5m2!1sen!2seg" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default BookAtable;
