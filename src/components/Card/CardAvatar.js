import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "./cardAvatarStyle";

const useStyles = makeStyles(styles);

export default function CardAvatar(props) {
  const classes = useStyles();
  const { children, className, plain, profile, ...rest } = props;
  /*
  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [className]: className !== undefined
  });
  */

  //     <div className={cardAvatarClasses} {...rest}>
  return (
    <div className={classes.cardAvatarProfile} {...rest}>
      {children}
    </div>
  );
}

/*
CardAvatar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  profile: PropTypes.bool,
  plain: PropTypes.bool
};
*/