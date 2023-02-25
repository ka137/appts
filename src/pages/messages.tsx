import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import Stories from '../components/Stories/Stories';
import Chat from '../components/Chat/Chat';
function Messages() {
  return (
    <>
      <Header></Header>
      <div className='container' >
        <SideBar></SideBar>
        <Chat></Chat>
        <Stories></Stories>
      </div>


    </>
  )
}
export default Messages;
