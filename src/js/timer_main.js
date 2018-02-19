System.Gadget.settingsUI = "settings.html";
System.Gadget.onSettingsClosed = function(event) {
  if (event.closeAction == event.Action.commit) {
   init();
  }
}
var Runtext;

function runtext(el, text, space_text, count_space, time){
var space = count_space, 
textspace = space_text,
plus_text = "";

for(var i=0;i<space;i++) plus_text+=textspace;

text+=plus_text;
var i=0;

Runtext=setInterval(function (){
   el.innerHTML=text.substr(i,text.length)+text.substr(0,i);
    i++;
    if(i>text.length) i=0;              
},time);
}

function init(){
// Установка даты
  _d = System.Gadget.Settings.read("d");
  if(!_d){
  _d = 1;
  }
  
  _m = System.Gadget.Settings.read("m");
  _m  = _m*1 -1;
  
  if(!_m || _m<0){
  _m = 0;
  }
  
  _y = System.Gadget.Settings.read("y");
  if(!_y){
  _y = new Date().getYear()+1;
  }
  
  _h = System.Gadget.Settings.read("h");
  if(!_h){
  _h = 0;
  }
  
  _mi = System.Gadget.Settings.read("mi");
  if(!_mi){
  _mi = 0;
  }
  
  _s = System.Gadget.Settings.read("s");
  if(!_s){
  _s = 0;
  }
   _scolor = System.Gadget.Settings.read("scolor");
  if(!_scolor){
  _scolor = "#FFFC00";
  }

   _tscolor = System.Gadget.Settings.read("tscolor");
  if(!_tscolor){
  _tscolor = "#000000";
  }

   _sobitie = System.Gadget.Settings.read("sobitie");
  if(!_sobitie){
  _sobitie = null;
  } 
   _sobitie_col = System.Gadget.Settings.read("sobitie_col");
  if(!_sobitie_col){
  _sobitie_col ="#FFFFFF";
  } 

   _sobitie_col_text = System.Gadget.Settings.read("sobitie_col_text");
  if(!_sobitie_col_text){
  _sobitie_col_text = "#000000";
  } 

   _sobitie_space_text = System.Gadget.Settings.read("sobitie_space_text");
  if(!_sobitie_space_text){
  _sobitie_space_text = " ";
  } 

   _sobitie_space_count = System.Gadget.Settings.read("sobitie_space_count");
  if(!_sobitie_space_count){
  _sobitie_space_count = 2;
  } 

   _sobitie_space_timer = System.Gadget.Settings.read("sobitie_space_timer");
  if(!_sobitie_space_timer){
  _sobitie_space_timer = 0.5;
  }     

  _sobitie_font = System.Gadget.Settings.read("sobitie_font");
 if(_sobitie_font.search("Выбрать")!=-1) _sobitie_font = "18px Times";
  
  _sobitie_font_underline = "";
  if(_sobitie_font.search("underline")!= -1){
  _sobitie_font_underline = "underline";
  _sobitie_font=_sobitie_font.replace("underline ","");
  }

// Установка даты

if(document.getElementById("dv")){
clearInterval(inter);
clearInterval(Runtext);
document.body.innerHTML="";
}

var dv=document.createElement("div");
dv.className="dv";
dv.id="dv";
dv.style.background= _scolor;
dv.style.color= _tscolor;

if(_sobitie){
var sobitie_dv=document.createElement("div");
sobitie_dv.id="sobitie_div";

sobitie_dv.style.background = _sobitie_col;
sobitie_dv.style.color = _sobitie_col_text;

if(_sobitie_font) {
sobitie_dv.style.font = _sobitie_font; // font setting
sobitie_dv.style.textDecoration = _sobitie_font_underline; // decoration
}

sobitie_dv.innerHTML = _sobitie;
document.body.appendChild(sobitie_dv);
document.body.style.height = "50px";
runtext(sobitie_dv, _sobitie, _sobitie_space_text, _sobitie_space_count*1, _sobitie_space_timer*1000);
} else {
document.body.style.height = "10px";
}
document.body.appendChild(dv);

var t=document.createElement("span");

dv.appendChild(t);

inter=setInterval(function(){
var texti;
yd=new Date(_y*1,_m*1,_d*1,_h*1,_mi*1,_s*1).getTime();
nowDate = new Date();
nowDateMsec = nowDate.getTime();
var msec = yd-nowDateMsec;
var sec = Math.floor(msec/1000);
var min = Math.floor(sec/60);
var hour = Math.floor(min/60);
var day = Math.floor(hour/24);
sec %= 60;
min %= 60;
hour %= 24;
if (min<10){
	min='0'+min;
}
if (sec<10){
	sec='0'+sec;
}
if (hour<10){
	hour='0'+hour;
}
if(msec>0) texti=day+"д. "+hour+"ч. "+min+"м. "+sec+"с."
else  texti="Дата настала!"

t.innerHTML=texti;

}, 1000);
}