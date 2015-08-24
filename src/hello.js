define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'Hello',

        mixins: [React.addons.LinkedStateMixin],

        getInitialState: function () {
            return {location: {long: 1, lat: 1}};
        },

        handleChange: function (newValue, prop) {
            var newState = this.state;
            if (prop === 'long') {
                newState.location.long = newValue;
            } else {
                newState.location.lat = newValue;
            }
            this.setState(newState);
        },

        handleChangeLong: function (newValue) {
            return this.handleChange(newValue, 'long');
        },

        handleChangeLat: function (newValue) {
            return this.handleChange(newValue, 'lat');
        },

        valueLink: function (prop) {
            var value = prop === 'long' ? this.state.location.long : this.state.location.lat;
            var requestChange = prop === 'long' ? this.handleChangeLong : this.handleChangeLat;
            return {
                value: value,
                requestChange: requestChange
            };
        },

        render: function () {
            return template.apply(this);
        }
    });
});
