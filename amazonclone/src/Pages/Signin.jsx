import React,{useState} from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from "react-router-dom";
import Signinpassword from './Pages/Signinpassword/Signinpassword';
export default function () {
  function LoginLayout() {
  
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `./pages/Signinpassword/Signinpassword`; 
      navigate(path);
    }
    function LoginLayout1() {
  
      let navigate = useNavigate(); 
      const routeChange1 = () =>{ 
        let path = `./pages/Createaccount/Createaccount`; 
        navigate(path);
      }
      function Loginemail () {
        {
          const [data, setData] = useState({
            username: ''});
            const [form, setForm] = useState({
            username: ''});
            const [submit, submitted] = useState(false);
            const printValues = e => {
              e.preventDefault();
              setForm({
                username: data.username
              });
              submitted(true);

            };
            const updateField = e => {
              setData({
                ...data,
                [e.target.name]: e.target.value
              });
            };
      }

  return (
    <div><div><button><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPM91b3vzb_B_SULQSum7a568z_4XX4RuzJuae0c3K&s" alt = "" /></button></div>
    <span>Sign in</span>
    <form>
      <label><span>Email or mobile phone number</span>
        <form type="text" onSubmit = {printValues}/>
        <input value={data.username} name="username" onChange={updateField}/>
      </label>
    </form>
    <button onclick  = {routeChange}>Continue</button>
    <span>By continuing, you agree to Amazon's Conditions of</span>
    <span>Use and Privacy Notice.</span>
    <span><ArrowRightIcon/>Need help?</span>
    <span>New to Amazon?</span>
    <button onclick  = {routeChange1}>Create your Amazon account</button>
    <span>Conditions of Use</span>
    <span>Privacy Notice</span>
    <span>Help</span>
    <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>


</div>
  );
}