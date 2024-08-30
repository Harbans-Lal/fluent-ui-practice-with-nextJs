import * as React from "react";
import Form from "./Form";
import {
  makeStyles,
  Body1,
  Caption1,
  Button,
} from "@fluentui/react-components";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";
import {
  Card,
  CardFooter,
  CardHeader,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "450px",
    maxWidth: "100%",
  },
});

 const Register = () => {
  const styles = useStyles();

  return (
    <>
    <div>
        <Card className={styles.card}>
            <CardHeader
                header={
                <Body1>
                    <h1 className="text-2xl text-center">The Products</h1>
                </Body1>
                }
            />
            <Form />
        </Card>
    </div>
  

    </>
  );
};

export default Register;