// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import fetchBlob from "rn-fetch-blob";

// BEGIN EXTRA CODE
function formatMendixFileUrl(file: mendix.lib.MxObject): string {
    return `${mx.remoteUrl}file?guid=${file.getGuid()}&changedDate=${file.get("changedDate") ?? ""}&name=${file.get(
        "Name"
    )}`;
}

function formatPath(filePath: string, fileName: string): string {
    if (filePath) {
        return `/${filePath}/${fileName}`;
    }
    return `/${fileName}`;
}
// END EXTRA CODE

/**
 * @param {MxObject} file
 * @param {string} filePath - optional
 * @returns {Promise.<boolean>}
 */
export async function DownloadFile(file: mendix.lib.MxObject, filePath: string): Promise<boolean> {
    // BEGIN USER CODE
    if (!file) {
        return Promise.reject(new Error("Input parameter 'file' is required"));
    }
    const dirs = fetchBlob.fs.dirs;
    try {
        await fetchBlob
            .config({
                path: dirs.DownloadDir + formatPath(filePath, <string>file.get("Name"))
            })
            .fetch("GET", formatMendixFileUrl(file));
        return Promise.resolve(true);
    } catch (err) {
        console.error("error", err);
        return Promise.resolve(false);
    }
    // END USER CODE
}
