import { Link } from 'react-router-dom';
import classes from './SideBar.module.css';
import { user } from '../../user';
function SideBar() {

  return (
    <div className={classes.main}>
      <Link className={classes.link} to = {`/profile/${user.id}`}>Мой профиль</Link>
      <Link className={classes.link} to = '/appts'>Новости</Link>
      <Link className={classes.link} to = '/messages'>Мессенджер</Link>
    </div>
  );
}

export default SideBar;
