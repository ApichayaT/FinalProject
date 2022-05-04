import styled from "styled-components";

export const BlogpostContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    background: #f9f9f9;
    padding: 0 15rem;
    padding-top:10rem ;

    @media screen and (max-width: 768px) {
        height: auto;
        padding: 0rem 8rem;
        padding-top: 10rem;
    }

    @media screen and (max-width: 480px) {
        height: auto;
        padding: 0rem 4rem;
        padding-top: 8rem;
    }
`
export const Blogcard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    padding-top: 0.7rem;
    padding-bottom: 10rem;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0.7px 1px rgba(0,0,0,0.2);

`

export const PostTitle = styled.h1`
    font-size: 30px;
    color: #0A0C2B;
    font-family: 'Prompt', sans-serif;
    padding-top:1rem;
    margin-left: 50px;
    line-height: 1;
    
    @media screen and (max-width: 768px) {
    font-size: 27px;
    line-height: 2.7rem;
    margin: 0 50px;

    }

    @media screen and (max-width: 480px) {
    font-size: 18px;
    line-height: 1.5rem;
    margin: 0 40px;
    }
`
export const PostedBy = styled.p`
    font-size: 16px;
    font-family: 'Prompt', sans-serif;
    display: block;
    color: #6c6c6c;
    margin-left: 50px;
    margin-top:30px ;  
    
    .iconperson{
        margin-right: 5px;
    }
    .iconcalendar{
        margin-right: 5px;
        margin-left: 30px;
    }
    @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 2.7rem;
    margin: 0 50px;
    .iconcalendar{
        margin-left: 20px;
    }
    }

    @media screen and (max-width: 480px) {
    font-size: 6px;
    line-height: 1rem;
    margin: 0 40px;
    .iconperson{
        display: none;
    }
    .iconcalendar{
        display: none;
        margin-left: 10px;
    }
    }

`
export const PostImage = styled.img`
    height: auto;
    width: 70%;
    margin: auto auto;
    padding-top: 2rem; 
    padding-bottom: 2rem; 
    @media screen and (max-width: 768px) {
        width: 75%;
        margin: auto auto;
        padding-top: 1.5rem; 
        padding-bottom: 1.5rem; 
    }

    @media screen and (max-width: 480px) {
    
    }

`
export const Contentheader = styled.h3`
    font-size: 26px;
    color: #0A0C2B;
    font-family: 'Prompt', sans-serif;
    padding-top:1rem;
    margin-left: 50px;
    margin-right: 50px;
    line-height: 1;
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`
export const Contentp = styled.p`
    color: #0A0C2B;
    font-family: "Prompt",Sans-serif;
    font-size: 18px;
    line-height: 1.7em;
    font-weight: 300;
    letter-spacing: .3px;
    padding-top:1rem;
    margin-left: 50px;
    margin-right: 50px;
    .bulltesH{
        font-family: "Prompt",Sans-serif;
        margin-left: 60px;
        padding-top:1rem;
    }
    .bulltesp{
        font-family: "Prompt",Sans-serif;
    }
    @media screen and (max-width: 768px) {
    font-size: 16px;
    .bulltesH{
        margin-left: 25px;
        padding-top:1rem;
    }

    }

    @media screen and (max-width: 480px) {
    font-size: 18px;
    line-height: 1.5rem;
    
    }
`

export const ContentConclusion = styled.h4`
    color: #0A0C2B;
    font-family: "Prompt",Sans-serif;
    font-size: 20px;
    line-height: 1.7em;
    font-weight: 400;
    letter-spacing: .3px;
    margin-left: 50px;
    margin-right: 50px;
    padding: 30px 22px;
    border-left: 5px solid #e61d2f;
    @media screen and (max-width: 768px) {
        font-size: 16.7px;
        letter-spacing: 2.2px;
        font-weight: 400;
    }
`