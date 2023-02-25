import classes from './Chat.module.css';
import { messagesMas } from '../../messagesMas';
import Message from '../Message/Message';
import MessageToMe from '../MessageToMe/MessageToMe';
import { user } from '../../user';
import { users } from '../../users';
import { Link } from 'react-router-dom';
import { useState } from 'react'
function Chat() {
  // чтобы получать тело сообщения
  const [mes, setMes] = useState({ body: '' })
  //чтобы развернуть чат который уже есть
  const [chat, setChat] = useState(() => {
    return messagesMas.messages.map((message: any) => {
      if (message.from === user.id) {
        return (<Message key={message.id}>{message.body}</Message>)
      }
      else {
        return (<MessageToMe key={message.id}>{message.body}</MessageToMe>)
      }
    })
  })

  // после отрисовки всего чата скроллю в самый низ страницы
  window.scrollTo(0, document.body.scrollHeight)
  const scrollAndClear = () => {
    setMes({ body: '' })
    window.scrollTo(0, document.body.scrollHeight)
  }

  // чтобы отрисовать сверху имя и аватарку собеседника
  let interlocutor: any = {}
  for (let i of users) {
    if (i.id === messagesMas.toWhom) {
      interlocutor = i
    }
  }

  const sendAndDraw: any = () => {
    //проверяю не пустое ли сообщение
    if (mes.body !== '') {
      // cоздаю объект который отпарвлю в масив, передаю туда свой id и разворачиваю туда тело сообщения
      messagesMas.messagesCount += 1
      const message = { from: user.id, ...mes, id: messagesMas.messagesCount }
      //отправил
      messagesMas.messages.push(message)

      //перерисовываю собственно чат
      setChat(() => {
        setTimeout(scrollAndClear, 0)
        return messagesMas.messages.map((message: any) => {
          if (message.from === user.id) {
            return (<Message key={message.id}>{message.body}</Message>)
          }
          else {
            return (<MessageToMe key={message.id} >{message.body}</MessageToMe>)

          }

        })
      })
    }
  }
  // чтобы сообщения отправлялись по нажатию на enter
  // const onKeyDown = (e: any) => {
  //   if (e.keyCode == 13 && timeout === false) {
  //     sendAndDraw()
  //   }
  // }
  // document.addEventListener('keyup',onKeyDown)
  return (
    <div className={classes.wrapper}>
      <div className={classes.main__top_line}></div>
      <div className={classes.main__top}>
        <div style={{ width: '40px' }}></div>
        <Link className={classes.main__title} to={`/profile/${messagesMas.toWhom}`} ><div >{interlocutor.name} {interlocutor.surname} </div></Link>
        <Link className={classes.main__avatar} to={`/profile/${messagesMas.toWhom}`} ><img src={interlocutor.avatar}></img></Link>
      </div>
      <div className={classes.main}>
        {chat}
      </div>
      <div className={classes.main__bot_line}></div>
      <div className={classes.main__bot}>
        <div style={{ width: '35px' }}></div>
        <input className={classes.main__input}
          type="text"
          placeholder="напишите сообщение"
          value={mes.body}
          // получаю тело сообщения
          onChange={e => setMes({ body: e.target.value })}
        />
        {/* при нажатии на кнопку отправляю сообщение  */}
        <button className={classes.main__button} onClick={() => { sendAndDraw() }}></button>


      </div>

    </div>

  );
}

export default Chat;
