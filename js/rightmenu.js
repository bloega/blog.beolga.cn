let rmf={showRightMenu:function(e,t=0,n=0){var o=$("#rightMenu");o.css("top",t+"px").css("left",n+"px"),e?o.show():o.hide()},switchDarkMode:function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(()=>window.disqusReset(),200)},switchReadMode:function(){const t=document.body,n=(t.classList.add("read-mode"),document.createElement("button"));n.type="button",n.className="fas fa-sign-out-alt exit-readmode",t.appendChild(n),n.addEventListener("click",function e(){t.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",e)})},copySelect:function(){document.execCommand("Copy",!1,null)},scrollToTop:function(){btf.scrollToDest(0,500)}};navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||(window.oncontextmenu=function(e){$(".rightMenu-group.hide").hide(),document.getSelection().toString()&&$("#menu-text").show();let t=e.clientX+10,n=e.clientY;var e=$("#rightMenu").width(),o=$("#rightMenu").height();return t+e>window.innerWidth&&(t-=e+10),n+o>window.innerHeight&&(n-=n+o-window.innerHeight),rmf.showRightMenu(!0,n,t),!1},window.addEventListener("click",function(){rmf.showRightMenu(!1)}));