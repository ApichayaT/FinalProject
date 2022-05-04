import styled from "styled-components";


export const Container = styled.div`
    height: 900px;
    display: block;
    background: #f9f9f9;
    padding: 0 13rem;
    padding-top: 10rem ;

`
export const Card = styled.div`
    background: #fff;
    display: block;
	height: 900px;
	z-index:0 ;
    padding-top: 0.7rem;
    padding-bottom: 10rem;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0.7px 1px rgba(0,0,0,0.2);
`

export const SearchH1 = styled.h1`
    font-size: 3rem;
    color: #01bf71;
	padding-top:2rem ;
	text-align:center;
	display: block;
    
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const Form = styled.form`

font-family: sans-serif;
	width: 700px;
	align-items: center;
    .c-form {
		width: 100%;
		position: relative;
		&_e-input {
			border: none;
			border-radius: 10px;
			width: 100%;
			height: 80px;
			padding: 0 15rem;
			padding-left:2rem ;
			font-family:sans-serif;
			font-size: 18px;
			font-weight: bold;
			box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
		}
		&_e-button {
			position: absolute;
			top: 0;
			right: 0;
			height: 80px;
			width:10%; 
			border: none;
			border-radius: 0 5px 5px 0;
			background-color: #40b7ec;
			font-size: 20px;
			cursor: pointer;
			&:hover {
				background-color: darken(#40b7ec, 10%);
			}
		}
	}

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`