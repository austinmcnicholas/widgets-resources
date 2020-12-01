import { brand, font } from "../variables";
import { LineChartType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Line Chart

    Default Class For Mendix Line Chart Widget
========================================================================== */
export const com_mendix_widget_native_linechart_LineChart: LineChartType = {
    container: {
        // All ViewStyle properties are allowed
    },
    errorMessage: {
        // All TextStyle properties are allowed
        fontFamily: font.family,
        fontSize: font.sizeSmall,
        fontWeight: font.weightNormal
    },
    chart: {
        // All ViewStyle properties are allowed
    },
    grid: {
        color: "#CED0D3",
        paddingBottom: 32,
        paddingLeft: 32,
        paddingRight: 8,
        paddingTop: 8
    },
    xAxis: {
        color: "#CED0D3",
        fontFamily: font.family,
        fontSize: font.sizeSmall,
        fontWeight: font.weightNormal,
        label: {
            // All TextStyle properties are allowed & relativePositionGrid property ("bottom" or "right")
            color: "#6C717C",
            alignSelf: "center",
            marginHorizontal: 0,
            marginVertical: 8,
            fontFamily: font.family,
            fontSize: font.sizeSmall,
            fontWeight: font.weightNormal
        }
    },
    yAxis: {
        color: "#CED0D3",
        fontFamily: font.family,
        fontSize: font.sizeSmall,
        fontWeight: font.weightNormal,
        label: {
            // All TextStyle properties are allowed & relativePositionGrid property ("top" or "left")
            color: "#6C717C",
            marginHorizontal: 0,
            marginVertical: 8,
            fontFamily: font.family,
            fontSize: font.sizeSmall,
            fontWeight: font.weightNormal
        }
    },
    lineStyles: {},
    legend: {
        container: {
            // All ViewStyle properties are allowed
            justifyContent: "flex-start",
            marginHorizontal: 0,
            marginVertical: 8
        },
        item: {
            // All ViewStyle properties are allowed
            padding: 0,
            paddingRight: 16
        },
        indicator: {
            // All ViewStyle properties are allowed
            marginRight: 8
        },
        label: {
            // All TextStyle properties are allowed
            fontFamily: font.family,
            fontSize: font.sizeSmall
        }
    },
    lineColorPalette: Object.values(brand) // Array of color strings
};
