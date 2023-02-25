import classes from './Message.module.css';

function Message(children:any) {

  return (
    <div className={classes.main}>
      {children.children}
    </div>
  );
}

export default Message;
