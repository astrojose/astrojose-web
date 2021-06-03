import React from 'react'
import SocialLink from './social-link'

const Footer = () => {
    return(
        <>
            <div className="social-links">
                <SocialLink name="instagram" to="https://instagram.com/astrojose_" />
                <SocialLink name="twitter" to="https://twitter.com/astrojose_" />
                <SocialLink name="newsletter" to="https://astrojose.substack.com/subscribe" />
            </div>
            <div className="copyright">
                © {new Date().getFullYear()}, <a href="/" >astrojose</a> 
            </div>
        </>
    )   
}
 
export default Footer