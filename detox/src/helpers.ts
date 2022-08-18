import { by, element, device } from "detox";
import { readFileSync } from "fs";
import { MatchImageSnapshotOptions } from "jest-image-snapshot";
import "../jest.detox.startup";

export async function expectToMatchScreenshot(
    element?: Detox.NativeElement,
    options?: MatchImageSnapshotOptions
): Promise<void> {
    let screenshotPath: string;
    if (element) {
        screenshotPath = await element.takeScreenshot("screenshot");
    } else {
        screenshotPath = await device.takeScreenshot("screenshot");
    }
    expect(readFileSync(screenshotPath)).toMatchImageSnapshot(options);
}

export async function setText(element: Detox.NativeElement, text: string): Promise<void> {
    await element.clearText();
    await element.typeText(text);
    await element.tapReturnKey();
}

export async function tapBottomBarItem(caption: "Widgets" | "Actions" | "Commons" | "Deep Link"): Promise<void> {
    await element(by.id(`bottomBarItem$${caption}`)).tap();
}

export async function tapMenuItem(caption: string): Promise<void> {
    const firstLetter = caption.split("")[0].toUpperCase();
    await element(by.text(firstLetter)).atIndex(0).tap();
    await element(by.text(caption)).tap();
}

export async function sleep(time: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, time));
}
