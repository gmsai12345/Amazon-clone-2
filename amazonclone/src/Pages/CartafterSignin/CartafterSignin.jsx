import React from "react";
import CartSidebar from "./Pages/CartSidebar/CartSidebar";
import Footer from "./Footer/Footer";
export default function () {
  return (
    <div>
      <span>Your Amazon Cart is empty.</span>
      <span>
        Your shopping cart is waiting. Give it purpose – fill it with groceries,
        clothing, household supplies, electronics and more.
      </span>
      <span>
        Continue shopping on the Amazon.in homepage, learn about today's deals,
        or visit your <p>Wish List.</p>
      </span>
      <span>Your Items</span>
      <div>
        <span>
          <p>No items saved for later</p>
          <p> Buy it again</p>
        </span>
        <span>No items to Buy again.</span>
      </div>
      <div>
        <span>
          The price and availability of items at Amazon.in are subject to
          change. The shopping cart is a temporary place to store a list of your
          items and reflects each item's most recent price.
        </span>
        <span>
          Do you have a promotional code? We'll ask you to enter your claim code
          when it's time to pay.
        </span>

      </div>
      <div><CartSidebar/></div>
      <div>
        <span>Frequently repurchased in Pet Supplies</span>
        <img src = "" alt = ""/>
        <span>Allter Baby Diaper, Medium (5 - 8 Kg) 28 Pieces</span>
        <img src = "" alt = ""/>
        <span>Drools Adult(+1 year) Dry Cat Food, Ocean Fish, 3 kg + 1.2 kg Free</span>
        <img src = "" alt = ""/>
        <span></span>
        <img src = "" alt = ""/>
        <span></span>
        <img src = "" alt = ""/>
        <span></span>
        <img src = "" alt = ""/>
        <span></span>
        <img src = "" alt = ""/>
        <span></span>

      </div>
      <div>
        <span>Top picks for you</span>
        <span>
        <img src = "" alt = ""/></span>
        <span>Allter Baby Diaper, Medium (5 - 8 Kg) 28 Pieces</span>
        <img src = "" alt = ""/>
        <span>Drools Adult(+1 year) Dry Cat Food, Ocean Fish, 3 kg + 1.2 kg Free</span>
        <img src = "" alt = ""/>
        <span></span>
        <img src = "" alt = ""/>
        <span></span>
        <img src = "" alt = ""/>
        <span></span>
        <img src = "" alt = ""/>
        <span></span>
        <img src = "" alt = ""/>
        <span></span>
        

      </div>
      <div>
      <span>Related to items you viewed</span>
        <span>
        <img src = "" alt = ""/></span>
        <span>Allter Baby Diaper, Medium (5 - 8 Kg) 28 Pieces</span>
        <img src = "" alt = ""/>
        <span>Drools Adult(+1 year) Dry Cat Food, Ocean Fish, 3 kg + 1.2 kg Free</span>
        <img src = "" alt = ""/>
        <span></span>
        <img src = "" alt = ""/>
        <span></span>
        <img src = "" alt = ""/>
        <span></span>
        <img src = "" alt = ""/>
        <span></span>
        <img src = "" alt = ""/>
        <span></span>

      </div>
    
    <Footer/>
    </div>
  );
}
