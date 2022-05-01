import React, {useState}  from 'react'
import {Container,SearchH1,Form} from './SearchElements'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <div>
      <Container>
        <SearchH1>SEARCH</SearchH1>   
      <Form>
      <form className="c-form" >
		  <input 
        type="text"
		    placeholder="Search..."
				className="c-form_e-input"
			/>
		<button type="submit" className="c-form_e-button">
        <FaSearch/>
			</button>
		  </form>
    </Form>
    </Container>
    
    
    </div>
    

  )
} 

export default Search