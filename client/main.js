import React from "react";
import reactDOM from "react-dom";
import StaffList from './components/staffList';

const App = () => {
    return(
        <div>
            hello there!
            < StaffList/>
        </div>
    );
};

Meteor.startup( () =>{
    return reactDOM.render(<App/>, document.querySelector('.container'));
});
