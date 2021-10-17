var falling = true;

TweenLite.set("#container", { perspective: 600 });
//TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = 10;
var container = document.getElementById("container"),
  w = window.innerWidth,
  h = window.innerHeight;

for (i = 0; i < total; i++) {
  var Div = document.createElement("div");
  var Div2 = document.createElement("div");
  var Div3 = document.createElement("div");
  TweenLite.set(Div, {
    attr: { class: "dot" },
    x: R(0, w),
    y: R(-200, -150),
    z: R(-200, 200),
    xPercent: "-50%",
    yPercent: "-50%",
  });
  container.appendChild(Div);
  animm(Div);
  if (i > 2) {
    TweenLite.set(Div2, {
      attr: { class: "dot2" },
      x: R(0, w),
      y: R(-200, -150),
      z: R(-200, 200),
      xPercent: "-50%",
      yPercent: "-50%",
    });
    container.appendChild(Div2);
    animm2(Div2);
  }
  if (i % 3 === 1) {
    TweenLite.set(Div3, {
      attr: { class: "dot3" },
      x: R(0, w),
      y: R(-200, -150),
      z: R(-200, 200),
      xPercent: "-50%",
      yPercent: "-50%",
    });
    container.appendChild(Div3);
    animm3(Div3);
  }
}

function animm(elm) {
  TweenMax.to(elm, R(6, 15), {
    y: h + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -15,
  });
  TweenMax.to(elm, R(4, 8), {
    x: "+=100",
    rotationZ: R(0, 180),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
  });
  TweenMax.to(elm, R(2, 8), {
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    delay: -5,
  });
}
function animm2(elm) {
  TweenMax.to(elm, R(6, 15), {
    y: h + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -25,
  });
  TweenMax.to(elm, R(4, 8), {
    x: "+=100",
    rotationZ: R(0, 180),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
  });
  TweenMax.to(elm, R(2, 8), {
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    delay: -5,
  });
}
function animm3(elm) {
  TweenMax.to(elm, R(6, 15), {
    y: h + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -5,
  });
  TweenMax.to(elm, R(4, 8), {
    x: "+=100",
    rotationZ: R(0, 180),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
  });
  TweenMax.to(elm, R(2, 8), {
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    delay: -5,
  });
}

function R(min, max) {
  return min + Math.random() * (max - min);
}

// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
  a = 0,
  isBackspacing = false,
  isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".
var textArray = [
  "This day belongs to you. May you prosper and stood affirm in the course of life|Happy Vietnamese Women's Day 2021",
  "She is a Dreamer, she is a believer, she is a doer, she is an achiever, and that she is 'You'",
  "I think the best role models for women are people who are fruitfully and confidently themselves, who bring light into the world.|You are princess!",
  "Sure, God created man before woman. But then you always make a rough draft before the final masterpiece.",
  "Feminism isn't about making women strong. Women are already strong. It's about changing the way the world perceives that strength.|You are Elizabeth cause you are my queen",
  "Cheers to a woman who never stopped trying one more time. You taught me what endurance and hard work are.|Wishing you a very happy Women’s Day",
  "Author: Sang Nguyen",
];

// Speed (in milliseconds) of typing.
var speedForward = 100, //Typing Speed
  speedWait = 2000, // Wait between typing and backspacing
  speedBetweenLines = 2000, //Wait between first and second lines
  speedBackspace = 25; //Backspace Speed

//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
    aString = ar[a],
    eHeader = element.children("h1"), //Header element
    eParagraph = element.children("p"); //Subheader element

  // Determine if animation should be typing or backspacing
  if (!isBackspacing) {
    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(function () {
          typeWriter(id, ar);
        }, speedBetweenLines);

        // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function () {
          typeWriter(id, ar);
        }, speedForward);
      }

      // If full string has been typed, switch to backspace mode.
    } else if (i == aString.length) {
      isBackspacing = true;
      setTimeout(function () {
        typeWriter(id, ar);
      }, speedWait);
    }

    // If backspacing is enabled
  } else {
    // If either the header or the paragraph still has text, continue backspacing
    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
      // If paragraph still has text, continue erasing, otherwise switch to the header.
      if (eParagraph.text().length > 0) {
        eParagraph.text(
          eParagraph.text().substring(0, eParagraph.text().length - 1)
        );
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function () {
        typeWriter(id, ar);
      }, speedBackspace);

      // If neither head or paragraph still has text, switch to next quote in array and start typing.
    } else {
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
      setTimeout(function () {
        typeWriter(id, ar);
      }, 50);
    }
  }
}

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

document.getElementById("background").addEventListener("click", myFunction);

function myFunction() {
  play();
  document.getElementById("modal").classList.add("div-hidden");
}
