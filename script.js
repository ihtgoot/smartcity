function validate()
{
    let n = document.forms["myform"]["Name"].value;
    let e = document.forms["myform"]["Email"].value;
    let mob = document.forms["myform"]["Mobile"].value;
    const ne = document.getElementById('name-error');
    const ee = document.getElementById('email-error');
    const mobe = document.getElementById('mob-error');
    if (n == ""){
        ne.innerHTML = " <img style='height:1rem; width:1rem;' src='https://t3.ftcdn.net/jpg/05/01/56/68/360_F_501566813_AXGj9vYtAKAgbZwiK8eWNVg7VrTXId5k.jpg'> Name must be filled out!!!";
        return false;
    }
    else
    {
        ne.innerHTML = "";
    }
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!e.match(validRegex) || e=="")
    {
        ee.innerHTML = " <img style='height:1rem; width:1rem;' src='https://t3.ftcdn.net/jpg/05/01/56/68/360_F_501566813_AXGj9vYtAKAgbZwiK8eWNVg7VrTXId5k.jpg'> Enter Valid Email!!!";
        return false;
    }
    else
    {
        ee.innerHTML = "";
    }
    var phoneno = /^\d{10}$/;
    if(!mob.match(phoneno) || mob=="")
    {
        mobe.innerHTML = " <img style='height:1rem; width:1rem;' src='https://t3.ftcdn.net/jpg/05/01/56/68/360_F_501566813_AXGj9vYtAKAgbZwiK8eWNVg7VrTXId5k.jpg'> Enter Valid Mobile No!!!";
        return false;
    }
    else
    {
        mobe.innerHTML = "";
    }
    return true
}

function over()
{
    var doc=document.getElementById("oh");
    var b=document.getElementById("btn-rm");
    
    if(b.innerHTML=="Read Less")
    {
        doc.style.overflowY="hidden";
        b.innerHTML="Read More";
    }
    else
    {
        doc.style.overflowY="scroll";
        b.innerHTML="Read Less";
    }
    
}
function restrictToNumbers(event) {

    const inputElement = event.target;
    const currentValue = inputElement.value.replace(/\D/g, '');
    inputElement.value = currentValue;
}
