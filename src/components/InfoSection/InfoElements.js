import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 750px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    @media screen and (max-width: 768px) {
        
    }
    @media screen and (max-width: 480px) {
        height: 700px;
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        /*grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};*/
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1' 'col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    @media screen and (max-width: 768px) {
        text-align: -webkit-center;
        
    }
`

export const Column2 = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    
   @media screen and (max-width: 768px) {
        text-align: -webkit-center;
    }
    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    
    
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 22px;
    line-height: 16px;
    font-weight: 700;
    font-family: "Prompt",Sans-serif;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606' )};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 17.5px;
    line-height: 28px;
    letter-spacing: 1px;
    font-family: "Prompt",Sans-serif;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff' )};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 768px) {
        margin-left: 38%;
    }
    @media screen and (max-width: 480px) {
        margin-left: 30%;
    }
`
export const SignInBtnLink = styled(LinkR)`
    margin-top: 32px;
    display: flex;
    /*flex-direction: column;*/
    align-items: center;
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 15px 25px;
    color: #010606;
    font-size: 16px;
    align-items: center;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #14D685;
        color: #010606;
    }
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%
    
    @media screen and (max-width: 768px) {
          
    }
    @media screen and (max-width: 480px) {
        
    }
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    @media screen and (max-width: 480px) {
    
    }
`