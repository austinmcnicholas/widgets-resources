import { Alert } from "../../../../../detox/src/Alert";
import { expect, element, by } from "detox";
import { expectToMatchScreenshot, launchApp, setText, tapMenuItem } from "../../../../../detox/src/helpers";

describe("Color picker", () => {
    beforeEach(async () => {
        await launchApp();
        await tapMenuItem("Color picker");
    });

    it("renders correctly after change", async () => {
        await element(by.text("Normal")).tap();

        const input = element(by.id("textBoxColorPickerNormal"));
        await setText(input, "hsla(117, 68, 54, 0.8)");
        await expectToMatchScreenshot(element(by.id("colorPickerNormal")));
    });

    it("triggers onchange action when changing value", async () => {
        await element(by.text("OnChange")).tap();

        await element(by.id("colorPickerOnChange$alpha")).tap();
        await expect(Alert().messageElement).toHaveText("New color: rgba(255, 0, 255, 0.54)");
    });
});
