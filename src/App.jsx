// import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import check from "../public/check.svg";
import search from "../public/search.svg";

function App() {
  return (
    <>
      <div className="outer">
        <div className="centerGray">
          <div className="cont">
            <h1>549,-</h1>
            <p>Pay now, later or split up.</p>
            <input type="button" value="BUY ONLINE" id="firstBtn" />
            <p>18 in online storage - can be shipped today</p>
            <div className="twoP">
              <div className="fis">
                <img src={check} className="tik" />
                <h5>
                  <a href="#">Free Shipping</a>over NOK 800
                </h5>
              </div>

              <div className="sec">
                <img src={check} className="tik" />
                <a href="#">Lightning fast delivery</a>
              </div>
            </div>

            <div className="mid">
              <p className="see">See how fast you can get the item</p>
              <div className="fx">
                <input type="search" name="Zip" id="Zip" placeholder="Zip Code"/>
                <img src={search} id="ser"/>
                <input type="button" value="Check" className="chi" />
              </div>
            </div>
            <input type="button" value="PICK UP IN STORE"  id="secBtn"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
