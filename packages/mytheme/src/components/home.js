import homeCss from  '../assets/css/home.css';

import React from "react"
import {useEffect} from "react";
import { connect, Global, css,styled, Head  } from "frontity"
import Slider from "react-slick";
import Link from "@frontity/components/link"

const BootstrapStyles = () => (
   <Global styles={css(homeCss)} />
);

const HomePage = ({state, libraries}) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    //const page = state.source['page'][29];
    
    //console.log(page);

   useEffect(() => {
      document.body.classList.add('home-header');
   }, []);
   
    const slider_details = page.acf.slider_details
    
    const Html2React = libraries.html2react.Component


    const bannerImg = {
      backgroundImage: "url(" + page.acf.slider_details.background_image.url + ")"
    };

    const teambannerImg = {
      backgroundImage: "url(" + page.acf.team_section.background_image.url + ")"
    };

    const prcbannerImg = {
      backgroundImage: "url(" + page.acf.practices_section.background_image.url + ")"
    };

    const conbannerImg = {
      backgroundImage: "url(" + page.acf.contact_section.background_image.url + ")"
    };

    const arrowImage = {
      backgroundImage: "url(https://techarkatladev.wpengine.com/wp-content/uploads/2022/07/arrow-icon-white.svg)"
    };

    const arrowImage2 = {
      backgroundImage: "url(" + page.acf.contact_section.arrow_icon.url + ")"
    };
   

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    
    
    return (
        <div>
            <Head>
                <title>{page.title.rendered}</title>
                <meta name="description" content={page.excerpt.rendered} />
            </Head>
            <BootstrapStyles />
            <link
         rel="stylesheet"
         type="text/css"
         charset="UTF-8"
         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
         />
         <link
         rel="stylesheet"
         type="text/css"
         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
         />
            <section className="contain-home">
               <div className="bg-video-wrap" style={ bannerImg }>               
               </div>                   
               <div className="contain-home-inner">
                  <div className="container-fluid">
                     <div className="row no-gutter align-items-center">
                        <div className="col-lg-12 col-md-12">
                           <div className="banner-left wow fadeInLeft">
                              <h1 className="h1"><Html2React html={page.acf.slider_details.heading} /></h1>
                              <p><Html2React html={page.acf.slider_details.description} /></p>
                              <a className="p-btn" href={page.acf.slider_details.button.url}>
                                 {page.acf.slider_details.button.title}
                                 <span className="arrow" style={arrowImage}></span>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="contain-about">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-lg-12 col-md-12">
                        <div className="contain-about-box">
                           <Html2React html={page.acf.goal_section.description} />
                           <h2 className="s-title wow fadeInDown"><Html2React html={page.acf.goal_section.heading} /></h2>
                           <img className="about-info-img" src={page.acf.goal_section.tree_logo.url} alt="images" title="images" />  
                           <img className="about-tree-img" src={page.acf.goal_section.circle_image.url}   alt="images" title="images" />  
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="contain-lets-up">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6 col-sm-12">
                        <img src={page.acf.about_section.left_image.url}  alt="images" title="images" />
                     </div>
                     <div className="col-lg-6 col-sm-12">
                        <div className="lets-up-content">
                           <h3 className="page-title"><Html2React html={page.acf.about_section.heading} /></h3>
                           <Html2React html={page.acf.about_section.description} />
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="contain-as-team" style={teambannerImg}>
               <div className="container">
                  <div className="row">
                     <div className="col-lg-3 col-sm-12">
                        <h3 className="page-title-white"><Html2React html={page.acf.team_section.heading} /></h3>
                     </div>
                     <div className="col-lg-9 col-md-12">
                        <div className="contain-team-box">
                           <Html2React html={page.acf.team_section.description} />
                           <a className="p-btn" href={page.acf.team_section.link.url}>{page.acf.team_section.link.title} <span className="arrow" style={arrowImage2}></span></a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="contain-area-Practice" style={prcbannerImg}>
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12 col-sm-12 text-center">
                        <h4 className="page-title"><Html2React html={page.acf.practices_section.heading} /></h4>
                     </div>
                  </div>
                  <div className="row practice-are-box">

                  {page.acf.practices_section.areas.map((item, index) => {
                     
                     return (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                           <div className="practice-icon">
                              <img className="practice-image-bg" src={item.background_image.url} />
                              <div className="ap-box">
                                 <div className="p-img">
                                    <img src={item.icon.url} alt="icons" title="icons" />
                                 </div>
                                 <h5>{item.heading}</h5>
                              </div>
                           </div>                       
                        </div>
                     )
                  })}

                     
                                         
                     <div className="col-lg-12 col-md-6 col-sm-12 learn-more-box">
                        <a className="p-btn" href={page.acf.practices_section.link.url}>{page.acf.practices_section.link.title}  <span className="arrow" style={arrowImage2}></span> </a>                   
                     </div>
                  </div>
               </div>
            </section>
            <section className="contain-client">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-lg-12 col-sm-12 text-center">
                        <div className="loop owl-carousel owl-theme">
                        <Slider {...settings}>
                        {page.acf.client_logos_section.map((item, index) => {
                        return (
                           <div key={index}>
                              <img className="app-imgs" src={item.url} alt="image" title="OrderSent" width={150} height={200} />
                           </div>
                           )
                        })}
                        </Slider>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="contain-contact-us" style={conbannerImg}>
                <div className="container">
                   <div className="row">
                      <div className="col-lg-12 col-sm-12">
                          <div className="contact-detail">
                          <Html2React html={page.acf.contact_section.short_description} />
                           <a className="page-title" href="#"><Html2React html={page.acf.contact_section.heading} /><img className="arrow-img" src={page.acf.contact_section.arrow_icon.url} /></a>
                          </div>
                      </div>
                    </div>
                </div>
            </section>  
        </div>
    )
}

export default connect(HomePage);