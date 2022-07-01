import styled from "styled-components"

const Styled = styled.main`
background: var(--white);
width: 300px;
height: 400px;
border: 1px solid var(--grey);
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;

figure {
  border: 1px solid var(--grey);
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 40px;
  

  img{
    max-height: 150px;
    padding: 20px;
  }
}



`

export default Styled