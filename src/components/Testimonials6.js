import React from 'react'
import quotePng from './quotes-3.png'
import image from '../components/Testimonial/Background-removebg-preview.png'
import image3 from '../components/Testimonial/kanik.png'

const Testimonials5 = () => {
    return (
        <div class="Testimonials card">  {/* key={item.id} */}
            <img className='quote' src={quotePng} alt="quote Fluencer digital" />
            <img src={image3} class="card-img-top" alt=".." />  {/*{item.images} */}
            <div> 
                <img className='overlay-imgMain' id="customer-img" src={image} alt="client" />
            </div>
            <div className="Testi card-body" style={{marginTop:'1px'}}>
                <h5 class="Test-card-title" id="customer-name"><b>Saurabh Chauhan</b></h5>  {/*{item.name} */}
                <h5>(The Firstmile Global)</h5>  {/*{item.title} */}
                <p className='TestiPara' id="customer-text">Good experience working with them all the members are supportive in the team, same time all are tech experts, if anyone is looking for website development or collaboration in tech outsourcing can connect with them.</p>  
                <br/>
                
            </div>
        </div>
    )
}

export default Testimonials5