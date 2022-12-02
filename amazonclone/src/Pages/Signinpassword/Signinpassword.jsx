import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default const Child = (props) => {
  function LoginLayout() {
  
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path =  './pages/Signin'; 
      navigate(path);
    }
  return(
    <div><div><button><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPM91b3vzb_B_SULQSum7a568z_4XX4RuzJuae0c3K&s" alt = "" /></button></div>
    <span>Sign in</span>
    <span>
    <p> {props.data} </p><p onclick  = {routeChange}>Change</p>
    </span>
    <form>
      <label><span>Password</span>
        <form type="text" onSubmit = {}/>
        <input/>
      </label>
    </form>
    <button onclick  = {}>Sign in</button>
    <label>
        <input type="checkbox" />
        Keep me signed in.
        <p>Details<ArrowDropDownIcon/></p>
      </label>
    <span>Conditions of Use</span>
    <span>Privacy Notice</span>
    <span>Help</span>
    <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>

    </div>

  );
}


