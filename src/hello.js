define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'Hello',

        mixins: [React.addons.LinkedStateMixin],

        getInitialState: function () {
            return {location: {long: 1, lat: 1}};
        },

        handleChange: function (prop, newValue) {
            var newState = _.cloneDeep(this.state);
            newState.location[prop] = newValue;
            this.setState(newState);
        },

        valueLink: function (prop) {
            //var value = prop === 'long' ? this.state.location.long : this.state.location.lat;
            //var requestChange = prop === 'long' ? this.handleChangeLong : this.handleChangeLat;
            return {
                value: this.state.location[prop],
                requestChange: this.handleChange.bind(this, prop)
            };
        },

        render: function () {
            return template.apply(this);
        }
    });
});

