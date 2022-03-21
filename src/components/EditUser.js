import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {getSingleUser, updateUser } from '../redux/actions/employeeAction';
const EditUser = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const{id}=useParams();
    const [state,setState]=useState({
        name:"",
        email:"",
        city:"",
        contact:""
    });
    const {user}=useSelector(state=>state.data)
    useEffect(()=>{
        dispatch(getSingleUser(id))
    },[])
    useEffect(()=>{
        if(user){
            setState({...user})
        }
    },[user])
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
            dispatch(updateUser(state,id));
            navigate('/');
            setError("");
        }
    }

  return (
    <>
        <h2 >Edit User</h2>
        <form
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            
        >
            <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={name||""} type="text"  onChange={handleChange}/>
            <br/><br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={email ||""} type="email"  onChange={handleChange}/>
            <br/><br/>
            <TextField id="outlined-basic" label="City" variant="outlined" name="city" value={city ||""} type="text"  onChange={handleChange}/>
            <br/><br/>
            <TextField id="outlined-basic" label="Contact" variant="outlined" name="contact" value={contact ||""} type="number"  onChange={handleChange}/>
            <br/><br/>
            <Button variant="contained" onClick={()=>navigate('/')} sx={{marginTop:"15px",marginLeft:"30px"}}>Back</Button>
            <Button variant="contained" type="submit" sx={{marginTop:"15px",marginLeft:"20px"}} >Update</Button>
        </form>
        {
            error&&<h2>{error}</h2>
        }
        
    </>
  )
}

export default EditUser