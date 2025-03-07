import { Link } from "react-router-dom";
import Signup from "./SignUp";
import './UserMng.css';

const UserMng=({managerMD,handleClickUserModal})=>{

    // const handleCloseManager=()=>{
    //     handleClickUserModal();
    // };

    return(
        <div className="UserMng">
            <div className="manager-inner">
                <div className="top-comp">
                    <div className="back-btn" onClick={handleClickUserModal}>
                        <img src="/assets/images/back-btn.png" alt="back" />
                    </div>
                    <h2>User Manager</h2>
                </div>
                <Signup managerMD={managerMD}handleClickUserModal={handleClickUserModal}/>
            </div>
        </div>
    )
};

export default UserMng;