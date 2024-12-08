import React from 'react'
import quotePng from './quotes-3.png'
import image from '../components/Testimonial/Background-removebg-preview.png'
// import image2 from '../components/Testimonial/Image 2.jpg'
import image2 from '../components/Testimonial/DirectorJit.png'

const Testimonials1 = () => { 
    return (
        <div class="Testimonials card">  {/* key={item.id} */}
            <img className='quote' src={quotePng} alt="quote Fluencer Digital Client" loading='lazy' />
            <img src={image2} class="card-img-top" alt="client" loading='lazy' />  {/*{item.images} */}
            <div> 
                <img className='overlay-imgMain' id="customer-img" src={image} alt="" />
            </div>
            <div className="Testi card-body">
                <h5 class="Test-card-title" id="customer-name"><b>Anil Sharma</b></h5>  {/*{item.name} */}
                <h5>(Director- Jaipur Institute of Technology)</h5>  {/*{item.title} */}
                <p className='TestiPara' id="customer-text">Outstanding work! Fluencer exceeded our expectations with their website development. Efficient, user-friendly, and reliable.</p>  {/*{item.quote} */}
                <br/>
                {/* <p  id="customer-text">Highly recommend Fluencer Digital for their expertise and professionalism. Our project was a success thanks to their dedication.</p> */}
                <p ><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
    )
}

export default Testimonials1