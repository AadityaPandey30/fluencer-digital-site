import React, { useEffect } from 'react'
import image from '../components/Testimonial/Background-removebg-preview.png'
// import image1 from '../components/Testimonial/Image 3.jpg'
// import image2 from '../components/Testimonial/Image 2.jpg'
import image2 from '../components/Testimonial/DirectorJit.png'
import image4 from '../components/Testimonial/founderGarol-modified.png'
import image3 from '../components/Testimonial/Image 1.jpg'
import image1 from '../components/Testimonial/AbabeelFounder-modified.png'
// import image4 from '../components/Testimonial/Image 4.jpg'
// import image5 from '../components/Testimonial/Image 5.jpg'
import image5 from '../components/Testimonial/NewtonSchools-modified.png'
import image6 from '../components/Testimonial/samiksha.png'

// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Testimonials1 from './Testimonials1'
// import Testimonials2 from './Testimonials2'
import Testimonials3 from './Testimonials3'
import Testimonials4 from './Testimonials4'
import Testimonials5 from './Testimonials5'
import Testimonials6 from './Testimonials6'

const Testimonials = () => {

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])

    return (
        <>
            <section>
                <div className='Testimonial-main cont'>
                    <div>
                        <i className="material-icons mx-3"><a href='/' className='slide-arrow' data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" >&#xe5c4;</a></i>   {/*  onClick={() => setShowtab("part1")}*/}
                        <i className="material-icons mx-3"><a href='/' className='slide-arrow' data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" >&#xe5c8;</a></i>   {/*onClick={() => setShowtab("part2")} */}
                    </div>
                    <div className="" data-aos="slide-left">  {/*{`${'hid'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}*/}
                        <div>
                            <h3 className='h3title' style={{ color: 'white', fontSize: '2.75rem', marginTop: '10%' }}>Testimonials<span style={{ color: 'orangered' }}>.</span></h3>
                        </div>
                    </div>
                </div>
                <div className="mainContext">
                    <div className="part1" style={{marginBottom:'4%'}}>
                        <div>
                            <div className="" data-aos="slide-left">
                                <img className='back-img1' src={image1} alt="" />
                                <div className="back-img1-overlay">
                                    <img className='overlay-img' src={image} alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="" data-aos="slide-down" >
                                <img className='back-img2' src={image2} alt="" />
                                <div className="back-img1-overlay">
                                    <img className='overlay-img2' src={image} alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="" data-aos="slide-up"> 
                                <img className='back-img3' src={image6} alt="" />
                                <div className="back-img1-overlay">
                                    <img className='overlay-img3' src={image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="carouselExampleAutoplaying" class="carousel slide"  data-bs-ride="carousel"> 
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <Testimonials1 />
                            </div>
                            <div class="carousel-item">
                                <Testimonials3/>
                            </div>
                            <div class="carousel-item">
                                <Testimonials4/>
                            </div>
                            <div class="carousel-item">
                                <Testimonials5 />
                            </div>
                            <div class="carousel-item">
                                <Testimonials6 />
                            </div>
                        </div>
                    </div>

                    <div className="part2" style={{marginTop:'4%'}}>
                        <div className="" data-aos="slide-right"> 
                            <img className='back-img1' src={image5} alt="" />
                            <div className="back-img1-overlay">
                                <img className='overlay-img' src={image} alt="" />
                            </div>
                        </div>
                        <div className="" data-aos="zoom-out-up" >  
                            <img className='back-img2' src={image3} alt="" />
                            <div className="back-img1-overlay">
                                <img className='overlay-img2' src={image} alt="" />
                            </div>
                        </div>
                        <div className="" data-aos="zoom-out-down">  {/* {`${'hid4'} ${myElementIsVisible? 'show': 'hid4'}`} ref={myRef}  */}
                            <img className='back-img3' src={image4} alt="" />
                            <div className="back-img1-overlay">
                                <img className='overlay-img3' src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div >
            </section>
        </>
    )
}

export default Testimonials;