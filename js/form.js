function change() {
	var gz = document.getElementById('gz');
	var gzl = document.getElementById('gzl');
	var value = document.getElementById('gz1').value;
	document.getElementById('gz').innerHTML = value;
	if(value>50000){
		gz.style.fontSize="20px";
		gzl.style.fontSize="20px";
		gz.style.fontWeight="500";
	}if(value>80000){
		gz.style.fontSize="30px";
		gzl.style.fontSize="30px";
		gz.style.fontWeight="1000";
	}if(value<30000){
		gz.style.fontSize="15px";
		gzl.style.fontSize="15px";
		gz.style.fontWeight="100";
	}
}
function ted(){
	var ted = document.getElementById("te1");
	ted.style.boxShadow="2px 2px 6px rgba(0,0,0,.4)";
	ted.style.marginTop="-2px";
	ted.style.marginLeft="-2px";
	ted.style.width="304px";
	ted.style.height="34px";
}
function teo(){
	var ted = document.getElementById("te1");
	ted.style.boxShadow="none";
	ted.style.marginTop="0px";
	ted.style.marginLeft="0px";
	ted.style.width="300px";
	ted.style.height="30px";
	var val = document.getElementById("te1").value;
		if (val !== "") {
			document.getElementById("xmyza").innerHTML="😄";
		}else{
        	document.getElementById("xmyza").innerHTML="😳";
		}
}
function em(){
	var ted = document.getElementById("em1");
	ted.style.boxShadow="1px 1px 6px rgba(0,0,0,.4)";
	ted.style.marginTop="-2px";
	ted.style.marginLeft="-2px";
	ted.style.width="304px";
	ted.style.height="34px";
}
function emo(){
	var ted = document.getElementById("em1");
	ted.style.boxShadow="none";
	ted.style.marginTop="0px";
	ted.style.marginLeft="0px";
	ted.style.width="300px";
	ted.style.height="30px";
	var val = document.getElementById("em1").value;
	var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if (!reg.test(val)){
	document.getElementById("yxyza").innerHTML="😳";
	} else {
	document.getElementById("yxyza").innerHTML="😄";
} 
}
function wz(){
	var ted = document.getElementById("wz1");
	ted.style.boxShadow="1px 1px 6px rgba(0,0,0,.4)";
	ted.style.marginTop="-2px";
	ted.style.marginLeft="-2px";
	ted.style.width="304px";
	ted.style.height="34px";
}
function wzo(){
	var ted = document.getElementById("wz1");
	ted.style.boxShadow="none";
	ted.style.marginTop="0px";
	ted.style.marginLeft="0px";
	ted.style.width="300px";
	ted.style.height="30px";
	var wz1=document.getElementById("wz1").value;
	var reg=/^(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
	if(!reg.test(wz1)){
    document.getElementById("wzyza").innerHTML="😳";
	} else {
	document.getElementById("wzyza").innerHTML="😄";
}
}
function nl(){
	var ted = document.getElementById("nl1");
	ted.style.boxShadow="1px 1px 6px rgba(0,0,0,.4)";
	ted.style.marginTop="-2px";
	ted.style.marginLeft="-2px";
	ted.style.width="304px";
	ted.style.height="34px";
}
function nlo(){
	var ted = document.getElementById("nl1");
	ted.style.boxShadow="none";
	ted.style.marginTop="0px";
	ted.style.marginLeft="0px";
	ted.style.width="300px";
	ted.style.height="30px";
	var val = document.getElementById("nl1").value;
	var regu =/^[1-9]\d*|0$/;
		if (!regu.test(val)){
		document.getElementById("nlyza").innerHTML="😳";
		} else {
		document.getElementById("nlyza").innerHTML="😄";
	} 
}
function qt(){
	var ted = document.getElementById("qt1");
	ted.style.boxShadow="1px 1px 6px rgba(0,0,0,.4)";
	ted.style.marginTop="-2px";
	ted.style.marginLeft="-2px";
	ted.style.width="304px";
	ted.style.height="54px";
}
function qto(){
	var ted = document.getElementById("qt1");
	ted.style.boxShadow="none";
	ted.style.marginTop="0px";
	ted.style.marginLeft="0px";
	ted.style.width="300px";
	ted.style.height="50px";
}
function tj(){
	var ted = document.getElementById("tj1");
	ted.style.background="rgba(47,163,244,0.60)";
}
function tjo(){
	var ted = document.getElementById("tj1");
	ted.style.background="rgba(47,163,244,1.00)";
}
function yhzc() {
    var yhzc = document.getElementById('yhzc');
    var color = [ 'green', 'yellow', 'gold', 'orange', 'pink'];
//	var size = ['100px','130px'];
    setInterval(function() {
    	var radom = Math.floor(Math.random() * color.length + 1) - 1; 
      	yhzc.style.color = color[radom]; 
	}, 1000);
}
function tjcg(){
    window.open ("index.html","index");

}