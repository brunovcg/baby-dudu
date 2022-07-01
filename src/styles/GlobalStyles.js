import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;800&family=Work+Sans:ital,wght@0,400;0,800;1,400;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');
:root {
    --light-grey: #F7F5F5;
    --grey: #666666;
    --orange: #D6805B; 
    --red: #EE6564;
    --green: #6BBAA6;
    --dark-green: #7A9490;
    --purple: #B2A1DA;
    --blue: #aac3ef;
    --white: #fff;
       
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
      font-family: 'Noto Sans', sans-serif;
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
