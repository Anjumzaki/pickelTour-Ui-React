import React from 'react';


import "./MyHeader.css"
function MyHeader() {
  return (
    <div className="realmilk-container">
      <div className="realmilk-c2">
        <div className="conatiner">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="real-milk-h">Pickle Tour</h2>
          </div>
          <div className="col-12 col-md-6">
            <span className="live">
              <p> <i class="fas fa-broadcast-tower"></i>  Live Now</p>
          </span>
            <div className="scroreBoard">
              <span className="loc"> UK, London </span>
              <span className="dated"> Septemeber 25, </span>
              <h4>Real Madrid vs. Barcelona</h4>
              <p>3-4 / Half Time : 3:20</p>
            </div>

            <div className="scroreBoard">
              <span className="loc"> UK, London </span>
              <span className="dated"> Septemeber 25, </span>
              <h4>Real Madrid vs. Barcelona</h4>
              <p>3-4 / Half Time : 3:20</p>
            </div> <div className="scroreBoard">
              <span className="loc"> UK, London </span>
              <span className="dated"> Septemeber 25, </span>
              <h4>Real Madrid vs. Barcelona</h4>
              <p>3-4 / Half Time : 3:20</p>
            </div>
          </div>
         </div>
    </div>
    </div>
    </div>
  );
}

export default MyHeader;
