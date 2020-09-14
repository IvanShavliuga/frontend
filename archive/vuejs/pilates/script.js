let comments=function(n,i,d){
   this.name=n;
   this.img=i;
   this.data=d;
   
}

var com=[
{
  name:"Дарья Прокопенко",
  img:"test-1.png",
  data:"Я уже три месяца хожу на пилатес и сбросила 20 килограмм. И получила коллоссальное удовольствие"
},
{
  name:"Денис Федоров",
  img:"test-2.png",
  data:"Я уже два месяца хожу на пилатес и выпровил себе осанку. И получил коллоссальное удовольствие"
},
{
  name:"Евгения Кипелова",
  img:"test-3.png",
  data:"Я уже два месяца хожу на пилатес и сбросила 10 килограмм. И получила коллоссальное удовольствие"
}  ];
var  ind=0;
function slide(indimg,indbtn){
   switch(indbtn){
       case "next":
           if(ind < 2)
               ind++;
           else
               ind=0;
           
           break;
       case "prev":
           if(ind > 0)
               ind--;
           else
               ind=2;
            
           
           break;
   }  
    $("#comimg").attr("src",com[ind]["img"]);
   $("#cd").text(com[ind].data);
   $("#name").text(com[ind].name);
   $("#com").fadeOut(1000).fadeIn(1000);
   $(".page").removeClass("active");
   $("#com"+(ind+1)).addClass("active");
   
   
}
$(document).ready(function(){
    $("#next").click(function(){
        slide(ind,"next");
         

    });
    $("#prev").click(function(){
        slide(ind,"prev");
         
    });
      $("#comimg").attr("src",com[ind]["img"]);
   $("#cd").text(com[ind].data);
   $("#name").text(com[ind].name);
   //$("#com").fadeOut(1000).fadeIn(1000);
});