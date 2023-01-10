var white = document.getElementById("white");
var greenSwatch = document.getElementById("green");
var blueSwatch = document.getElementById("blue");
var redSwatch = document.getElementById("red");
var blackSwatch = document.getElementById("black");
var image = document.getElementById("photo");
var price = document.getElementById("price");
var paragraph = document.getElementById("paragraph");

greenSwatch.addEventListener("mouseover", function() {
console.log("green");
  image.src = "img/download (3).jpg";
  price.innerHTML = "$62,900 , $72,900 ";
  price.style.color = "green";
  paragraph.innerHTML = "As luxury sedans go, the 2022 Audi A6 is a smart choice that impresses with its high-tech features, high-quality cabin, and smooth-and-steady ride. A pair of turbocharged engines are on offer here, with 45 models being powered by a four-cylinder engine and our 55 models being powered by a V6 engine for an extra 10,000. This is available for a limited time in our green colors.";
  price.innerHTML += " (Limited time)";
});


  



blueSwatch.addEventListener("mouseover", function() {
  image.src = "img/download (4).jpg";
  price.innerHTML = "$55,900 , $65,900";
  price.style.color = "#94a9b1";
  paragraph.innerHTML = "As luxury sedans go, the 2022 Audi A6 is a smart choice that impresses with its high-tech features, high-quality cabin, and smooth-and-steady ride. A pair of turbocharged engines are on offer here, with 45 models being powered by a four-cylinder engine and our 55 models being powered by a V6 engine for an extra 10,000."
});


blueSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});


redSwatch.addEventListener("mouseover", function() {
  image.src = "img/download (2).jpg";
  price.innerHTML = "$55,900 , $65,900";
  price.style.color = "#94a9b1";
  paragraph.innerHTML = "As luxury sedans go, the 2022 Audi A6 is a smart choice that impresses with its high-tech features, high-quality cabin, and smooth-and-steady ride. A pair of turbocharged engines are on offer here, with 45 models being powered by a four-cylinder engine and our 55 models being powered by a V6 engine for an extra 10,000."
});




white.addEventListener("mouseover", function() {
  image.src = "img/images (1).jpg";
  price.innerHTML = "$55,900 , $65,900";
  price.style.color = "#94a9b1";
  paragraph.innerHTML = "As luxury sedans go, the 2022 Audi A6 is a smart choice that impresses with its high-tech features, high-quality cabin, and smooth-and-steady ride. A pair of turbocharged engines are on offer here, with 45 models being powered by a four-cylinder engine and our 55 models being powered by a V6 engine for an extra 10,000."
});

blackSwatch.addEventListener("mouseover", function() {
    console.log("black");
      image.src = "img/download(1).jpg";
      price.innerHTML = "$53,900 , $63,900";
      price.style.color = "red";
      price.innerHTML += " (Sale)";
      paragraph.innerHTML = "As luxury sedans go, the 2022 Audi A6 is a smart choice that impresses with its high-tech features, high-quality cabin, and smooth-and-steady ride. A pair of turbocharged engines are on offer here, with 45 models being powered by a four-cylinder engine and our 55 models being powered by a V6 engine for an extra 10,000. The black is on sale as a limited time offer."
    });