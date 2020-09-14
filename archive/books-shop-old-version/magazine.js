var app = new Vue({
    el:"#app",
    data:{
        visiblenav: true,
        user:{
            Name: "Alex",
            Coutry:"UK",
            Money: 45,
            Purchase:[1],
            MyLike:[1]
        },
        books:[
            {Id:1,Author:"Братья Стругацкие", Title:"Обитаемый остров",Money: 10,Likes:25,Discription:"Главный герой попадает на планету и совершает революцию."},
            {Id:2,Author:"Михаил Лермонтов", Title:"Герой нашего времени",Money: 15,Likes:13,Discription:"Главный герой рушит все вокруг себя и погибает сам"},
            {Id:3,Author:"Федор Достовевский", Title:"Преступление и наказание",Money: 13,Likes:65,Discription:"Герой из принципа идет на убийство"},
            {Id:4,Author:"Андрей Цифровой", Title:"Алгоритм как он есть",Money: 10,Likes:25,Discription:"Основый программирования -- алгоритмы"},
            {Id:5,Author:"Виктор Коневский", Title:"За доброй надеждой",Money: 10,Likes:25,Discription:"Роман странствие"},
            {Id:6,Author:"Михаил Жванецкий", Title:"Избранное",Money: 15,Likes:13,Discription:"Самые лучшие шутки самого известного сатирика"},
            {Id:7,Author:"Алексей Толстой", Title:"Гиперболоид инженера Гарина",Money: 32,Likes:65,Discription:"Роман о попытке осчастливить человечество"},
            {Id:8,Author:"Алексей Толстой", Title:"Петр Первый",Money: 10,Likes:25,Discription:"О жизни императора России Петра Первого"},
            {Id:9,Author:"Лев Толстой", Title:"Война и мир",Money: 9,Likes:54,Discription:"События 1812 года"},
            {Id:10,Author:"Александр Пушкин", Title:"Стихи и поэмы",Money: 32,Likes:13,Discription:"Избранные стихи и поэмы великого поэта"},

            {Id:11,Author:"Станислав Лем", Title:"Солярис",Money: 17,Likes:65,Discription:"Роман о разумном океане"},
            {Id:12,Author:"Михаил Лермонтов", Title:"Стихи",Money: 16,Likes:44,Discription:"Избранные стихи поэта"},
            {Id:13,Author:"Артур Конан Дойл", Title:"Рассказы о Шерлоке Холмса",Money: 32,Likes:65,Discription:"Рассказы о великом сыщике"},
            {Id:14,Author:"Юлиан Семенов", Title:"Семнадцать мгновений весны",Money: 89,Likes:25,Discription:"Как наша развездка боролось с фашизмом"},
            {Id:15,Author:"Евгений Лукин", Title:"С нами бот",Money: 13,Likes:67,Discription:"Современный роман о боте "},
            {Id:16,Author:"Михаил Задорнов", Title:"Избранное",Money: 12,Likes:13,Discription:"Самые лучшие шутки самого известного сатирика"},
            {Id:17,Author:"Владмимир Даль", Title:"Словарь русского языка",Money: 7,Likes:10,Discription:"Словарь русского языка"},
            {Id:18,Author:"Андрей Цифровой", Title:"Компьютер как он есть",Money: 7,Likes:12,Discription:"Устройство персонального компьютера для чайников"},
            {Id:19,Author:"Андрей Цифровой", Title:"Сервер как он есть",Money: 7,Likes:21,Discription:"Принципы работы сервера"},
            {Id:20,Author:"Александр Пушкин", Title:"Капитанская дочка",Money: 7,Likes:23,Discription:"Роман о Пугачевском бунте"}
        ]
    },
    methods:{
        userlike:function(id){
            this.user.MyLike.push(id)
            this.books[id-1].Likes++
            return false
        }
    }

})