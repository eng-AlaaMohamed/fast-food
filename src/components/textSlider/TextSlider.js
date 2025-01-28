import { useEffect, useRef, useState } from 'react';
import './textSlider.css';

function TextSlider() {

    const items = [
        {
            id: 0,
            title: 'Fast Food Restaurant1',
            des: 'Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.'
        }, {
            id: 1,
            title: 'Fast Food Restaurant2',
            des: 'Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.'
        },
        {
            id: 2,
            title: 'Fast Food Restaurant3',
            des: 'Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.'
        }
    ];

    const textBoxes = useRef();

    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => { setCount((oldValue) => oldValue + 1) }, 5000);
        return () => {
            clearInterval(id);
        };
    }, []);

    useEffect(() => {

        count < 3 ?
            textBoxes.current.style.left = `-${1450 * count}px`
            :
            setCount(0)
    }, [count])

    return (
        <>
            <div className='text-slider'>
                <div ref={textBoxes} className="text-boxes">
                    {items.map((item) =>
                        <div className='text-box' key={item.id}>
                            <h3 className='title'>{item.title}</h3>
                            <p className="describtion">{item.des}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="hero-text">
                <div className='text-box'>
                    <h3 className='title'>{items[0].title}</h3>
                    <p className="describtion">{items[0].des}</p>
                </div>
            </div>
        </>

    )
}

export default TextSlider;
