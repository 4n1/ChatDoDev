/*
 * SlimScroll Plugin required for sidenav to function properly
 */
(function (e) {
	e.fn.extend({
		slimScroll: function (g) {
			var a = e.extend({ width: "auto", height: "250px", size: "7px", color: "#000", position: "right", distance: "1px", start: "top", opacity: .4, alwaysVisible: !1, disableFadeOut: !1, railVisible: !1, railColor: "#333", railOpacity: .2, railDraggable: !0, railClass: "slimScrollRail", barClass: "slimScrollBar", wrapperClass: "slimScrollDiv", allowPageScroll: !1, wheelStep: 20, touchScrollStep: 200, borderRadius: "7px", railBorderRadius: "7px" }, g); this.each(function () {
				function v(d) {
					if (r) {
						d = d || window.event;
						var c = 0; d.wheelDelta && (c = -d.wheelDelta / 120); d.detail && (c = d.detail / 3); e(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && m(c, !0); d.preventDefault && !k && d.preventDefault(); k || (d.returnValue = !1)
					}
				} function m(d, e, g) {
					k = !1; var f = d, h = b.outerHeight() - c.outerHeight(); e && (f = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), f = Math.min(Math.max(f, 0), h), f = 0 < d ? Math.ceil(f) : Math.floor(f), c.css({ top: f + "px" })); l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
					f = l * (b[0].scrollHeight - b.outerHeight()); g && (f = d, d = f / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), h), c.css({ top: d + "px" })); b.scrollTop(f); b.trigger("slimscrolling", ~~f); w(); p()
				} function x() { u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30); c.css({ height: u + "px" }); var a = u == b.outerHeight() ? "none" : "block"; c.css({ display: a }) } function w() {
					x(); clearTimeout(B); l == ~~l ? (k = a.allowPageScroll, C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1; C = l; u >= b.outerHeight() ? k = !0 : (c.stop(!0,
						!0).fadeIn("fast"), a.railVisible && h.stop(!0, !0).fadeIn("fast"))
				} function p() { a.alwaysVisible || (B = setTimeout(function () { a.disableFadeOut && r || y || z || (c.fadeOut("slow"), h.fadeOut("slow")) }, 1E3)) } var r, y, z, B, A, u, l, C, k = !1, b = e(this); if (b.parent().hasClass(a.wrapperClass)) {
					var n = b.scrollTop(), c = b.closest("." + a.barClass), h = b.closest("." + a.railClass); x(); if (e.isPlainObject(g)) {
						if ("height" in g && "auto" == g.height) {
							b.parent().css("height", "auto"); b.css("height", "auto"); var q = b.parent().parent().height(); b.parent().css("height",
								q); b.css("height", q)
						} if ("scrollTo" in g) n = parseInt(a.scrollTo); else if ("scrollBy" in g) n += parseInt(a.scrollBy); else if ("destroy" in g) { c.remove(); h.remove(); b.unwrap(); return } m(n, !1, !0)
					}
				} else if (!(e.isPlainObject(g) && "destroy" in g)) {
					a.height = "auto" == a.height ? b.parent().height() : a.height; n = e("<div></div>").addClass(a.wrapperClass).css({ position: "relative", overflow: "hidden", width: a.width, height: a.height }); b.css({ overflow: "hidden", width: a.width, height: a.height }); var h = e("<div></div>").addClass(a.railClass).css({
						width: a.size,
						height: "100%", position: "absolute", top: 0, display: a.alwaysVisible && a.railVisible ? "block" : "none", "border-radius": a.railBorderRadius, background: a.railColor, opacity: a.railOpacity, zIndex: 90
					}), c = e("<div></div>").addClass(a.barClass).css({ background: a.color, width: a.size, position: "absolute", top: 0, opacity: a.opacity, display: a.alwaysVisible ? "block" : "none", "border-radius": a.borderRadius, BorderRadius: a.borderRadius, MozBorderRadius: a.borderRadius, WebkitBorderRadius: a.borderRadius, zIndex: 99 }), q = "right" == a.position ?
						{ right: a.distance } : { left: a.distance }; h.css(q); c.css(q); b.wrap(n); b.parent().append(c); b.parent().append(h); a.railDraggable && c.bind("mousedown", function (a) { var b = e(document); z = !0; t = parseFloat(c.css("top")); pageY = a.pageY; b.bind("mousemove.slimscroll", function (a) { currTop = t + a.pageY - pageY; c.css("top", currTop); m(0, c.position().top, !1) }); b.bind("mouseup.slimscroll", function (a) { z = !1; p(); b.unbind(".slimscroll") }); return !1 }).bind("selectstart.slimscroll", function (a) { a.stopPropagation(); a.preventDefault(); return !1 });
					h.hover(function () { w() }, function () { p() }); c.hover(function () { y = !0 }, function () { y = !1 }); b.hover(function () { r = !0; w(); p() }, function () { r = !1; p() }); b.bind("touchstart", function (a, b) { a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY) }); b.bind("touchmove", function (b) { k || b.originalEvent.preventDefault(); b.originalEvent.touches.length && (m((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), A = b.originalEvent.touches[0].pageY) }); x(); "bottom" === a.start ? (c.css({ top: b.outerHeight() - c.outerHeight() }),
						m(0, !0)) : "top" !== a.start && (m(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide()); window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, !1), this.addEventListener("mousewheel", v, !1)) : document.attachEvent("onmousewheel", v)
				}
			}); return this
		}
	}); e.fn.extend({ slimscroll: e.fn.slimScroll })
})(jQuery);

$(function () {
	"use strict";

	// Sidenav toggle
	$.pushMenu = {
		activate: function (toggleBtn) {

			//Enable sidebar toggle
			$(toggleBtn).on('click', function (e) {
				e.preventDefault();

				//Enable sidebar push menu
				if ($(window).width() > (767)) {
					if ($("body").hasClass('sidebar-collapse')) {
						$("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
					} else {
						$("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
					}
				}
				//Handle sidebar push menu for small screens
				else {
					if ($("body").hasClass('sidebar-open')) {
						$("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
					} else {
						$("body").addClass('sidebar-open').trigger('expanded.pushMenu');
					}
				}
				if ($('body').hasClass('fixed') && $('body').hasClass('sidebar-mini') && $('body').hasClass('sidebar-collapse')) {
					$('.sidebar').css("overflow", "visible");
					$('.main-sidebar').find(".slimScrollDiv").css("overflow", "visible");
				}
				if ($('body').hasClass('only-sidebar')) {
					$('.sidebar').css("overflow", "visible");
					$('.main-sidebar').find(".slimScrollDiv").css("overflow", "visible");
				};
			});

			$(".content-wrapper").click(function () {
				//Enable hide menu when clicking on the content-wrapper on small screens
				if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
					$("body").removeClass('sidebar-open');
				}
			});
		}
	};

	// Sidebar treemenu prototype
	$.tree = function (menu) {
		var _this = this;
		var animationSpeed = 200;
		$(document).on('click', menu + ' li a', function (e) {
			//Get the clicked link and the next element
			var $this = $(this);
			var checkElement = $this.next();

			//Check if the next element is a menu and is visible
			if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
				//Close the menu
				checkElement.slideUp(animationSpeed, function () {
					checkElement.removeClass('menu-open');
					//Fix the layout in case the sidebar stretches over the height of the window
					//_this.layout.fix();
				});
				checkElement.parent("li").removeClass("active");
			}
			//If the menu is not visible
			else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
				//Get the parent menu
				var parent = $this.parents('ul').first();
				//Close all open menus within the parent
				var ul = parent.find('ul:visible').slideUp(animationSpeed);
				//Remove the menu-open class from the parent
				ul.removeClass('menu-open');
				//Get the parent li
				var parent_li = $this.parent("li");

				//Open the target menu and add the menu-open class
				checkElement.slideDown(animationSpeed, function () {
					//Add the class active to the parent li
					checkElement.addClass('menu-open');
					parent.find('li.active').removeClass('active');
					parent_li.addClass('active');
				});
			}
			//if this isn't a link, prevent the page from being redirected
			if (checkElement.is('.treeview-menu')) {
				e.preventDefault();
			}
		});
	};

	// Activate sidenav treemenu
	$.tree('.sidebar');

	// Activate sidenav toggle
	$.pushMenu.activate("[data-toggle='offcanvas']");

	//Activate bootstrip tooltips
	$("[data-toggle='tooltip']").tooltip();

	// Login Page Flipbox control
	$('.login-content [data-toggle="flip"]').click(function () {
		$('.login-box').toggleClass('flipped');
		return false;
	});

	// Using slimscroll for sidebar
	$('.sidebar').slimScroll({
		height: ($(window).height() - $(".main-header").height()) + "px",
		color: "rgba(0,0,0,0.8)",
		size: "3px"
	});

	if ($('body').hasClass('fixed') && $('body').hasClass('sidebar-mini') && $('body').hasClass('sidebar-collapse')) {
		$('.sidebar').css("overflow", "visible");
		$('.main-sidebar').find(".slimScrollDiv").css("overflow", "visible");
	}
});

// デバッグ用
function alertValue(elm) {
	// elm.nextSibling.innerHTML = elm.value;
	alert(elm.value);
};

$(function () {
	searchWord = function () {
		var searchText = $(this).val(), // 検索ボックスに入力された値
			targetText;

		$(".treeview-menu li").each(function () {
			targetText = $(this).text();

			// 検索対象となるリストに入力された文字列が存在するかを判定する。
			if (targetText.indexOf(searchText) != -1) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	};

	// searchWordの実行(オートコンプリートにも対応させるためinputイベントにしている)
	$("#txtSearch").on("input", searchWord);
});

$(function () {
	$("#btnSend").click(function () {
		// Todo: Ajaxで取得したjsonを使用するように変更する。
		var obj = {
			time: "2017/10/19 17:00:00",
			message: "テストメッセージ"
		};

		var $divMessage = $("<div>");
		$divMessage.addClass("message me");

		var $divMessageThumb = $("<div>");
		$divMessageThumb.addClass("message-thumb");
		$divMessageThumb.append('<img src="images/user_taro.jpg" class="img-circle">');
		$divMessageThumb.append("</div>");
		$divMessage.append($divMessageThumb);

		var $divMessageChat = $("<div>");
		$divMessageChat.addClass("chat-column");
		$divMessageChat.append("<div>");
		$divMessageChat.append('<time class="pull-right">' + obj.time + '</time>');
		$divMessageChat.append("</div>");
		$divMessageChat.append('<p class="info">' + obj.message + '</p>');
		$divMessageChat.append("</div>");
		$divMessage.append($divMessageChat);

		var $divMessageEnd = $("</div>");
		$divMessage.append($divMessageEnd);

		$("#messages").append($divMessage);
	});
});






// $(function () {
// 	$("#btnUserEdit").click(function () {
// 		$("<div />")
// 			.load("userEdit.html #frmMain")
// 			.dialog({
// 				modal: true,
// 				title: "プロファイル変更",
// 				resizable: false,
// 				width: 800,
// 				height: 400
// 			}).dialog("open");

// 		// クリックして別窓表示という本来の動作をキャンセルする。
// 		return false;
// 	})
// })


// (function ($) {
// 	// style
// 	var bgStyle = 'display: none;' +
// 		'width: 100%;' +
// 		'height: 2000px;' +
// 		'position: fixed;' +
// 		'top: 0;' +
// 		'left: 0;' +
// 		'z-index: 9999;' +
// 		'background: #333;';

// 	var wrapStyle = 'display: none;' +
// 		'width: 1000px;' +
// 		'height:' + ($(window).height() * 0.9) + 'px;' +
// 		'margin: 0 0 0 -500px;' +
// 		'position: fixed;' +
// 		'top: 40px;' +
// 		'left: 50%;' +
// 		'z-index: 9999;' +
// 		'background: #fff;';

// 	var btnStyle = 'display: none;' +
// 		'width: 40px;' +
// 		'height: 40px;' +
// 		'position: fixed;' +
// 		'top: 20px;' +
// 		'right: 20px;' +
// 		'z-index: 9999;' +
// 		'background: #999;' +
// 		'border-radius: 50%;' +
// 		'cursor: pointer;' +
// 		'line-height: 40px;' +
// 		'text-align: center;' +
// 		'color: #fff';

// 	var html = '&lt;div id="iframe-bg" style="' + bgStyle + '"&gt;&lt;/div&gt;' +
// 		'&lt;div id="iframe-wrap" style="' + wrapStyle + '"&gt;&lt;/div&gt;' +
// 		'&lt;div id="iframe-btn" style="' + btnStyle + '"&gt;X&lt;/div&gt;';

// 	// add element
// 	$(html).appendTo('body');

// 	// click event
// 	$('.link a').click(function () {
// 		var url = $(this).attr('href');

// 		$('#iframe-wrap').html('&lt;iframe src="' + url + '" width="800" height="400"&gt;');
// 		$('#iframe-bg').fadeTo('normal', 0.8);

// 		$('#iframe-wrap iframe').load(function () {
// 			$('#iframe-wrap').fadeIn();
// 			$('#iframe-btn').fadeIn();
// 		});

// 		return false;
// 	});

// 	$('#iframe-btn').click(function () {
// 		$('#iframe-bg, #iframe-btn, #iframe-wrap').fadeOut();
// 	});

// })(jQuery);


(function ($) {
	$('#lnkUserEdit').click(function () {
		var url = $(this).attr('href');

		$('#iframe-wrap').html('&lt;iframe src="' + url + '" width="800" height="400"&gt;');
		$('#iframe-bg').fadeTo('normal', 0.8);

		$('#iframe-wrap iframe').load(function () {
			// 呼び出し先のヘッダーとフッターを隠す
			$(this).contents().find('#header, #footer').hide();

			$('#iframe-wrap').fadeIn();
			$('#iframe-btn').fadeIn();
		});

		return false;
	});

})(jQuery);
