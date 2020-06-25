import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <nav className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>Karantin</div>
          <ul className={styles.navigation}>
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/"
                className={styles.navItemLink}
                activeClassName={styles.selected}
              >
                <p className={styles.navItemLinkText}>Домой</p>
              </NavLink>
            </li>
            {this.props.isAuntificated && (
              <>
                <li className={styles.navItem}>
                  <NavLink
                    to="/userslist"
                    className={styles.navItemLink}
                    activeClassName={styles.selected}
                  >
                    <p className={styles.navItemLinkText}>Записи</p>
                  </NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink
                    to="/new-item"
                    className={styles.navItemLink}
                    activeClassName={styles.selected}
                  >
                    <p className={styles.navItemLinkText}>Добавить</p>
                    <p className={styles.navItemLinkText}>запись</p>
                  </NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink
                    to="/"
                    onClick={this.props.autentificate}
                    className={styles.navItemLink}
                  >
                    <p className={styles.navItemLinkText}>Logout</p>
                  </NavLink>
                </li>
              </>
            )}
            {!this.props.isAuntificated && (
              <li className={styles.navItem}>
                <NavLink
                  to="/login"
                  className={styles.navItemLink}
                  activeClassName={styles.selected}
                >
                  <p className={styles.navItemLinkText}>Login</p>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

// const mapStateToProps = (state) => ({
//   isAuntificated: state.isAuntificatedState,
// });

// const mapDispatchToProps = (dispatch) => ({
//   autentificate: () => dispatch(isAuntificatedSlice.actions.auntentificate()),
// });
// export default connect(mapStateToProps)(Header);

export default Header;
