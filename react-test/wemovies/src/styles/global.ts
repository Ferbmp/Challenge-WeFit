import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
    :root{
            --background:#2F2E41;
            --white: #FFF;
            --grey:  #999999;
            --blue-light: #009EDD;
            --green: #039B00; 
    
            
            --text: #2F2E41;
            --text-dark:#333333;



        }
    * {
        margin: 0px;
        padding: 0px; 
        box-sizing: border-box
    }
    html{
        
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }
    body, input, textarea, button{
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        font-size: 16px
    }
  

    body{ 
        background: var(--background); 
        -webkit-font-smoothing:antialiased;
    }
    button, a{ 
        text-decoration: none;
        cursor: pointer;
    }

    div.contentContainer{
        width: 100%;
        height: 100%;
        padding-bottom:  72px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }

`;
