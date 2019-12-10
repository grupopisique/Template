import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import Card from "components/Card/Card.js";

import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";
import image from "assets/img/voluntariado.jpg";
import profileImage from "assets/img/faces/avatar.jpg";


import image1 from "assets/img/b1.jpg";
import image2 from "assets/img/b2.jpg";
import image3 from "assets/img/b3.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

  return (
    <div style={{paddinTop: 30}}>
      <div id="navbar" className={classes.navbar}>
        <div
          className={classes.navigation}
          style={{ backgroundImage: "url(" + image + ")" }}
        />

        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} style={{ marginTop: 30 }}>
              {/* <h3>
                <small>Tabs with Icons on Card</small>
              </h3> */}
              <CustomTabs
                // plainTabs
                // style={{backgroundColor: '#333'}}
                headerColor='info'
                tabs={[
                  {
                    tabName: "Publico Alvo",
                    tabIcon: Face,
                    tabContent: (
                      <p style={{ textAlign: "left", minHeight: 280 }}>
                        A Organização Mundial de Saúde (OMS) surgiu com a proposta de cuidar de questões relacionadas com a saúde global.
                      <br />
                        <br />
                        O objetivo da OMS, de acordo com sua constituição, é garantir a todas as pessoas o mais elevado nível de saúde.
                        <br />
                        <br />
                        → Funções da OMS
                        <br />
                        <br />
                        Proporcionar saúde a toda a população mundial não é uma tarefa fácil e, por isso, a OMS atua de diferentes maneiras para garantir esse objetivo. Como funções que podem ser atribuídas a OMS, podemos citar:
                      </p>
                    )
                  },
                  {
                    tabName: "Conteudos",
                    tabIcon: Chat,
                    tabContent: (
                      <p style={{ textAlign: "left", minHeight: 280 }}>
                        A OMS já conseguiu várias conquistas na luta pelo bem-estar da população mundial. Uma dessas conquistas foi a erradicação da varíola graças aos seus esforços contínuos entre os anos de 1967 e 1979.
                        Outra importante conquista foi a diminuição de cerca de 99% dos casos de poliomielite, um projeto conhecido como Iniciativa Global de Erradicação da Pólio.
                        <br />
                        <br />
                        → Conquistas da OMS
                        <br />
                        <br />
                        Programa Conjunto das Nações Unidas sobre HIV/AIDS (UNAIDS). Esse programa busca pesquisar e combater a epidemia dessa grave doença.
                      </p>
                    )
                  },
                  {
                    tabName: "Funcionamento",
                    tabIcon: Build,
                    tabContent: (
                      <p style={{ textAlign: "left", minHeight: 280 }}>
                        A Organização Mundial de Saúde (OMS) surgiu com a proposta de cuidar de questões relacionadas com a saúde global.
                      <br />
                        <br />
                        O objetivo da OMS, de acordo com sua constituição, é garantir a todas as pessoas o mais elevado nível de saúde.
                        <br />
                        <br />
                        → Funções da OMS
                        <br />
                        <br />
                        Proporcionar saúde a toda a população mundial não é uma tarefa fácil e, por isso, a OMS atua de diferentes maneiras para garantir esse objetivo. Como funções que podem ser atribuídas a OMS, podemos citar:
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>

            {/* <GridItem xs={12} sm={12} md={6}>
            <div className={classes.title}>
              <h3>Menu</h3>
            </div>
            <Header
              brand="Menu"
              color="primary"
              leftLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <CustomDropdown
                      buttonText="Dropdown"
                      dropdownHeader="Dropdown Header"
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Action",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link"
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />
          </GridItem> */}
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Alguns de nossos trabalhos...</h3>
              </div>
              <GridItem xs={12} sm={12} md={6}>
                <Card carousel style={{ minWidth: 500 }}>
                  <Carousel {...settings}>
                    <div>
                      <img src={image1} alt="First slide" className="slick-image" />
                    </div>
                    <div>
                      <img
                        src={image2}
                        alt="Second slide"
                        className="slick-image"
                      />
                    </div>
                    <div>
                      <img src={image3} alt="Third slide" className="slick-image" />
                    </div>
                    <div>
                      <img src={image1} alt="First slide" className="slick-image" />
                    </div>
                    <div>
                      <img
                        src={image2}
                        alt="Second slide"
                        className="slick-image"
                      />
                    </div>
                    <div>
                      <img src={image3} alt="Third slide" className="slick-image" />
                    </div>
                  </Carousel>
                </Card>
              </GridItem>
              {/* <Header
                brand="Icons"
                color="info"
                rightLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Email className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Face className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        left
                        hoverColor="info"
                        dropdownHeader="Dropdown Header"
                        buttonIcon="settings"
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent"
                        }}
                        dropdownList={[
                          "Action",
                          "Another action",
                          "Something else here",
                          { divider: true },
                          "Separated link",
                          { divider: true },
                          "One more separated link"
                        ]}
                      />
                    </ListItem>
                  </List>
                }
              /> */}
            </GridItem>
          </GridContainer>
        </div>


        {/* <Header
            brand="Navbar with notifications"
            color="dark"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Discover
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Wishlist
                  </Button>
                </ListItem>
              </List>
            }
          /> */}
      </div>
    </div>
    // </div>
  );
}
