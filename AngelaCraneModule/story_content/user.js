function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GXCTMLPFtS":
        Script1();
        break;
      case "6hs6vGyIzQA":
        Script2();
        break;
      case "6QNTxwXvZv2":
        Script3();
        break;
      case "5yZrVNRGuIK":
        Script4();
        break;
      case "6JszwK8Z1hD":
        Script5();
        break;
      case "5jGZOxXyvTb":
        Script6();
        break;
      case "5oioGzMvbhP":
        Script7();
        break;
      case "6J9eSrjwuw9":
        Script8();
        break;
      case "5aQZ9b6QlvY":
        Script9();
        break;
      case "6JDkgpKYJft":
        Script10();
        break;
      case "5vwHRZr8TTU":
        Script11();
        break;
      case "6BUi2b7VjuS":
        Script12();
        break;
      case "6F54SObp2c2":
        Script13();
        break;
      case "6YQzfDx9KCf":
        Script14();
        break;
      case "5b3jj9hhcWz":
        Script15();
        break;
      case "6GPHWKQKjsV":
        Script16();
        break;
      case "6gnMyRGEDtk":
        Script17();
        break;
      case "6kVOI5XXApT":
        Script18();
        break;
      case "6hfSYSa78wX":
        Script19();
        break;
      case "5kcwOGf7eML":
        Script20();
        break;
      case "5wd8qP6sfRD":
        Script21();
        break;
      case "6CfygF0Ri24":
        Script22();
        break;
      case "6df90KCQcCO":
        Script23();
        break;
      case "5trjtfpkbFo":
        Script24();
        break;
      case "6GZxQ4LcIkp":
        Script25();
        break;
      case "6aucrgukrEI":
        Script26();
        break;
      case "6RakcnD9rcC":
        Script27();
        break;
      case "68Na9RNIL6u":
        Script28();
        break;
      case "6q7CExqUoqI":
        Script29();
        break;
      case "5tY4EBRwhjb":
        Script30();
        break;
      case "6LRzj29tqhd":
        Script31();
        break;
      case "6jyTEQG1MSL":
        Script32();
        break;
      case "5qSqazK8m9H":
        Script33();
        break;
      case "5u5drBKFECs":
        Script34();
        break;
      case "6UpHDYPfKBB":
        Script35();
        break;
      case "64H780lJxNx":
        Script36();
        break;
      case "6D7SfbyDXMH":
        Script37();
        break;
      case "6XkT7zyP0Dw":
        Script38();
        break;
      case "5pFpiFpwoVq":
        Script39();
        break;
      case "6CXG6Pme62H":
        Script40();
        break;
      case "6TjRZAxQyNv":
        Script41();
        break;
      case "5iwwiddLtsn":
        Script42();
        break;
      case "5farhNtaUiQ":
        Script43();
        break;
      case "6AOpWqO5xJZ":
        Script44();
        break;
      case "6VbKAOEk7JS":
        Script45();
        break;
      case "6FUZGt7LRX0":
        Script46();
        break;
      case "64mfoJXCf1z":
        Script47();
        break;
      case "626PpvjpOYK":
        Script48();
        break;
  }
}

function Script1()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script2()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script3()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script4()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script5()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script6()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script7()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script8()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script9()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script10()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script11()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script12()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script13()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script14()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script15()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script16()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script17()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script18()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script19()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script20()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script21()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script22()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script23()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script24()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script25()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script26()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script27()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script28()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script29()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script30()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script31()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script32()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script33()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script34()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script35()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script36()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script37()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script38()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script39()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script40()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script41()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script42()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script43()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script44()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script45()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script46()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script47()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script48()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

