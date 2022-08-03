import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

export class Owldemo1 extends Component {  
        render()  
        {  
          return (  
            <div>  
          <div class='container-fluid' >      
           <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="col-sm-12 btn btn-info">      
           Owl Carousel In React Application   
           </div>      
           </div>  
       </div>  
       <div class='container-fluid' >            
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div ><img  className="img" src= {'images/icons/CoVABOB Awards.png'}/></div>  
           <div><img  className="img" src= {'images/icons/COVATOPLAWYERSLOGO.png'}/></div>  
           <div><img  className="img" src= {'images/icons/LEAD_transparent attempt.png'}/></div>  
           <div><img  className="img" src= {'images/icons/Legal-Elite.png'}/></div>  
           <div><img className="img" src= {'images/icons/LegalElite_GoldRed.png'}/></div>  
           <div><img className="img" src= {'images/icons/super-lawyers-rising-stars.png'}/></div>  
           <div><img className="img" src= {'images/icons/CoVABOB Awards.png'}/></div>  
      </OwlCarousel>  
      </div>  
  
      </div>  
          )  
        }  
      }  
        
  
export default Owldemo1  