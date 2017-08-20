import React from "react";
import reactDOM from "react-dom";

const App = () => {
    return(
        <div>
            hello there!
        </div>
    );
};

Meteor.startup( () =>{
    return reactDOM.render(<App/>, document.querySelector('.container'));
});
