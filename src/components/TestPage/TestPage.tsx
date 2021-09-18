import React, {ChangeEvent, useState} from "react";
import {Button} from "../../UI-kit/Button/Button";
import {Checkbox} from "../../UI-kit/Checkbox/Checkbox";
import {EditableSpan} from "../../UI-kit/EditableSpan/EditableSpan";
import {Input} from "../../UI-kit/Input/Input";
import {Radio} from "../../UI-kit/Radio/Radio";
import {Select} from "../../UI-kit/Select/Select";
import {Range} from "../../UI-kit/Range/Range";
import {Header} from "../Header/Header";

export const TestPage = () => {
    const arr: string[] = ["apple", "grape", "cherry"];
    const [value, onChangeOption] = useState(arr[1]);
    const [rangeValue, setRangeValue] = useState(50);
    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked);
    };
    const changeHandler = (value: number) => {
        setRangeValue(value);
    };

    return (
        <>
            <Header/>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "80vh",
                    marginTop: "5rem",
                }}
            >
                <Button>button</Button>
                <Checkbox checked={checked} onChange={testOnChange}/>
                <EditableSpan/>
                <Radio value={value} options={arr} onChangeOption={onChangeOption}/>
                <Input/>
                <span style={{fontSize: "1.7rem"}}>{rangeValue}</span>
                <Range onChangeRange={changeHandler} value={rangeValue}/>
                <Select value={value} options={arr} onChangeOption={onChangeOption}/>
            </div>
        </>

    );
};
