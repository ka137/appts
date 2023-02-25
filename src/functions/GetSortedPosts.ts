import { users } from "../users";
let allPosts: any = []

export const GetSortedPosts = (setIsLoading:any) => {
  allPosts = []

  // получаю все посты что есть у каждого человека
  {users.map((user: any) => {
    return (
      user.posts.map((post: any) => {
        return allPosts.push(post)
      })
    );

  })}

  // сортирую их по ID
  allPosts.sort(function (a:any, b:any) {
    if (a.id < b.id) {
      return 1;
    }
    if (a.id > b.id) {
      return -1;
    }
    return 0;
  });


  // этот код имитирует время получения постов с сервера 
  const latency:any = () => {
    setIsLoading(false)
  }
  setTimeout( latency, 400)

  
  return allPosts
}
