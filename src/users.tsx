

// масив пользователей,ничего необычного 

export const users:any = [
    {
        name: 'Кирилл',
        surname: 'Петров',
        age: 32,
        avatar: 'https://funart.pro/uploads/posts/2022-06/1655354794_39-funart-pro-p-lokhmatii-kotenok-zhivotnie-krasivo-foto-44.jpg',
        bacgroundImg: 'https://img.youscreen.ru/wall/14977980291611/14977980291611_1920x1200.jpg',
        about: 'всякое случается...',
        id: '0001',
        language:'Русский',
        hobby:' люблю фотографировать',
        gender:'мужской',
        posts: [{
            id: 6,
            main: "Cходил сегодня погулять , сделал фото с собакой :D",
            data: 1676199999111,
            img: "https://volga-kaspiy.ru/wp-content/uploads/2020/02/vygul-sobak-scaled.jpg",
            likes: 90,
            authorId:'0001',
            isPostLiked:false,
        },
        {
            id: 4,
            main: `Идет женщина домой через парк.
            Вдруг слышит крик.

            — Стоять!

            Она остановилась.

            — Лежать!

            Она легла.

            — Ползи!

            Поползла.

            — Вдруг над ней голос.

            Женщина, вам что плохо?

            — Я тут с собачкой занимаюсь, смотрю вы ползете.`,
            data:1676111399111,
            likes: 56,
            authorId:'0001',
            isPostLiked:false,
        }
        ]
    },
    {
        name: 'Петя',
        surname: 'Иванов',
        age: 16,
        avatar: 'https://zamanilka.ru/wp-content/uploads/2022/07/kotik-ava-060722-1-1024x1024.jpg',
        bacgroundImg: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/270010/4bdbd33eb075f0c7d6d4d3e8a4065aa336b15b73.jpg',
        about: 'я петя!',
        id: '0002',
        language:'Русский',
        hobby:'играю в компьютерные игры',
        gender:'мужской',
        posts: [{
            id: 5,
            main: "Красавец",
            data: 1676161399111,
            img: "https://wpapers.ru/wallpapers/animals/Dogs/17149/download/1280x800_Грустный-хаски.jpg",
            likes: 143,
            authorId:'0002',
            isPostLiked:false,
        }]
    },
    {
        name: 'Дима',
        surname: 'Артемов',
        age: 28,
        avatar: 'https://images.techinsider.ru/upload/img_cache/831/831086d343cf7c352a687991cc0518bf_cropped_1332x1108.jpg',
        bacgroundImg: 'https://pwlight.com/attachments/zhivotnye-enot-milota-pesochnica-735647-jpeg.8504/',
        about: '',
        id: '0003',
        language:'Русский',
        hobby:'сон',
        gender:'мужской',
        posts: [{
            id: 3,
            main: "репостов пока нет но вы держитесь",
            data: 1676025399111,
            img: "https://www.meme-arsenal.com/memes/9f39221090aad4635eb60a8a19e96878.jpg",
            likes: 19,
            authorId:'0003',
            isPostLiked:false,
        }]
    },    
    {
        name: 'Виктория',  
        surname: 'Петровна',
        age: 20,
        avatar: 'https://shutniks.com/wp-content/uploads/2020/01/Multyashnye_kartinki_s_devushkami__dlya_profilya_3_27181708.jpg',
        bacgroundImg: 'https://catherineasquithgallery.com/uploads/posts/2021-12/1639718602_302-catherineasquithgallery-com-p-rozovie-foni-profilya-stim-494.jpg',
        about: '',
        id: '0004',
        language:'Русский',
        hobby:'сон',
        gender:'женский',
        posts: [{
            id: 8,
            main: "красота полей",
            data: 1677154780268,
            img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649112689_54-vsegda-pomnim-com-p-chudesnii-mir-prirodi-foto-57.jpg",
            likes: 292,
            authorId:'0004',
            isPostLiked:false,
        }]
    }, 
    {
        name: 'Бот',
        surname: 'Умный',
        age: '?',
        avatar: 'https://sun6-23.userapi.com/s/v1/ig2/QhQ7dLT0OKQJAPdUwSZxBemZyFXywplsDM5zxpR1ZWKc3WyChFsM-xkOQ12fosDFOD3naeQN4fDPVocFt6Pd4Qur.jpg?size=1400x1400&quality=95&crop=580,172,1400,1400&ava=1',
        bacgroundImg: 'https://webmg.ru/wp-content/uploads/2022/10/i-40-36.jpeg',
        about: '?',
        id: '0000',
        language:'Русский',
        hobby:'я бот',
        gender:'Attack Helicopter',
        posts: [
            {
                id: 7,
                main: "Чат со мной почти заработал,осталось пару мелочей и можно будет писать сообщения всем.Следующая цель создать динамическую пагинацию",
                data: 1677154580268,
                likes: 9999,
                authorId:'0000',
                isPostLiked:false,
            },   
            {
                id: 2,
                main: "На сайте заработали страницы и посты.Скоро будет месенджер,но на момент тестирования общаться можно будет только со мной",
                data: 1675939999111,
                img: "https://www.fonstola.ru/pic/202006/1680x1050/fonstola.ru_395042.jpg",
                likes: 9999,
                authorId:'0000',
                isPostLiked:false,
            },            
            {
                id: 1,
                main: "",
                data: 1675853699111,
                img: "https://fikiwiki.com/uploads/posts/2022-02/1644827971_34-fikiwiki-com-p-mi-otkrilis-krasivie-kartinki-42.png",
                likes: 9999,
                authorId:'0000',
                isPostLiked:false,
            }
        ]
    }
]
