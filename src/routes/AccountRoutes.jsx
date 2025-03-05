import { Routes,Route } from "react-router-dom";
import {
    FindId,FindPw,Signin,Signup,SignupComplete
} from "../pages/account";



const AccountRoutes=()=>{
    return(
        <Routes>
            <Route path='find-id' element={<FindId />} />
            <Route path='find-pw' element={<FindPw />} />
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
            <Route path='signup-complete' element={<SignupComplete />} />
        </Routes>
    )
};


export default AccountRoutes;