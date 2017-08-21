import _ from 'lodash';
import {Meteor} from 'meteor/meteor';
import {Staffs} from '../imports/collections/staffsCol';
import {image, helpers} from 'faker';


Meteor.startup(() => {

    if (!Staffs.find({}).count) {
        _.times(1000, () => {
            const {name, email, phone} = helpers.createCard();

            Staffs.insert({
                name, email, phone,
                avatar: image.avatar()
            });
        });
    }

    Meteor.publish('staffsCol', function () {
        return Staffs.find({}, {limit: 20});
    });
});