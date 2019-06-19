function ss(){
	var ss = document.getElementById("ssimg");
	var ssright = document.getElementById("ssright");
	var tq = document.getElementById("tq");
	ss.setAttribute('src',"images/ssrighton.PNG");
	ssright.style.width = "250px";
	tq.style.right = "100px";
}
function sso(){
	var sso = document.getElementById("ssimg");
	var ssright = document.getElementById("ssright");
	var tq = document.getElementById("tq");
	sso.setAttribute('src',"images/ssrighto.PNG");
	ssright.style.width = "180px";
	tq.style.right = "30px";
}
function navimg(){
	var navimg = document.getElementById("navimg");
	var gengduo = document.getElementById("gengduo");
	navimg.setAttribute('src',"images/fko.PNG");
	gengduo.style.display = "block";
	navimg.style.transform = "rotate(180deg)";
}
function gdo(){
	var gengduo = document.getElementById("gengduo");
	var navimgo = document.getElementById("navimg");
	navimgo.setAttribute('src',"images/fk.PNG");
	gengduo.style.display = "none";
	navimgo.style.transform = "rotate(0deg)";
}
function wx(){
	var wx = document.getElementById("wxewm");
	wx.style.display = "block";
}
function wxo(){
	var wxo = document.getElementById("wxewm");
	wxo.style.display = "none";
}