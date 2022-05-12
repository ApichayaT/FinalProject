import styled from "styled-components";


export const Container = styled.div`
    height: 1100px;
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
	height: 1100px;
	z-index:0 ;
    padding-top: 0.7rem;
    padding-bottom: 10rem;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0.7px 1px rgba(0,0,0,0.2);
	@media screen and (max-width: 768px) {
        height: 900px;
    }

    @media screen and (max-width: 480px) {
        height: 500px;
    }
`

export const SearchH1 = styled.h1`
    font-size: 3.5rem;
    color: #01bf71;
	padding-top:2rem ;
	text-align:center;
	display: block;
    
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const Form = styled.form`

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
		font-family: 'Prompt', sans-serif;
  		padding: 0 1rem;
  		font-size: 1.5rem;
  		font-style: italic;
		}

	.search-bar button {
  		background: none;
  		border: none;
  		color: white;
		margin: auto;
  		font-weight: bolder;
  		font-size: 1.5rem;
  		cursor: pointer;
  		padding: 0;
  		outline: none;
		}
		@media screen and (max-width: 768px) {
			.search-bar{
		width: 430px;
  		height: 60px;
		top: 35%;
		}
    	}
		@media screen and (max-width: 480px) {
		.search-bar{
		width: 230px;
  		height: 45px;
		top: 30%;
		left:50%;
		righ:50%;
		}
		.search-bar input{
			font-size:16px ;
		}
		.search-bar button{
			font-size: 1rem;
			text-align:center;
		}
		}
`