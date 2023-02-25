import classes from './Post.module.css';
import { useState,useEffect} from 'react';
import likesblue from '../../images/likes-blue.svg'
import likesbtn from '../../images/likes-btn.svg'
import { Link } from "react-router-dom";
import { users } from '../../users';
import { GetData } from '../../functions/GetData';
function Post(post: any) {
  // это все чтобы лайки работали
  const [like, setLikes] = useState(post.post.likes)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    setIsLiked(post.post.isPostLiked)
  }, []);

  const likePost = () => {
    if(isLiked === false ){
      post.post.likes += 1
      setLikes(post.post.likes )
      post.post.isPostLiked = true
      setIsLiked(post.post.isPostLiked)
    }
    else{
      post.post.likes -= 1
      setLikes(post.post.likes)
      post.post.isPostLiked = false
      setIsLiked(post.post.isPostLiked)
    }

  }
  // проверяю чей ID из пользователей совпадает с ID автора поста после чего помещаю его в author 
  // для удобной работы
  let author: any = {}
  for (let i of users) {
    if (i.id === post.post.authorId) {
      author = i
    }
  }

  // для проверки имеется ли картинка и текст в посте
  let isImg = false
  if (typeof (post.post.img) === 'string') {
    isImg = true
  }
  let isText = false
  if (post.post.main !== "") {
    isImg = true
  }
  let result :any = 0
  result = GetData(post.post.data,result)
  

  return (
    <div className={classes.post}>
      <Link to={`/profile/${author.id}`} >
        <div className={classes.post__top}>
          <img className={classes.user__avatar} src={author.avatar} alt="avatar" />
          <div className={classes.user__wrapper}>
            <div className={classes.user__name}>{author.name} {author.surname}</div>
            <div className={classes.user__post_data}>{result}</div>
          </div>
        </div>
      </Link>
      <div className={classes.post__main}>
        {isText
          ? <></>
          : <div className={classes.post__text}>{post.post.main}</div>
        }
        {isImg
          ? <img className={classes.post__img} src={post.post.img} />
          : <></>
        }


      </div>
      <div className={classes.post__likes}>
        <img className={classes.post__likes_logo} src={likesblue}></img>
        <div className={classes.post__likes_num}>{like}</div>
      </div>
      <div className={classes.post__bot}>
        <div className={classes.post__line}></div>
        <button className={classes.post__like_btn}
            onClick={likePost}>
            <img className={classes.post__like_img} src={likesbtn} alt="Like" />
            Like
          </button>


      </div>
    </div>
  );
}

export default Post;
