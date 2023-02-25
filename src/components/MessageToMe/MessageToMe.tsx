import classes from './MessageToMe.module.css';

function MessageToMe(children:any) {

  return (
    <div className={classes.main}>
      {children.children}
    </div>
  );
}

export default MessageToMe;
