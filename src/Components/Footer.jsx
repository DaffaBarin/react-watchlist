import React from 'react';
// import styles from './Footer.module.css'
import facebook from '../Assets/Images/facebook.svg'
import github from '../Assets/Images/github.svg'
import linkedIn from '../Assets/Images/linkedIn.svg'

function Footer() {
    return (
            <footer className="text-center text-white" style={{backgroundColor: '#2D107C',position:"absolute",bottom:"0",width:"100%"}}>
            <div>
                <a href="https://github.com/DaffaBarin/" target="_blank"><img src={facebook} className ="m-3" ></img></a>
                <a href="https://github.com/DaffaBarin/" target="_blank"><img src={github} className ="m-3"></img></a>
                <a href="https://linkedin.com/in/daffabarin" target="_blank"><img src={linkedIn} className ="m-3"></img></a>
                
            </div>
            <div>
                <span className="m-3">About Us</span>
                <span className="m-3">Privacy Policy</span>
                <span className="m-3">Support</span>
            </div>
            <div className="text-center text-white p-3">
            ©DapdapWatchlist
            </div>
        </footer>
    )
}

export default Footer
