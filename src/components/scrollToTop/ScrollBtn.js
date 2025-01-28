import { useRef } from 'react';
import './scrollBtn.css';

function ScrollBtn() {

    const scrollBtn = useRef();

    document.onscroll = () => {
        if (window.scrollY > 800) {
            scrollBtn.current.classList.add("show");
        } else {
            scrollBtn.current.classList.remove("show");
        }
    }

    const btnClicked = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div onClick={btnClicked} ref={scrollBtn} className='scroll-to-top'>
            <i className="bi bi-arrow-up"></i>
        </div>
    )
}

export default ScrollBtn;
