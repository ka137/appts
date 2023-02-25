import Post from '../Post/Post';
import classes from './NewsFeed.module.css';
import { GetSortedPosts } from '../../functions/GetSortedPosts';
import Loader from '../Loader/Loader';
import { useState } from 'react';
function NewsFeed() {
  const [isLoading,setIsLoading] = useState(true)
  console.log(isLoading)

  let posts: any = []
  posts = GetSortedPosts(setIsLoading)
  
  return (
    <div className={classes.main}>
      {isLoading
        ? <Loader></Loader>
        : <>
          {posts.map((post: any) => {
            return (<Post post={post} key = {post.id}></Post>)
          })}
        </>
      }



    </div>
  );
}

export default NewsFeed;
