define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'Hello',

        mixins: [React.addons.LinkedStateMixin],

        getInitialState: function () {
            return {
                currStyle: this.stylesList()[0],
                currStyleNum: 0
                };
        },

        stylesList: function () {
            return [
                {},
                {style: {color: 'red', 'font-size': '20px'}},
                {style: {color: 'green', 'font-size': '30px'}},
                {style: {color: 'blue', 'font-size': '40px'}}
            ];
        },

        handleClick: function (direction) {
            var newStyleNum = this.state.currStyleNum;
            newStyleNum += ((direction === 'left') ? -1 : 1);
            newStyleNum = newStyleNum % this.stylesList().length;
            var newStyle = this.stylesList()[newStyleNum];
            this.setState({currStyle: newStyle, currStyleNum: newStyleNum});
        },

        render: template
    });
});
