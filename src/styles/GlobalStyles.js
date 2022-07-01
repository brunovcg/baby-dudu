import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
:root {
    --light-grey: #F7F5F5;
    --grey: #666666;
    --orange: #D6805B; 
    --red: #EE6564;
    --green: #6BBAA6;
    --dark-green: #7A9490;
    --purple: #B2A1DA;
    --blue: #79a2fc;
    --light-blue: #dde6ff;
    --white: #fff;
    --disabled: #d3d3d3;
       
    }
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

  
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1 {
      font-family: 'Chango', cursive;
      font-weight: 800;
    }


    .App{
        display:flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;

    }
    a {
        text-decoration: none;
    }
    button {
        cursor: pointer;
        font-family: 'Chango', cursive;
    }
    ul{
      padding: 0;
      margin: 0;
    }

    li {
     list-style-type: none;
    }
`;

export default GlobalStyle;
