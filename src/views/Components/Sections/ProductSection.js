import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import { Map, AccountBalance, RecordVoiceOver } from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import Logo from "../../../assets/img/calendar.png";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Eventos"
            description="Organizamos palestras e  rodas de conversas para melhor levar a informação para a comunidade, de forma direta e segura."
            // icon={Logo}
            icon={Map}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Atendimento"
            description="Facilitamos o acesso de pessoas com problemas mentais com os profissionais que são os corretos para atendelos."
            icon={AccountBalance}
            iconColor="success"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Informação"
            description="Organizamos palestras e  rodas de conversas para melhor levar a informação para a comunidade, de forma direta e segura."
            icon={RecordVoiceOver}
            iconColor="info"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
