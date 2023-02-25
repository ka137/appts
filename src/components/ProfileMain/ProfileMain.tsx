import { useLocation } from "react-router-dom";
import classes from './ProfileMain.module.css'
import { users } from "../../users";
import { useState } from "react";
import Modal from "../Modal/Modal";
function ProfileMain() {
    // тут так же, просто получаю пользователя по ID чтобы отрисовать то, что мне нужно
    let state = useLocation()
    let userID = state.pathname.slice(9);
    let user: any = {}
    for (let i of users) {
        if (i.id === userID) {
            user = i
        }

    }

    const [modal, setModal] = useState(false)
    const [avatar, setAvatar] = useState(false)
    return (
        <>

            <div className={classes.main}>
                <div className={classes.main__bacgound} style={{ backgroundImage: `url(${user.bacgroundImg})` }}></div>
                <img className={classes.main__avatar} src={user.avatar} onClick={() => setModal(true)}></img>
                <Modal visible={modal} setVisible={setModal}>
                    <img className={classes.main__avatar_modal} src={user.avatar}></img>
                </Modal>
                <div className={classes.main__name}>{user.name} {user.surname}</div>
                <div className={classes.main__about}>{user.about}</div>
                <div className={classes.main__more} onClick={() => setAvatar(true)} >подбробнее</div>
                <Modal visible={avatar} setVisible={setAvatar}>
                    <div className={classes.modal}>
                        <div className={classes.modal__top}>
                            <div className={classes.modal__title}>Подбробная информация</div>
                        </div>
                        <div className={classes.modal__line}></div>
                        <div className={classes.modal__main}>
                            <ul className={classes.modal__ul}>
                                <li className={classes.modal__li}>
                                    <div className={classes.modal__subtitle}>ID : </div>
                                    <div className={classes.modal__text}> {user.id}</div>
                                </li>
                                <li className={classes.modal__li}>
                                    <div className={classes.modal__subtitle}>Гендер : </div>
                                    <div className={classes.modal__text}> {user.gender}</div>
                                </li>
                                <li className={classes.modal__li}>
                                    <div className={classes.modal__subtitle}>Описание : </div>
                                    <div className={classes.modal__text}> {user.about}</div>
                                </li>
                                <li className={classes.modal__li}>
                                    <div className={classes.modal__subtitle}>Язык : </div>
                                    <div className={classes.modal__text}> {user.language}</div>
                                </li>
                                <li className={classes.modal__li}>
                                    <div className={classes.modal__subtitle}>Увлечения : </div>
                                    <div className={classes.modal__text}> {user.hobby}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal>
            </div>

        </>

    )

}
export default ProfileMain; 