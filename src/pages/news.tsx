import { ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header/Header';
import NewsFeed from '../components/NewsFeed/NewsFeed.tsx';
import SideBar from '../components/SideBar/SideBar';
import Stories from '../components/Stories/Stories';
function News() {
  return (
    <>
      <Header></Header>
       <div className='container' >
        <SideBar></SideBar>
        <NewsFeed></NewsFeed>
        <Stories></Stories>
      </div>
      <ScrollRestoration /> 
    </>
  )
}
export default News;
