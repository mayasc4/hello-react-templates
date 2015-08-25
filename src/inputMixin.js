define([], function() {
    'use strict';

    return {
        isDisabled: function() {
            return this.props.disabled === true;
        },

        hasLabel: function() {
            return this.props.label !== undefined && this.props.label.trim().length > 0;
        },

        getLabel: function() {
            return this.props.label !== undefined ? this.props.label : '';
        },

        isValid: function(val) {
            return this.props.validator === undefined || this.props.validator(val);
        },

        getInvalidMessage: function() {
            return this.props.invalidMessage !== undefined ? this.props.invalidMessage : '';
        },

        getValueFromProps: function(props) {
            props = props || this.props;
            return props.valueLink !== undefined ? props.valueLink.value : props.value;
        },

        componentWillReceiveProps: function(nextProps) {
            var newVal = this.getValueFromProps(nextProps);
            if (this.getValueFromProps(this.props) !== newVal) {
                this.setState({ value: newVal });
            }
        },

        callOnChangeIfExists: function(newVal) {
            var onChange = this.props.valueLink ? this.props.valueLink.requestChange : this.props.onChange;
            if (onChange) {
                onChange(newVal);
            }
        }
    };
});