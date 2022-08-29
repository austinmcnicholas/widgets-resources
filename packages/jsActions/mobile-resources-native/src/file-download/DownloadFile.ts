// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Platform } from "react-native";
import RNBlobUtil from "react-native-blob-util";
import FileViewer from "react-native-file-viewer";
// BEGIN EXTRA CODE
function formatMendixFileUrl(file: mendix.lib.MxObject): string {
    return `${mx.remoteUrl}file?guid=${file.getGuid()}&changedDate=${
        file.get("changedDate") ?? ""
    }&name=${encodeURIComponent(file.get("Name"))}`;
}

function formatPath(...pathArgs: string[]): string {
    return pathArgs.filter(arg => !!arg).join("/");
}

function sanitizeFileName(name: string) {
    return name.replace(/[<>"?:|*/\\\u0000-\u001F\u007F]/g, "_");
}

// END EXTRA CODE

/**
 * @param {MxObject} file
 * @param {boolean} openWithOS - Set to True to let the OS open the file and ask the user with which applciation.\nSet to False if the file only needs to be saved to the device storage.
 * @returns {Promise.<void>}
 */
export async function DownloadFile(file: mendix.lib.MxObject, openWithOS: boolean) {
    // BEGIN USER CODE
    if (!file) {
        return Promise.reject(new Error("Input parameter 'file' is required"));
    }

    const dirs = RNBlobUtil.fs.dirs;

    const fileName = file.get("Name") as string;
    const sanitizedFileName = sanitizeFileName(fileName);
    const baseDir = Platform.OS === "ios" ? dirs.DocumentDir : dirs.CacheDir;
    const fileURL = formatMendixFileUrl(file);
    const downloadedFile = await RNBlobUtil.config({
        path: formatPath(baseDir, sanitizedFileName)
    }).fetch("GET", fileURL);

    if (Platform.OS === "android") {
        await RNBlobUtil.MediaCollection.copyToMediaStore(
            {
                name: sanitizedFileName,
                mimeType: "*",
                parentFolder: ""
            },
            "Download",
            downloadedFile.path()
        );
    }

    if (openWithOS) {
        await FileViewer.open(downloadedFile.path(), {
            showOpenWithDialog: true,
            showAppsSuggestions: true
        });
    }
    // END USER CODE
}
