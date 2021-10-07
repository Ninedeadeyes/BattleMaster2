
let startSoldier=5;
let startFarmer=5;
let startGuard=5;
let info=document.getElementById("info");
let feedback=document.getElementById("feedback");
let soldierSlot=document.getElementById("soldierSlot");
let guardSlot=document.getElementById("guardSlot");
let farmerSlot=document.getElementById("farmerSlot");

let intro="<h3>Battle Master 2 </h3>";
intro+="Recruit an Army to defeat the evil orc horde .";
intro+="You need to recruit 15 soldiers to raid the orc stronghold but as you gather your army, "; 
intro+= " you will constantly be attacked.";
intro+=" You need farmers for your food supply and guards to keep your stronghold safe.";
intro+=" If any of your subjects drop to 0 then you will lose the game. Good luck Battle Master !!";

info.innerHTML=intro;
displayArmy();

function displayArmy()

{
    soldierSlot.innerHTML="";                           
    for (let i=0; i< startSoldier; i++)                     
    {
        let counter="<div class='counter'></div>";
        soldierSlot.innerHTML+=counter;

    }

    guardSlot.innerHTML="";                           
    for (let i=0; i< startGuard; i++)                     
    {
        let counter="<div class='counter'></div>";
        guardSlot.innerHTML+=counter;

    }

    farmerSlot.innerHTML="";                           
    for (let i=0; i< startFarmer; i++)                     
    {
        let counter="<div class='counter'></div>";
        farmerSlot.innerHTML+=counter;

    }

}

function take(num)

{

    if (startGuard <=0 || startFarmer<=0|| startSoldier<=0 )
    {
        feedback.innerHTML="RIP, Oh brave Battle Master";
        return 

    }

    if (startSoldier>=15)
    {
        feedback.innerHTML=" You have defeated the dreaded orcs, congratulations !!";
        displayArmy();
        return;
    }

    if (num===1)
    {
        startSoldier+=num;  
        feedback.innerHTML="You recruit 1 Soldier. ";

    }

    if (num===2)
    {
        if (startGuard>=15)
        {
            feedback.innerHTML="You have the maximum amount of Guards.";
            return;
        }

        
        let guard=Math.floor(Math.random()*2)+2;

        startGuard+=guard;  
        
        if (startGuard>15)
        {
            startGuard=15

            feedback.innerHTML="You have reach maximum amount of Guards in your Barrack.";

        }

        else
        {
            feedback.innerHTML="You recruit "+guard+ " Guards. ";

        }
            

    }

    if (num===3)
    {
        if (startFarmer>=15)
        {
            feedback.innerHTML="You have the maximum amount of Farmers. ";
            return;
        }

        let farmer=Math.floor(Math.random()*4)+2;

        startFarmer+=farmer; 
        
        if (startFarmer>15)
        {
            startFarmer=15

            feedback.innerHTML="You have reached the maximum amount of Farmers on your land.";
        }

        else
        {   
            farmer
            feedback.innerHTML="You recruit "+farmer+" Farmers. ";


        }

    }


    if (startSoldier>=15)
{
    feedback.innerHTML="You gather your army and at sunrise, you attack the Orcs Stronghold. After a brutal fight, ";
    feedback.innerHTML+="you stand tall and victorious. Congratulations you defeated the Orcs !!  ";

    displayArmy();
    return;
}
    displayArmy(); 
    computerTurn()
}    




function computerTurn()
{
    let event;

    event=Math.floor(Math.random()*8)+1;

    if (event===1)
    
    {
        feedback.innerHTML+="The Orcs attacked your stronghold but you managed to repel the horde without any casualty.";

    }

    if (event===2)
    
    {

        startSoldier-=1;
        feedback.innerHTML+="The Orcs attacked your stronghold and one of your soldier was injured.";

    }

        if (event===3)
    
    {   startFarmer-=2;
        feedback.innerHTML+=" The Orcs raided farms. They kidnapped two of your Farmers";

    }


    if (event===4 || event===5)
    
    {
        startFarmer-=4;  
        feedback.innerHTML+="A sneaky Orc has poisoned your water supply. 4 Farmers have fallen sick ";

    }

    if (event===6)
    
    {
        startGuard-=2;  
        feedback.innerHTML+="The Orcs attacked your castle at the dead of night. 2 Guards have been injured";

    }

    if (event===7)
    
    {
        startGuard-=1; 
        startFarmer-=1;
        startSoldier-=1;
        feedback.innerHTML+="The Orc Shaman cursed your army with the spell 'Doom Maker'. 1x Farmer, 1x Guard and 1x Soldier are in a state of depression";

    }

    if (event===8)
    
    {
        startFarmer+=1;
        feedback.innerHTML+="One of your farmer was able to escape from the Orc Stronghold";

    }




    if ( startSoldier<=0 )
    {
        feedback.innerHTML+=". The Orc army smashed your army.  You have been defeated !!";

    }

    if (startFarmer<=0)
    {
        feedback.innerHTML+=". The Orc army destroyed your food supply.  You have been defeated !!";

    }

    if (startGuard <=0)
    {
        feedback.innerHTML+=". The Orc army has ransacked your stronghold.  You have been defeated !!";
    }


    displayArmy();



}
