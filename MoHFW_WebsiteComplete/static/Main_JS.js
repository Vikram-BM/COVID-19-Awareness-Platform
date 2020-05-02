$(function(){
	$("#HomeTab").show(0);
	$("#LoginTab").hide(0);/*
   $("#DaySwitch").hide(0);
   $("#NightSwitch").show(0);
   $("#DaySwitch").hide(0);
   $("#NightSwitch").show(0);
   $("#MainPage, #Sticky_NavBar_Bar, #HomeTab, #StripsP1, #StripsP2, #MainBody, .MainBody_Content, .SL1, #FAQsTab").css("background-color", "rgba(0, 0, 50, 1)");
   $("html").css("color", "rgb(200, 200, 200)");
   */
   dt = new Date();
   var cTime = dt.getHours() + ":" + dt.getMinutes();
   if ((cTime > "8:00 AM") && (cTime < "6:00 PM")){
      $("#DaySwitch").show(0);
      $("#NightSwitch").hide(0);
   }
   else {
      $("#NightSwitch").show(0);
      $("#DaySwitch").hide(0);
      $("#NightSwitch").show(0);
      $("#MainPage, #Sticky_NavBar_Bar, #HomeTab, #StripsP1, #StripsP2, #MainBody, .MainBody_Content, .SL1, #FAQsTab").css("background-color", "rgba(0, 0, 50, 1)");
      $("html, a").css("color", "rgb(200, 200, 200)");
      $("#FooterBody, #FooterContent").css("background-color", "rgba(25, 25, 25, 1)");
      $("#FooterBody, #FooterContent").css("color", "rgb(255, 255, 255)");
      $("#Strip2 tr td a, #StripsP1 tr td a").css("color", "rgb(0, 0, 0)");
   }
	
   $("#HomeTabS").on("click", function(event){
      $("#HomeTab").show(0);
	   $("#LoginTab").hide(0);
   });
   
   $("#CommunityTabS").on("click", function(event){
      $("#HomeTab").show(0);
	   $("#LoginTab").hide(0);
   });
   
   $("#LatestUpdatesTabS").on("click", function(event){
      $("#HomeTab").show(0);
	   $("#LoginTab").hide(0);
   });
   
   $("#FAQsTabS").on("click", function(event){
      $("#HomeTab").show(0);
	   $("#LoginTab").hide(0);
   });
   
   $("#LoginTabS").on("click", function(event){
		event.preventDefault();
      $("#HomeTab").hide(0);
	   $("#LoginTab").show(0);
   });
   
   $("#DaySwitch").on("click", function(event){
		event.preventDefault();
      $("#DaySwitch").hide(0);
      $("#NightSwitch").show(0);
      $("#MainPage, #Sticky_NavBar_Bar, #HomeTab, #StripsP1, #StripsP2, #MainBody, .MainBody_Content, .SL1, #FAQsTab").css("background-color", "rgba(0, 0, 50, 1)");
      $("html, a").css("color", "rgb(200, 200, 200)");
      $("#FooterBody, #FooterContent").css("background-color", "rgba(25, 25, 25, 1)");
      $("#FooterBody, #FooterContent").css("color", "rgb(255, 255, 255)");
      $("#Strip2 tr td a div, #StripsP1 tr td a div").css("background-color", "rgba(0, 255, 255)");
   });
   
   $("#NightSwitch").on("click", function(event){
		event.preventDefault();
      $("#DaySwitch").show(0);
      $("#NightSwitch").hide(0);
      $("#MainPage, #Sticky_NavBar_Bar, #HomeTab, #StripsP1, #StripsP2, #MainBody, .MainBody_Content, .SL1, #FAQsTab").css("background-color", "rgba(255, 255, 255, 1)");
      $("html, a").css("color", "rgb(0, 0, 0)");
      $("#FooterBody, #FooterContent").css("background-color", "rgba(25, 25, 25, 1)");
      $("#FooterBody, #FooterContent").css("color", "rgb(255, 255, 255)");
      $("#Strip2 tr td a, #StripsP1 tr td a").css("color", "rgb(0, 0, 0)");
   });
});
