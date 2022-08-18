import { element, by } from "detox";
import { expectToMatchScreenshot, tapMenuItem, sleep, launchApp } from "../../../../../detox/src/helpers";

describe("Maps widget", () => {
    beforeEach(async () => {
        await launchApp();
        await tapMenuItem("Maps");
    });

    it("should be able to render map with static markers", async () => {
        const btnStaticMarkers = element(by.id("btnStaticMarkers"));

        await btnStaticMarkers.tap();

        await sleep(2000);

        await expectToMatchScreenshot();
    });

    it("should be able to render map with dynamic markers", async () => {
        const btnDynamicMarkers = element(by.id("btnDynamicMarkers"));

        await btnDynamicMarkers.tap();

        await sleep(2000);

        await expectToMatchScreenshot();
    });
});
