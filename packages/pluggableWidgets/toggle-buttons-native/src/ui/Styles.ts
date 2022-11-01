import { Style } from "@mendix/piw-native-utils-internal";
import { Platform, TextStyle, ViewStyle } from "react-native";

export interface ToggleButtonsStyle extends Style {
    container: ViewStyle;
    containerDisabled: ViewStyle;
    button: ViewStyle;
    text: TextStyle;
    activeButton: ViewStyle;
    activeButtonText: TextStyle;
    validationMessage: TextStyle;
}

const blue = "rgb(0, 122, 255)";
const purple = "rgb(98, 0, 238)";

export const defaultToggleButtonsStyle: ToggleButtonsStyle = {
    container: {
        borderRadius: Platform.select({ ios: 5, default: 3 }),
    },
    tabContainer: {
        borderRadius: Platform.select({ ios: 5, default: 3 }),
        backgroundColor: 'transparent',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 5,
    },
    containerDisabled: {
        opacity: 0.5
    },
    button: {
        borderColor: Platform.select({ ios: blue, default: "#CCC" }),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1, 
        borderRadius: 8,
        padding: 6,
        minWidth: "25%",
        marginBottom: 6,
    },
    text: Platform.select({
        ios: {
            color: blue
        },
        default: {
            color: "#666",
            paddingVertical: 3,
            fontWeight: "600"
        }
    }),
    activeButton: Platform.select({
        ios: {
            borderColor: blue,
            backgroundColor: blue
        },
        default: {
            borderColor: purple,
            backgroundColor: purple
        }
    }),
    activeButtonText: {
        color: "#fff"
    },
    validationMessage: {
        color: "#ed1c24"
    },
    green: {
        backgroundColor: "#5BC85C"
    },
    none: {
        //color: "gray"
    },
    orange: {
        backgroundColor: "#FFAA00"
    },
    purple: {
        backgroundColor: "#AD00EA"
    },
    red: {
        backgroundColor: "#D23241"
    }
};
