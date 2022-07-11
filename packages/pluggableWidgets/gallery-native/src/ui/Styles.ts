import { TextStyle, ViewStyle } from "react-native";

export interface GalleryStyle {
    container?: ViewStyle;
    dynamicItemClasses?: {
        [key: string]: Pick<GalleryStyle, "listItem">;
    };
    emptyPlaceholder?: ViewStyle;
    firstItem?: ViewStyle;
    lastItem?: ViewStyle;
    list?: ViewStyle;
    listItem?: ViewStyle;
    loadMoreButtonContainer?: ViewStyle;
    loadMoreButtonCaption?: TextStyle;
}

export const defaultGalleryStyle: GalleryStyle = {
    listItem: { flexGrow: 1 },
    loadMoreButtonContainer: {
        alignSelf: "center",
        marginVertical: 16,
        padding: 8,
        backgroundColor: "#264AE5",
        borderRadius: 4
    },
    loadMoreButtonCaption: { color: "#FFFFFF" }
};
