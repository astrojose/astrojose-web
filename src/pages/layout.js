import React from "react"
import { Helmet } from "react-helmet"
import Image from "gatsby-image"
import '../theme.css'
import {Link} from 'gatsby'

const Layout = ({ location, title, children, avatar, social, author }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  console.log(location)
  return (
    <>
		<Helmet>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<script defer src="https://use.fontawesome.com/releases/v5.7.1/js/all.js" integrity="sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
		</Helmet>
    
    <header className="header text-center">	    
	    <h1 className="blog-name pt-lg-4 mb-0"><Link to="/">astrojose</Link></h1>
        
	    <nav className="navbar navbar-expand-lg navbar-dark" >
           
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>

			<div id="navigation" className="collapse navbar-collapse flex-column" >
				<div className="profile-section pt-3 pt-lg-0">
						<Image
							className="profile-image mb-3 rounded-circle mx-auto" 
							fixed={avatar.childImageSharp.fixed}
							alt={author.name}
						/>	
				
					<div className="bio mb-3">
            {`I'm `+author.name+`, `+author.summary}<br/>
            <a href="/about">Find out more about me</a>
          </div>
					<ul className="social-list list-inline py-3 mx-auto">
			            <li className="list-inline-item"><a href={`https://twitter.com/`+social.twitter}><i className="fab fa-twitter fa-fw"></i></a></li>
			            <li className="list-inline-item"><a href={`https://instagram.com/`+social.instagram}><i className="fab fa-instagram fa-fw"></i></a></li>
			            <li className="list-inline-item"><a href={`https://github.com/`+social.github}><i className="fab fa-github-alt fa-fw"></i></a></li>
			        </ul>
			        <hr/> 
				</div>
				
				<ul className="navbar-nav flex-column text-left">
					<li className="nav-item">
					    <Link className="nav-link" activeClassName="active" to="/"><i className="fas fa-home fa-fw mr-2"></i> Home </Link>
					</li>
					<li className="nav-item">
					    <Link activeClassName='active' className="nav-link" to="/now"><i className="fas fa-cog fa-fw mr-2"></i>Now</Link>
					</li>
					<li className="nav-item">
					    <Link activeClassName='active' className="nav-link" to="/blog"><i className="fas fa-pen fa-fw mr-2"></i>Posts</Link>
					</li>
					<li className="nav-item">
					    <Link className="nav-link" activeClassName='active' to="/about"><i className="fas fa-user fa-fw mr-2"></i>About Me</Link>
					</li>	
				</ul>
				
				{/* <div className="my-2 my-md-3">
				    <a className="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank">Get in Touch</a>
				</div> */}
			</div>
		</nav>
    </header>

    <div className="main-wrapper">
      {children}
       <footer className="footer text-center py-2 theme-bg-dark">
        <small className="copyright">
          &copy;<Link to="/"> Joseph Emmanuel</Link>
        </small>
      </footer>
    </div>
    </>
  )
}

export default Layout
