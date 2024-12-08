import React from 'react';
import {
    Link,
} from "react-router-dom";

const WorkComponent = ({ image, title, description1, description2, link }) => {
    return (
        <div className="first first12">
            <div className='work' data-aos="slide-right" >
                <h3 style={{ color: '#fff' }}>{title}<span style={{ color: 'orangered' }}>.</span></h3>
                <p className='p1' style={{ color: 'gray', textAlign:'justify' }}>{description1}</p><br />
                <p className='p1' style={{ color: 'gray', textAlign:'justify' }}>{description2}</p>
                <br />
                <Link className='workbtn' to={link} target="_blank" rel="noopener noreferrer">Visit Site</Link>
            </div>
            <div className='work' data-aos="slide-left">
                <img className='SlideImage' style={{ width: '100%' }} src={image} alt={title} />
            </div>
        </div>
    );
};

export default WorkComponent;
