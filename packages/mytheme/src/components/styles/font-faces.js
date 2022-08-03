import { Global, css, connect } from "frontity";
import Graphik_Regular from '../../assets/fonts/Graphik-Regular.woff2'; 
import Graphik_Medium from '../../assets/fonts/Graphik-Medium.woff2'; 
import Graphik_Semibold from '../../assets/fonts/Graphik-Semibold.woff2'; 
import BebasNeueBold from '../../assets/fonts/BebasNeueBold.woff2'; 
import Graphik_Bold from '../../assets/fonts/Graphik-Bold.woff2';
import Icomoon from '../../assets/fonts/icomoon.woff';




const fonts = {
    all: [Graphik_Regular, Graphik_Medium, Graphik_Semibold,BebasNeueBold,Graphik_Bold,Icomoon],
  };
  
  const FontFace = ({ state }) => {
    const font = fonts[state.theme.fontSets] || fonts["all"];
  
    return (
      <Global
        styles={css`
          @font-face {
            font-family: "Graphik-Regular";
            font-style: normal;
            font-weight: normal;
            font-display: "swap";
            src: url(${font[0]}) format("woff2");
          }
          @font-face {
            font-family: "Graphik-Medium";
            font-style: normal;
            font-weight: 500;
            font-display: "swap";
            src: url(${font[1]}) format("woff2");
          }
          @font-face {
            font-family: "Graphik-Semibold";
            font-style: normal;
            font-weight: 600;
            font-display: "swap";
            src: url(${font[2]}) format("woff2");
          }
          @font-face {
            font-family: "BebasNeueBold";
            font-style: normal;
            font-weight: bold;
            font-display: "swap";
            src: url(${font[3]}) format("woff2");
          }
          @font-face {
            font-family: "Graphik-Bold";
            font-style: normal;
            font-weight: bold;
            font-display: "swap";
            src: url(${font[4]}) format("woff2");
          }
          @font-face {
            font-family: "icomoon";
            font-style: normal;
            font-weight: normal;
            font-display: "swap";
            src: url(${font[5]}) format("woff2");
          }
        `}
      />
    );
  };
  
  export default connect(FontFace);