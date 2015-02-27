$(function() {
	var a = $(".siteNav");
	a.html('<div class="layout"><ul class="fl"><li><a href="#"title="#">首页</a></li><li><a href="#"title="#">资讯</a></li><li><a href="#"title="#">攻略</a></li><li><a href="#"title="#">视频</a></li><li><a href="#"title="#">礼包</a></li><li><a href="#"title="#">新游</a></li><li><a href="#"title="#">游吧</a></li><li><a href="#"title="#">排行</a></li><li><a href="#"title="#">游戏库</a></li></ul><ul class="fr"><a href="#"title="#"class="snPhone"><i></i>手机版</a><a href="javascript:;"title="#"class="snNav"><i></i>全站导航</a></ul></div><div class="siteList"><a href="javascript:;"title="#"class="snNav"><i></i>全站导航</a><div class="snwrap"><div class="snlayout"><div class="snLink_box"><div class="snlTop snl s1"><span><a href="#"title="#"class="n1">新游频道</a></span><ul><li><a href="#"title="#">手游行业</a></li><li><a href="#"title="#">手游活动</a></li><li><a href="#"title="#">新游前瞻</a></li><li><a href="#"title="#">游戏动态</a></li></ul></div><div class="snlBtn snl s5"><span><a href="#"title="#"class="n3">小笨评测室</a></span><ul><li><a href="#"title="#">他山之石</a></li><li><a href="#"title="#">小笨评测</a></li></ul></div></div><div class="snLink_box"><div class="snlTop snl s2"><span><a href="#"title="#"class="n2">视频中心</a></span><ul><li><a href="#"title="#">视频攻略</a></li><li><a href="#"title="#">新游预告</a></li><li><a href="#"title="#">热游视频</a></li><li><a href="#"title="#">周边视频</a></li></ul></div><div class="snlBtn snl s6"><span><a href="#"title="#"class="n7">手游大全</a></span><ul><li><a href="#"title="#">游戏中心</a></li><li><a href="#"title="#">手游合集</a></li><li><a href="#"title="#">手游分类</a></li><li><a href="#"title="#">手游开测</a></li><li><a href="#"title="#">手游排行</a></li><li><a href="#"title="#">全部手游</a></li></ul></div></div><div class="snLink_box"><div class="snlTop snl s3"><span><a href="#"title="#"class="n5">最全攻略</a></span><ul><li><a href="#"title="#">游戏资料</a></li><li><a href="#"title="#">游戏攻略</a></li><li><a href="#"title="#">新手指南</a></li><li><a href="#"title="#">热门攻略</a></li></ul></div><div class="snlBtn snl s7"><span><a href="#"title="#"class="n4">小笨论坛</a></span><ul><li><a href="#"title="#">综合讨论</a></li><li><a href="#"title="#">热门活动</a></li><li><a href="#"title="#">兑换商城</a></li><li><a href="#"title="#">美女玩家</a></li><li><a href="#"title="#">热门游戏</a></li><li><a href="#"title="#">其他游戏</a></li></ul></div></div><div class="snLink_box"><div class="snlTop snl s4"><span><a href="#"title="#"class="n6">礼包发号</a></span><ul><li><a href="#"title="#">礼包大全</a></li><li><a href="#"title="#">我的礼包</a></li><li><a href="#"title="#">激活码</a></li><li><a href="#"title="#">新游测试表</a></li></ul></div><div class="snlBtn snl s8"><span><a href="#"title="#"class="n8">手游排行</a></span><ul><li><a href="#"title="#">苹果排行</a></li><li><a href="#"title="#">安卓排行</a></li><li><a href="#"title="#">单机排行</a></li><li><a href="#"title="#">网游排行</a></li></ul></div></div></div></div></div>');
	var b = a.find(".snNav"),
		c = $(".siteList");
	b.bind("mouseover",function(){c.show()});
	c.bind("mouseleave",function(){c.hide()});
	var d = a.find(".snlBtn");
	d.each(function(){
		var e = $(this).find('ul'),
			f = $(this).find('li'),
			g = f.size();
			if(g>4 && g<7){
				e.css({bottom:"-6px"})
			}else if(g>0 && g<4){
				e.css({bottom:"24px"})
			}
	});
});