import classes from './Loader.module.css';

function Loader(children: any) {

  return (
    <div className={classes.wrapper}>
      <div className={classes.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
    </div>

  );
}

export default Loader;
