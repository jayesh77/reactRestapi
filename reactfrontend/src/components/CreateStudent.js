import { useEffect, useReducer } from 'react';
import styles from  './CreateStudent.module.css'
const studentReducer=(state,action)=>{
    if( action.type==='NameChange') return {stuname: action.studentName , email:state.email}
    if(action.type==='EmailChange') return {stuname: state.stuname, email: action.studentEmail}
    if (action.type==="NameEmailChange") return {stuname:action.name, email:action.email}
    return {stuname:'' , email:''}
}
const CreateStudent=(props)=>{
const [studentState,dispatchSudent]=useReducer(studentReducer,{stuname:'' , email:''})
    useEffect(()=>{    if(props.studentId!==-1){
        async function getstudent(){
          try{
          const data=await fetch("http://127.0.0.1:8000/api/student/"+props.studentId)
          const details=await data.json()
          console.log(details)
          dispatchSudent({type:"NameEmailChange",name:details.stuname,email:details.email})
      }
          catch(error){console.log(error)}
          }
          getstudent()
  
      }},[props])


return(
<form className={styles.card_createstudent} onSubmit={(event)=>{event.preventDefault();props.onPost(studentState); }}>
    <label htmlFor="stduentname">Name</label>
    <input type="text" id="stduentname" placeholder='Ex. Jayesh' name="stuname"  value={studentState.stuname} onChange={(e)=>{dispatchSudent({type:'NameChange', studentName:e.target.value})}} required />
    <label htmlFor="email">Email</label>  
    <input type="text" id="email" name="email" value={studentState.email} onChange={(e)=>dispatchSudent({type:'EmailChange',studentEmail:e.target.value})} placeholder= "Ex. xxx@gmail.com" size="15" required /> 
    <button type='submit' className='btn btn-success App'>Submit</button>
</form>)
}
export default CreateStudent