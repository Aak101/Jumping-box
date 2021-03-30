var canvas;
var music,edges;
var box,surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box = createSprite(random(50,750),100,40,40)
    surface1 = createSprite(75,500,175,10)
    surface1.shapeColor = 'red'
    surface2 = createSprite(290,500,175,10)
    surface2.shapeColor = 'green'
    surface3 = createSprite(500,500,175,10)
    surface3.shapeColor = 'yellow'
    surface4 = createSprite(700,500,175,10)
    surface4.shapeColor = 'blue'

    //create 4 different surfaces
    box.velocityX = 5
    box.velocityY = 5




    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
box.bounceOff(edges);

    if (surface1.isTouching(box)){

        box.bounceOff(surface1)
    }
    if (surface2.isTouching(box)){

        box.bounceOff(surface2)
        music.play()
        
    }
    if (surface3.isTouching(box)){

        box.velocityX = 0;
        box.velocityY = 0;
        music.stop()
    }
    if (surface4.isTouching(box)){

        box.bounceOff(surface4)
    }

drawSprites();
    //add condition to check if box touching surface and make it box
}
