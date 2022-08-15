import { HTMLNodePreviewProps } from "../typings/HTMLNodeProps";
import { hidePropertiesIn } from "@mendix/piw-utils-internal";

type Properties = PropertyGroup[];

type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
};

type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
    properties?: Properties[];
};

type Problem = {
    property?: string; // key of the property, at which the problem exists
    severity?: "error" | "warning" | "deprecation"; // default = "error"
    message: string; // description of the problem
    studioMessage?: string; // studio-specific message, defaults to message
    url?: string; // link with more information about the problem
    studioUrl?: string; // studio-specific link
};

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
};

export function getProperties(values: HTMLNodePreviewProps, defaultProperties: Properties): Properties {
    if (values.renderMode === "plain") {
        hidePropertiesIn(defaultProperties, values, [
            "tagName",
            "tagContentMode",
            "tagUseRepeat",
            "tagContentText",
            "tagContentContainer",
            "tagContentRepeatDataSource",
            "tagContentRepeatText",
            "tagContentRepeatContainer"
        ]);

        // manipulate plain here
        if (values.plainUseExternalFile) {
            hidePropertiesIn(defaultProperties, values, ["plainContent"]);
        } else {
            hidePropertiesIn(defaultProperties, values, ["plainExternalFilePath"]);
        }
    } else {
        hidePropertiesIn(defaultProperties, values, ["plainUseExternalFile", "plainExternalFilePath", "plainContent"]);

        // manipulate tag here
        if (values.tagUseRepeat) {
            hidePropertiesIn(defaultProperties, values, ["tagContentText", "tagContentContainer"]);
            if (values.tagContentMode === "text") {
                hidePropertiesIn(defaultProperties, values, ["tagContentRepeatContainer"]);
            } else {
                hidePropertiesIn(defaultProperties, values, ["tagContentRepeatText"]);
            }
        } else {
            hidePropertiesIn(defaultProperties, values, [
                "tagContentRepeatDataSource",
                "tagContentRepeatText",
                "tagContentRepeatContainer"
            ]);
            if (values.tagContentMode === "text") {
                hidePropertiesIn(defaultProperties, values, ["tagContentContainer"]);
            } else {
                hidePropertiesIn(defaultProperties, values, ["tagContentText"]);
            }
        }
    }

    return defaultProperties;
}

export function check(_values: HTMLNodePreviewProps): Problem[] {
    const errors: Problem[] = [];
    // Add errors to the above array to throw errors in Studio and Studio Pro.
    /* Example
    if (values.myProperty !== "custom") {
        errors.push({
            property: `myProperty`,
            message: `The value of 'myProperty' is different of 'custom'.`,
            url: "https://github.com/myrepo/mywidget"
        });
    }
    */
    return errors;
}
