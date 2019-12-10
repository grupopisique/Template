import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";

import Carousel from "react-slick";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";

import image1 from "assets/img/b1.jpg";
import image2 from "assets/img/b2.jpg";
import image3 from "assets/img/b3.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {

  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

  // const primary = '#F44336'

  return (
    <div className={classes.section} style={{ backgroundColor: '#7159c1' }}>
      {/* <div className={classes.section} style={{ backgroundColor: '#493980' }}> */}
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3 style={{color: '#fff'}}>Nossos Encontros</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              {/* <h3>
                <small>Tabs with Icons on Card</small>
              </h3> */}
              <CustomTabs
                // plainTabs
                // style={{headerColor: '#333'}}
                headerColor='success'
                // headerColor='primary'
                tabs={[
                  {
                    tabName: "Publico Alvo",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
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
                      <p className={classes.textCenter}>
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
                      <p className={classes.textCenter}>
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

            <GridItem xs={12} sm={12} md={6}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img src={image1} alt="First slide" className="slick-image" />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Parque do Cocó, Fortaleza/Ce
                    </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        IFCE - Campus Fortaleza, Fortaleza/Ce
                    </h4>
                    </div>
                  </div>
                  <div>
                    <img src={image3} alt="Third slide" className="slick-image" />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Parque do Cocó, Fortaleza/Ce
                    </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
