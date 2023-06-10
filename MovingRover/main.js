 background_image = "mars.jpg"
 rover_mage = "rover.png"
rover_y = (0)
rover_x = (0)
rover_width = 123
rover_hight = 99

var nasa =["http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NRB_486270860EDR_F0481570NCAM00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NRB_486271176EDR_F0481570NCAM00322M_.JPG" ,"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NRB_486272784EDR_F0481570NCAM00415M_.JPG"]
random_number = Math.floor(Math.random() * 4);
background_image = nasa[random_number];
console.log("background_image = " + background_image)

canvas = document.getElementById("FUJII_KAZE123")
ctx = canvas.getContext("2d")


function add(){

backgroung_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;



rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_mage;
}
function uploadBackground()  {
ctx.drawImage(background_imgTag,0,0,canvas.width , canvas.height);
}
window.addEventListener("keydown" , my_keydown)

function my_keydown(e)

{       
    keypressed = e.keyCode()
    console.log(keypressed)
    if(keypressed == '38')
    {
        up()
        console.log("up")
    }

    if(keypressed == '40')
    {
        down()
        console.log("down")
    }

    if(keypressed == '37')
    {
       left()
        console.log("left")
    }

    if(keypressed == '39')
    {
        right()
        console.log("right")
    }

function up()
{
    if (rover_y >=0)
    {



        rover_y = - 10 
        console.log("WHEN UP ARROW IS PRESSED, x =" + rover_x + "| y " +rover_y)
        uploadBackground()
        uploadrover()

    }
} 


function up()
{
    if (rover_y >=0)
    {



        rover_y = - 10 
        console.log("WHEN UP ARROW IS PRESSED, x =" + rover_x + "| y " +rover_y)
        uploadBackground()
        uploadrover()

    }
}






function up()
{
    if (rover_y >=0)
    {



        rover_y = - 10 
        console.log("WHEN UP ARROW IS PRESSED, x =" + rover_x + "| y " +rover_y)
        uploadBackground()
        uploadrover()

    }
}













function up()
{
    if (rover_y >=0)
    {



        rover_y = - 10 
        console.log("WHEN UP ARROW IS PRESSED, x =" + rover_x + "| y " +rover_y)
        uploadBackground()
        uploadrover()

    }
}
}



function down()
{
    if (rover_y <=500)
    {



        rover_y = rover_y +10;
        console.log("WHEN down ARROW IS PRESSED, x =" + rover_x + "| y " +rover_y)
        uploadBackground()
        uploadrover()

    }
}


function left()
{
    if (rover_y >=0)
    {



        rover_y = rover_y - 10;
        console.log("WHEN left ARROW IS PRESSED, x =" + rover_x + "| y " +rover_y)
        uploadBackground()
        uploadrover()

    }
}

function right()
{
    if (rover_y <=700)
    {



        rover_y = rover_y +10;
        console.log("WHEN right ARROW IS PRESSED, x =" + rover_x + "| y " +rover_y)
        uploadBackground()
        uploadrover()

    }
}


 