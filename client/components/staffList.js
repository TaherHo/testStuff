import React from 'react';
import {createContainer} from 'react-meteor-data';
import {Staffs} from '../../imports/collections/staffsCol';


const StaffList = (props) => {
    console.log(props);
    return (
        <div>
            {props.staffs.map((element) => element.name)}
        </div>
    );
};

export default createContainer(() => {
    Meteor.subscribe('staffsCol', 20);
    return {staffs:Staffs.find({}).fetch()};
}, StaffList);