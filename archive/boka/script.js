$(document).ready(function(){

   setInterval(()=>$("#bokagreat, #boka").fadeToggle(1000),20);

   $("li").click(function(){

      $("li").removeClass("active");

      $(this).addClass("active");

   });

   $(".am").click(function(){

      let id=this.id;

      if(id==="ammen"){

         $("#ammen").removeClass("check").addClass("select");

         $("#amwomen").removeClass("select").addClass("check");   

      }else{

         $("#ammen").removeClass("select").addClass("check");

         $("#amwomen").removeClass("check").addClass("select");   

      }

      return false;

   });

     $(".look").click(function(){

      let id=this.id;

      if(id==="lookmen"){

         $("#lookmen").removeClass("check").addClass("select");

         $("#lookwomen").removeClass("select").addClass("check");   

      }else{

         $("#lookmen").removeClass("select").addClass("check");

         $("#lookwomen").removeClass("check").addClass("select");   

      }

      return false;

   });

   $("#join").click(function(){

      let person={};

      let email=$("#email").val();

      let rexpe=/^([a-z\d-.]{4,20})@([a-z\d-]+).([a-z]{2,8})?$/;

      let re=rexpe.test(email);

      let pass=$("#password").val();

      let rexpp=/^[a-z\d-]{8,20}$/;

      let rp=rexpp.test(pass);

      if(rp===true&&re===true){

          let sel=$(".select");

          

          person["am"]=sel[0].value;

          person["look"]=sel[1].value;

          person["email"]=email;

          person["password"]=pass;

          alert("I am: "+person["am"]+" Looking for: "+person["look"]+" email: "+person["email"]+" password: "+person["password"]);

      }

      return false;

   });

});
