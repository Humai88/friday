import React, { ChangeEvent, useState } from "react";
import { Button } from "../../UI-kit/Button/Button";
import { Checkbox } from "../../UI-kit/Checkbox/Checkbox";
import { EditableSpan } from "../../UI-kit/EditableSpan/EditableSpan";
import { Input } from "../../UI-kit/Input/Input";
import { Radio } from "../../UI-kit/Radio/Radio";
import { Select } from "../../UI-kit/Select/Select";
import { Range } from "../../UI-kit/Range/Range";
import { Header } from "../Header/Header";
import { authAPI } from "../../api/api";
import styles from "./TestPage.module.css";
import { navLinksTest } from "../Routes/Routes";

export const TestPage = () => {
    const arr: string[] = ["apple", "grape", "cherry"];
    const [value, onChangeOption] = useState(arr[1]);
    const [rangeValue, setRangeValue] = useState(50);
    const [checked, setChecked] = useState<boolean>(false);
    const [response, setResponse] = useState<any>();
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked);
    };
    const changeHandler = (value: number) => {
        setRangeValue(value);
    };
    const login = () => {
        authAPI
            .login("nya-admn@nya.nya", "1qazxcvBG", true)
            .then((res) => {
                setResponse(JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const me = () => {
        authAPI
            .me()
            .then((res) => {
                setResponse(JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const register = () => {
        authAPI
            .register("blabla@nya.nya", "1qazxcvBG")
            .then((res) => {
                setResponse(JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const changeInfo = () => {
        authAPI
            .changeInfo("New Name", "https://i.mydramalist.com/67r8d_5_c.jpg")
            .then((res) => {
                setResponse(JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const logout = () => {
        authAPI
            .logout()
            .then((res) => {
                setResponse(JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const forgotPassword = () => {
        authAPI
            .forgotPassword("blabla@nya.nya", "gumay88@mail.ru", "My message")
            .then((res) => {
                setResponse(JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Header arrayLinks={navLinksTest} className={styles.header} testPage/>

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
                <Radio
                    value={value}
                    options={arr}
                    onChangeOption={onChangeOption}
                />
                <Input/>
                <span style={{fontSize: "1.7rem"}}>{rangeValue}</span>
                <Range onChangeRange={changeHandler} value={rangeValue}/>
                <Select
                    value={value}
                    options={arr}
                    onChangeOption={onChangeOption}
                />
                <div className={styles.requestsWrapper}>
                    <Button onClick={login}>Login Request</Button>
                    <Button onClick={register}>Register</Button>
                    <Button onClick={me}>Show User</Button>
                    <Button onClick={changeInfo}>Change Info</Button>
                    <Button onClick={logout}>Logout</Button>
                    <Button onClick={forgotPassword}>Forgot Password</Button>
                </div>
                <div style={{width: "800px"}}>{response}</div>
            </div>
        </>
    );
};
