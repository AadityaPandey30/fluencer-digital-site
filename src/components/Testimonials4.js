import React from 'react'
import quotePng from './quotes-3.png'
import image from '../components/Testimonial/Background-removebg-preview.png'
import image3 from '../components/Testimonial/NewtonSchools-modified.png'

const Testimonials4 = () => {
    return (
        <div class="Testimonials card">  {/* key={item.id} */}
            <img className='quote' src={quotePng} alt="quote Fluencer digital" />
            <img src={image3} class="card-img-top" alt=".." />  {/*{item.images} */}
            <div> 
                <img className='overlay-imgMain' id="customer-img" src={image} alt="client" />
            </div>
            <div className="Testi card-body">
                <h5 class="Test-card-title" id="customer-name"><b>Shrey Singh</b></h5>  {/*{item.name} */}
                <h5>(Senior Associate- Newton School)</h5>  {/*{item.title} */}
                <p className='TestiPara' id="customer-text">Outstanding work! Fluencer Digital exceeded our expectations with their Website Development.</p>  
            
            </div>
        </div>
    )
}

export default Testimonials4