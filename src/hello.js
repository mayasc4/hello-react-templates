define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'Hello',

        mixins: [React.addons.LinkedStateMixin],

        getInitialState: function () {
            return {};
        },

        getProps: function () {
            return {style: {color: 'red'}};
        },

        render: function () {
            return template.apply(this);
        }
    });
});

