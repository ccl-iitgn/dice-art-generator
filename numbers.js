function onlyWhiteDiceNos(bgtness, xpos, ypos, dsize) {
  push();
  let dotRad = dsize / 5;
  translate(xpos, ypos);
  fill(255);
  rect(0, 0, dsize, dsize, dsize / 5);

  textAlign(CENTER, CENTER);
  textSize(dsize / 2);
  noStroke();
  fill(0);
  if (bgtness < 42.5) {
    text("6", dsize / 2, dsize / 2);
  } else if (bgtness >= 42.5 && bgtness < 85) {
    text("5", dsize / 2, dsize / 2);
  } else if (bgtness >= 85 && bgtness < 127.5) {
    text("4", dsize / 2, dsize / 2);
  } else if (bgtness >= 127.5 && bgtness < 170) {
    text("3", dsize / 2, dsize / 2);
  } else if (bgtness >= 170 && bgtness < 212.5) {
    text("2", dsize / 2, dsize / 2);
  } else if (bgtness >= 212.5 && bgtness < 255) {
    text("1", dsize / 2, dsize / 2);
  } else if (bgtness == 255) {
    text("1", dsize / 2, dsize / 2);
  }
  pop();
}

function onlyBlackDiceNos(bgtness, xpos, ypos, dsize) {
  push();
  let dotRad = dsize / 5;
  translate(xpos, ypos);
  fill(255);
  rect(0, 0, dsize, dsize, dsize / 5);

  textAlign(CENTER, CENTER);
  textSize(dsize / 2);
  noStroke();
  fill(0);
  if (bgtness < 42.5) {
    text("1", dsize / 2, dsize / 2);
  } else if (bgtness >= 42.5 && bgtness < 85) {
    text("2", dsize / 2, dsize / 2);
  } else if (bgtness >= 85 && bgtness < 127.5) {
    text("3", dsize / 2, dsize / 2);
  } else if (bgtness >= 127.5 && bgtness < 170) {
    text("4", dsize / 2, dsize / 2);
  } else if (bgtness >= 170 && bgtness < 212.5) {
    text("5", dsize / 2, dsize / 2);
  } else if (bgtness >= 212.5 && bgtness < 255) {
    text("6", dsize / 2, dsize / 2);
  } else if (bgtness == 255) {
    text("6", dsize / 2, dsize / 2);
  }
  pop();
}

function diceNos(bgtness, xpos, ypos, dsize) {
  push();
  let dotRad = dsize / 5;
  translate(xpos, ypos);

  if (bgtness <= 225 / 2) {
    fill(0);
  } else {
    fill(255);
  }
  rect(0, 0, dsize, dsize, dsize / 5);

  textAlign(CENTER, CENTER);
  textSize(dsize / 2);
  noStroke();

  noStroke();
  if (bgtness < (1 * 255) / 12) {
    fill(255);
    text("1", dsize / 2, dsize / 2);
  } else if (bgtness >= (1 * 225) / 12 && bgtness < (2 * 225) / 12) {
    fill(255);
    text("2", dsize / 2, dsize / 2);
  } else if (bgtness >= (2 * 255) / 12 && bgtness < (3 * 255) / 12) {
    fill(255);
    text("3", dsize / 2, dsize / 2);
  } else if (bgtness >= (3 * 255) / 12 && bgtness < (4 * 255) / 12) {
    fill(255);
    text("4", dsize / 2, dsize / 2);
  } else if (bgtness >= (4 * 255) / 12 && bgtness < (5 * 255) / 12) {
    fill(255);
    text("5", dsize / 2, dsize / 2);
  } else if (bgtness >= (5 * 255) / 12 && bgtness < (6 * 255) / 12) {
    fill(255);
    text("6", dsize / 2, dsize / 2);
  } else if (bgtness >= (6 * 255) / 12 && bgtness < (7 * 255) / 12) {
    fill(0);
    text("6", dsize / 2, dsize / 2);
  } else if (bgtness >= (7 * 255) / 12 && bgtness < (8 * 255) / 12) {
    fill(0);
    text("5", dsize / 2, dsize / 2);
  } else if (bgtness >= (8 * 255) / 12 && bgtness < (9 * 255) / 12) {
    fill(0);
    text("4", dsize / 2, dsize / 2);
  } else if (bgtness >= (9 * 255) / 12 && bgtness < (10 * 255) / 12) {
    fill(0);
    text("3", dsize / 2, dsize / 2);
  } else if (bgtness >= (10 * 255) / 12 && bgtness < (11 * 255) / 12) {
    fill(0);
    text("2", dsize / 2, dsize / 2);
  } else if (bgtness >= (11 * 255) / 12 && bgtness < (12 * 255) / 12) {
    fill(0);
    text("1", dsize / 2, dsize / 2);
  } else if (bgtness == (12 * 255) / 12) {
    fill(0);
    text("1", dsize / 2, dsize / 2);
  }
  pop();
}
