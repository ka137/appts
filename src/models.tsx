// модели объектов для корректной работы TS
export interface userModel {
    name: string | null;
    surname: string | null;
    age: number | null;
    avatar: string;
    bacgroundImg: string;
    about: string;
    id:string;
    posts:any;
}
export interface Post {
    id: number;
    data: any;
    main: string | null;
    img: string;
    likes: number;
    user:any;
}