import styled from "styled-components"

const Styled = styled.article`
background: var(--white);
width: 290px;
height: 400px;

border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 10px 12px 21px 5px rgba(0,0,0,0.52);

figure {
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 10px;
  height: 150px;
  

  img{
    max-height: 150px;
    padding: 15px;
  }
}

.info-box{
 height: 250px;
 display: flex;
 flex-direction: column;
 justify-content: center;

 div, a{
  height: 20%;
  display: flex;
  justify-content: center;
 }

 .prod-name{
font-family: 'Chango', cursive;
font-size: 20px;
color: var(--green);
 }

 .prod-price{
  color: var(--grey);
 }

 a{
  color: var(--purple);
  font-weight: bold;

 }
}



`

export default Styled