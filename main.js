var canvas = new fabric.Canvas("myCanvas");
var block_img_width =30;
 var block_img_height =30;
var player_x =10;
var player_y =10;
var player_object ="";
var block_img_object ="";

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed=="80")
    {
        console.log("p and shift pressed together");
        block_img_width = block_img_width+ 10;
        block_img_height = block_img_height+ 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_heightS").innerHTML = block_img_height;       
    }

    if(e.shiftKey == true && keypressed=="77")
    {
        console.log("m and shift pressed together");
        block_img_width = block_img_width- 10;
        block_img_height = block_img_height- 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_heightS").innerHTML = block_img_height;       
    }

    if ( keypressed="70")
    {
new_image("hulk_face.png")
console.log("face")
    }

    if ( keypressed="66")
    {
new_image("ironman_body.png")
console.log("body")
    }

    if ( keypressed="76")
    {
new_image("spiderman_legs.png")
console.log("legs")
    }

    if ( keypressed="82")
    {
new_image("thor_right_hand.png")
console.log("right")
    }

    if ( keypressed="70")
    {
new_image("captain_america_left_hand.png")
console.log("left")
    }

    if ( keypressed="38")                                          
    {
up();
console.log("up")
    }

    if ( keypressed="40")
    {
down();
console.log("down")
    }

    if ( keypressed="37")
    {
left();
console.log("left")
    }

    if ( keypressed="39")
    {
right();
console.log("right")
    }


}

