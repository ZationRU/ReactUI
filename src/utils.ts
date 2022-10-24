import * as MCU from "@material/material-color-utilities";

const HARMONIZE_MAX_DEGREES = 15.0;
const HARMONIZE_PERCENTAGE = 0.5;

export function classNames(...classnames: (string | undefined)[]): string {
    return classnames.filter(it => it!==undefined).join(" ")
}

export function harmonize(designColor: number, sourceColor: number): number {
    console.log(MCU.CorePalette.of(designColor).n2.tone(90))

    const fromHct = MCU.Hct.fromInt(designColor);
    const toHct = MCU.Hct.fromInt(sourceColor);

    const differenceDegrees = MCU.differenceDegrees(fromHct.hue, toHct.hue);
    const rotationDegrees = Math.min(differenceDegrees * HARMONIZE_PERCENTAGE, HARMONIZE_MAX_DEGREES);
    const outputHue =
        MCU.sanitizeDegreesDouble(
            fromHct.hue
            + rotationDegrees * MCU.rotationDirection(fromHct.hue, toHct.hue));
    return MCU.Hct.from(outputHue, fromHct.chroma, fromHct.tone).toInt();
}