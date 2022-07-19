import React from "react";
import './index.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PlaceIcon from '@mui/icons-material/Place';
import HomeIcon from '@mui/icons-material/Home';
import EmployDetails from "./EmployDetails";


const Home = () => {
    return(
        <div className="profile-div">
            <div className="profile-headerdiv">
            <h5>profilename</h5>
            <AccountCircleIcon/>
            

            </div>
            <div className="profile-maindiv">
                <div className="profile-sidediv">

                    <a className="profile-sidebarcontent"> <HomeIcon/><h4>Home</h4></a>
                    <a className="profile-sidebarcontent" >  <EngineeringIcon/><h4>Employees</h4></a>
                    <a className="profile-sidebarcontent" ><PlaceIcon/><h4>Work Place</h4></a>
                    
                    <div className="mob-field">
                    <a 
                        style={{color:'white'}}
                        onClick={
                            ()=> {
                                localStorage.clear();
                                window.location.href = '';
                            }
                        }
                    >Logout</a>
                    </div>
                </div>

                    <div className="profile-detailsdiv">
                    <EmployDetails/>
                    </div>
            </div>

        </div>
    )
        

    
}
export default Home;