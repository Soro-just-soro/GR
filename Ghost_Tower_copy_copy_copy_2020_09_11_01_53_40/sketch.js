var ghost, tiny_doors, tower, climber, spoop, mini_door
var ghost1, tower1, inviswall1, inviswall2, invis_window
var windows, plont, plonts, invis_windows

function preload() {
  ghost = loadImage("ghost-standing.png")
  tiny_doors = loadImage("door.png")
  tower = loadImage("tower.png")
  climber = loadImage("climber.png")
  spoop = loadSound("spooky.wav")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  tower1 = createSprite(300, 300, 50, 50)
  tower1.addImage(tower)
  tower1.velocityY = 5
  //groups
  ghost1 = createSprite(300, 300, 50, 50)
  ghost1.addImage(ghost)
  inviswall1 = createSprite(60, 300, 10, 600)
  inviswall2 = createSprite(540, 300, 10, 600)
  inviswall1.visible = false
  inviswall2.visible = false
  windows = new Group()
 plonts = new Group()
  invis_windows = new Group()
  //size
  ghost1.scale = (0.25)
}

function draw() {
  background("black")

  if (tower1.y > 600) {
    tower1.y = 200
  }
  ghost1.velocityY = ghost1.velocityY + 1
  if (keyDown("up")) {
    ghost1.velocityY = -10
  }
  if (keyDown("left")) {
    ghost1.velocityX = -1
  }
  if (keyDown("right")) {
    ghost1.velocityX = 1
  }
  create_windows()
  if (ghost1.isTouching(inviswall1) || ghost1.isTouching(inviswall2)) {
    ghost1.bounceOff(inviswall1)
    ghost1.bounceOff(inviswall2)
  }
 if (ghost1.isTouching(plonts)) {
   plonts.collide(ghost1)
  
 }
  drawSprites()
}

//groups
function create_windows() {
  if (frameCount % 200 == 0) {
    mini_door = createSprite(200, -50)
    mini_door.addImage(tiny_doors)
    mini_door.velocityY = 5
    plont = createSprite(200, 10)
    plont.addImage(climber)
    plont.velocityY = 5
    mini_door.x = Math.round(random(120, 400))
    invis_window = createSprite(200, 15)
    invis_window.visible = false
    invis_window.x = mini_door.x
    invis_window.y = (plont.y + 15)
    invis_window.width = plont.width
    invis_window.height = 15
    invis_window.velocityY = 5
    plont.x = mini_door.x
    ghost1.depth = ghost1.depth + 1
    mini_door.lifetime = (100)
    plont.lifetime = (100)
    invis_window.lifetime = (100)
 windows.add(mini_door)
    plonts.add(plont)
    invis_windows.add(invis_window)

  }}


