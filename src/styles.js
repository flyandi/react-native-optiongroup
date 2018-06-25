/**
 * @imports
 */
import { StyleSheet} from 'react-native';


/**
 * @styles
 */
export default props => StyleSheet.create({

    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderColor: props.borderColor,
        borderWidth: props.borderWidth,
        borderRadius: props.borderRadius,
        overflow: 'hidden'

    },

    buttonItem: {
        flex: 1,
        padding: props.contentPadding,
        borderLeftWidth: props.borderWidth,
        borderColor: props.borderColor,
    },

    buttonItemText: {
        textAlign: 'center',
        fontSize: props.fontSize,
        color: props.borderColor,
    },

    selectedButtonItem: {
        backgroundColor: props.borderColor,
        flex: 1,
        padding: props.contentPadding,
        borderLeftWidth: props.borderWidth,
        borderColor: props.borderColor,
    },

    selectedButtonItemText: {
        color: props.inverseTextColor,
        textAlign: 'center',
        fontSize: props.fontSize,
    }
});