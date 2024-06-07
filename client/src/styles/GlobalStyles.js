import { createGlobalStyle } from "styled-components";
import '@fontsource-variable/montserrat'
import '@fontsource/play'
import '@fontsource-variable/caveat';



const GlobalStyles = createGlobalStyle `

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
   font-family:'montserrat',sans-serif;
    overflow-x:hidden;
    color:#24292F;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

a{
  color:#24292F; 
  text-decoration:none;
}

`

export default GlobalStyles;