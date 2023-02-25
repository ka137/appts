import { ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useLocation } from "react-router-dom";
import { users } from '../users'
import ProfileMain from '../components/ProfileMain/ProfileMain.tsx';
import Post from '../components/Post/Post';
import SideBar from '../components/SideBar/SideBar';
import Stories from '../components/Stories/Stories';
import { useState } from 'react';
import Loader from '../components/Loader/Loader';
function Profile() {
    const [ProfileLoading, setProfileLoading] = useState(true)
    // через стейт получаю путь на котором находится пользователь
    let state = useLocation()
    // убираю первые 9 элементов ссылки чтобы остался только ID
    let userID = state.pathname.slice(9);
    //пробегаюсь по маисву пользователей чтобы найти человека,чью страницу открыл пользователь
    // после чего помещаю его в user для удобной работы 
    let user: any = {}
    for (let i of users) {
        if (i.id === userID) {
            user = i
        }

    }

    // имитирую загрузку данных о пользователе
    const latency:any = () => {
        setProfileLoading(false)
      }
    
    setTimeout( latency, 400)
      
    return (
        <>
            <Header></Header>
            <div className='container' >
                <SideBar></SideBar>
                {ProfileLoading
                    ? <Loader></Loader>
                    : <div>
                        <ProfileMain></ProfileMain>
                        {/* пробегаюсь по постам пользователя и рисую каждый пост что у него есть */}
                        {user.posts.map((post: any) => {
                            return (
                                <Post post={post} key = {post.id}></Post>
                            );
                        })}
                    </div>
                }

                <Stories></Stories>
            </div>
            <ScrollRestoration />
        </>
    )
}
export default Profile;