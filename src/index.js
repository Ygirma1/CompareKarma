import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';

//Refer to the index.html file in the public folder to see where the 'root' element referenced below is
//index.html is where the DOM for our app begins
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

//React.StrictMode is used to detect bugs in components created via React, it is used on our <App /> component.