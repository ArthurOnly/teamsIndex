  
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        padding: 0px;
        min-height: 100vh;

        min-width: 100vw;
        max-width: 100%;
        
        font-family: "Segoe UI";
        color: rgb(15,15,15);
        overflow-x: hidden;
    }

    *{
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle