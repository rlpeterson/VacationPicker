$(document).ready(function(){
  var destination;
  $("form#survey").submit(function(event){
    event.preventDefault();

    var choice = $("#choice").val();
    var fitness = $("input:radio[name=fitness]:checked").val();
    var place = $("#place").val();
    var level = $("input:radio[name=level]:checked").val();
    var style = $("input:radio[name=style]:checked").val();

    if(choice == "0" && (fitness == "exercise" || level == "sweat")){
      localStorage.destination = "tahoe";
    }
    else if(choice == "1" && (fitness == "exercise" || level == "sweat")){
      localStorage.destination = "yosemite";
    }
    else if(choice == "2" && (fitness == "exercise" || level == "sweat")){
      localStorage.destination = "leavenworth";
    }
    else if(choice == "3" && (fitness == "exercise" || level == "sweat")){
      localStorage.destination = "moab";
    }
    else if(choice == "4" && (fitness == "relax" || level == "chill")){
      localStorage.destination = "hawaii";
    }
    else{
      localStorage.destination = "none";
    }
  });

  $(".answer").click(function(){ 
    if(localStorage.destination === "tahoe"){
      $(".tahoe").fadeToggle();
    }
    else if(localStorage.destination === "yosemite"){
      $(".yosemite").fadeToggle();
    }
    else if(localStorage.destination === "leavenworth"){
      $(".leavenworth").fadeToggle();
    }
    else if(localStorage.destination === "moab"){
      $(".moab").fadeToggle();
    }
    else if(localStorage.destination === "hawaii"){
      $(".hawaii").fadeToggle();
    }
    else if(localStorage.destination === "none"){
      $(".none").fadeToggle();
    }
  });
});
