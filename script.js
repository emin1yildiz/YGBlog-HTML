var slideIndex = 1;
showDivs(slideIndex);

function changeSlider(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("slideImage");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length} ;
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
x[slideIndex-1].style.display = "block";
}

const colorInputEl = document.getElementById('color')
        colorInputEl.addEventListener('input', event => {
            const color = event.target.value
            const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
            if( color.match(hexColorRegex) ) {
                colorInputEl.style.borderColor = color
            } else {
                colorInputEl.style.borderColor = 'rgb(226, 226, 226)'
            }
        })