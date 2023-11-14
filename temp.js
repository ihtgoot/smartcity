const n = document.querySelector(".name-input");
const e = document.querySelector(".email-input");
const mob = document.querySelector(".mob-input");
const ne = document.getElementById('name-error');
const ee = document.getElementById('email-error');
const mobe = document.getElementById('mob-error');

function showerror(element,msg)
{
    
    element.nextElementSibling.innerHTML=msg;
}
function showsuccess(element)
{
    
    element.nextElementSibling.textContent="";
}
function validate_name()
{
    nval=n.value.trim();
    if(nval==="")
    {
        showerror(n,"Name cant be empty !!!")
    }
    else
    {
        showsuccess(n);
    }
}
function validate_email()
{
    emval=e.value.trim();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emval==="")
    {
        showerror(e,"Email cant be empty !!!");
    }
    else if(!emval.match(validRegex))
    {
        showerror(e,"Invalid email format !!!");
    }
    else
    {
        showsuccess(e);
    }
}
function validate_mob()
{
    var phoneno = /^\d{10}$/;
    mobval=mob.value.trim();
    if(mobval==="")
    {
        showerror(mob,"Mobile cant be empty!!!")
        return false;
    }
    else if(mobval.match(phoneno))
    {
        showerror(mob,"Enter Valid Mobile No !!!");
    }
    else
    {
        showsuccess(mob);
    }
}
n.addEventListener('input', validate_name);
e.addEventListener('input', validate_email);
mob.addEventListener('input', validate_mob);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validate_name();
    validate_email();
    validate_mob();
});

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