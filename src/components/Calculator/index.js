import React from 'react'
import { CalH1, Container } from './CalculatorElements'
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

export const Calculator = () => {
  return (
    <>
    <Container>
      <CalH1>Calories Calculator</CalH1>
      {/* <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    />
      <FormLabel >Weight</FormLabel>
      <TextField id="outlined-basic" label="kg" variant="outlined" />
      <FormLabel >Height</FormLabel>
      <TextField id="outlined-basic" label="cm" variant="outlined" />
      <FormLabel >Age</FormLabel>
      <TextField id="outlined-basic" label="year" variant="outlined" />
      <Stack direction="row" spacing={2}>
        <Button variant="outlined">Calculate</Button>  
      </Stack>     */}
      </Container>
    </>
  )
}
 export default Calculator
