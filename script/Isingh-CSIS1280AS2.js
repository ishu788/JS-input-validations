let lastname = document.getElementById("lastname");
let firstname = document.getElementById("firstname");
let groupsize = document.getElementById("GroupSize");


let clear = document.getElementById("members");
const members = [];
let counter = 0;

let addmember = document.getElementsByClassName("buttons")[0];
let delmember = document.getElementsByClassName("buttons")[1];
let sort = document.getElementsByClassName("buttons")[2];

let discount =  document.getElementById("discRate");


let output = " ";



addmember.onclick = function(){AddGroupMemeber();}
delmember.onclick = function(){DeleteMember();}
sort.onclick = function(){SortGroupMember();}
groupsize.addEventListener("blur", CalcGroupDiscount, false)



function SortGroupMember()
{
    members.sort(function(a,b)
    {
        let gg1 = a.split(',');
        let gg2 = b.split(',');
        if(gg1[1] < gg2[1])  return -1;
        if(gg1[1] > gg2[1])  return 1;
        return 0;
    });
    clear.innerHTML = " ";
    let x = 0;


    while( x < counter)
    {
        clear.innerHTML += `<option>${members[x]}</option>`;
        x++;
    }
    console.log(members);
    
}


function DeleteMember()
{
    if(clear!= " ")
    {
        clear.remove(clear.selectedIndex);
        members.splice(clear.selectedIndex-1,1);
        counter = counter-1;
    
        console.log(members);
    }
    else
    {
        alert("List is empty please add some members");
    }
   
    
}



function AddGroupMemeber()
{
    try
    { 
        CheckForGroupMemberInput();
        if(counter<groupsize.value)
        { console.log("hello3")
        console.log(counter)
        console.log(groupsize.value)
            members.push(`${firstname.value},${lastname.value}`);
            clear.innerHTML +=`<option>${members[counter]}</option>`;
            counter++;
            firstname.value = "";
            lastname.value  = "";
        }
        else
        {
            if(counter!=0)
            {
                alert("max members added");
                firstname.value = "";
                lastname.value  = "";
            }
           
        } 
    }
    catch(err)
    {
        alert(err);
    }
    try
    {
        CheckForGroupSizeInput(); 
       
       
    }
    catch(brr)
    {
        alert(brr);
    }  
   
    
}

function CalcGroupDiscount()
{
    console.log("e");
    if(groupsize.value>=5 && groupsize.value <=10) 
    {
        console.log("a");
        let total = (50-(50*0.1));
        console.log(total);
        discount.value = total.toFixed(2);
    }
    else if(groupsize.value>=11 && groupsize.value <=24) 
    {
        console.log("b");
        let total = (50-(50*0.2));
        console.log(total);
        console.log(discount.value)
        discount.value = total.toFixed(2);
    }
    else if(groupsize.value>=25) 
    {
        console.log("c");
        let total = (50-(50*0.25));
        console.log(total);
        discount.value =  total.toFixed(2);
    }
    else
    {
        console.log("d");
        let total = 50;
        discount.value =  total.toFixed(2);
    }
}




function CheckForGroupMemberInput()
{

    
    if(lastname.value=="")
    {
        throw "Please enter last name";
    }
    if(firstname.value == "")
    {
        throw "Please enter first name";
    }
}

function CheckForGroupSizeInput()
{
    if(groupsize.value == 0)
    {
        throw "Please enter group size";
    }
    if(groupsize.value == " ")
    {
        throw "Please enter group size";
    }
    if(isNaN(groupsize.value))
    {
        throw "group size should be numeric";
    }
}





//bee display

var t = setInterval(moveIt,500);
var pos = 0;
var pos2 = 0;
var picture = document.getElementById("bee");
picture.style.visibility = "visible";

function moveIt()
{
    if(pos>=63)
    {
        if(pos2>30)
        {
            clearInterval(t);
            document.getElementById("advice").style.display = "block";
        }
        else
        {
            pos2 +=2;
            picture.style.top = pos2 + "%";
        }
       
    }
    else
    {
        pos +=5;
        picture.style.left = pos + "%";
    } 
   
    
}
















