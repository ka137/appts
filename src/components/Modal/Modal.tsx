import classes from './Modal.module.css';

function Modal({ children,visible,setVisible }:any) {

  const rootClasses = [classes.myModal]
  if(visible === true){
      rootClasses.push(classes.active);
  }

  return (
      <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
          <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
              {children}
          </div>
      </div>
  )
}

export default Modal;