
import useLocalstorage from "./useLocalstorage";
export default function Forgotpass(){
 
   const {email,setEmail}=useLocalstorage();
   return(
       <>
            <h1>Reset Your Password</h1>
           <input placeholder="Enter your mail"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
               />
               <br/>
               <button>Continue </button>
               <br/>
       </>
   )
}