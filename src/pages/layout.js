import React from "react"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import '../theme.css'


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <>
		<Helmet>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<script defer src="https://use.fontawesome.com/releases/v5.7.1/js/all.js" integrity="sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7" crossorigin="anonymous"></script>
		</Helmet>
    <SEO 
        title="Joseph Emmanuel"   
      />
    <header className="header text-center">	    
	    <h1 className="blog-name pt-lg-4 mb-0"><a href="index.html">Anthony's Blog</a></h1>
        
	    <nav classNameName="navbar navbar-expand-lg navbar-dark" >
           
			<button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
			<span classNameName="navbar-toggler-icon"></span>
			</button>

			<div id="navigation" classNameName="collapse navbar-collapse flex-column" >
				<div className="profile-section pt-3 pt-lg-0">
				    <img 
              className="profile-image mb-3 rounded-circle mx-auto" 
              src="assets/images/profile.png" alt="image" />			
					
					<div className="bio mb-3">
            Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.<br/>
            <a href="about.html">Find out more about me</a>
          </div>
					<ul className="social-list list-inline py-3 mx-auto">
			            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw"></i></a></li>
			            <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in fa-fw"></i></a></li>
			            <li className="list-inline-item"><a href="#"><i className="fab fa-github-alt fa-fw"></i></a></li>
			            <li className="list-inline-item"><a href="#"><i className="fab fa-codepen fa-fw"></i></a></li>
			        </ul>
			        <hr/> 
				</div>
				
				<ul className="navbar-nav flex-column text-left">
					<li className="nav-item active">
					    <a className="nav-link" href="index.html"><i className="fas fa-home fa-fw mr-2"></i>Blog Home <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
					    <a className="nav-link" href="blog-post.html"><i className="fas fa-bookmark fa-fw mr-2"></i>Blog Post</a>
					</li>
					<li className="nav-item">
					    <a className="nav-link" href="about.html"><i className="fas fa-user fa-fw mr-2"></i>About Me</a>
					</li>	
					<li className="nav-item">
					    <a className="nav-link" href="about.html"><i className="fas fa-cog fa-fw mr-2"></i>Now</a>
					</li>
				</ul>
				
				<div className="my-2 my-md-3">
				    <a className="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank">Get in Touch</a>
				</div>
			</div>
		</nav>
    </header>

    <div classNameName="main-wrapper">
      {children}
      <footer className="footer text-center py-2 theme-bg-dark">
        <small className="copyright">
          Designed with <i className="fas fa-heart"></i> by 
          <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers
          </small>
      </footer>
    </div>
		<script src='../../static/assets/plugins/bootstrap/js/botstrap.min.js'></script>
		<script src='../../static/assets/plugins/jquery-3.3.1.min.js'></script>
		<script src='../../static/assets/plugins/popper.min.js'></script>
    </>
  )
}

export default Layout
