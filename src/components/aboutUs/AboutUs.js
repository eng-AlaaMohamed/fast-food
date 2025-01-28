import './aboutUs.css';
import aboutImage from "../../images/about-img.png";

function AboutUs() {
    return (
        <div className='section-about'>
            <div className="section-about-content container">
                <div className="section-image">
                    <img src={aboutImage} alt="photo" />
                </div>
                <div className="section-info">
                    <h3 className="section-info-title">We Are Feane</h3>
                    <p className="section-info-description">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly believable
                        . If you are going to use a
                        passage of Lorem Ipsum, you need to be sure there isn't anything
                        embarrassing hidden in the middle of text. All
                    </p>
                    <button className="button">Red More</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
