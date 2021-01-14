var canvas = new fabric.Canvas("myCanvas");
var upgraded = false;
var hero_x = 10;
var hero_y = 10;

var hero_obj = "";
var web_obj = "";

var web_width = 30;
var web_height = 30;
var hero_width = 150;
var hero_height = 140;
background_image= "images.jpeg";
var spider_image = "spiderman.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.src = background_image;

    imgspider = new Image();
    imgspider.src = spider_image;
}
function uploadBackground() {
    canvas.getContext().drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}
function hero_update() {
    canvas.remove(hero_obj);
    if (upgraded == true) {
        canvas.remove(hero_obj);
        fabric.Image.fromURL("upgradedspiderman.png", function(Img){
            hero_obj = Img; 
            hero_obj.scaleToWidth(hero_width);
            hero_obj.scaleToHeight(hero_height);
            hero_obj.set({top:hero_y, left:hero_x});
            canvas.add(hero_obj);
            
        });
    } else {
        canvas.remove(hero_obj);
        fabric.Image.fromURL("spiderman.png", function(Img){
            hero_obj = Img; 
            hero_obj.scaleToWidth(hero_width);
            hero_obj.scaleToHeight(hero_height);
            hero_obj.set({top:hero_y, left:hero_x});
            canvas.add(hero_obj);
            
        });
    }
}
function new_web_update(get_image) {
    canvas.remove(hero_obj);
    fabric.Image.fromURL(get_image, function(Img){
        web_obj = Img; 
        web_obj.scaleToWidth(web_width);
        web_obj.scaleToHeight(web_height);
        web_obj.set({top:hero_y, left:hero_x});
        canvas.add(web_obj);
        uploadBackground();
    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed=='80') {
        console.log("p and shift pressed together");
        web_height = web_height+10;
        web_width = web_width+10;
        document.getElementById("width").innerHTML= web_width;
        document.getElementById("height").innerHTML= web_height;
    }
    if (e.shiftKey == true && keypressed=='77'){
        console.log("m and shift pressed together");
        web_height = web_height-10;
        web_width = web_width-10;
        document.getElementById("width").innerHTML= web_width;
        document.getElementById("height").innerHTML= web_height;
    }

    if (keypressed=='38') {
        up1();
        console.log("up");
    }
    if (keypressed=='40') {
        down1();
        console.log("down");
    }
    if (keypressed=='37') {
        left1();
        console.log("left");
    }
    if (keypressed=='39') {
        right1();
        console.log("right");
    }
    if (keypressed=='87') {
        new_web_update("web.png");
        console.log("web");
    }
    if (keypressed=='84') {
        new_web_update("tazer_web.png");
        console.log("tazer web");
    }
    if (keypressed=='70') {
        new_web_update("fireweb.png");
        console.log("fire web");
    }
    if (keypressed=='85') {
        upgraded = true;
        canvas.remove(hero_obj);
        console.log("upgraded spiderman");
    }
    if (keypressed=='68') {
        upgraded = false;
        canvas.remove(hero_obj);
        console.log("demoted spiderman");
    }
    
}
function up1() {
    if(hero_y > 10){
        hero_y= hero_y-web_height;
        console.log("web height = " + web_height);
        console.log("The heros X = " + hero_x + " and Y = " + hero_y);
        canvas.remove(hero_obj);
        hero_update();
    }
}
function down1() {
    if(hero_y < 460){
        hero_y= hero_y+web_height;
        console.log("web height = " + web_height);
        console.log("The heros X = " + hero_x + " and Y = " + hero_y);
        canvas.remove(hero_obj);
        hero_update();
    }
}
function left1() {
    if(hero_x > 0){
        hero_x = hero_x-web_height;
        console.log("web height = " + web_height);
        console.log("The heros X = " + hero_x + " and Y = " + hero_y);
        canvas.remove(hero_obj);
        hero_update();
    }
}
function right1() {
    if(hero_x < 850){
        hero_x = hero_x+web_height;
        console.log("web height = " + web_height);
        console.log("The heros X = " + hero_x + " and Y = " + hero_y);
        canvas.remove(hero_obj);
        hero_update();
    }
}
