define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'Hello',

        mixins: [React.addons.LinkedStateMixin],

        getInitialState: function () {
            return {
                countries: {
                    China: ['Shang-Chay'],
                    Israel: ['Tel Aviv', 'Netanya', 'Beer Sheva'],
                    Brazil: ['San Paulo', 'Rio']
                },
                selectedCountry: null,
                selectedCity: null
            };
        },

        submitEnable: function () {
            return this.state.selectedCountry && _.contains(this.state.countries[this.state.selectedCountry], this.state.selectedCity) ? true : false;
        },

        render: function () {
            return template.apply(this);
        }
    });
});
