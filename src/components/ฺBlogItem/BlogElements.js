import styled from "styled-components";

export const BlogpostContainer = styled.div`
    height: 1200px;
    display: flex;
    flex-direction: column;
    background: #f9f9f9;
    padding: 0 13rem;
    padding-top:12rem ;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`
export const Blogcard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 10rem;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0.7px 1px rgba(0,0,0,0.2);

`

export const PostTitle = styled.h1`
    font-size: 2rem;
    color: #0A0C2B;
    font-family: 'Prompt', sans-serif;
    padding-top:1rem;
    margin-left: 30px;
    line-height: 1;
    
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const PostedBy = styled.p`
    font-size: 18px;
    font-family: 'Prompt', sans-serif;
    display: block;
    color: #6c6c6c;
    margin-left: 30px;
    margin-top:30px ;
    

`
export const BsPersonCircle = styled.Icon`
    margin-right: -20px;
    

`
export const FaAlignLeft  = styled.Icon`
    margin-right: -20px;
    

`