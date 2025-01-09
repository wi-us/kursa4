let sheets = document
.getElementsByTagName('link');


var current_res = 1000;
window.addEventListener("resize", AutoScale);
AutoScale();
function AutoScale()
{

    let title = document
    .getElementsByTagName('title')[0].innerText;

    let width = window.screen.width;
    console.log(title + "|" + width)

    if(width >= 1000 && current_res < 1000)
    {
    sheets[4].href = "../style/header-1000.css";
    sheets[5].href = `../style/${title}-1000.css`;
    }
    else if(width < 1000 && width >= 768  && (current_res >= 1000 || current_res < 768) )
    {
    sheets[4].href = "../style/header-768.css";
    sheets[5].href = `../style/${title}-768.css`;
    }
    else if(width < 768 && width >= 480 && (current_res >= 768 || current_res < 480) )
    {
    sheets[4].href = "../style/header-480.css";
    sheets[5].href = `../style/${title}-480.css`;
    }
    else if(width < 480  && current_res >= 480)
    {
    sheets[4].href = "../style/header-360.css";
    sheets[5].href = `../style/${title}-360.css`;
    }
}

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
icon.addEventListener('click', (event) => {
  icon.classList.toggle("open");
});
});

