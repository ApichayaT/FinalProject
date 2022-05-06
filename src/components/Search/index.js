import React, {useState}  from 'react'
import {Container,Card,SearchH1,Form } from './SearchElements'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  
  return (
    <div>
      <Container>
      <Card>
      <SearchH1>SEARCH</SearchH1>
        <Form>
        <div class="search-bar">
	        <input type="text" placeholder="search..." />
	        <button>go!</button>
          </div>
        </Form>
      </Card>
            
    </Container>
    
    
    </div>
    

  )
} 

export default Search