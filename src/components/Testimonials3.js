import React from 'react'
import quotePng from './quotes-3.png'
import image from '../components/Testimonial/Background-removebg-preview.png'
import image3 from '../components/Testimonial/founderGarol-modified.png'

const Testimonials3 = () => {
    return (
        <div class="Testimonials card">  {/* key={item.id} */}
            <img className='quote' src={quotePng} alt="quote Fluencer digital" />
            <img src={image3} class="card-img-top" alt="top" />  {/*{item.images} */}
            <div> 
                <img className='overlay-imgMain' id="customer-img" src={image} alt="client" />
            </div>
            <div className="Testi card-body">
                <h5 class="Test-card-title" id="customer-name"><b>Ankit goyal</b></h5>  {/*{item.name} */}
                <h5>(Founder and Director- Garol Advisory)</h5>  {/*{item.title} */}
                <p className='TestiPara' id="customer-text">Highly recommend Fluencer Digital for their expertise and professionalism. Our project was a success thanks to their dedication.</p>  {/*{item.quote} */}
            </div>
        </div>
    )
}

export default Testimonials3