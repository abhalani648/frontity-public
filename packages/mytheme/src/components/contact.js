import contactCss from  '../assets/css/contact-us.css';

import React from "react"
import ReactDOM from 'react-dom';
import {useEffect} from "react";
import { connect, Global, css,styled, Head  } from "frontity"


const BootstrapStyles = () => (
    <Global styles={css(contactCss)} />
);

const ContactPage = ({state, libraries}) => {

    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component

    useEffect(() => {
        document.body.classList.add('home-header');
     }, []);

     
    const bannerImage = {
        backgroundImage: "url(https://techarkatladev.wpengine.com/wp-content/uploads/2022/07/community-bg.png)"
    };

    return (
        <div>
            <Head>
                <title>{page.title.rendered}</title>
                <meta name="description" content={page.excerpt.rendered} />
            </Head>
            <BootstrapStyles />
            <section className="inner-banner-section" style={bannerImage}>
               <div className="container">
                  <div className="row no-gutter align-items-center">
                     <div className="col-lg-12 col-md-12">
                        <div className="text-center wow fadeInLeft">
                           <h1 className="h1">{page.title.rendered}</h1>                              
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="contact-form-section">
               <div className="container">
                  <div className="row">                     
                    <Html2React html={page.content.rendered} />
                  </div>
               </div>
            </section>
        </div>
       
    )

}

export default connect(ContactPage);