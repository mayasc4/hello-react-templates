define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'Hello',

        mixins: [React.addons.LinkedStateMixin],

        getInitialState: function () {
            var fields = ['first'];
            return {fields: fields, newFieldName: ''};
        },

        handleClick: function () {
            this.setState({fields: this.state.fields.concat([this.state.newFieldName])});
        },

        handleFieldChange: function (e) {
            window.console.log(e.target.value);
        },

        render: template
    });
});
