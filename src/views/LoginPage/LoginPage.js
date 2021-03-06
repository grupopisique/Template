import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import axios from 'axios';

import TextField from '@material-ui/core/TextField';



import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/capa.png";
import loginStyle from "assets/jss/material-kit-react/views/componentsSections/loginStyle";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const loginCount = () => {

    axios({
      method: 'get',
      url: 'http://localhost:3000',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    if (email == 'adrian@pisique.com.br' && password == 123456) {
      console.log('Login realizado com sucesso!!!!')
    }

    if (email != 'adrian@pisique.com.br' || password != 123456) {
      console.log('Atenção! Algo de errado não esta certo')
    }
  }

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Grupo Pisiquê"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          // backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader style={{ backgroundColor: '#5586df', color: '#fff' }} className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>

                    <TextField
                      style={{ width: '100%', marginBottom: 20 }}
                      required
                      label="Email"
                      onChange={email => setEmail(email.currentTarget.value)}
                    />

                    <TextField
                      style={{ width: '100%' }}
                      label="Senha"
                      type="password"
                      autoComplete="current-password"
                      onChange={password => setPassword(password.currentTarget.value)}
                    />

                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" onClick={() => loginCount()}>
                        Entrar
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
