import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUsers } from '../redux/actions/employeeAction';
const AddUser = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [state,setState]=useState({
        name:"",
        email:"",
        city:"",
        contact:""
    });
    const [error,setError]=useState("");
    const {name,email,city,contact}=state;
    const handleChange=(e)=>{
        const {name,value}=e.target;
        console.log(value);
        setState({...state,[name]:value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !email||!city|| !contact){
            setError("Please fill all the inputs")
        }
        else{
            dispatch(addUsers(state));
            navigate('/');
            setError("");
        }
    }

  return (
    <>
        <h2 >Add User</h2>
        <form
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            
        >
            <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={name} type="text"  onChange={handleChange}/>
            <br/><br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={email} type="email"  onChange={handleChange}/>
            <br/><br/>
            <TextField id="outlined-basic" label="City" variant="outlined" name="city" value={city} type="text"  onChange={handleChange}/>
            <br/><br/>
            <TextField id="outlined-basic" label="Contact" variant="outlined" name="contact" value={contact} type="number"  onChange={handleChange}/>
            <br/><br/>
            <Button variant="contained" onClick={()=>navigate('/')} sx={{marginTop:"15px",marginLeft:"30px"}}>Back</Button>
            <Button variant="contained" type="submit" sx={{marginTop:"15px",marginLeft:"20px"}} >Submit</Button>
        </form>
        {
            error&&<h2>{error}</h2>
        }
        
    </>
  )
}

export default AddUser