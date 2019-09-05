import React from 'react';
import './SubHeader.css';

function SubHeader() {
  return (
    <div className="subHeader sbROw">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-6 fwrapDiv">
            <div className="row">
              <div className="col-md-4 col-12">
                <p><span className="loc"> Next Match </span> </p>
                <span className="dated"> Septemeber 25, </span> <br></br>
                <span className="dated"> Santiago, Barnabo </span> <br></br>
                <span className="dated"> Madrid,Spain </span>
              </div>
              <div className="col-md-8 col-12 wrapsubhd">
                <span>
                  <img className="subhdt" src={require('../../assets/team2.png')}></img>
                  Real Madrid
                </span>
                <span>
                  <img className="subhdt" src={require('../../assets/team3.png')}></img>
                  Barcelona
                </span>

              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
          <div className="row">
              <div className="col-md-4 col-12">
                <p><span className="loc"> Next Tournament </span> </p>
                <span className="dated"> Septemeber 25, </span> <br></br>
                <span className="dated"> Santiago, Barnabo </span> <br></br>
                <span className="dated"> Madrid,Spain </span>
              </div>
              <div className="col-md-8 col-12 wrapsubhd tourTeam">
                <span>
                <img className="tourTeam" className="subhdt" src={require('../../assets/team4.png')}></img>
               DC UNITED LEAGUE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
