const store = new Vuex.Store({

    state:{

        news:[{

            title:"I am learn Vuex",

            text:"Vuex is a local data store that allows you to store data in one place. Vuex used in conjunction with Vue.js, vue and Vue router.component in real serious projects. If you like and I will master vuex, vue and Vue router.component, then you will be hired and will be paid a salary.",

            user:"iv2",

            like:200,

            reposts:5,

            id:1,

            views:300,

            link:"news1",

            comments:[]

            

        },{

            title:"What is component?",

            text:"The component is used to divide the functionality of the site into appropriate blocks. For example, one component is responsible for the feedback form. The second is responsible for the news feed and so on. The component is isolated from other components, which ensures its stable operation.",

            like:150,

            reposts:11,

            id:2,

            views:300,

            link:"news2",

            user:'iv2',

            comments:[]

        },{ 

            title:"What is spa",

            text:"SPA is a one-page application. All in one layout, if simple. There are many JavaScript modules that are connected to a single html file. The entire application does not load new pages, but simply executes ajax requests to retrieve data directly. The data in the spa is then displayed in the existing page.",

            like:120,

            reposts:13,

            id:3,

            views:200,

            link:"news3",

            user:"iv2",

            comments:[{

            user:'anonim',

            id:1,

            like:7,

            text:'It is cool'}]

        }],

        user:{

            name:"Ivan Shavliuga",

            login:"iv2",

            date:"2.5.1988",

            prof:"Junior Javascript developer",

            country:"Belarus",

            city:"Novopolotsk",

            gender:"men",

            site:"isschavliuga.ucoz.net"

            

        },

        messages:[{

            from:"support@photos.com",

            to:"iv2@test.com",

            title:"Success registration",

            text:"You have successfully registered on the site test.com",

            date:"1.10.2019",

            time:"13:34:28",

            read:true,

            favorite:true,

            spam:false,

            category:"social network"

        },{

            from:"support@test.com",

            to:"iv2@test.com",

            title:"Success registration",

            text:"You have successfully registered on the site test.com",

            date:"1.10.2019",

            time:"12:30:59",

            read:true,

            favorite:true,

            spam:false,

            category:"admin"

        }],

       courses:[{

           name:"Vue.js",

           category:"web development",

           id:1,

           lessions:16,

           students:38,

           time:"2 month",

           project:"instagram",

           price:110,

           process:3,

           start:"1.10.19"

       },{

           name:"Angular.js",

           category:"web development",

           id:1,

           lessions:16,

           students:42,

           time:"2 month",

           project:"twitter",

           price:160,

           process:0,

           start:"1.11.19"

       }],

       friends:[{

           name:"Jhon Sellenger",

        

           login:"jhon1989",

            date:"2.8.1989",

            prof:"Junior Javascript developer",

            country:"France",

            city:"Leon",

            gender:"men",

            site:"jhon.com"

         },{

            name:"Bob Renferer",

             login:"bob1990",

            date:"2.5.1990",

            prof:"Junior Javascript developer",

            country:"USA",

            city:"New York",

            gender:"men",

            site:"bob.com"

         }],

         names:[{

            name:'Bob',

            gender:'men',

            login:'bob3456',

            date:'24.1.1990',

            prof:'Junior Java developer',

            country:'Canada',

            city:'Ottava',

            site:'bob.com'

          },{

            name:'Thomas',

            gender:'men',

            login:'th657gf',

            date:'23.09.1987',

            prof:'Junior Python developer',

            country:'Germany',

            city:'Berlin',

            site:'thomas.com'

          },{

            name:'Catrin',

            gender:'Women',

            login:'cats',

            date:'9.9.1990',

            prof:'Designer',

            country:'Italy',

            site:'design.it',

            cite:'Rome'

          },{

            name:'Max',

            gender:'men',

            login:'max0xff',

            date:'1.1.88',

            prof:'junior Ruby developer',

            country:'Spain',

            city:'Madrid',

            site:'ruby.com'

          },{

            name:'Samanta',

            gender:'women',

            login:'sam76gj',

            date:'5.5.1986',

            prof:'junior ios developer',

            country:'Spain',

            city:'Madrid',

            site:'ios.com'

          },{

            name:'Ann',

            gender:'women',

            login:'ann6tfj',

            date:'7.7.1985',

            prof:'junior android developer',

            country:'USA',

            sity:'New York',

            cite:'google.com'

          }],

          chats:[{

              msg:'Hi how are you going to JavaScript courses?',

          login:'iv2',

              date:"3.10.19",

              time:'13:40:39'

          },{

              msg:'Hi no I`m not going I have a serious order. I`ll look at the tapes later',

              login:'jhon1989',

              date:'3.10.19',

              time:'13:45:29'

          }]

    },

    getters:{

        user:state=>{return state.user},

        news:state=>{return state.news},

        messages:state=>{return state.messages},

        courses:state=>{return state.courses},

        friends:state=>{return state.friends},

        chats:state=>{return state.chats}

    },

    mutations:{

        addfriends(state,id){

            

            state.friends.push(state.names[id])

        },

        addcom(state,obj){

         

            state.news[obj.id-1].comments.push({

            

            text:obj.text,

            like:0,

            id:state.news[obj.id-1].comments.length+1,

            user:"iv2"

            })

        },

        addnews(state,obj){

            state.news.unshift({

                title:obj.title,

            text:obj.text,

            like:0,

            reposts:0,

            id:state.news.length+1,

            views:0,

            link:"news"+(state.news.length+1),

            user:"iv2",

            comments:[]

            });

        }

    },

    actions:{

        addfriends(context,id){

            context.commit("addfriends",id)

        },

        addcom(context,obj){

            

            context.commit("addcom",obj);

        },

        addnews(context,obj){

            context.commit("addnews",obj);

        }

    }

});
 var curusel =Vue.component("cur",{

       props:["news","slide"],

       

       template:`  <div id="logoCarousel" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators black">
       <li data-target="#logoCarousel" 
              v-for="(i,k) in [0,1,2]"
              :data-slide-to="i" 
              :key='k'
              :class="i===slide?'active':''"></li>
          </ol><div class="carousel-inner">
            <div v-for="(i,k) in [0,1,2]"
               :class="i===0?'item active':'item'">
               <img src="https://images.freeimages.com/images/large-previews/9fc/yet-another-flower-1399208.jpg" style="width:100%">
            <div class="carousel-caption">
              <h3>{{news[i].title}}</h3>
             </div></div>
          <a class="left carousel-control" href="#logoCarousel" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a><a class="right carousel-control" href="#logoCarousel" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a></div></div></div> `

   })

      var news=Vue.component("news",{

          props:["news"],

          template:`
          <div class="well"><a :name="news.link"></a>
        <h4>{{news.title}}</h4>
        <p class="body">{{news.text}}</p>
        <p class="text-primary">user: <span class='badge bg-warning'>{{news.user}}</span> like: <span class='badge badge-success'>{{news.like}}</span>
        repost: <span class='badge badge-success'>{{news.reposts}}</span>  views: <span class='badge badge-success'>{{news.views}}</span></p>
        <p>Comments: <span class='badge badge-success'> {{news.comments.length}}</span></p>
        <div v-for="(c,k) in news.comments" key='k' class="comment" >
          <p class='text-danger'>{{c.user}}</p>
          <p>{{c.text}}</p>
          <p class='text-primary'>Like: <span class='badge'>{{c.like}}</span></p>
        </div>
      <textarea class="form-control" v-model="text"></textarea><br>
      <input class="btn btn-primary" value='send' type="button" @click="addcom(news.id)">
      </div>`

      

      ,data:function(){

          return {text:"Add comment"}

      },

      methods:{

          addcom(id){

                  console.log(id)

                  this.$store.dispatch('addcom',{text:this.text,id:id});

          }

      }})

      var User=Vue.component("user",{

          props:["user"],

          template:"<table class='table table-striped'><tbody><tr><td>name</td><td>{{user.name}}</td></tr><tr><td>login</td><td>{{user.login}}</td></tr><tr><td>date</td><td>{{user.date}}</td></tr><tr><td>proffesion</td><td>{{user.prof}}</td></tr><tr><td>country</td><td>{{user.country}}</td></tr><tr><td>city</td><td>{{user.city}}</td></tr><tr><td>gender</td><td>{{user.gender}}</td></tr><tr><td>site</td><td>{{user.site}}</td></tr></tbody></table>"

          

      });

         var Useredit=Vue.component("useredit",{

          props:["user"],

          template:"<table class='table table-striped'><tbody><tr><td>name</td><td><input class='input-control' type='text' v-model='user.name'></td></tr><tr><td>login</td><td><input class='input-control' type='text' v-model='user.login'></td></tr><tr><td>date</td><td><input class='input-control' type='date' v-model='user.date'></td></tr><tr><td>proffesion</td><td><input class='input-control' type='text' v-model='user.prof'></td></tr><tr><td>country</td><td><input class='input-control' type='text' v-model='user.country'></td></tr><tr><td>city</td><td><input class='input-control' type='text' v-model='user.city'></td></tr><tr><td>gender</td><td><select class='form-control' v-model='user.gender'><option value='men'>men</option><option value='wumen'>wumen</option></select></td></tr><tr><td>site</td><td><input class='input-control' type='text' v-model='user.site'></td></tr></tbody></table>",

          

          

      });

         var friends=Vue.component("friends",{

        

          template:"<table class='table table-striped'><tbody v-for='(user,key) in $store.getters.friends'><tr><td colspan='2'><h4>{{user.name}}</h4></td></tr><tr><td>name</td><td>{{user.name}}</td></tr><tr><td>login</td><td>{{user.login}}</td></tr><tr><td>date</td><td>{{user.date}}</td></tr><tr><td>proffesion</td><td>{{user.prof}}</td></tr><tr><td>country</td><td>{{user.country}}</td></tr><tr><td>city</td><td>{{user.city}}</td></tr><tr><td>gender</td><td>{{user.gender}}</td></tr><tr><td>site</td><td>{{user.site}}</td></tr><tr><td colspan='2'><button class='btn btn-danger'>Delete</button></td></tr></tbody><tbody><tr><td><h4>Add random friend</h4></td><button class='btn btn-primary' @click='addfriends'>Get random</button><td></td></tr></tbody></table>",

          methods:{

              addfriends:function(){

                  this.$store.dispatch('addfriends',Math.floor(Math.random()*5));

              }

          }

          

      });

      let UserPage=Vue.component("userpage",{

          template:"<div><user :user='$store.getters.user' v-if='show'></user><useredit :user='$store.getters.user' v-else></useredit><input class='btn btn-primary' value='edit' type='button' @click='toggle'></div>"

      ,

      data:function(){

          return {show:true}

      },

      methods:{

          toggle(){

              this.show=!this.show;

          }

      }

      })

      let Chats=Vue.component('chats',{

          template: `<table class='table table-striped'>
                <tbody>
                <tr v-for='(c,k) in $store.getters.chats'
                    :style="c.login==='iv2'?'color:red':'color:black'"
                    :key='k'>
                <td>{{c.login}}</td>
                <td>{{c.msg}}</td><td>{{c.date}}</td>
                <td>{{c.time}}</td></tr></tbody></table>`

      })

      var AddNews=Vue.component('addnews',{

          template:`<div class='well'><p>Title:</p>
                    <input class='input-control' type='text' style='width:100%' v-model='title'><p>Text:</p><textarea v-model='text' rows='7' class='form-control'></textarea><br><input class='btn btn-success' @click='addnews' type='button' value='add news'></div>`,

        data:function(){

            return {

                text:'Add this text for news feed',

                title:'Add news'

            }

        },

        methods:{

            addnews(){

                   this.$store.dispatch('addnews',{

                       text:this.text,

                       title:this.title

                   });

            }

        }

      });

      var Home = Vue.component('home',{ template: "<div><h1>News</h1><cur :news='$store.getters.news' :slide='0'></cur><addnews></addnews><p>Last news</p><news v-for='i in $store.getters.news' :news='i'></news></div>" });

      var About = { template: "<div><h1>About</h1><p>This is some information about our awesome company.</p></div>" };

      var Msg = Vue.component('msg',{

          template:`<table class='table table-striped'>
          <thead><tr><td><h3>Messages</h3></td></tr></thead>
          <tbody v-for="(msg,key) in $store.getters.messages"
                 :key="key"
                 >
          <tr><td>{{msg.title}}</td></tr>
          <tr><td>from: {{msg.from}}<br>
                  to: {{msg.to}}<br>
                  title:{{msg.title}}<br>
                  date:{{msg.date}}<br>
                  time:{{msg.time}}<br>
                  {{msg.text}}</td></tr></tbody></table>`});

     var courses = Vue.component('course',{

          template:`<table class='table table-striped'>
          <thead><tr><td><h3>Courses</h3></td></tr></thead>
          <tbody v-for="(c,key) in $store.getters.courses"
                 :key="key"
                 >
          <tr><td><h4>{{c.name}}</h4></td></tr>
          <tr><td>{{c.category}}</td></tr>
          <tr><td>Time learn:{{c.time}} ({{c.process}}/{{c.lessions}})</td></tr>
          <tr><td>Students:{{c.students}}</td></tr>
          <tr><td>Price:{{c.price}}$</td></tr>  
          <tr><td>Start:{{c.start}}</td></tr>      
                  </tbody></table>`}); 

    

      var routes = [

        { path: '/', component: Home },

        { path: '/user',component: UserPage},

        { path: '/msg',component:Msg},

        { path: '/chats',component:Chats},

        { path: '/courses',component: courses},

        { path: '/friends',component: friends},

        { path: '/about', component: About}

      ];

      

      var router = new VueRouter({

        routes: routes,

      });

      window.onload=function(){

      var app = new Vue({

        store,

        el: '#app',

        router: router,

        

});}
