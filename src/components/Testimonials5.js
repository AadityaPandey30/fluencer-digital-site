import React from 'react'
import quotePng from './quotes-3.png'
import image from '../components/Testimonial/Background-removebg-preview.png'
import image3 from '../components/Testimonial/samiksha.png'

const Testimonials5 = () => {
    return (
        <div class="Testimonials card">  {/* key={item.id} */}
            <img className='quote' src={quotePng} alt="quote Fluencer digital" />
            <img src={image3} class="card-img-top" alt="Samiksha"/>  {/*{item.images} */}
            <div> 
                <img className='overlay-imgMain' id="customer-img" src={image} alt="client" />
            </div>
            <div className="Testi card-body">
                <h5 class="Test-card-title" id="customer-name"><b>Samiksha Satpute</b></h5>  {/*{item.name} */}
                <h5>(The Planet Reserve)</h5>  {/*{item.title} */}
                <p className='TestiPara' id="customer-text">We couldnot be happier with our decision to collaborate with them.
                For anyone looking for a talented and hardworking team, highly recommend them..</p>                  
            </div>
        </div>
    )
}

export default Testimonials5