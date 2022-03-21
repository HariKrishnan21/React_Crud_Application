import axios from 'axios'
import * as types from '../constant/actionTypes'


const getUsers=(users)=>({
    type:types.GET_USERS,
    payload:users
})
const getUser=(user)=>({
    type:types.GET_SINGLE_USER,
    payload:user
})
const deletedUser=()=>({
    type:types.DELETE_USERS
})
const userUpdated=()=>({
    type:types.DELETE_USERS
})
const addedUser=()=>({
    type:types.ADD_USERS
})
export const loadUsers=()=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then((res)=>{
            console.log(res);
            dispatch(getUsers(res.data))
        }).catch(err=>console.log(err));

    
    }
}

export const deleteUsers=(id)=>{
    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((res)=>{
            console.log(res);
            dispatch(deletedUser())
            dispatch(loadUsers())
        }).catch(err=>console.log(err));

    
    }
}

export const getSingleUser=(id)=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((res)=>{
            console.log(res);
            dispatch(getUser(res.data))
        }).catch(err=>console.log(err));

    
    }
}
export const updateUser=(user,id)=>{
    return function(dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,user).then((res)=>{
            console.log(res);
            dispatch(userUpdated())
        }).catch(err=>console.log(err));

    
    }
}
export const addUsers=(user)=>{
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}`,user).then((res)=>{
            console.log(res);
            dispatch(addedUser())
            //dispatch(loadUsers())
        }).catch(err=>console.log(err));

    
    }
}