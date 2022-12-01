import React from "react";
import LanguageIcon from '@mui/icons-material/Language';
export default function () {
  function LoginLayout() {
  
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `./Signin/Signin`; 
      navigate(path);
    }
  return (
    <div>
      <span>
        <p>See personalized recommendations</p>
      </span>
      <span>
        <button type="submit">Sign in</button>
      </span>
      <span>
        <p>New customer?</p>
        <p>Start here</p>
      </span>
      <span>
        <button type="submit"> Back to top</button>
      </span>

      <div>
        <span>
          <p>Get to know us</p>
        </span>
        <span>
          <p>About us</p>
        </span>
        <span>
          <p>Careers</p>
        </span>
        <span>
          <p>Press Release</p>
        </span>
        <span>
          <p>Amazon Science</p>
        </span>
      </div>
      <div>
        <span>
          <p>Connect with Us</p>
        </span>
        <span>
          <p>Facebook</p>
        </span>
        <span>
          <p>Twitter</p>
        </span>
        <span>
          <p>Instagram</p>
        </span>
      </div>
      <div>
        <span>
          <p>Make Money with Us</p>
        </span>
        <span>
          <p>Sell on Amazon</p>
        </span>
        <span>
          <p>Sell under Amazon Accelerator</p>
        </span>
        <span>
          <p>Amazon Global Selling</p>
        </span>
        <span>
          <p>Become an Affiliate</p>
        </span>
        <span>
          <p>Fulfilment by Amazon</p>
        </span>
        <span>
          <p>Advertise Your Products</p>
        </span>
        <span>
          <p>Amazon Pay on Merchants</p>
        </span>
      </div>
      <div>
        <span>
          <p>Let Us Help You</p>
        </span>
        <span>
          <p>COVID-19 and Amazon</p>
        </span>
        <span>
          <p>Your Account</p>
        </span>
        <span>
          <p>Returns Centre</p>
        </span>
        <span>
          <p>100% Purchase Protection</p>
        </span>
        <span>
          <p>Amazon App Download</p>
        </span>
        <span>
          <p>Amazon Assistant Download</p>
        </span>
        <span>
          <p>Help</p>
        </span>
      </div>
      <div>
      <img src = "data:image/png;base64,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" alt = ""/>
      <p> <select id="cars" name="cars">
                    <option value="volvo"><LanguageIcon/> English</option>
                    <option value="saab">Hindi</option>
                    <option value="fiat">Tamil</option>
                    <option value="audi">Telugu</option>
                    <option value="fiat">Kannada</option>
                    <option value="fiat">Malayalam</option>
                    <option value="fiat">Amazon Pharmacy</option>
                    <option value="fiat">Marati</option>
                  </select></p>
    <div><span>Australia Brazil Canada China France Germany Italy Japan Mexico Netherlands Poland Singapore Spain Turkey United Arab Emirates</span></div>
    </div>
    <div><span>United Kingdom United States</span></div>
    <div>
      <span>
        <p>See personalized recommendations</p>
      </span>
      <span>
        <button type="submit" onClick = {routeChange}>Sign in</button>
      </span>
      <span>
        <p>New customer?</p>
        <p>Start here</p>
      </span>
      <span>
        <button type="submit"> Back to top</button>
      </span>

      <div>
        <span>
          <p>AbeBooks</p>
        </span>
        <span>
          <p>Books, art & collectibles</p>
        </span>
        <span>
          <p>ShopBop</p>
        </span>
        <span>
          <p>Designer Fashion Brands</p>
        </span>
        </div>
      <div>
        <span>
          <p>Amazon Web Services</p>
        </span>
        <span>
          <p>Scalable Cloud Computing Services</p>
        </span>
        <span>
          <p>Everything For Your Business</p>
        </span> 
      </div>

      <div>
        <span>
          <p>Audible</p>
        </span>
        <span>
          <p>Download Audio Books</p>
        </span>
        <span>
          <p>Prime Now</p>
        </span>
        <span>
          <p>2-Hour Delivery on Everyday Items</p>
        </span>
       
      </div>
      <div>
        <span>
          <p>DPReview</p>
        </span>
        <span>
          <p>Digital Photography</p>
        </span>
        <span>
          <p>Amazon Prime Music</p>
        </span>
        <span>
          <p>90 million songs, ad-free Over 15 million podcast episodes</p>
        </span>
       
      </div>
      <div>
        <span>
          <p>IMDb</p>
        </span>
        <span>
          <p>Movies, TV</p>
        </span>
        <span>
          <p>& Celebrities</p>
          </span>
       
      </div>
      <span>
      <p> Conditions of Use & Sale</p>
      <p>Privacy Notice</p>
      <p> Interest-Based Ads</p>
    </span>
    <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
    
    </div>
    

  );
}
