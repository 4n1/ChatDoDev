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





//switch tab user, group, bot function
function openTab(evt, str) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(str).style.display = "block";
	evt.currentTarget.className += " active";
}

//search in conversation
function btnClick() {
	//not implement
}

//Chat function
$(function () {
	// Correctly decide between ws:// and wss://
	var ws_path = "/rooms/stream/";
	console.log("Connecting to " + ws_path);

	var webSocketBridge = new channels.WebSocketBridge();
	webSocketBridge.connect(ws_path);
	// Handle incoming messages
	webSocketBridge.listen(function (data) {
		// Decode the JSON
		console.log("Got websocket message", data);
		// Handle errors
		if (data.error) {
			alert(data.error);
			return;
		}
		// Handle joining
		if (data.join) {
			console.log("Joining room " + data.join);
			var roomdiv = $(
				"<div class='room' id='room-" + data.join + "'>" +
				"<h2>" + data.title + "</h2>" +
				"<div class='messages'></div>" +
				"<form><input><button>Send</button></form>" +
				"</div>"
			);
			// Hook up send button to send a message
			roomdiv.find("form").on("submit", function () {
				webSocketBridge.send({
					"command": "send",
					"room": data.join,
					"message": roomdiv.find("input").val()
				});
				roomdiv.find("input").val("");
				return false;
			});
			$("#chats").append(roomdiv);
			// Handle leaving
		} else if (data.leave) {
			console.log("Leaving room " + data.leave);
			$("#room-" + data.leave).remove();
			// Handle getting a message
		} else if (data.message || data.msg_type != 0) {
			var msgdiv = $("#room-" + data.room + " .messages");
			var ok_msg = "";
			// msg types are defined in chat/settings.py
			// Only for demo purposes is hardcoded, in production scenarios, consider call a service.
			switch (data.msg_type) {
				case 0:
					// Message
					ok_msg = "<div class='message'>" +
						"<span class='username'>" + data.username + "</span>" +
						"<span class='body'>" + data.message + "</span>" +
						"</div>";
					break;
				case 1:
					// Warning / Advice messages
					ok_msg = "<div class='contextual-message text-warning'>" + data.message +
						"</div>";
					break;
				case 2:
					// Alert / Danger messages
					ok_msg = "<div class='contextual-message text-danger'>" + data.message +
						"</div>";
					break;
				case 3:
					// "Muted" messages
					ok_msg = "<div class='contextual-message text-muted'>" + data.message +
						"</div>";
					break;
				case 4:
					// User joined room
					ok_msg = "<div class='contextual-message text-muted'>" + data.username +
						" joined the room!" +
						"</div>";
					break;
				case 5:
					// User left room
					ok_msg = "<div class='contextual-message text-muted'>" + data.username +
						" left the room!" +
						"</div>";
					break;
				default:
					console.log("Unsupported message type!");
					return;
			}
			msgdiv.append(ok_msg);

			msgdiv.scrollTop(msgdiv.prop("scrollHeight"));
		} else {
			console.log("Cannot handle message!");
		}
	});

	// Says if we joined a room or not by if there's a div for it
	inRoom = function (roomId) {
		return $("#room-" + roomId).length > 0;
	};

	// Room join/leave
	$("li.room-link").click(function () {
		roomId = $(this).attr("data-room-id");
		if (inRoom(roomId)) {
			// Leave room
			$(this).removeClass("joined");
			webSocketBridge.send({
				"command": "leave",
				"room": roomId
			});
		} else {
			// Join room
			$(this).addClass("joined");
			webSocketBridge.send({
				"command": "join",
				"room": roomId
			});
		}
	});

	// Helpful debugging
	webSocketBridge.socket.onopen = function () {
		console.log("Connected to chat socket");
	};
	webSocketBridge.socket.onclose = function () {
		console.log("Disconnected from chat socket");
	}
});





// デバッグ用
function alertValue(elm) {
	// elm.nextSibling.innerHTML = elm.value;
	alert(elm.value);
};

// ユーザー検索
$(function () {
	searchUser = function () {
		var searchText = $(this).val(), // ユーザー検索ボックスに入力された値
			targetText;

		$(".treeview-menu li").each(function () {
			targetText = $(this).text();

			// 検索対象となるリストに入力された文字列が存在するかを判定する。
			if (targetText.indexOf(searchText) === -1) {
				$(this).hide();
			} else {
				$(this).show();
			}
		});
	};

	// searchWordの実行(オートコンプリートにも対応させるためinputイベントにしている)
	$("#txtSearch").on("input", searchUser);
});

// 前回検索した文字列
var preSearchText = "";
// 前回表示対象になったメッセージのインデックス
var preSearchIndex = Number.MAX_VALUE;
// 検索でヒットしたメッセージのTop位置を保持する配列
var topPos = new Array();

// チャット検索(前回検索後、メッセージが追加されても前回の続きから検索する。)
$(function () {
	searchChat = function () {
		// チャット検索ボックスに入力された値
		var searchText = $("#txtSearchChat").val().trim();

		if (searchText === "") {
			return;
		}

		var targetText,      // 検索対象のメッセージ
			targetIndex = 0, // 検索でヒットして表示対象になるメッセージのインデックス
			numHit = 0;      // 検索でヒットした件数

		topPos.length = 0;

		// 前回の検索でマーキングしたものを削除する。
		$("mark").contents().unwrap();

		$("div.chat-column p.info").each(function () {
			targetText = $(this).text();

			if (targetText.indexOf(searchText) !== -1) {
				topPos.push(this.offsetTop);

				var str;
				str = $(this).html().replace(new RegExp(searchText, 'g'), '<mark class="highlight">' + searchText.trim() + '</mark>');
				$(this).html(str);

				numHit += 1;
			};
		});

		if (numHit === 0) {
			return;
		}

		if (preSearchText !== searchText) {
			preSearchText = searchText;
			preSearchIndex = Number.MAX_VALUE;
		}

		if (preSearchIndex > numHit) {
			// 一番下の検索結果を表示させる。
			targetIndex = numHit - 1;
		} else {
			if (preSearchIndex === 0) {
				// 一番上まで検索したら、一番下まで戻って表示させる。
				targetIndex = numHit - 1;
			} else {
				// 前回の検索結果で表示したものの一つ上を表示させる。
				targetIndex = preSearchIndex - 1;
			}
		}
		preSearchIndex = targetIndex;

		$("#messages").scrollTop(topPos[targetIndex] - 30);
	};

	$("#btnSearchChat").click(searchChat);
});

// メッセージ送信
$(function () {
	function sendMessage() {
		// Todo: この処理全体がテスト用

		if ($("#msgContent").val() === "") {
			return;
		}

		var obj = {
			time: "17:00",
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
		$divMessageChat.append('<p class="info">' + $("#msgContent").val() + '</p>');
		$divMessageChat.append("</div>");
		$divMessage.append($divMessageChat);

		var $divMessageEnd = $("</div>");
		$divMessage.append($divMessageEnd);

		$("#messages").append($divMessage);
		$("#messages").scrollTop($("#messages")[0].scrollHeight);

		// Todo: 送信後、受信してその内容を画面に表示する。
		// Todo: 送信成功ならば、クリアするようにする。
		$("#msgContent").val("");
	};

	// 送信ボタン(紙飛行機アイコン)を押下した場合
	$('#btnSend').click(sendMessage);

	// 「Enterで送信」がオンで、メッセージ入力領域内でEnterキーを押下した場合
	$("#msgContent").keypress(function (e) {
		if ($("#chkEnter").prop("checked")) {
			if (e.which === 13) {
				sendMessage();
				// sendMessage内で入力した内容をクリアしてもEnterキーの入力が
				// 残ってしまうため、falseを返して入力を無効にする。
				return false;
			};
		};
	});
});

// 画面初期表示処理
$(function () {
	$("#messages").scrollTop($("#messages")[0].scrollHeight);
});


// 添付ファイルドラッグ&ドロップ
$(function () {
	// ドラッグ&ドロップのイベントをハンドルする。
	var obj = $("#messageCard");
	obj.on('dragenter', function (e) {
		e.stopPropagation();
		e.preventDefault();
		// e.style("cursor: hand");
	});
	obj.on('dragover', function (e) {
		e.stopPropagation();
		e.preventDefault();
	});
	obj.on('drop', function (e) {
		e.preventDefault();
		var files = e.originalEvent.dataTransfer.files;
		
		// Todo: 複数のファイルを受け入れるのか?
		for (var i = 0; i < files.length; i++){
			$("#uploadFile").text(files[i].name);
		}
		// handleFileUpload(files);
	});

	// メッセージ領域外でファイルがドロップされた場合、ブラウザで開いてしまうのを防ぐ。
	$(document).on('dragenter', function (e) {
		e.stopPropagation();
		e.preventDefault();
	});
	$(document).on('dragover', function (e) {
		e.stopPropagation();
		e.preventDefault();
	});
	$(document).on('drop', function (e) {
		e.preventDefault();
		e.preventDefault();
	});

	// ファイルがドロップされた際、HTML5のFormData()を使用して、ファイルを読み込む。
	function handleFileUpload(files) {
		for (var i = 0; i < files.length; i++) {
			var fd = new FormData();
			fd.append('file', files[i]);
			sendFileToServer(fd);
		}
	}

	// jQuery AJAX APIを使用して、FormData()をサーバに送信する。
	function sendFileToServer(formData) {
		// Todo: D&Dした時点では送信せず、送信ボタンを押下すると送信するようにする。
		var uploadUrl = "";
		var extraData = {};
		// Todo: アップロード処理の実装
		alert("アップロードが完了しました。");
		// var jqXhr = $.ajax({
		// 	xhr: function () {
		// 		var xhrObj = $.ajaxSettings.xhr();
		// 		if (xhrObj.upload) {
		// 			xhrObj.upload.addEventListener('progress', onDrop, false);
		// 		}
		// 		return xhrObj;
		// 	},
		// 	url: uploadUrl,
		// 	type: "POST",
		// 	contentType: false,
		// 	processData: false,
		// 	cache: false,
		// 	data: formData,
		// 	success: function (data) {
		// 		alert("アップロードが完了しました。");
		// 	}
		// });
	};

	function onDrop(event) {
		var files = event.dataTransfer.files;
		// Todo: 画面に情報を表示する処理等を実装する。
		$("uploadFile").innerHTML = "";
		for (var i = 0; i < files.length; i++) {
			var file = files[i];
			$("uploadFile").innerHTML +=
				file.name + "(" + file.size / 1000 + "KB)" + "<br />";
			alert("ファイルをドロップしました。")
		}
	};
});

// $(function () {
// 	$("#btnPict").click(function () {
// 		alert("sss");
// 	});
// });
