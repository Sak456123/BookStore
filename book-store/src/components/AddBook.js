import React, { useState } from "react";
import { Box, FormLabel, TextField, FormControlLabel, Checkbox , Typography} from "@mui/material";  // ✅ Import FormControlLabel & Checkbox
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const AddBook = () => {
  const history = useNavigate();
  const [inputs,setInputs] = useState({
    name:'',
    description:'',
    price:'',
    author:'',
    available:'false',
    image:''
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const sendRequest = async()=>{
    await axios.post("http://localhost:5000/books", {
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)
    }).then(res=>res.data);
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(()=>history('/books'))
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" 
      flexDirection="column" 
      justifyContent={'center'} 
      maxWidth={700}
      alignContent={"center"}
      alignSelf="center"
      marginLeft={"auto"}
      marginRight="auto"
      marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" />
        <FormLabel>Author</FormLabel>
        <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author" />
        <FormLabel>Description</FormLabel>
        <TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description" />
        <FormLabel>Price</FormLabel>
        <TextField value={inputs.price} onChange={handleChange}
        type="number" 
        margin="normal" 
        fullWidth 
        variant="outlined" 
        name="price" 
        />
        <FormLabel>Image</FormLabel>
        <TextField 
        value={inputs.image} onChange={handleChange} 
        margin="normal" 
        fullWidth 
        variant="outlined" 
        name="image" 
        />
         <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />
        <button variant="contained" type="submit">Add Book</button>
      </Box>
    </form>
  );
};

export default AddBook;
