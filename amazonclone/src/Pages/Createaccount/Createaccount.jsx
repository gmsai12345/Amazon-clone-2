import React from "react";
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
export default function() {
  return (
    <div>
      <button><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPM91b3vzb_B_SULQSum7a568z_4XX4RuzJuae0c3K&s" alt = "" /></button>
      <span>Create Account</span>
      <span>Your name</span>
      <form>
        <input type="text" />
    </form>
    <span>Mobile number</span>
    <span> <form>
        <input type="text" />
    </form></span>
    <span>Email (optional)</span>
    <span> <form>
        <input type="text" />
    </form></span>
    <span>Password</span>
    <span> <form>
        <input type="text" />
    </form></span>
    <span>Passwords must be at least 6 characters.</span>
    <span>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</span>
    <span><button>Continue</button></span>    
    <span><p>Already have an account?</p><p>Sign in <NavigateNextRoundedIcon/></p></span>
    <span>Buying for work?<p> Create a free business account <NavigateNextRoundedIcon/></p></span>
    <span>By creating an account or logging in, you agree to Amazon’s <p>Conditions of Use</p> and <p>Privacy Policy.,/p></span>
    <span>Conditions of Use</span>
    <span>Privacy Notice</span>
    <span>Help</span>
    <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
    </div>

  );
}