import styled from "styled-components";

export const BlogContainer = styled.div`
    height: 1200px;
    display: flex;
    flex-direction: column;
    background: #f9f9f9;
    padding: 0 15rem;
    padding-top:12rem ;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const BlogH1 = styled.h1`
    font-size: 2.2rem;
    color: #0A0C2B;

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