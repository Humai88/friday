import { Card, CardActions, CardContent } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppStore } from "../../redux/store";
import { Button } from "../../UI-kit/Button/Button";
import styles from "./Learn.module.css";

const Learn = () => {
    const history = useHistory();
    const status = useSelector((state: AppStore) => state.app.status);

    return (
        <div style={{padding: "0 20px"}}>
            <Card className={styles.card} sx={{ maxWidth: 413, minHeight: 300, margin: "100px auto" }}>
                <CardContent>
                    <h2>Learn “Pack Name”</h2>

                    <p><b>Question</b>: “How "This" works in JavaScript?”</p>
                </CardContent>
                <CardActions className={styles.actions}>
                    <Button
                        className={styles.cancelBtn}
                        purple
                        onClick={() => {
                            history.goBack();
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        className={styles.registerBtn}
                        type={"submit"}
                        onClick={()=> alert('нужна логика')}
                        disabled={status === "loading"}
                    >
                        Show answer
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Learn;