/**
 * @imports
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import _ from 'lodash';
import Styles from './styles';

/**
 * @component
 */
export default class OptionGroup extends Component {

    /**
     * propTypes
     * @type {}
     */
    static propTypes = {
        borderColor: PropTypes.string,
        borderWidth: PropTypes.number,
        borderRadius: PropTypes.number,
        contentPadding: PropTypes.number,
        fontSize: PropTypes.number,
        fontFamily: PropTypes.string,
        inverseTextColor: PropTypes.string,
        options: PropTypes.object,
        selected: PropTypes.any,
        defaultValue: PropTypes.any
    }

    /**
     * defaultProps
     * @type {}
     */
    static defaultProps = {
        borderColor: '#828186',
        borderWidth: 1,
        borderRadius: 3,
        contentPadding: 10,
        fontSize: undefined,
        fontFamily: undefined,
        inverseTextColor: '#FFFFFF',
        options: {},
        defaultValue: undefined,
        selected: undefined,
    }

    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            selected: null
        };
    }

    /**
     * @componentWillMount
     */
    componentWillMount() {

    }

    /**
     * onValueChange Helper
     * @param value
     */
    onValueChange (value) {

        this.setState({
            selected : value
        });
    }

    /**
     * render
     * @returns {XML}
     */
    render() {

        let index = 0;

        const styles = Styles(this.props);

        return (
            <View style={styles.buttonContainer}>

                {_.map(this.props.options, (value, label) => {

                    index++;

                    return (
                        <TouchableOpacity
                            key={value}
                            style={[
                                this.state.selected == value ? styles.selectedButtonItem : styles.buttonItem,
                                index == 1 ? {borderLeftWidth: 0} : {},
                            ]}
                            activeOpacity={0.5}
                            onPress={() => this.onValueChange(value)}
                        >
                            <Text style={
                                this.state.selected == value ? styles.selectedButtonItemText : styles.buttonItemText
                            }>
                                {label}
                            </Text>

                        </TouchableOpacity>
                    )
                })}
            </View>
        );
    }
}

