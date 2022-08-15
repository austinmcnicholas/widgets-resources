/**
 * This file was generated from HTMLNode.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue, ListValue, ListExpressionValue, ListWidgetValue } from "mendix";

export type RenderModeEnum = "tag" | "plain";

export type TagContentModeEnum = "text" | "container";

export interface HTMLNodeContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    renderMode: RenderModeEnum;
    tagName: string;
    tagContentMode: TagContentModeEnum;
    tagUseRepeat: boolean;
    tagContentText?: DynamicValue<string>;
    tagContentContainer?: ReactNode;
    tagContentRepeatDataSource?: ListValue;
    tagContentRepeatText?: ListExpressionValue<string>;
    tagContentRepeatContainer?: ListWidgetValue;
    plainUseExternalFile: boolean;
    plainExternalFilePath?: DynamicValue<string>;
    plainContent?: DynamicValue<string>;
}

export interface HTMLNodePreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: RenderModeEnum;
    tagName: string;
    tagContentMode: TagContentModeEnum;
    tagUseRepeat: boolean;
    tagContentText: string;
    tagContentContainer: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    tagContentRepeatDataSource: {} | { type: string } | null;
    tagContentRepeatText: string;
    tagContentRepeatContainer: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    plainUseExternalFile: boolean;
    plainExternalFilePath: string;
    plainContent: string;
}
