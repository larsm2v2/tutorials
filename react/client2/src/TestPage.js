import React, {Fragment, useEffect, useState} from "react";
import './App.css';
import imageLO from './LightsOut_cropped.jpg';


/*const mybutton = async id => {
    const 
    id.preventDefault();
    try {
        console.log("power"))
        };
    } catch (err) {
        console.error(err.message);
    }
*/

function TestPage() {
  return (
    <><head>
          <h1>This is Lawrence's Page</h1>
      </head>
      <div className='Text'>

              <body>

                  <h1>Hello, React!</h1>
                  <h4>This is Lawrence's Page</h4>
                  <img src={imageLO} alt='Game' />;
                  <script src="index.js" type="text/babel"></script>
              </body>
          </div></>
  );
}


export default TestPage;