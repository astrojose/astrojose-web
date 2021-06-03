import React from 'react'

const SocialLink = (props)=>{
    return (
        <a href={props.to} className="footer-link" target="_blank">{props.name}</a>
    )
}

export default SocialLink