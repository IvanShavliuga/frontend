window.onload=function(){new Vue({
    el:".app",
    data:{
        user:{
            id:0,
            link:"https://test.ru/id",
            name:"Iv2",
            spec:"Junior Frotend Developer",
            skills:["HTML", "CSS", "JavaScript (ES6)", "JQuery","Vue.js (vue companetes)", "Design","Animation"],
            city:"Novopolotsk, Belarus",
            contacts:[{
            messenger:"phone",
            contact:"+375 (111) 111-11-11"},{
            messenger :"email",
            contact:"iv2@test.com"},
            {messenger:"telegram",
             contact:"https://t.me/IvanShavliugaChannel"   
            }]
        },
        editname:"",
        editspec:"",
        editcity:"",
        showeditname:false,
        showeditspec:false,
        showeditcity:false,
        messages:[{
            user:"admin",
            id:1,
            title:"success registration",
            body:"You have successfully registered for the website test.com. Terms of use and licensing agreement here. Please fill out your profile and Sub be to the news columns of your choice.",
            read:false,
            show:false
        },{
            user:"admin",
            id:2,
            title:"User Angel application add to friends",
            body:"Please add my contact as a friend",
            read:false,
            show:false
        }
        ],
        mess:"",
        cont:"",
        skill:""
    },
    methods:{
            addcont(){
                this.user.contacts.push({
                    messenger:this.mess,
                    contact:this.cont
                })
            },
            addskill(){
                this.user.skills.push(this.skill);
            },
            delskill(ind){
                this.user.skills.splice(ind,1);
            },
            readmess(id){
                this.messages[id].read=!this.messages[id].read;
            } ,
            showmess(id)    {
                this.messages[id].show=!this.messages[id].show;
            },
            checkname(){
                this.user.name=this.editname;
                this.showeditname=false;
            },
            showflagname(){
                this.showeditname=!this.showeditname;
            },
            checkspec(){
                this.user.spec=this.editspec;
                this.showeditspec=false;
            },
            showflagspec(){
                this.showeditspec=!this.showeditspec;
            },
            checkcity(){
                this.user.city=this.editcity;
                this.showeditcity=false;
            },
            showflagcity(){
                this.showeditcity=!this.showeditcity;
            }
        },
    created:function(){
        this.user.id=Math.floor(Math.random()*100000);
        this.user.link+=this.user.id;
    }
})
}
