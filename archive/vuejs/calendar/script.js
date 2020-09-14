// Created by shinyy
//Ориентация устройства
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = "100px";
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
            }
        };
    if (!doc.addEventListener) return;
    recalc();
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);

window.onload=function(){
    var cal=new Vue({
        el:".v-calendar",
        data:{
            d:new Date(),//день
            m:[new Date().getMonth()+1], //месяц
            y:[new Date().getFullYear()],//год
            day:[],  //массив дней
            dCount:[],
            calNum:5,     
            dCur:new Date().getDate(),
            mCur:new Date().getMonth()+1,
            yCur:new Date().getFullYear(),
            dCur2:new Date().getDate()+1,
            mCur2:new Date().getMonth()+1,
            yCur2:new Date().getFullYear(),
            id1:"",
            id2:"",         
            dTrue:new Date().getDate(),
            mTrue:new Date().getMonth()+1,
            yTrue:new Date().getFullYear(),           
            clickNum:0,
        },
        methods:{         
            leaveD:function(){
                    if(this.dCur==new Date(this.y,this.m,0).getDate()&&this.mCur!=12){
                        this.dCur2=1;
                        this.mCur2=new Date().getMonth()+2;
                    }else if(this.dCur==new Date(this.y,this.m,0).getDate()&&this.mCur==12){
                        this.dCur2=1;
                        this.mCur2=1;
                        this.yCur2=this.yCur+1;
                    }
            },           
            nextCal:function(n){
                let setY=new Date().getFullYear(),
                    setM=new Date().getMonth()+1+n;         
                if(setM>12){
                    setY+=parseInt((setM-1)/12);
                    setM%12==0?setM=12:setM=setM%12;
                };
                this.y.push(setY);
                this.m.push(setM);             
            },          
            calendar:function(y,m){                   
                    if(y%4==0){
                        this.dCount=[31,29,31,30,31,30,31,31,30,31,30,31]
                    }else{
                        this.dCount=[31,28,31,30,31,30,31,31,30,31,30,31]
                    };                    
                    this.day.push(new Date(y,m-1).getDay());
            },           
            inDate:function(n){
                    this.dCur=new Date(n).getDate();
                    this.mCur=new Date(n).getMonth()+1;
                    this.yCur=new Date(n).getFullYear();
                    this.mCur2="";
                    this.clickNum=1;               
            },
            leaveDate:function(n){
                    this.dCur2=new Date(n).getDate();
                    this.mCur2=new Date(n).getMonth()+1;
                    this.yCur2=new Date(n).getFullYear();
                    this.clickNum=0;                    
            },          
            calTab:function(e){

        },
        mounted(){                
                this.leaveD();                
                this.calendar(this.y[0],this.m[0])
                for(let i=1;i<this.calNum;i++){
                    this.nextCal(i);
                    this.calendar(this.y[i],this.m[i]);
                };
        },
    })
}