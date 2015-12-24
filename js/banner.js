/**
 * Created by Administrator on 2015/11/24.
 */
var  dataAry=["../img/banner1.jpg","../img/banner2.jpg","../img/banner3.jpg","../img/banner4.jpg"];

var listToArray=function(likeary){
    var ary = [];
    try {
        ary = Array.prototype.slice.call(likeAry, 0);
    } catch (e) {
        for (var i = 0; i < likeAry.length; i++) {
            ary[ary.length] = likeAry[i];
        }
    }
    return ary;
};


var getElesByClass=function(strClass,context){
    context=context||document;
    if( "getElesBylassName"){
        return context.getElementsByClassName(strClass);
    }
};



~function(){
    var banner=document.getElementById("banner");
    var initData=function(){

        var str="";
        str+="<div trueImg='" +dataAry[dataAry.length-1]+"'></div>";
        for( var i=0;i<dataAry.length;i++){
            str+="<div trueImg='" +dataAry[i]+"'></div>";
        }
        str+="<div trueImg='" +dataAry[0]+"'></div>";
    }

}();

