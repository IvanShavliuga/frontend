const book = (author, title, ganre, year, url, image, textbook) => ({author, title, ganre, year, url, image, textbook})
const message= (title, author_id, text, read) => ({title, author_id, text, read})
const user = (nik, login, password, email, user_id) => ({nik, login, password, email, user_id})
 const books = [
  book('Маханенко Василий','Рестарт', 'ЛитРПГ',2018,
      'http://mirknig.su/audiobook/abelletristika/253158-restart-audiokniga.html','images/restart.jpg',
      'Игре чужды эмоции и переживания, основная ее цель – быть целостной и выполнять возложенные на нее функции. Все остальное – вторично. Однако есть исключения. Те, кто имеет право нажимать на кнопку «рестарт», стоят особняком относительно других игроков. Они – избранные. Они – на вершине. Они – смертники. Стоит ли быть одним из них, или довольствоваться ролью Проводника – вопрос, на который должен найти ответ Ярополк.'),
    book('Три посвящённых','Кибалион. Философия герметизма', 'Философия',2005,
        'http://mirknig.su/audiobook/abelletristika/252856-kibalion-filosofiya-germetizma-audiokniga-chitaet-tri-posvyaschennyh.html','images/kibalion.jpg',
        'Аудиокнига "Кибалион” – это источник открывающий путь к Храму Знаний.'),
    book('Дэн Абнетт','Возвышение Хоруса', 'Фантастика',2012,
        'http://mirknig.su/audiobook/abelletristika/252853-vozvyshenie-horusa-audiokniga-chitaet-gel2323.html','images/horus.jpg',
        'То было легендарное время. Великий Крестовый Поход нес свет Имперских Истин в самые темные уголки Галактики, возвращая разрозненные миры человечества в лоно Империума и стирая чуждые расы с лица истории.'),
    book('Владимир Малышков','Бай-бай, Храпелкин', 'Фентези',2012,
        'http://mirknig.su/audiobook/abelletristika/252851-bay-bay-hrapelkin-audiokniga-chitaet-aktery-teatra-im-terezy-durovoy.html','images/hrapelkin.jpg',
        'По сюжету – умная, добрая сказка, определённая авторами как «музыкальные сновидения для детей и родителей». По жанру – классический детский мюзикл. Спектакль театра им. Терезы Дуровой, изданный ими же на двух дисках.'),
    book('Уилл Макинтош','Фоллер','Фантастика',2018,'http://mirknig.su/knigi/fantastika/256234-foller.html','images/foller.jpg','Фоллер открывает глаза. Наступает День Первый.\n' +
        'Ужасающая картина из обломка земли, повисшего в небе, разрушенных зданий и выщербленного асфальта. Кругом голод и паника. Что произошло? Почему люди не помнят друг друга?\n' +
        'В кармане Фоллера – подсказки. Фотография незнакомой девушки. Рисунок, написанный кровью. Фигурка игрушечного парашютиста.\n' +
        'Фоллер понимает: его мир не единственный.\n' +
        'И решается на прыжок с края мира.\n'),
    book('Сафон Карлос Руис','Марина', 'Мистика',2018,
        'http://mirknig.su/audiobook/abelletristika/252854-marina-audiokniga-chitaet-knyazev-igor.html','images/marina.jpg',
        'Марина – самый любимый, по собственному признанию Сафона, его роман. Испания. Барселона. Весна. Один из дежурных на Французском вокзале узнает в толпе юношу, объявленного в розыск. Целую неделю его искали знакомые, друзья, преподаватели школы-интерната. Полиция сбилась с ног. Где он был все это время? Как провел эти дни? «У каждого из нас есть секрет, тщательно запертый на все замки в самом тёмном углу на чердаке души», – так Оскар начинает свой рассказ о той странной волшебной ночи, когда судьба подарила ему встречу с Мариной.')




]
const messages= [
    message('Поздравляем с регистрацией',0,'Вы успешно прошли регистрацию на сайте',false),
    message('Добавлена новая книга',0,'Братья Стругацкие -- Волны гасят ветер',false)

]
const users = [
    user('admin','admin','qwerty','admin@test.ru',0),
    user('ivan','ivan','12345','ivan@test.ru',1)
]
new Vue({
  el: '#app',
  data: {
    books: books,
    book: books[0],
    messages:messages,
    message: messages[0],
    users:users,
      user:users[1],
      reguserdata:users[1],
    selectedCarIndex: 0,
    showmessagesbox: false,
    modalVisibility: false,
    showsettings:false,
    showmain:true,
      showerror: false,
    search: ''
  },
  methods: {
    selectCar: function(index) {
      this.book = books[index]
      this.selectedCarIndex = index
      this.gotobox(0)
    },
    gotobox: function(ind){
      if(ind==0){
          this.showmessagesbox=false
          this.showsettings=false
          this.showmain=true
      }else if(ind==1){
          this.showmessagesbox=true
          this.showsettings=false
          this.showmain=false
      }else if(ind==2){
          this.showmessagesbox=false
          this.showsettings=true
          this.showmain=false
      }

    },
    changeuser: function(){

        if(this.reguserdata.nik.length==0||this.reguserdata.login.length==0||this.reguserdata.email.length==0||this.reguserdata.password.length==0) {
            this.showerror = true

        }else {
            this.showerror = false
            this.user=this.reguserdata
            this.gotobox(0)
        }

    }

  },
  computed: {
    phonetext() {return this.phoneVisibility?"Hide phone":"Show phone"},
      filteredBooks() {
          return this.books.filter(book => {
              return book.author.indexOf(this.search) > -1 || book.title.indexOf(this.search) > -1 || book.ganre.indexOf(this.search) > -1
          })
      }
  }
})