import About from '../Components/About'
import Contact from '../Components/Contact'
import Experience from '../Components/Experience'
import Header from '../Components/Header'
import Map from '../Components/Map'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Service from '../Components/Service'
import Team from '../Components/Team'
import Testemonial from '../Components/Testemonial'
import Video_Modal from '../Components/Video_Modal'
import React,{ useEffect, useState } from 'react'
import axios from "axios";

const Home = () => {
        let [state, updateState] = useState([]);
        let fetchUser = async () => {
            let val = await axios.get('/upload');
            updateState(val.data);
        }
        useEffect(() => {
            // fetchUser();
        }, [])
    
        
    return (
        <div>
            {/* <!-- Navbar End --> */}
            <Navbar/>
            {/* <!-- Header Start --> */}
            <Header/>
            {/* <!-- Video Modal Start --> */}
            <Video_Modal/>
            {/* <!-- About Start --> */}
            <About/>
            {/* <!-- Expertise Start --> */}
            <Experience/>
            {/* <!-- Service Start --> */}
            <Service/>
            {/* <!-- Projects Start --> */}
            <Projects/>
            {/* <!-- Team Start --> */}
            {/* <Team/> */}
            {/* <!-- Testimonial Start --> */}
            {/* <Testemonial/> */}
            {/* <!-- Contact Start --> */}
            <Contact/>
            {/* <!-- Map Start --> */}
            {/* <Map/>      */}
            {/* <!-- Back to Top --> */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>

        </div>
    )
}

export default Home