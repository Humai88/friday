import React from "react";
// import {Slider} from "@material-ui/core";
import styles from "./RangeUI.module.css";
import Slider from "@mui/material/Slider";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void;
    value: number[];
    // min, max, step, disable, ...
};

const RangeUi: React.FC<SuperDoubleRangePropsType> = ({
    onChangeRange,
    value,
}) => {
    const handleChange = (event: Event, newValue: number[] | number) => {
        onChangeRange && onChangeRange(newValue as number[]);
    };

    return (
        <div>
            <Slider
                className={styles.Slider}
                color={"primary"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
                sx={{
                    color: "#21268F",
                    "& .MuiSlider-thumb": {
                        backgroundColor: "#21268F",
                    },
                    ".css-eg0mwd-MuiSlider-thumb::after": {
                        backgroundColor: "white",
                        width: 10,
                        height: 10,
                    },
                    ".css-1kz0hui-MuiSlider-valueLabel.MuiSlider-valueLabelOpen":
                        {
                            backgroundColor: "#21268F",
                            width: 35,
                            height: 25,
                            top: -2,
                        },
                    ".css-1kz0hui-MuiSlider-valueLabel:before": {
                        width: 0,
                        height: 0,
                    },
                    ".css-14pt78w-MuiSlider-rail": {
                        backgroundColor: "#21268F",
                        opacity: 0.5,
                    },
                }}
            />
        </div>
    );
};

export default RangeUi;
