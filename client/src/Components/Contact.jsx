import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Contact = () => {
    let Navigate=useNavigate()
    let [state3,updateState3]=useState();
    let inputEvent=(e)=>{
        updateState3({...state3,[e.target.name]:e.target.value})
        console.log(state3);
    }
    let ContactUs=async(e)=>{
        e.preventDefault();
        let val=await fetch('/contactUs',{
            "method":"POST",
            "headers":{
                "content-Type":"application/json"
            },
            body:JSON.stringify(state3)
        })
        console.log(val);
        if (val.status===200) {
            alert('Message has been sent sucessfully')
            Navigate('/')
        }
        else
        {
            alert('Error! please try again later')
            Navigate('/')
        }
    }
  return (
    <div>
        <div className="container-xxl pb-5" id="contact">
                <div className="container py-5">
                    <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-6">
                            <h1 className="display-5 mb-0">Let's Work Together</h1>
                        </div>
                        {/* <div className="col-lg-6 text-lg-end">
                            <a className="btn btn-primary py-3 px-5" href="">Say Hello</a>
                        </div> */}
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="mb-2">Residence:</p>
                            <h3 className="fw-bold">Islamabad, Pakistan</h3>
                            <hr className="w-100" />
                            <p className="mb-2">Call me:</p>
                            <h3 className="fw-bold">+92 344 7328858</h3>
                            <hr className="w-100" />
                            <p className="mb-2">Mail me:</p>
                            <h3 className="fw-bold">fawadrahman55@gmail.com</h3>
                            <hr className="w-100" />
                            <p className="mb-2">Follow me:</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary me-2" href="https://www.instagram.com/sitesguru/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square btn-primary me-2" href="https://www.facebook.com/Sites-guru-100365908988235/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary me-2" href="https://youtube.com/channel/UC6KSqaX0K5nFW3biqH7Rz0A"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-square btn-primary me-2" href="https://www.linkedin.com/in/f%C3%A0wad-rehm%C3%A0n-035135210/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            {/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input onChange={inputEvent} type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input onChange={inputEvent} type="email" name="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input onChange={inputEvent} type="text" name="subject" className="form-control" id="subject" placeholder="Subject" />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea onChange={inputEvent} className="form-control" name="message" placeholder="Leave a message here" id="message" style={{ "height": "100px" }}></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button onClick={ContactUs} className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
    </div>
  )
}

export default Contact