
const btns = document.querySelectorAll('button.ui-button')

btns.forEach(btn => {

  btn.addEventListener('click', event => {
    const content = event.target.textContent;
    const elem = document.getElementById("president1");
    let image = '';

    if (content == "The White House") {
      image = "images/white_house.jpg";
    } else {
      image = "images/president" + content + ".jpg";
    }


    elem.classList.remove("show");
    elem.classList.add("hide");

    setTimeout(function () {
      elem.classList.remove("hide");
      elem.classList.add("show");
      elem.src = image;
    }, 500);

    console.log("the image name is: " + image);

  });

});
