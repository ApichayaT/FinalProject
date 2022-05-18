import styled from 'styled-components';


export const Content = styled.div`
overflowY: scroll;
height: 2500px;
`;

export const Button = styled.div`
position: fixed; 
width: 100%;
/* align-items: right ; */
/* justify-items: right */
left: 87%;
bottom: 60px;
height: 20px;
font-size: 3rem;
z-index: 1;
cursor: pointer;
color: #01BF71;
@media screen and (max-width:480){
    height: 15px;
}

`
