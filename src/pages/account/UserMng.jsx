import { Link } from "react-router-dom";

const UserMng=({handleClickUserModal})=>{

    // const handleCloseManager=()=>{
    //     handleClickUserModal();
    // };

    return(
        <div className="UserMng">
            <p>userManager</p>
            <div className="back-btn" onClick={handleClickUserModal}>
                <img src="/assets/images/back-btn.png" alt="" />
            </div>
        </div>
    )
};

export default UserMng;