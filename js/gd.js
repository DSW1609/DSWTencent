$(function(){//打击公示滚动
    $('.dowebok').liMarquee({
        direction: 'up'
    });
});
	$(function(){//合作伙伴滚动
	$('.hzlb').liMarquee();
});
	function wyjb() {//我要举报事件
    var obj = document.getElementById("jbleft");   
    obj.setAttribute('src',"image/jb2.png")
}
	function wyjbout() {
    var obj = document.getElementById("jbleft");   
    obj.setAttribute('src',"image/jb1.png")  
}
	function ss1() {//搜索事件
    var obj = document.getElementById("ss");   
    obj.setAttribute('src',"image/ss2.png")  
}
	function ss2() {
    var obj = document.getElementById("ss");   
    obj.setAttribute('src',"image/ss1.png")  
}
	function dj(){//冻结事件（icon）
	var obj = document.getElementById("dj2");   
	obj.setAttribute('src',"image/dj2.png");
}
	function djout(){
	var obj = document.getElementById("dj2");   
    obj.setAttribute('src',"image/djie1.png") 
}
	function jd(){//解冻事件（icon）
	var obj = document.getElementById("jd");   
    obj.setAttribute('src',"image/jdong2.png") 
}
	function jdout(){
	var obj = document.getElementById("jd");   
    obj.setAttribute('src',"image/jdong.png") 
}
	function zm(){//找密事件（icon）
	var obj = document.getElementById("zm");   
    obj.setAttribute('src',"image/zmi2.png") 
}
	function zmout(){
	var obj = document.getElementById("zm");   
    obj.setAttribute('src',"image/zmi.png") 
}
	function jf(){//解封事件（icon）
	var obj = document.getElementById("jf");   
    obj.setAttribute('src',"image/jfeng2.png") 
}
	function jfout(){
	var obj = document.getElementById("jf");   
    obj.setAttribute('src',"image/jfeng.png") 
}
	function wyjbcl(){//设置我要举报div显示
	var wy = document.getElementById("xf");
	wy.style.display="block";
}
	function djcl(){//设置冻结账号弹窗显示
	var dj = document.getElementById("jdxf");
	dj.style.display="block";
	var xfte = document.getElementById("xfte");
	xfte.innerText="冻结账号";
}
	function jdcl(){//设置解冻账号弹窗显示
	var dj = document.getElementById("jdxf");
	dj.style.display="block";
	var xfte = document.getElementById("xfte");
	xfte.innerText="解冻账号";
	var xzqq = document.getElementById("xzqq");
	xzqq.setAttribute('href',"https://aq.qq.com/cn2/login_limit/login_limit_index?source_id=3215");
	var xzwx = document.getElementById("xzwx");
	xzwx.setAttribute('href',"https://weixin110.qq.com/security/readtemplate?t=account_frozen/acct&type=unfrozen");
}
	function zmcl(){//设置账号找密弹窗显示
	var dj = document.getElementById("jdxf");
	dj.style.display="block";
	var xfte = document.getElementById("xfte");
	xfte.innerText="账号找密";
	var xzqq = document.getElementById("xzqq");
	xzqq.setAttribute('href',"https://aq.qq.com/v2/uv_aq/html/reset_pwd/pc_reset_pwd_input_account.html?v=4.0");
	var xzwx = document.getElementById("xzwx");
	xzwx.setAttribute('href',"https://weixin110.qq.com/security/readtemplate?t=find_password/index");
}
	
	function jfcl(){//设置解封弹窗显示
	var jf = document.getElementById("jfxf");
	jf.style.display="block";
}
	function xfx(){//设置点击X关掉弹窗
	var xfx = document.getElementById("xf");//举报弹窗
	xfx.style.display="none";
	var jdxfx = document.getElementById("jdxf");//解冻冻结找密弹窗
	jdxfx.style.display="none";
	var jfxfx = document.getElementById("jfxf");//解封弹窗
	jfxfx.style.display="none";
}
	function xfxright(){//设置X鼠标触碰右转
	var xfx = document.getElementById("x");
	xfx.setAttribute('src',"image/xright.gif");
	var jdxfx = document.getElementById("jdx");
	jdxfx.setAttribute('src',"image/xright.gif");
	var jfxfx = document.getElementById("jfx");
	jfxfx.setAttribute('src',"image/xright.gif");
	
}
	function xfxleft(){//设置X鼠标移出左转
	var xfx = document.getElementById("x");
	xfx.setAttribute('src',"image/xleft.gif");
	var jdxfx = document.getElementById("jdx");
	jdxfx.setAttribute('src',"image/xleft.gif");
	var jfxfx = document.getElementById("jfx");
	jfxfx.setAttribute('src',"image/xleft.gif") 
}
$(function(){
  //下面我们需要开发用户滚动时，当滚动向下一定距离，展示这个隐藏的顶端固定导航
   
  $(window).scroll(function(){
    //在window的滚动回调方法中，我们处理具体逻辑
      var scrollTop　=　document.documentElement.scrollTop || document.body.scrollTop;
    /* 以上代码获取滚动后，离顶端距离，这里使用两个值是为了兼容不同浏览器及其不同doctype定义 */
     
     if(scrollTop > 200){
        /*当滚动超过100px*/
        $('#nav2').fadeIn("slow");
     }else{
        $('#nav2').fadeOut("slow");
     }
     
  });
 
});