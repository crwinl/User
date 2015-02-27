$(function(){
	var a = $("#user_pannel .user-login"),
		b = "login_name_h",
		c = $("#user_pannel .user_link"),
		d = a.find(".login_name b");
	a.hover(function(){a.addClass(b); c.show();testAnim(c,"bounceInDown");},function(){a.removeClass(b);c.hide();});
	d.bind("mouseenter",function(){testAnim(d,"shake");});
});

function testAnim(o,c) {
		o.addClass(c + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$(this).removeClass(c + ' animated');
	});
};


