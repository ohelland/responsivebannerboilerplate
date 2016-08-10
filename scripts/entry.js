var bannerConfig = require('../bannerConfig');

var currentBanner = bannerConfig.banners.filter(function(banner){

    return window.innerWidth === banner.width && window.innerHeight === banner.height;
});

if(!currentBanner.length){
    currentBanner = bannerConfig.defaultBanner;

}else{
    currentBanner = currentBanner[0];

}
   Enabler.setProfileId(1077051);
    var devDynamicContent = {};

    devDynamicContent.sheetname= [{}];
    devDynamicContent.sheetname[0]._id = 0;
    devDynamicContent.sheetname[0].ID = 1;
    devDynamicContent.sheetname[0].CAMPAIGN = "Akvariet";
    devDynamicContent.sheetname[0].CITY_CODE = "default";
    devDynamicContent.sheetname[0].txt1 = "Hvorfor fryser ikke steinbiten i kaldere strøk?";
    devDynamicContent.sheetname[0].txt1_color = "#333333";
    devDynamicContent.sheetname[0].txt2 = "(Steinbiten har frostvæske i blodet)";
    devDynamicContent.sheetname[0].txt2_color = "#333333";
    devDynamicContent.sheetname[0].txt3 = "Frisk opp kunnskapen. Besøk Akvariet i sommer!";
    devDynamicContent.sheetname[0].txt3_color = "#333333";
    devDynamicContent.sheetname[0].bg_color = "#000000";
    devDynamicContent.sheetname[0].linktxt = "akvariet.no";
    devDynamicContent.sheetname[0].image = {};
    devDynamicContent.sheetname[0].image.Type = "file";
    devDynamicContent.sheetname[0].image.Url = "https://s0.2mdn.net/ads/richmedia/studio/42749498/35792145_20160425015610180_gl3711_golf_wallpaper_1024x7686.jpg";
    devDynamicContent.sheetname[0].logo1 = {};
    devDynamicContent.sheetname[0].logo1.Type = "file";
    devDynamicContent.sheetname[0].logo1.Url = "https://s0.2mdn.net/ads/richmedia/studio/42751925/35792145_20160425015618982_gl3711_golf_wallpaper_1024x7687.jpg";
    devDynamicContent.sheetname[0].logo2 = {};
    devDynamicContent.sheetname[0].logo2.Type = "file";
    devDynamicContent.sheetname[0].logo2.Url = "https://s0.2mdn.net/ads/richmedia/studio/42752201/35792145_20160425015627920_gl3711_golf_wallpaper_1024x7688.jpg";    
    devDynamicContent.sheetname[0].out_link = {};
    devDynamicContent.sheetname[0].out_link.Url = "http://www.mollerbergen.no";
    devDynamicContent.sheetname[0].DEFAULT = true;
    devDynamicContent.sheetname[0].ACTIVE = true;
    Enabler.setDevDynamicContent(devDynamicContent);

    
    
// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
    enablerInitHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
}

function enablerInitHandler() {
	
	var currentDynamicContent = window.dynamicContent[bannerConfig.googleSheetTabName][0];			
	

	var css = 'body{background:'+currentDynamicContent.bg_color+';}#txt1{color:'+currentDynamicContent.txt1_color+';}#txt2{color:'+currentDynamicContent.txt2_color+';}#txt3{color:'+currentDynamicContent.txt3_color+';}',
	    head = document.head || document.getElementsByTagName('head')[0],
	    style = document.createElement('style');
	
	style.type = 'text/css';
	if (style.styleSheet){
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);

	
	if (typeof currentBanner.content.txt1 != 'undefined'){
		document.getElementById('txt1').innerHTML =  currentDynamicContent[currentBanner.content.txt1];
	}	
	
	if (typeof currentBanner.content.txt2 != 'undefined'){
		document.getElementById('txt2').innerHTML =  '<p>'+currentDynamicContent[currentBanner.content.txt2];+'</p>';
	}
	if (typeof currentBanner.content.txt3 != 'undefined'){
		document.getElementById('txt3').innerHTML =  '<p>'+currentDynamicContent[currentBanner.content.txt3];+'</p>';
	}
	if (typeof currentBanner.content.linktxt != 'undefined'){
		document.getElementById('linktxt').innerHTML =  '<p>'+currentDynamicContent[currentBanner.content.linktxt];+'</p>';
	}
	/*
	if (typeof currentBanner.content.image != 'undefined'){
		document.getElementById('image').innerHTML =  '<img src="'+currentDynamicContent[currentBanner.content.image].Url+'"/>';
	}
	*/
	if (typeof currentBanner.content.image != 'undefined'){
		document.getElementById('image').style.background = 'url('+currentDynamicContent[currentBanner.content.image].Url+') no-repeat 0 0';
	}

	function exitClickHandler() {
		Enabler.exitOverride("Banner Exit", currentDynamicContent.out_link.Url);
	}
	document.getElementById('banner').addEventListener('click', exitClickHandler, false);

	


}
