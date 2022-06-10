function dice(bgtness, xpos, ypos, dsize) {
  push();
  let dotRad = dsize / 5;
  translate(xpos, ypos);

  if (bgtness <= 225 / 2) {
    fill(0);
  } else {
    fill(255);
  }
  rect(0, 0, dsize, dsize, dsize / 5);

  noStroke();
  if (bgtness < (1 * 255) / 12) {
    fill(255);
    ellipse(size / 2, size / 2, dotRad);
  } else if (bgtness >= (1 * 225) / 12 && bgtness < (2 * 225) / 12) {
    fill(255);
    ellipse(size / 3, (2 * size) / 3, dotRad);
    ellipse((2 * size) / 3, size / 3, dotRad);
  } else if (bgtness >= (2 * 255) / 12 && bgtness < (3 * 255) / 12) {
    fill(255);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse(size / 2, size / 2, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
  } else if (bgtness >= (3 * 255) / 12 && bgtness < (4 * 255) / 12) {
    fill(255);
    ellipse(size / 4, size / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
  } else if (bgtness >= (4 * 255) / 12 && bgtness < (5 * 255) / 12) {
    fill(255);
    ellipse(size / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
    ellipse(size / 2, size / 2, dotRad);
  } else if (bgtness >= (5 * 255) / 12 && bgtness < (6 * 255) / 12) {
    fill(255);
    ellipse(size / 4, size / 4, dotRad);
    ellipse(size / 4, (2 * size) / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, (2 * size) / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
  } else if (bgtness >= (6 * 255) / 12 && bgtness < (7 * 255) / 12) {
    fill(0);
    ellipse(size / 4, size / 4, dotRad);
    ellipse(size / 4, (2 * size) / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, (2 * size) / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
  } else if (bgtness >= (7 * 255) / 12 && bgtness < (8 * 255) / 12) {
    fill(0);
    ellipse(size / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
    ellipse(size / 2, size / 2, dotRad);
  } else if (bgtness >= (8 * 255) / 12 && bgtness < (9 * 255) / 12) {
    fill(0);
    ellipse(size / 4, size / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
  } else if (bgtness >= (9 * 255) / 12 && bgtness < (10 * 255) / 12) {
    fill(0);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse(size / 2, size / 2, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
  } else if (bgtness >= (10 * 255) / 12 && bgtness < (11 * 255) / 12) {
    fill(0);
    ellipse(size / 3, (2 * size) / 3, dotRad);
    ellipse((2 * size) / 3, size / 3, dotRad);
  } else if (bgtness >= (11 * 255) / 12 && bgtness < (12 * 255) / 12) {
    fill(0);
    ellipse(size / 2, size / 2, dotRad);
  } else if (bgtness == (12 * 255) / 12) {
    fill(0);
    ellipse(size / 2, size / 2, dotRad);
  }
  pop();
}

function onlyWhiteDice(bgtness, xpos, ypos, dsize) {
  push();
  // rectMode(CENTER);
  let dotRad = dsize / 5;
  translate(xpos, ypos);
  fill(255, 255, 255);
  rect(0, 0, dsize, dsize, dsize / 5);

  noStroke();
  if (bgtness < 42.5) {
    fill(0, 0, 0);
    ellipse(size / 4, size / 4, dotRad);
    fill(0, 0, 0);
    ellipse(size / 4, (2 * size) / 4, dotRad);
    fill(0, 0, 0);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    fill(0, 0, 0);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, (2 * size) / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
  } else if (bgtness >= 42.5 && bgtness < 85) {
    fill(0, 0, 0);
    ellipse(size / 4, size / 4, dotRad);
    fill(0, 0, 0);
    ellipse((3 * size) / 4, size / 4, dotRad);
    fill(0, 0, 0);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    fill(0, 0, 0);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
    ellipse(size / 2, size / 2, dotRad);
  } else if (bgtness >= 85 && bgtness < 127.5) {
    fill(0, 0, 0);
    ellipse(size / 4, size / 4, dotRad);
    fill(0, 0, 0);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    fill(0, 0, 0);
    ellipse((3 * size) / 4, size / 4, dotRad);
    fill(0, 0, 0);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
  } else if (bgtness >= 127.5 && bgtness < 170) {
    fill(0, 0, 0);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    fill(0, 0, 0);
    ellipse(size / 2, size / 2, dotRad);
    fill(0, 0, 0);
    ellipse((3 * size) / 4, size / 4, dotRad);
  } else if (bgtness >= 170 && bgtness < 212.5) {
    fill(0, 0, 0);
    ellipse(size / 3, (2 * size) / 3, dotRad);
    fill(0, 0, 0);
    ellipse((2 * size) / 3, size / 3, dotRad);
  } else if (bgtness >= 212.5 && bgtness < 255) {
    fill(0, 0, 0);
    ellipse(size / 2, size / 2, dotRad);
  } else if (bgtness == 255) {
    fill(0, 0, 0);
    ellipse(size / 2, size / 2, dotRad);
  }
  pop();
}

function onlyBlackDice(bgtness, xpos, ypos, dsize) {
  push();
  // rectMode(CENTER);
  let dotRad = dsize / 5;
  translate(xpos, ypos);
  fill(0);
  rect(0, 0, dsize, dsize, dsize / 5);

  noStroke();
  if (bgtness < 42.5) {
    fill(255);
    ellipse(size / 2, size / 2, dotRad);
  } else if (bgtness >= 42.5 && bgtness < 85) {
    fill(255);
    ellipse(size / 3, (2 * size) / 3, dotRad);
    ellipse((2 * size) / 3, size / 3, dotRad);
  } else if (bgtness >= 85 && bgtness < 127.5) {
    fill(255);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse(size / 2, size / 2, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
  } else if (bgtness >= 127.5 && bgtness < 170) {
    fill(255);
    ellipse(size / 4, size / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
  } else if (bgtness >= 170 && bgtness < 212.5) {
    fill(255);
    ellipse(size / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
    ellipse(size / 2, size / 2, dotRad);
  } else if (bgtness >= 212.5 && bgtness < 255) {
    fill(255);
    ellipse(size / 4, size / 4, dotRad);
    ellipse(size / 4, (2 * size) / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, (2 * size) / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
  } else if (bgtness == 255) {
    fill(255);
    ellipse(size / 4, size / 4, dotRad);
    ellipse(size / 4, (2 * size) / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, (2 * size) / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
  }
  pop();
}

function iRise(bgtness, xpos, ypos, dsize) {
  push();
  let dotRad = dsize / 5;
  translate(xpos, ypos);

  if (bgtness >= (6 * 225) / 7) {
    fill(255);
  } else {
    fill(0);
  }
  rect(0, 0, dsize, dsize, dsize / 5);

  noStroke();
  if (bgtness < (1 * 255) / 7) {
    fill(255);
    ellipse(size / 2, size / 2, dotRad);
  } else if (bgtness >= (1 * 225) / 7 && bgtness < (2 * 225) / 7) {
    fill(255);
    ellipse(size / 3, (2 * size) / 3, dotRad);
    ellipse((2 * size) / 3, size / 3, dotRad);
  } else if (bgtness >= (2 * 255) / 7 && bgtness < (3 * 255) / 7) {
    fill(255);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse(size / 2, size / 2, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
  } else if (bgtness >= (3 * 255) / 7 && bgtness < (4 * 255) / 7) {
    fill(255);
    ellipse(size / 4, size / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
  } else if (bgtness >= (4 * 255) / 7 && bgtness < (5 * 255) / 7) {
    fill(255);
    ellipse(size / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
    ellipse(size / 2, size / 2, dotRad);
  } else if (bgtness >= (5 * 255) / 7 && bgtness < (6 * 255) / 7) {
    fill(255);
    ellipse(size / 4, size / 4, dotRad);
    ellipse(size / 4, (2 * size) / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, (2 * size) / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
  } else if (bgtness >= (6 * 255) / 7 && bgtness < (7 * 255) / 7) {
    fill(0);
    ellipse(size / 4, size / 4, dotRad);
    ellipse(size / 4, (2 * size) / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, (2 * size) / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
  } else if (bgtness == (7 * 255) / 7) {
    fill(0);
    ellipse(size / 4, size / 4, dotRad);
    ellipse(size / 4, (2 * size) / 4, dotRad);
    ellipse(size / 4, (3 * size) / 4, dotRad);
    ellipse((3 * size) / 4, size / 4, dotRad);
    ellipse((3 * size) / 4, (2 * size) / 4, dotRad);
    ellipse((3 * size) / 4, (3 * size) / 4, dotRad);
  }
  fill(255, 0, 0, 50);
  textSize(15);
  // text(bgtness, 0,0);
  pop();
}
