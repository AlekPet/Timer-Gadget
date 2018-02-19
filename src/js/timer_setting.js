function init() {
  d.value = System.Gadget.Settings.read("d");
  if(!d.value){
  d.value = 1;
  }
  
  m.value = System.Gadget.Settings.read("m");
  m.value = (m.value*1===0)?m.value*1 + 1:m.value*1;
  
  if(!m.value){
  m.value = 1;
  }
  
  y.value = System.Gadget.Settings.read("y");
  if(!y.value){
  y.value = new Date().getYear()+1;
  }
  
  h.value = System.Gadget.Settings.read("h");
  if(!h.value){
  h.value = 0;
  }
  
  mi.value = System.Gadget.Settings.read("mi");
  if(!mi.value){
  mi.value = 0;
  }
  
  s.value = System.Gadget.Settings.read("s");
  if(!s.value){
  s.value = 0;
  }
  
  scolor.value = System.Gadget.Settings.read("scolor");
  if(!scolor.value){
  scolor.value = "#FFFC00";
  scolor.style.background = scolor.value;
  } else {
  scolor.style.background = scolor.value;
  }
  
  tscolor.value = System.Gadget.Settings.read("tscolor");
  if(!tscolor.value){
  tscolor.value = "#000000";
  tscolor.style.background = tscolor.value;
  } else {
  tscolor.style.background = tscolor.value;
  }
  
  sobitie.value =  System.Gadget.Settings.read("sobitie");
  
  sobitie_col.value = System.Gadget.Settings.read("sobitie_col");
  if(!sobitie_col.value){
  sobitie_col.value = "#FFFFFF";
  sobitie_col.style.background = sobitie_col.value;
  } else {
  sobitie_col.style.background = sobitie_col.value;
  }

  sobitie_col_text.value = System.Gadget.Settings.read("sobitie_col_text");
  if(!sobitie_col_text.value){
  sobitie_col_text.value = "#000000";
  sobitie_col_text.style.background = sobitie_col_text.value;
  } else {
  sobitie_col_text.style.background = sobitie_col_text.value;
  }  
  
  sobitie_space_text.value = System.Gadget.Settings.read("sobitie_space_text");
  if(!sobitie_space_text.value){
  sobitie_space_text.value = " ";
  }

  sobitie_space_count.value = System.Gadget.Settings.read("sobitie_space_count");
  if(!sobitie_space_count.value){
  sobitie_space_count.value = 2;
  }
  
  sobitie_space_timer.value = System.Gadget.Settings.read("sobitie_space_timer");
  if(!sobitie_space_timer.value){
  sobitie_space_timer.value = 0.5;
  }
 
 // Fonts
 var fonts_name = ["monospace", "fantasy", "Arial", "Helvetica", "sans-serif", "Georgia", "'Times New Roman'", "Times", "serif","Geneva"];
 fonts_name.sort();
 fonts_name.unshift("Выбрать шрифт");
 
 for(var i=0;i<fonts_name.length;i++){
 var _op = document.createElement("option");
 _op.innerHTML=fonts_name[i];
 _op.value = fonts_name[i]
 fonts_select.appendChild(_op);
 } 
 
  fonts_select.value = System.Gadget.Settings.read("fonts_select");
  if(!fonts_select.value){
  fonts_select.value = fonts_name[0];
  }
 
  // Style
  
 // Size
  sobitie_font_size.value = System.Gadget.Settings.read("sobitie_font_size");
  if(!sobitie_font_size.value){
 sobitie_font_size.value =15;
  }
 // Bold Italic Underline Detect
  sobitie_font.value = System.Gadget.Settings.read("sobitie_font");

  var  font_check = document.getElementsByName("fonts_sett");
  
  if((sobitie_font.value).search("bold") != -1) font_check[0].checked = true;
  if((sobitie_font.value).search("italic") != -1) font_check[1].checked = true;
  if((sobitie_font.value).search("underline") != -1) font_check[2].checked = true;  
  
 } // init end
 
 System.Gadget.onSettingsClosing = function(event) {
  if (event.closeAction == event.Action.commit) {
    System.Gadget.Settings.write("d", d.value);
	    System.Gadget.Settings.write("m", m.value);
		    System.Gadget.Settings.write("y", y.value);
			    System.Gadget.Settings.write("h", h.value);
				    System.Gadget.Settings.write("mi", mi.value);
					    System.Gadget.Settings.write("s", s.value);
							System.Gadget.Settings.write("scolor", scolor.value);
							System.Gadget.Settings.write("tscolor", tscolor.value);
							System.Gadget.Settings.write("sobitie", sobitie.value);	
							System.Gadget.Settings.write("sobitie_col", sobitie_col.value);
							System.Gadget.Settings.write("sobitie_col_text", sobitie_col_text.value);	
							System.Gadget.Settings.write("sobitie_space_text", sobitie_space_text.value);
							System.Gadget.Settings.write("sobitie_space_count", sobitie_space_count.value);
							System.Gadget.Settings.write("sobitie_space_timer", sobitie_space_timer.value);
							System.Gadget.Settings.write("fonts_select",fonts_select.value);
							System.Gadget.Settings.write("sobitie_font_size", sobitie_font_size.value);							
							System.Gadget.Settings.write("sobitie_font",sobitie_font.value);						
  }
}

function checkinput(el){
switch(el.id){
case "d": el.value = (el.value >31 || isNaN(el.value))?"31":el.value;
break;
case "m": el.value = (el.value >12 || isNaN(el.value))?"12":el.value;
				 el.value = (el.value <= 0 )?"1":el.value;
break;
case "y": el.value = (isNaN(el.value))?new Date().getYear():el.value;
break;
case "h": el.value = (el.value >23 || isNaN(el.value))?"23":el.value;
break;
case "mi": el.value = (el.value >59 || isNaN(el.value))?"59":el.value;
break;
case "s": el.value = (el.value >59 || isNaN(el.value))?"59":el.value;
break;
case "scolor":	el.value = (/^#([0-9A-F]){6}/ig.test(el.value))?(el.value).toUpperCase():"#FFFC00";
						el.style.background = el.value;
break;
case "tscolor":
case "sobitie_col_text": el.value = (/^#([0-9A-F]){6}/ig.test(el.value))?(el.value).toUpperCase():"#000000";
						el.style.background = el.value;
break;
case "sobitie_col": el.value = (/^#([0-9A-F]){6}/ig.test(el.value))?(el.value).toUpperCase():"#FFFFFF";
						el.style.background = el.value;
break;
case "sobitie_font_size": el.value = (isNaN(el.value) || el.value > 99 || el.value <= 0)?"15":el.value;
break;
case "sel_r0":
case "sel_g0":
case "sel_b0": el.value = (isNaN(el.value) || el.value > 255 || el.value < 0)?"255":el.value;
					    hex(sel_r0.value,sel_g0.value,sel_b0.value);
break;
case "sel_color":	var nach_zn = (el.value).toUpperCase();
						el.value = (/^#([0-9A-F]){6}/ig.test(el.value))?(el.value).toUpperCase():"#FFFFFF";
						el.style.background = el.value;
						var scolor_dec = hextodec(el.value);
						sel_r0.value = scolor_dec[0];
						sel_g0.value = scolor_dec[1];
						sel_b0.value = scolor_dec[2];
break;
case "sobitie_space_timer": el.value = (isNaN(el.value))?0.5:el.value;
break;
case "sobitie_space_count": el.value = (isNaN(el.value))?2:el.value;
}
}
// Color 
function colorch(el){
var input_rgb = el.parentElement.getElementsByTagName("input")[2].value;

if(el.value == "+") input_rgb = input_rgb*1 + 1
else input_rgb = input_rgb*1 - 1;

input_rgb = (input_rgb < 256)?input_rgb:0;
input_rgb = (input_rgb > -1)?input_rgb:255;

el.parentElement.getElementsByTagName("input")[2].value = input_rgb;

hex(sel_r0.value,sel_g0.value,sel_b0.value);
}

function hex(r,g,b){
var gf="";
var hexv="0123456789ABCDEF";
var rc=Number(r);
var gc=Number(g);
var bc=Number(b);
valhex="";
var ff=[rc,gc,bc];
for(var i=0;i<3;i++){
var del= ff[i] % 16;
var di=Math.floor(ff[i]/16);
if(ff[i]>=255){ 
valhex+="FF";
} else if(ff[i]<=0){
valhex+="00";
} else {
valhex+=hexv.charAt(di)+hexv.charAt(del);
}
}
gf="#"+valhex;
sel_color.value = gf;
sel_color.style.background = gf;
}

function hextodec(hex16){
// ff125a
hex16 = hex16 .substr(1,hex16.length-1);
var hex = [hex16.substr(0,2),hex16.substr(2,2),hex16.substr(4,2)];
var tempa = [];
alert(hex);

for(var i=0;i<hex.length;i++){
	var ohex_temp=0;
	var dec = 1;
	
	for(var j=0;j<2;j++){
	
	var ohex = (hex[i].charAt(j)).toUpperCase();

	switch(ohex){
	case "A": ohex = 10;
	break;
	case "B": ohex = 11;
	break;
	case "C": ohex = 12;
	break;
	case "D": ohex = 13;
	break;
	case "E": ohex = 14;
	break;
	case "F": ohex = 15;
	break;
	default: 
	}
	ohex_temp+=(ohex*Math.pow(16,dec));
	dec--;
	}
	tempa[i] = ohex_temp;
}
return tempa;
}
// Color 

// POP
function show_pop(el){
var dvp = document.getElementById("div_pop"),
button = document.getElementById("apply"),
otmena = document.getElementById("otmena");

dvp.style.display = "block";

button.onclick = function(){
el.value = sel_color.value;
el.style.background = el.value;
dvp.style.display = "none";
}

otmena.onclick = function(){
dvp.style.display = "none";
}

if(el.value){
sel_color.value = el.value;
sel_color.style.background = sel_color.value ;
var scolor_dec = hextodec(sel_color.value);
sel_r0.value = scolor_dec[0];
sel_g0.value = scolor_dec[1];
sel_b0.value = scolor_dec[2];
button.disabled = false;
}
		
}

// Font setting
var font_setting_all = {
font_string: ""
};

function show_pop_font(el){
var dvp = document.getElementById("div_pop_f"),
button = document.getElementById("apply_f"),
otmena = document.getElementById("otmena_f");

setstyle(null, el);
font_demo.style.fontFamily = fonts_select.value;

dvp.style.display = "block";

button.onclick = function(){

sobitie_font.value = font_setting_all.font_string+sobitie_font_size.value+"px "+fonts_select.value;
dvp.style.display = "none";
}

otmena.onclick = function(){
dvp.style.display = "none";
}

if(el.value){
button.disabled = false;
font_demo.innerHTML = (el.value).substr(0,30)+"...";
}

}

function setstyle(obj,el){
var code=["","",""];
var font_sett = document.getElementsByName("fonts_sett");

for(var i=0;i<font_sett.length;i++){

if(font_sett[i].checked) {
code[0]=code[0]+"<"+(font_sett[i].value).charAt(0)+">";
code[1]=code[1]+"</"+(font_sett[i].value).charAt(0)+">";
code[2]=code[2]+font_sett[i].value+" "
} else {
code[0]=code[0]+"";
code[1]=code[1]+"";
code[2]=code[2]+"";
}

}

font_setting_all.font_string = code[2];

var font_in_underline = font_setting_all.font_string;
if(font_in_underline.search("underline")!= -1) {
font_demo.style.textDecoration = "underline";
font_in_underline = font_in_underline.replace("underline ","");
} else font_demo.style.textDecoration = "";

font_demo.style.font =  font_in_underline+"12px "+fonts_select.value;

}