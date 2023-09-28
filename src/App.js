import { useState}from 'react';
import Login from "./login";
import Forgotpass from "./forgotpass";



function App()
{
  const [form, setform]=useState('login');
  return(
    <>
    <div className="App">
       <h1>Welcome</h1>
       {form === 'login' ?<Login/>:<Forgotpass/>}
       <button onClick={() =>{
              setform(form=== 'login'?"reset":"login")
       }}>
        
        {form=== "login" ?"Forgot Password":"Back to login"}
       </button>
       

    </div>
      {/* <Blog/>  */}
     
    </>
  )
 
}

export default App;
