import { createGlobalStyle } from 'styled-components';
import AppleSDGothicNeoR from './assets/fonts/AppleSDGothicNeoR.ttf';

export const primaryColor = '#0D87AD';
export const secondaryColor = '#FFAF81';
export const pointColor = '#2D2D2D';
export const bgColor = '#133337';
export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
@font-face {
  font-family: "AppleSDGothicNeoR";
  src: url(${AppleSDGothicNeoR});
  font-weight: normal;
  font-style: normal;
}

*::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

*::-webkit-scrollbar-thumb {
  background: #fff;  
  border-radius: 10px;
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}   
}
@keyframes fadeOut {
  from {opacity: 1;}
  to {opacity: 0;}   
}

@-webkit-keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}   
}
@-webkit-keyframes fadeOut {
  from {opacity: 1;}
  to {opacity: 0;}   
}

.fadeIn{
  animation: fadeIn;
  animation-duration: 0.8s;
}

.fadeOut{
  animation: fadeOut;
  animation-duration: 0.8s;
}

* {
  font-family: "AppleSDGothicNeoR", 'Noto Sans KR Black' !important;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  margin: 0;
}

ul {
  list-style: none;
  padding-left: 0;
}

`;
