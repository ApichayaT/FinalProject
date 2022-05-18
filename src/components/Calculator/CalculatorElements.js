import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    height: 1100px;
    display: block;
    padding: 0 13rem;
	@media screen and (max-width: 768px) {
        height: auto;
        width: 100%;
        padding: 0rem 8rem;
        padding-top: 10rem;
    }

    @media screen and (max-width: 480px) {
        height: auto;
        padding: 0rem 4rem;
        padding-top: 8rem;
    }
`


/*
export const CalH1 = styled.h1`
    color: #000;
    font-size: 48px;
    
    text-align: center;
    margin: 120px 0;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        180deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    )
      /* background: #fff; */
// `

// export const FormLabel = styled.label`
//     margin-bottom: 8px;
//     font-size: 14px;
//     color: #fff;

// `

