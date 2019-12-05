/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, AssignmentIndRounded } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
          Inicial
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
          Nossa História
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
          Eventos
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/voluntario"
          color="transparent"
          className={classes.navLink}
        >
          <AssignmentIndRounded/>
          Ser Voluntário
        </Button>
      </ListItem>

      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Ser Voluntário"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={AssignmentIndRounded}
          dropdownList={[
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCDlL2_U_I8eV0fXBrOuqdb8ZqO7OE1cOSTvSD8GBbsOxoZg/viewform"
              target="_blank"
              className={classes.dropdownLink}
            >
              Psicólogo / Psiquiatra
            </a>,
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCDlL2_U_I8eV0fXBrOuqdb8ZqO7OE1cOSTvSD8GBbsOxoZg/viewform"
              target="_blank"
              className={classes.dropdownLink}
            >
              Estudante de Psicologia
            </a>
          ]}
        />
      </ListItem> */}

      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
          Doações
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/equipe"
          color="transparent"
          className={classes.navLink}
        >
          Equipe
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Nos siga no Facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/grupopisique"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Nos siga no Instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/grupopisique"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="youtube-tooltip"
          title="Nos siga no YouTube"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.youtube.com/channel/UCcZH1WoM_pb9suBktOtBCVw"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-youtube"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
