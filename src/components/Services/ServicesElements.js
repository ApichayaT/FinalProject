import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'


export const ServicesContainer = styled.div`
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 0 45px;
    margin-bottom: 40px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 400px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: scale(1.02);
        transition: all 0.2s easr-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 180px;
    width: 180px;
    margin-top: 2px;
    margin-bottom: 10px;
    border-radius: 5px;

`

export const ServicesH1 = styled.h1`
    font-size: 3rem;
    color: #fff;
    margin-bottom: 64px;
    margin-top: 50px;
    font-family: 'Prompt', sans-serif;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    font-family: 'Prompt', sans-serif;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 0.9rem;
    font-family: 'Prompt', sans-serif;
    
`

export const BlogBtn = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
    
`


export const BlogBtnLink = styled(LinkR)`
    align-items: center;
    text-align: center;
    color: #fff;
    margin-top: 10px;
    border-radius: 30px;
    padding: 10px 22px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-shadow: 0 1px 0px rgb(114 114 114 / 30%);
    background-color: #da4259;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #14D685;
        color: #010606;
    }
`