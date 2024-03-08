import React, {Fragment, useEffect, useState} from "react";
import './App.css';
import imageLO from './LightsOut_cropped.jpg';


/*const mybutton = async id => {
    id.preventDefault();
    try {
        print({id})
        };
    } catch (err) {
        console.error(err.message);
    }
*/
function HelloWorld() {
  return (
    <div className='Text'>
    <head>
        <h4>This is Lawrence's Page</h4>
    </head>
    <body>
        <h4>This is Lawrence's Page</h4>
        <h1>Hello, React!</h1>

        <img src={imageLO} alt='Game'/>;
        <table>
            <tr>
                <td>
                <button
                className="btn btn-warning btn-lg"
                //onClick={() => mybutton()}
                >
                </button>
                </td>
                <th>ON/OFF</th>
            </tr>
            <tr>
            <td>
                <button
                className="btn btn-warning btn-lg"
                //onClick={() => mybutton()}
                >
                </button>
                </td>
                <th>START</th>
            </tr>
            <tr>
            <td>
                <button
                className="btn btn-warning btn-lg"
                //onClick={() => print(on)}
                >
                </button>
                </td>
                <th>SOUND</th>
            </tr>
            <tr>
                <td>
                <button
                className="btn btn-warning btn-lg"
                //onClick={() => print("Help me!")}
                >
                </button>
                </td>
                <th>HELP</th>
            </tr>
            <tr>
                <td>
                <button
                className="btn btn-warning btn-lg"
                //onClick={() => print("Modes")}
                >
                </button>
                </td>                
                <th>Modes</th>
            </tr>
        </table>
        <script src="index.js" type="text/babel"></script>
    </body>
    </div>
  );
}


export default HelloWorld;