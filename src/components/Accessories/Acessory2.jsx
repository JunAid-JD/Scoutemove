import React from "react";
import "./Acessory2.css";

const Acessory2 = () => {
  return (
    <div className="accessories acessory2">
      <h3>Select your accessory</h3>
      <main>
        <div className="card short">
          <img src="/img/accessory1.png" alt="bg" />
          <span className="layer"></span>
          <h4>T Shirt</h4>
        </div>
        <div className="card tall">
          <img src="/img/accessory4.png" alt="bg" />
          <span className="layer"></span>
          <h4>SweatShirt</h4>
        </div>

        <div className="card tall">
          <img src="/img/accessory2.png" alt="bg" />
          <span className="layer"></span>
          <h4>Hoddie</h4>
        </div>

        <div className="card tall">
          <img src="/img/accessory5.png" alt="bg" />
          <span className="layer"></span>
          <h4>OverSize Shirt</h4>
        </div>

        <div className="card short">
          <img src="/img/accessory3.png" alt="bg" />
          <span className="layer"></span>
          <h4>Water bottle</h4>
        </div>
      </main>
    </div>
  );
};

export default Acessory2;
