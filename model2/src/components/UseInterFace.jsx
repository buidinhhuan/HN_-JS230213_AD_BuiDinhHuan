import React, { useState } from 'react'

function UseInterFace() {
 
    const [text, setText] = useState(200);
  const handleOnchaneTextatea = () => {
    setText(text - 1);
  };
  return (
    <div>
      <section className="container">
        <div className="container-taitol">
          <h1 className="taitol">reviews TA Béc Cọp</h1>
          <div>
            <i class="fa-solid fa-circle-half-stroke"></i>
          </div>
        </div>
        <section className="control">
          <div className="ip-search">
            <div className="icon-search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="" name="" placeholder="Search here" />
          </div>
        </section>

        <section className="container-main">
          <div className="main">
            <textarea
              onChange={handleOnchaneTextatea}
              className="textarea"
              name=""
              cols="30"
              rows="10"
            ></textarea>
            <div className="date-inp">{text}</div>
            <div className="icon-delete">
              <i class="fa-solid fa-upload"></i>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
   
}

export default UseInterFace