import bootstrapCss from  'bootstrap/dist/css/bootstrap.min.css';
import mainCss from  '../assets/css/global.css';


import React from "react"
import {useEffect} from "react";
import ReactDOM from 'react-dom';
import { connect, Global, css,styled, Head  } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"

import $ from 'jquery'


import List from "./list"
import Post from "./post"
import Page from "./page"
import HomePage from "./home"
import ContactPage from "./contact"
import Loading from "./loading"
import Error from "./error"
import FontFace from "./styles/font-faces"
import Script from "@frontity/components/script"

const BootstrapStyles = () => (
  <Global styles={css(bootstrapCss,mainCss)} />
);

const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link)
    const options = state.source.get("acf-settings");
    //const data = state.source.get('/home/')
    //console.log(data); 
    //console.log(options); 
   // console.log($);
    useEffect(() => {
      //document.body.classList.add('home-header');

      $(".navbar-toggler").click(function(){
         $("body").addClass("open-menu");
      });
      $(".close-icon").click(function(){
         $("body").removeClass("open-menu");
      });    

      $(window).scroll(function() {    
         var scroll = $(window).scrollTop();
       
         if (scroll >= 150) {
           $("header").addClass("sticky-header");
         } else {
           $("header").removeClass("sticky-header");
         }
       });

     }, []);
   

    return (
      <>
        <FontFace />
        <BootstrapStyles />
        <Header>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-xl-5 col-lg-4 col-md-4 col-sm-8 col-9">
                  <Link className="nav-link" link="/">
                     <img src={options.acf.header_logo.url} alt="My File" loading="lazy" className="logo"  />
                     </Link>
                     <Link className="nav-link" link="/">
                        <img src={options.acf.header_logo.url} alt="image" title="OrderSent" className="logo logo-sticky" />
                        </Link>
                  </div>
                  <div className="col-xl-7 col-lg-8 col-md-8 col-sm-4 col-3">                    
                     <nav className="navbar navbar-expand-lg navbar-dark navigation-menu">
                        <a className="menu-tel-link" href="tel:7573204133">757.320.4133</a>
                        <button className="navbar-toggler" type="button" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <div className="close-icon-box">                              
                                <a href="#" className="close-icon" aria-label="Close"></a>
                             </div>
                           <div className="right-main-menu">                            
                             <ul className="navbar-nav">
                                <li className="nav-item">
                                   <Link className="nav-link" link="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                   <Link className="nav-link contact-btn" link="/contact/">Contact Us</Link>
                                </li>
                             </ul>
                           </div>
                           <div className="header-footer">
                            <a className="tel-link" href="tel:7573204133">757.320.4133</a>
                            <ul className="footer-link">
                            {options.acf.socials_links.map((item, index) => {
                              return (
                                 <li  key={index}><a href={item.link}><span className={item.class}></span></a></li>
                                 )
                              })}
                             </ul>
                        </div>
                        </div>
                        
                     </nav>
                  </div>
               </div>
            </div>
         </Header>
        <Main>
          <Switch>
            <Loading when={data.isFetching} />
            <HomePage when={data.isHome} />
            <ContactPage when={data.route === '/contact/'} />
            <List when={data.isArchive} />
            <Post when={data.isPost} />
            <Page when={data.isPage} />
            <Error when={data.isError} />
          </Switch>
        </Main>
        <footer>
         <div className="footer-bottom">
                  <div className="container-fluid">
                     <div className="row">                                       
                        <div className="col-lg-4 col-md-12 col-sm-12">
                           <ul className="footer-link">
                              {options.acf.socials_links.map((item, index) => {
                              return (
                                 <li  key={index}><a href={item.link}><span className={item.class}></span></a></li>
                                 )
                              })}
                           </ul>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                           <p className="copyright-text">© 2022 {options.acf.copyright_text}</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 designby"> 
                           <span>Design By:</span>
                           <a href="https://gotechark.com/" target="_blank" rel="noopener noreferrer" title="Develop Title"> 
                              <img src={options.acf.techark_logo.url} alt="Teckark" title="Teckark Solutions" />
                           </a> 
                        </div>  
                     </div>
                  </div>
               </div>
        </footer>
      </>
    );
  };

export default connect(Root);

const Header = styled.header`

`

const HeaderContent = styled.div`
  
`
const Main = styled.main`
 
`


const Menu = styled.nav`
  
`


const Button = styled.button`
  
`