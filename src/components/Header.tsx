import * as React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import MainNav from "./MainNav";

import * as styles from "./header.module.css";

const Header = ({ siteTitle, siteDescription, menuLinks }) => (
  <header id="site-header" className={styles.masthead} role="banner">
    <div className={styles.masthead_info}>
      <Link to="/">
        <div className={styles.site_title}>{siteTitle}</div>
        <div>{siteDescription}</div>
      </Link>
    </div>
    <MainNav menuLinks={menuLinks} />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  menuLinks: PropTypes.array,
};

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
  menuLinks: [],
};

export default Header;
