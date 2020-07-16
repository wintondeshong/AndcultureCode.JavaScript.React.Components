import { boolean, number, optionsKnob } from "@storybook/addon-knobs";
import { ProgressBar, ProgressBarStyles } from "./progress-bar";
import React from "react";

export default {
    component: ProgressBar,
    title: "Atoms | Progress / Progress Bar",
};

export const progressBarKnobs = () => (
    <ProgressBar
        value={number("Progress Percent", 50, {
            step: 1,
            min: 0,
            max: 100,
        })}
        isErrored={boolean("Is Errored", false)}
        style={optionsKnob(
            "Style",
            {
                thick: ProgressBarStyles.Thick,
                thin: ProgressBarStyles.Thin,
            },
            ProgressBarStyles.Thick,
            { display: "radio" }
        )}
    />
);