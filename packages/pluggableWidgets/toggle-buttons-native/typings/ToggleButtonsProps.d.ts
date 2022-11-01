/**
 * This file was generated from ToggleButtons.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export type EditableEnum = "default" | "editExpression" | "never";

export interface ToggleButtonsProps<Style> {
    name: string;
    style: Style[];
    enum: EditableValue<string>;
    dynamicClass: EditableValue<string>;
    editable: EditableEnum;
    editableExpression?: DynamicValue<boolean>;
    onChange?: ActionValue;
}

export interface ToggleButtonsPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    enum: string;
    dynamicClass: string;
    editable: EditableEnum;
    editableExpression: string;
    onChange: {} | null;
}
