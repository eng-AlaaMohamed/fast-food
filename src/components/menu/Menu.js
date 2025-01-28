import "./menu.css";
import icon1 from "../../images/icon1.jpg";
import icon2 from "../../images/icon2.jpg";
import icon3 from "../../images/icon3.jpg";
import icon4 from "../../images/icon4.jpg";
import icon5 from "../../images/icon5.jpg";
import icon6 from "../../images/icon6.jpg";
import icon7 from "../../images/icon7.jpg";
import icon8 from "../../images/icon8.jpg";

function Menu() {

    const cards = [
        {
            id: 0,
            photo: icon4,
            title: "Delicious Pizza",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "20$"
        },
        {
            id: 1,
            photo: icon2,
            title: "Delicious Chicks",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "50$"
        },
        {
            id: 2,
            photo: icon3,
            title: "Marinated chicken",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "30$"
        },
        {
            id: 3,
            photo: icon1,
            title: "Chicken and Fries",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "18$"
        },
        {
            id: 4,
            photo: icon5,
            title: "Delicious Chicks",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "20$"
        },
        {
            id: 5,
            photo: icon6,
            title: "Chicken and Fries",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "35$"
        },
        {
            id: 6,
            photo: icon7,
            title: "Delicious Chicks",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "50$"
        },
        {
            id: 7,
            photo: icon8,
            title: "Chicken and Fries",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "40$"
        },
        {
            id: 8,
            photo: icon2,
            title: "Delicious Chicks",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "17$"
        }
    ];

    return (
        <div className="menu-section container">
            <div className="section-title">Our Menu</div>
            <div className="menu-cards">
                {cards.map(card =>
                    <div key={card.id} className="card">
                        <div className="card-photo">
                            <img src={card.photo} alt={card.title} className="photo" />
                        </div>
                        <div className="card-info">
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-description">{card.description}</p>
                            <div className="price-icon">
                                <span className="price">{card.price}</span>
                                <span className="icon"><i className="bi bi-cart3"></i></span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <button className="button menu-btn">View More</button>
        </div>
    )
}

export default Menu;
