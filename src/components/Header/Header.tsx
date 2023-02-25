import classes from './Header.module.css';
import { user } from '../../user'
import logo from '../../images/logo.svg'
import {Link } from "react-router-dom";
// особо нечего описывать, взял юзера да и вставил его аватарку с именем
function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.header__inner}>
          <Link className={classes.header__logo} to ="/appts"><img className={classes.header__logo} src={logo} alt="logo" /></Link>
          <Link className={classes.user} to={`/profile/${user.id}`} state = { user } >
              <img className={classes.user__avatar} src={user.avatar} alt="avatar" />
              <div className={classes.user__text}>
                {user.name}
              </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Header;
