/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div style={{ paddingBottom: 60 }}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 style={{ color: '#3c4858' }}>Quero me tornar voluntário(a)!</h2>
            <h4 style={{ color: '#3f4b5b' }}>
              A sensibilidade não acontece por acaso, ela advém do amor que o
              homem tem por seu semelhante, do carinho que dedica sua família
              e da força com que ele constrói sua vida. <br />
              Não há limites para quem quer fazer o bem, seja um voluntário.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              style={{ minWidth: 250 }}
              color="success"
              size="lg"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCDlL2_U_I8eV0fXBrOuqdb8ZqO7OE1cOSTvSD8GBbsOxoZg/viewform"
              target="_blank"
            >
              Estudante
            </Button>
            <Button
              style={{ minWidth: 250, marginLeft: 10 }}
              color="primary"
              size="lg"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCDlL2_U_I8eV0fXBrOuqdb8ZqO7OE1cOSTvSD8GBbsOxoZg/viewform"
              target="_blank"
            >
              Profissional
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
