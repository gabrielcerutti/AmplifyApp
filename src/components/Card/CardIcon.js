import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "cardIconStyle.js";

const useStyles = makeStyles(styles);

export default function CardIcon(props) {
  const classes = useStyles();
  const { className, children, color, ...rest } = props;

  /*
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[color + "CardHeader"]]: color,
    [className]: className !== undefined
  });
  */
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

/*
CardIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  children: PropTypes.node
};

*/
