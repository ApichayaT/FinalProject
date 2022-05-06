import styled from "styled-components";


export const Container = styled.div`
    height: 900px;
    display: block;
    background: #f9f9f9;
    padding: 0 13rem;
    padding-top: 10rem ;
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
	
	.search-bar {
		position: absolute;
  		top: 50%;
  		left: 50%;
  		display: flex;
  		transform: translate(-50%,-50%);
  		background: #6a89cc;
  		width: 800px;
  		height: 80px;
  		padding: 0.2rem 0.6rem 0.2rem 0.2rem;  
  		box-sizing: border-box;
  		box-shadow: 1px 1px 0 0 #4a69bd,
              2px 2px 0 0 #4a69bd,
              3px 3px 0 0 #4a69bd,
              4px 4px 0 0 #4a69bd,
              5px 5px 0 0 #4a69bd,
              6px 6px 0 0 #4a69bd
		}

	.search-bar input {
  		border: 0;
  		outline: none;
  		height: 100%;
  		width: 85%;
  		padding: 0 1rem;
  		font-size: 1rem;
  		font-style: italic;
		}

	.search-bar button {
  		background: none;
  		border: none;
  		color: white;
		margin: auto;
  		font-weight: bolder;
  		font-size: 1.2rem;
  		cursor: pointer;
  		padding: 0;
  		outline: none;
		}

`