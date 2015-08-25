define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'Hello',

        mixins: [React.addons.LinkedStateMixin],

        getInitialState: function () {
            return {
                compHeight: 300,
                ribbonHeight: 300,
                padding: 0
            };
        },

        handleChange: function (prop, newValue) {
            var newState = _.cloneDeep(this.state);
            newState[prop] = newValue;
            if (prop === 'padding') {
                newState.ribbonHeight = newState.compHeight - 2 * newState.padding;
            }
            if (prop === 'ribbonHeight') {
                newState.padding = (newState.compHeight - newState.ribbonHeight) / 2;
            }
            this.setState(newState);
        },

        valueLink: function (prop) {
            return {
                value: this.state[prop],
                requestChange: this.handleChange.bind(this, prop)
            };
        },

        render: template
    });
});
