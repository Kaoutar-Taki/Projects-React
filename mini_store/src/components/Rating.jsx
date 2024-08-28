import React from 'react';

const Rating = ({ rate, count }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rate) {
            stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
        } else if (i === Math.ceil(rate) && rate % 1 !== 0) {
            stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
        } else {
            stars.push(<i key={i} className="bi bi-star text-warning"></i>);
        }
    }

    return (
        <div className="d-flex align-items-center" >
            <div className="position-relative" style={{ width: '40px', height: '40px' }}>
                <div className="bg-secondary rounded-circle w-100 h-100 overflow-hidden position-relative">
                    <svg className="position-absolute" style={{ width: '48px', height: '48px', left: '-4px', top: '0' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
            <div className="ms-2 badge rounded-pill bg-secondary text-white">
                <div> {stars}</div>
                <div>{count} reviews</div>
            </div>
        </div >
    );
}

export default Rating;
