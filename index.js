function clock(){
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("mins");
    var seconds=document.getElementById("secs");
    var ampm=document.getElementById("am-pm");

    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();
    if(a>=12 && a<24){
        ampm.innerHTML="PM"
    }
    if(a>12){
        a=a-12;
    }

    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
}

function welcome(){
    var a=new Date().getHours();
    if(a>=0 && a<12){
        document.getElementById("text-container").innerHTML="GRAB SOME HEALTHY BREAKFAST!!!"
        document.getElementById("Image-container").style.backgroundImage="url(./Images/Group.jpg)";
    }
    else if(a>=12 && a<16){
        document.getElementById("text-container").innerHTML="LET'S HAVE SOME LUNCH!!"
        document.getElementById("Image-container").style.backgroundImage="url(./Images/Group2.jpg)";
    }
    else if(a>=16 && a<20){
        document.getElementById("text-container").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        document.getElementById("Image-container").style.backgroundImage="url(./Images/lunch_image.png)";
    }
    else{
        document.getElementById("text-container").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP"
        document.getElementById("Image-container").style.backgroundImage="url(./Images/goodnight_image.jpg)";
    }
}
setInterval(welcome,1);
setInterval(clock,1000);
function Makediv(){

    // For Wake up time

    var invalue=document.getElementById('wakeUpTimeSelector');    
    var value=invalue.options[invalue.selectedIndex].text;

    if(value!='Default' && !(document.getElementById('Dynamic-Block'))){
        var container1=document.createElement('div');
    container1.className="grid-item"
    container1.id="Dynamic-Block"
    document.getElementById('alarm-container').appendChild(container1);
    document.getElementById('Dynamic-Block').innerHTML="Wake Up Time "+value;
    }
    else{
        if(value!='Default')
        document.getElementById('Dynamic-Block').innerHTML="Wake Up Time "+value;
    }
    
    // for Lunch time
    var invalue2=document.getElementById('lunchTimeSelector');
    var value2=invalue2.options[invalue2.selectedIndex].text;
    
    if(value2!='Default' && !(document.getElementById('Dynamic-Block2'))){
        var container2=document.createElement('div');
    container2.className="grid-item"
    container2.id="Dynamic-Block2"
    document.getElementById('alarm-container').appendChild(container2);
    document.getElementById('Dynamic-Block2').innerHTML="Lunch Time "+value2;
    }
    else{
        if(value2!='Default')
        document.getElementById('Dynamic-Block2').innerHTML="Lunch Time "+value2;
    }

    // for nap time

    var invalue3=document.getElementById('napTimeSelector');
    var value3=invalue3.options[invalue3.selectedIndex].text;

    if(value3!='Default' && !(document.getElementById('Dynamic-Block3')))
    {
        var container3=document.createElement('div');
    container3.className="grid-item"
    container3.id="Dynamic-Block3"
    document.getElementById('alarm-container').appendChild(container3);
    document.getElementById('Dynamic-Block3').innerHTML="Nap Time "+value3
    }
    else{
        if(value3!='Default')
        document.getElementById('Dynamic-Block3').innerHTML="Nap Time "+value3
    }

    // for night time

    var invalue4=document.getElementById('nightTimeSelector');
    var value4=invalue4.options[invalue4.selectedIndex].text;

    if(value4!='Default' && !(document.getElementById('Dynamic-Block4')))
    {
        var container4=document.createElement('div');
    container4.className="grid-item"
    container4.id="Dynamic-Block4"
    document.getElementById('alarm-container').appendChild(container4);
    document.getElementById('Dynamic-Block4').innerHTML="Night Time "+value4
    }
    else{
        if(value4!='Default')
        document.getElementById('Dynamic-Block4').innerHTML="Night Time "+value4
    }
}
function settime(){
    var i=document.getElementById("wakeUpTimeSelector").value;
    var hours=new Date().getHours();
    
    if(i==hours){
        document.getElementById("message").innerHTML="GOOD MORNING!! WAKE UP!!"
    }
    var j=document.getElementById("lunchTimeSelector").value;
    if(j==hours){
        document.getElementById("message").innerHTML="GOOD AFTERNOON !! TAKE SOME REST"
    }
    var k=document.getElementById("napTimeSelector").value;
    if(k==hours){
       
        document.getElementById("message").innerHTML="GOOD EVENING !!"
    }
    var m=document.getElementById("nightTimeSelector").value;
    if(m==hours){
        document.getElementById("message").innerHTML="GOOD NIGHT !!"
    }
    Makediv();
}