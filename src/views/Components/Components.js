import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Button from '@material-ui/core/Button';
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import AboutUS from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";

import logo from '../../assets/img/bane.png';

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Grupo Pisiquê"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/capa.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem className={classes.boxDashboard}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Grupo Pisiquê.</h1>
                <h3 className={classes.subtitle}>
                  Somos uma startup voltada para o apoio de pessoas que sofrem com transtorno de ansiedade e depressão.
                </h3>
                {/* <Button variant="contained" color="primary" href="/portal">
                  Primary
                </Button> */}
                <Button variant="outlined" style={{ color: '#fff', marginTop: 15, borderColor: '#fff' }} href="/portal">
                  Entrar no Sistema
                </Button>
              </div>
              <div className={classes.brand}>
                <img src={logo} style={{ maxWidth: 450 }} />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <AboutUS />
        <ProductSection />
        <SectionTabs />
        <SectionTypography />

        {/* <SectionJavascript /> */}


        {/* <TeamSection /> */}

        {/* <SectionBasics /> */}
        {/* <SectionNavbars /> */}
        {/* <SectionPills /> */}
        {/* <SectionNotifications /> */}
        {/* <SectionCarousel /> */}


        {/* <SectionLogin /> */}
        {/* <GridItem md={12} className={classes.textCenter}>
          <Link to={"/portal"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              Ver Página de Login
          </Button>
          </Link>
        </GridItem> */}
        {/* <SectionExamples /> */}
        {/* <SectionDownload /> */}
        <Footer />
      </div>
    </div>
  );
}
