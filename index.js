let btn= document.getElementById('button');

let bulb = document.getElementById('bulb-btn');

btn.addEventListener('click',togglebulb);

function togglebulb()
{
    if(btn.textContent.includes('ON') )
    {
        bulb.src="images\bulb-on.jpg";
        btn.textContent="OFF";
    }
    else if(btn.textContent.includes('OFF') )
    {
        bulb.src="images\bulb-off.jpg";
        btn.textContent="ON";
    }
}