import "./opinions.css";
import personOne from '../../images/t-1.jpg';
import personTwo from '../../images/t-2.jpg';
import personThree from '../../images/t-3.jpg';
import personFuor from '../../images/t-4.jpg';
import { useRef } from "react";
import { useState } from "react";

function Opinions() {

    const boxes = useRef();
    const [state, setState] = useState(1);

    const opinions = [
        {
            id: 0,
            opninon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam eaque dolores ducimus, accusantium dignissimos est maxime laudantium suscipit fugiat?",
            personName: "Alaa Mohamed",
            personPhoto: personOne
        },
        {
            id: 1,
            opninon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam eaque dolores ducimus, accusantium dignissimos est maxime laudantium suscipit fugiat?",
            personName: "Asmaa Ahmed",
            personPhoto: personTwo
        },
        {
            id: 2,
            opninon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam eaque dolores ducimus, accusantium dignissimos est maxime laudantium suscipit fugiat?",
            personName: "Farag Saad",
            personPhoto: personThree
        },
        {
            id: 3,
            opninon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam eaque dolores ducimus, accusantium dignissimos est maxime laudantium suscipit fugiat?",
            personName: "Ziad Mohamed",
            personPhoto: personFuor
        }
    ]

    const arrowLeftClick = () => {
        boxes.current.style.marginLeft = `${state * 0}%`
    }

    const arrowRightClick = () => {
        boxes.current.style.marginLeft = `-${state * 100}%`
    }

    return (
        <div className='opinions-section container'>
            <div className="opinions-title">
                What Says Our Customers
            </div>
            <div ref={boxes} className="opinions-boxes">
                {opinions.map(opninon =>
                    <div key={opninon.id} className="opinion-box">
                        <div className="box-text">
                            <p className="opinion">{opninon.opninon}</p>
                            <div className="name">{opninon.personName}</div>
                        </div>
                        <div className="box-image">
                            <img src={opninon.personPhoto} alt={opninon.personName} />
                        </div>
                    </div>
                )}
            </div>
            <div className="arrows">
                <div onClick={arrowLeftClick} className="arrow-left"><i className="bi bi-arrow-left-circle-fill"></i></div>
                <div onClick={arrowRightClick} className="arrow-right"><i className="bi bi-arrow-right-circle-fill"></i></div>
            </div>
        </div>
    )
}

export default Opinions;
