// Variables 📦📦📦----------------------------------------------------------------------
let demoStep = 0;
let settings;

let img, size, scl;
let nos = 50;
let diceLimit = 225;
let startx = 0;
let starty = 0;
let images = [];
let running = false;

function preload() {
  img = loadImage("kunal-nayyar.jpg");
}

function setup() {
  let cnv = createCanvas((w = 1000), (h = 1000)); // creates canvas
  cnv.position(300, 0);
  frameRate(1);

  settings = QuickSettings.create(0, 0, "Settings");
  settings.setWidth(300);
  settings.addHTML(
    "Choose Image",
    "<input accept='.png, .jpg, .jpeg' type='file' id='upload' onchange='handleFile()'/>"
  );
  settings.addNumber("No. of Dice", 1, 200, 50, 1);
  settings.addDropDown("Dice Color", ["Black", "White"], makeDiceArt);
  settings.addDropDown("Output", ["Dice", "Numbers"], makeDiceArt);
  settings.addButton("Run", makeDiceArt);
  settings.overrideStyle("Run", "width", "280px");
  settings.addButton("How does this work?", playDemo);
  settings.overrideStyle("How does this work?", "width", "280px");
  settings.addButton("Export", exportA4s);
  settings.overrideStyle("Export", "width", "280px");
  settings.overrideStyle("Export", "background-color", "#000000");
  settings.overrideStyle("Export", "color", "white");

  // Size and Scale Setup📏📏📏----------------------------------------------------
  size = floor(w / nos);
  scl = size / 118;
  relA4Width = 2478 * scl;
  relA4Height = 3504 * scl;

  // Image Setup 🗻🗻🗻----------------------------------------------------
  img.resize(
    img.width <= img.height ? nos * size : 0,
    img.width > img.height ? nos * size : 0
  );
  img = img.get(0, 0, nos * size, nos * size);
  img.loadPixels(); // loads image
  img.updatePixels(); // updates image
  if (nos > diceLimit) {
    // nos = 1;
  }

  // Make Dice Art🎩🎩🎩----------------------------------------------------
  stroke(120);
  makeDiceArt();
}

function draw() {
  // image(img, 0, 0);
  if (running) {
    makeDiceArt();
  }
  running = false;
}

function makeDiceArt() {
  // Calibrate🔧🔧🔧----------------------------------------------------

  nos = settings.getValue("No. of Dice");
  diceType = settings.getValue("Dice Color");
  outputType = settings.getValue("Output");

  if (nos > diceLimit) {
    // nos = 1;
  }

  // Size and Scale 📏📏📏----------------------------------------------------
  size = w / nos;
  scl = size / 118;
  relA4Width = 2478 * scl;
  relA4Height = 3504 * scl;

  // Image Setup 🗻🗻🗻----------------------------------------------------
  img.resize(
    img.width <= img.height ? nos * size : 0,
    img.width > img.height ? nos * size : 0
  );
  img = img.get(0, 0, nos * size, nos * size);
  img.loadPixels(); // loads image
  img.updatePixels(); // updates image

  clear();
  background(255);

  for (var starty = 0; starty < img.height; starty++) {
    for (var startx = 0; startx < img.width; startx++) {
      var index = (startx + starty * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];

      var bright = floor(0.3 * r + 0.59 * g + 0.11 * b);

      if (diceType.value == "Black" && outputType.value == "Dice") {
        onlyBlackDice(bright, startx, starty, size);
      } else if (diceType.value == "White" && outputType.value == "Dice") {
        onlyWhiteDice(bright, startx, starty, size);
      } else if (diceType.value == "B&W" && outputType.value == "Dice") {
        dice(bright, startx, starty, size);
      } else if (diceType.value == "Black" && outputType.value == "Numbers") {
        onlyBlackDiceNos(bright, startx, starty, size);
      } else if (diceType.value == "White" && outputType.value == "Numbers") {
        onlyWhiteDiceNos(bright, startx, starty, size);
      } else if (diceType.value == "B&W" && outputType.value == "Numbers") {
        diceNos(bright, startx, starty, size);
      } else if (diceType.value == "iRise") {
        iRise(bright, startx, starty, size);
      }

      startx = startx + floor(size) - 1;
    }
    starty = starty + floor(size) - 1;
  }
  // image(img, 0, 0);
}

function exportA4s() {
  makeDiceArt();
  let counter = 1;
  for (j = 0; j < (h - (h % relA4Height)) / relA4Height + 1; j++) {
    for (i = 0; i < (w - (w % relA4Width)) / relA4Width + 1; i++) {
      let c = get(i * relA4Width, j * relA4Height, relA4Width, relA4Height);
      c.resize(2478, 0);
      images.push(c);
    }
  }
  console.log(images.length + " images should have been downloaded");
  for (let i = 0; i < images.length; i++) {
    images[i].save("Dice Art " + str(counter), "png");
    counter++;
  }
  images = [];
}

function handleFile(file) {
  const selectedFile = document.getElementById("upload");
  const myImageFile = selectedFile.files[0];
  let urlOfImageFile = URL.createObjectURL(myImageFile);
  img = loadImage(urlOfImageFile);
  running = true;
}

function playDemo() {
  demoStep += 1;
  if (demoStep == 1) {
    clear();
    image(img, 0, 0);
    demo.html("Next");
  } else if (demoStep == 2) {
    clear();
    image(img, 0, 0);
    push();
    for (var starty = 0; starty < img.height; starty++) {
      for (var startx = 0; startx < img.width; startx++) {
        noFill();
        stroke(255, 0, 0);
        square(startx, starty, size, size / 5);
        startx = startx + floor(size) - 1; // set new startx value
      }
      starty = starty + floor(size) - 1; // set new starty value
    }
    pop();
  } else if (demoStep == 3) {
    clear();
    image(img, 0, 0);
    for (var starty1 = 0; starty1 < img.height; starty1++) {
      for (var startx1 = 0; startx1 < img.width; startx1++) {
        var index = (startx1 + starty1 * img.width) * 4;
        var r = img.pixels[index + 0];
        var g = img.pixels[index + 1];
        var b = img.pixels[index + 2];

        var bright = floor(0.3 * r + 0.59 * g + 0.11 * b); // sets pixel value to adjusted grayscale
        fill(bright);
        stroke(255, 0, 0);
        square(startx1, starty1, size, size / 5);
        startx1 = startx1 + floor(size) - 1; // set new startx value
      }
      starty1 = starty1 + floor(size) - 1; // set new starty value
    }
  } else if (demoStep == 4) {
    clear();
    stroke(120);
    makeDiceArt();
    demoStep = 0;
    demo.html("How does this work?");
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    makeDiceArt();
  }
}

function numberChanged() {}
