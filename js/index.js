var  main=document.querySelector("#main");
var oLis=document.querySelectorAll(".slide>li");
var winH=document.documentElement.clientHeight;
var winW=document.documentElement.clientWidth;
var desW=640;
var desH=960;
if(winW/winH>desW/desH){
    main.style.webkitTransform="scale("+winW/desW+")";
}
else{
    main.style.webkitTransform="scale("+winH/desH+")";

}


window.setTimeout(function () {
    var oList = document.querySelectorAll(".slide>li");
    var oDiv = oList[0].getElementsByTagName("div");
    oDiv[0].id = "a1";
    //for (var i = 0; i < oList.length; i++) {
    //    oList[i].className = "move";
    //}
}, 300);

[].forEach.call(oLis,function(){
    arguments[0].index=arguments[1];
    arguments[0].addEventListener("touchstart",start,false);
    arguments[0].addEventListener("touchmove",move,false);
    arguments[0].addEventListener("touchend",end,false);
});

function start(e){
    this.start= e.changedTouches[0].pageY;

}

function move(e){
    e.preventDefault();
    this.flag=true;
    var touchMove= e.changedTouches[0].pageY;
    var changePos=touchMove-this.start;
    var  cur=this.index;
    var step=1/2;
    [].forEach.call(oLis,function(){
        if(arguments[1]!==cur){
            arguments[0].style.display="none";
        }
        arguments[0].className="";
        arguments[0].firstElementChild.id="";
    })

    if(changePos>0){
        var pos=-winH+changePos;
        this.preSIndex=cur===0?oLis.length-1:cur-1;
    }
    else if(changePos<0){

        var pos=winH+changePos;
        this.preSIndex=cur===oLis.length-1?0:cur+1;
    }
    oLis[this.preSIndex].style.webkitTransform="translate(0,"+pos+"px)";
    oLis[this.preSIndex].className="zIndex";
    oLis[this.preSIndex].style.display="block";
    oLis[cur].style.webkitTransform="scale("+(1-Math.abs(changePos)/winH*step)+") translate(0,"+changePos+"px)"

}

function end(e){
    if(this.flag){
        oLis[this.preSIndex].style.webkitTransform="translate(0,0)";
        oLis[this.preSIndex].style.webkitTransition="0.5s";
        oLis[this.preSIndex].addEventListener("webkitTransitionEnd",function(){
            this.style.webkitTransition=" ";
            this.firstElementChild.id="a"+(this.index+1);
        },false);


    }

}




window.addEventListener("load", function () {
    var musicAudio = document.querySelector("#musicAudio");
    var music = document.querySelector(".music");

    musicAudio.addEventListener("canplay", function () {
        music.style.display = "block";
        music.className = "music move1";
    }, false);
    musicAudio.play();

    $t.tap(music, {
        end: function (e) {
            if (musicAudio.paused) {
                musicAudio.play();
                this.className = "music move1";
                return;
            }
            musicAudio.pause();
            this.className = "music";
        }
    });
}, false);

//init on-page
//window.setTimeout(function () {
//    pageList[0].className = "pageDemo move";
//}, 0);








document.addEventListener("touchstart",function(){

},false)
