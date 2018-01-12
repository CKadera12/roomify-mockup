(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[1002,974,500,60],[0,974,1000,685],[0,0,1600,972]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.roomifystars = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.roomifywebsitemockupimagef1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.trace = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.twinselection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B1DE35").ss(2,1,1).p("Ai2iMIFtAAQAoAAAAAoIAADJQAAAogoAAIltAAQgoAAAAgoIAAjJQAAgoAoAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.twinselection, new cjs.Rectangle(-23.2,-15.1,46.6,30.3), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B0E029").ss(2,1,1).p("AkpiaIJTAAQAoAAAAAoIAADlQAAAogoAAIpTAAQgoAAAAgoIAAjlQAAgoAoAAg");
	this.shape.setTransform(0,0,1,0.968);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkpCbQgoAAAAgoIAAjlQAAgoAoAAIJTAAQAoAAAAAoIAADlQAAAogoAAg");
	this.shape_1.setTransform(0,0,1,0.968);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-16,69.6,32);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trace();
	this.instance.parent = this;
	this.instance.setTransform(-800,-486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-800,-486,1600,972), null);


(lib.twin_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twinselection();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.033,1.062);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-16.1,48.1,32.2);


// stage content:
(lib.roomify = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		/*this.twin-xl_rollover.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.twin-xl_rollover.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.twin-xl_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		*/
		
		btn_twin.addEventListener(MouseEvent.CLICK, fl_ClickToGoToAndPlayFromFrame);
		
		function fl_ClickToGoToAndPlayFromFrame(event:MouseEvent):void
		{
			gotoAndPlay(10);
		}
		
		btn_twinxl.addEventListener(MouseEvent.CLICK, fl_ClickToGoToAndPlayFromFrame);
		
		function fl_ClickToGoToAndPlayFromFrame(event:MouseEvent):void
		{
			gotoAndPlay(20);
		}
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(11));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAXIgsgqIA9gJIAbg4IAACMIg2Adg");
	this.shape.setTransform(106,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AAAhTIAcA4IA9AJIgsAqIAKA+Ig3gdIg2AdIAKg+IgsgqIA9gJg");
	this.shape_1.setTransform(110.5,10,1,1,0,0,0,0,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA3QAGAAAFgEQAFgEAEgHQADgIACgKQABgGABgQQAAgHgCgOQgCgKgDgIQgEgHgFgEQgFgEgGAAIAAgOIAJABIAIAEIAGAGIAGAIIAGAKIADAMQADASAAAJIAAAPIgDAOIgDALIgGAKIgGAIQgDAEgDACIgIADIgJACg");
	this.shape_2.setTransform(154.6,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABAxIAAhMIgPAFIAAgOIAdgMIAABhg");
	this.shape_3.setTransform(149.1,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAuQgEgCgEgEIgFgJIAOgGQACAFAFADQAEADAEAAQAEAAAEgDQAEgCADgFIAEgKQABgGgBgHQgCAFgGADQgFADgGAAQgGAAgGgCQgFgDgEgEQgEgFgCgFQgCgGgBgHQAAgHADgFQADgGAEgEQAEgEAHgCQAGgDAFAAQAHAAAFADQAGACAEAEQAEAFADAGQACAGABAIQABAMgBAKQgCAPgDAGIgEAJIgGAHQgEADgFABQgFACgFAAQgMgBgEgDgAgGghIgFAEQgDACgBADQgBADgBAEIABAHIAEAFQACADADABQADABAEAAQACAAAEgBQADgBACgCIAEgGQABgDABgDQgBgEgBgDQgBgDgDgDIgFgDQgDgCgDAAIgGABg");
	this.shape_4.setTransform(142.7,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAxIAAhMIgOAFIAAgOIAegMIAABhg");
	this.shape_5.setTransform(135.7,10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAMBDQgEgBgEgCQgEgCgDgEIgGgIIgEgKIgEgLIgDgOIAAgPQAAgJADgSIAEgMIAEgKIAGgIIAHgGIAIgEIAJgBIAAAOQgGAAgFAEQgGAEgDAHQgDAIgCAKQgCAOAAAHIACAWQACAKADAIQADAHAGAEQAFAEAGAAIAAAOIgJgCg");
	this.shape_6.setTransform(131,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").p("AAAhTIAbA4IA+AJIgtAqIALA+Ig3gdIg2AdIAKg+IgsgqIA9gJg");
	this.shape_7.setTransform(85.1,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAA4Ig2AdIALg+IgtgqIA9gJIAbg4IAcA4IA9AJIgtAqIALA+g");
	this.shape_8.setTransform(85.1,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").p("AAAhTIAcA4IA9AJIgtAqIALA+Ig3gdIg2AdIALg+IgtgqIA9gJg");
	this.shape_9.setTransform(60.2,9.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAA4Ig2AdIALg+IgtgqIA+gJIAag4IAcA4IA9AJIgsAqIAKA+g");
	this.shape_10.setTransform(60.2,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").p("AAAhTIAcA4IA9AJIgsAqIAKA+Ig3gdIg2AdIALg+IgtgqIA9gJg");
	this.shape_11.setTransform(35.3,9.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAA4Ig2AdIAKg+IgsgqIA9gJIAbg4IAbA4IA+AJIgtAqIALA+g");
	this.shape_12.setTransform(35.3,9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").p("AAAhTIAcA4IA9AJIgtAqIALA+Ig3gdIg2AdIAKg+IgsgqIA9gJg");
	this.shape_13.setTransform(10,9.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAA4Ig2AdIALg+IgtgqIA+gJIAag4IAcA4IA9AJIgsAqIAKA+g");
	this.shape_14.setTransform(10,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},5).wait(25));

	// add-to-cart
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAtIAAhKIgaAAIAAgPIBDAAIAAAPIgaAAIAABKg");
	this.shape_15.setTransform(354.1,479.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AANAtIgVggIgGAAIAAAgIgRAAIAAhZIAjAAQAGAAAGADQAGACADAEQAEAEACAGQABAFAAAFIgBAKQgBAEgEADQgCAEgEADQgFACgFABIAWAhgAgOgBIARAAQADAAACgBIAEgDQADgEAAgGQAAgFgDgEIgEgEQgCgBgDAAIgRAAg");
	this.shape_16.setTransform(346.5,479.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAZAtIgIgWIghAAIgIAWIgSAAIAihZIARAAIAiBZgAALAJIgLgiIgKAiIAVAAg");
	this.shape_17.setTransform(337.9,479.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAtIgIgDIgIgEIgHgFIgFgIIgEgIIgDgIIgBgJIABgJIADgIIAEgIIAFgGIAHgGIAIgFIAIgCIAJgBIALABIAJAEIAJAFIAHAHIgOAKQgEgFgFgDQgDgCgEAAIgGgBQgFgBgGADQgFACgEAFQgEAEgCAFQgCAGAAAFQAAAGACAFQACAGAEAEQAEAEAFACQAGADAFAAIAHgBIAGgDIAFgDIAFgFIANAJIgHAIIgIAGIgKADIgLACIgJgBg");
	this.shape_18.setTransform(329.3,479.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIAtIgIgDIgIgEIgHgFIgGgIIgEgIIgCgIIgCgJIACgJIACgIIAEgIIAGgGIAHgGIAIgFIAIgCIAIgBIAKABIAIACIAHAFIAHAGIAGAGIAEAIQACAEAAAEIACAJIgCAJQAAAFgCADIgEAIIgGAIIgHAFIgHAEIgIADIgKABIgIgBgAgLgbQgFADgEAEQgDAEgCAGQgDAFAAAFQAAAGADAFQACAGADAEQAFAEAEACQAGACAFAAQAGAAAGgCQAEgCAFgEQADgEACgGQADgFAAgGQAAgFgDgFQgCgGgDgEQgFgEgEgDQgGgBgGAAQgFAAgGABg");
	this.shape_19.setTransform(316.4,479.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAtIAAhKIgaAAIAAgPIBDAAIAAAPIgaAAIAABKg");
	this.shape_20.setTransform(307.6,479.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AglAtIAAhZIAjAAIAIABQAFABAEACIAGAEIAGAFIAFAHIADAHQADAMAAAFIgDASIgDAHIgFAHIgGAFIgGAEQgEACgFABIgIABgAgUAeIASAAQAFAAAFgDQAEgCADgEQADgEACgFQABgGAAgGQAAgFgBgFQgCgGgDgEQgDgEgEgCQgFgDgFAAIgSAAg");
	this.shape_21.setTransform(296.3,479.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglAtIAAhZIAjAAIAIABQAFABAEACIAGAEIAGAFIAFAHIADAHQADAMAAAFIgDASIgDAHIgFAHIgGAFIgGAEQgEACgFABIgIABgAgUAeIASAAQAFAAAFgDQAEgCADgEQADgEACgFQABgGAAgGQAAgFgBgFQgCgGgDgEQgDgEgEgCQgFgDgFAAIgSAAg");
	this.shape_22.setTransform(287,479.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAZAtIgIgWIghAAIgIAWIgRAAIAhhZIARAAIAhBZgAAMAJIgMgiIgKAiIAWAAg");
	this.shape_23.setTransform(277.9,479.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},29).wait(1));

	// button-add-to-cart
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ADE229").s().p("ApQChQhDAAgvgvQgvgvAAhDIAAAAQAAhCAvgvQAvgvBDAAIShAAQBDAAAvAvQAvAvAABCIAAAAQAABDgvAvQgvAvhDAAg");
	this.shape_24.setTransform(317.4,479.5,1.261,1.261);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(30));

	// sizes
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgLAqQgFgCgEgDQgFgEgDgEQgDgGAAgGIAPAAQABAGAGAEQAFACAHABQAGgBADgDQAEgDAAgEQAAgFgEgDQgCgCgFgBIgLgDIgKgEIgIgFQgCgDgBgEQgCgEABgHQAAgEADgEQACgEAEgCQAEgEAFgBQAGgCAEAAQAFAAAFABQAFACAEACQAFADACAFQADAFAAAGIgPAAQgBgEgEgDQgEgCgFgBQgDABgEACQgEACAAADQgBAEABADQACADAIADIALADQAHABAEAEQAEABACADQADADABAEIABAIQAAAFgDAFQgCAFgFADQgFAEgFABQgGACgGAAQgFAAgGgCg");
	this.shape_25.setTransform(130.6,344.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgPAoQgIgCgGgHQgGgFgDgIQgEgJAAgJQAAgJAEgIQADgJAGgFQAGgGAIgDQAIgDAHAAQAKAAAHADQAIADAGAGQAFAFADAJQADAIABAJIgBAGIhDAAQABAFACAEQADAFADADQADADAFACIAJABQAIAAAGgDQAHgEADgGIAPAFQgEAGgDAEQgFAEgEADQgGADgFABQgGACgHAAQgHAAgIgEgAAagFQAAgGgDgEQgCgEgEgDQgDgDgEgBQgFgCgFAAQgDAAgFACQgFABgDADIgGAHQgCAEgBAGIAzAAIAAAAg");
	this.shape_26.setTransform(121.7,344.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgkAqIAAgNIAxg2IguAAIAAgQIBGAAIAAAOIgyA2IAyAAIAAAPg");
	this.shape_27.setTransform(112.1,344.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHA/IAAhTIAPAAIAABTgAgHgsQgDgDAAgEQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_28.setTransform(105.4,342.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgQA8QgHgDgGgFQgGgFgDgHQgDgHAAgHIAQAAQAAAEACAEQACAEAEADQAEADAEACQAFACAFAAQAGAAAEgCQAFgBADgDIAFgFIACgHQAAgFgBgEQgCgEgDgCIgHgFIgIgCIgPgEQgJgDgHgDQgGgDgDgFQgEgGgBgMQAAgHADgHQADgGAGgFQAFgFAIgCQAHgDAIAAQAHAAAIADQAHACAFAFQAGAFADAHQADAGAAAJIgRAAQAAgFgCgEQgBgDgEgDIgHgEQgEgCgEAAIgJACQgEABgDACQgEADgCADQgCAEAAAEQAAAFADAEIAGAFIAJADIAPAEQAJADAHADQAGADAEAFQAFAEACAHQABAGgBAHQAAAHgEAGQgDAGgFAEQgFAFgIACQgHADgJAAQgIAAgJgEg");
	this.shape_29.setTransform(98.1,342.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).to({state:[]},29).wait(1));

	// colors
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgLAqQgFgCgEgDQgFgEgDgFQgDgFAAgGIAPAAQABAHAGADQAFACAHAAQAGAAAEgDQADgDAAgFQAAgEgDgDQgDgCgFgBIgLgDIgKgEIgIgFQgDgDgBgEQgBgEABgHQAAgEADgEQACgEAEgCQAEgDAFgCQAFgCAFAAQAFAAAFABQAFACAEADQAEADADAEQADAFAAAGIgPAAQgBgEgEgDQgEgCgFAAQgDAAgEACQgDACgBADQgBAEABACQACAFAIACIALADQAGACAFADQAEABACADQADAEABADIABAHQAAAGgDAFQgCAEgFAEQgFAEgFABQgGACgGAAQgFAAgGgCg");
	this.shape_30.setTransform(141.5,234.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaArIAAhTIAQAAIAAATQACgGACgEIAGgGQABgDAEgBQAEgBAEAAQAKAAAEADIgCAPQgGgCgHAAQgGAAgEADQgDADgDAFQgDAFgBAIQgCAGAAAIIAAAfg");
	this.shape_31.setTransform(134.5,234.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQAoQgIgCgGgHQgGgFgEgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAIgDQAIgDAIAAQAJAAAIADQAIADAGAGQAGAGADAIQAEAIAAAJQAAAKgEAIQgDAIgGAFQgGAHgIACQgIAEgJAAQgIAAgIgEgAgKgZQgEACgFAEQgDADgCAGQgCAEAAAGQAAAGACAFQACAFADAEQAFAEAEACQAGACAEAAQAGAAAFgCQAFgCAEgEQADgEACgFQADgFAAgGQAAgGgDgEQgCgGgDgDQgEgEgFgCQgFgCgGAAQgEAAgGACg");
	this.shape_32.setTransform(125.2,234.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_33.setTransform(117.8,232.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgQAoQgIgCgGgHQgGgFgEgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAIgDQAIgDAIAAQAJAAAIADQAIADAGAGQAGAGADAIQAEAIAAAJQAAAKgEAIQgDAIgGAFQgGAHgIACQgIAEgJAAQgIAAgIgEgAgJgZQgGACgDAEQgFADgBAGQgCAEAAAGQAAAGACAFQABAFAFAEQADAEAGACQAFACAEAAQAGAAAFgCQAFgCAEgEQADgEADgFQACgFAAgGQAAgGgCgEQgDgGgDgDQgEgEgFgCQgFgCgGAAQgEAAgFACg");
	this.shape_34.setTransform(110.5,234.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgEA+IgMgDIgKgGIgKgIIgHgJIgGgLIgEgMIgBgNIABgMIAEgMIAGgLIAHgJIAKgIIAKgGQAGgCAGgBQAFgCAHAAIAOACIAMAEIALAHIAKAIIgNALQgHgHgIgEQgMgEgHAAQgJAAgIADQgJAEgGAGQgGAHgEAJQgDAIAAAJQAAAKADAJQAEAIAGAHQAGAGAJAEQAIADAJAAIAKgBIAJgDQAGgDAJgIIANAKIgJAJIgLAHIgNAEQgHACgHAAQgHAAgFgCg");
	this.shape_35.setTransform(99.4,232.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgLAqQgFgCgEgDQgFgEgDgEQgDgGAAgGIAPAAQABAGAGAEQAFACAHABQAGgBADgDQAEgDAAgEQAAgFgEgDQgCgCgFgBIgLgDIgKgEIgIgFQgCgDgBgEQgCgEABgHQAAgEADgEQACgEAEgCQAEgEAFgBQAGgCAEAAQAFAAAFABQAFACAEACQAFADACAFQADAFAAAGIgPAAQgBgEgEgDQgEgCgFgBQgDABgEACQgEACAAADQgBAEABADQACADAIADIALADQAHABAEAEQAEABACADQADADABAEIABAIQAAAFgDAFQgCAFgFADQgFAEgFABQgGACgGAAQgFAAgGgCg");
	this.shape_36.setTransform(130.6,344.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgPAoQgIgCgGgHQgGgFgDgIQgEgJAAgJQAAgJAEgIQADgJAGgFQAGgGAIgDQAIgDAHAAQAKAAAHADQAIADAGAGQAFAFADAJQADAIABAJIgBAGIhDAAQABAFACAEQADAFADADQADADAFACIAJABQAIAAAGgDQAHgEADgGIAPAFQgEAGgDAEQgFAEgEADQgGADgFABQgGACgHAAQgHAAgIgEgAAagFQAAgGgDgEQgCgEgEgDQgDgDgEgBQgFgCgFAAQgDAAgFACQgFABgDADIgGAHQgCAEgBAGIAzAAIAAAAg");
	this.shape_37.setTransform(121.7,344.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgkAqIAAgNIAxg2IguAAIAAgQIBGAAIAAAOIgyA2IAyAAIAAAPg");
	this.shape_38.setTransform(112.1,344.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgHA/IAAhTIAPAAIAABTgAgHgsQgDgDAAgEQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_39.setTransform(105.4,342.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgQA8QgHgDgGgFQgGgFgDgHQgDgHAAgHIAQAAQAAAEACAEQACAEAEADQAEADAEACQAFACAFAAQAGAAAEgCQAFgBADgDIAFgFIACgHQAAgFgBgEQgCgEgDgCIgHgFIgIgCIgPgEQgJgDgHgDQgGgDgDgFQgEgGgBgMQAAgHADgHQADgGAGgFQAFgFAIgCQAHgDAIAAQAHAAAIADQAHACAFAFQAGAFADAHQADAGAAAJIgRAAQAAgFgCgEQgBgDgEgDIgHgEQgEgCgEAAIgJACQgEABgDACQgEADgCADQgCAEAAAEQAAAFADAEIAGAFIAJADIAPAEQAJADAHADQAGADAEAFQAFAEACAHQABAGgBAHQAAAHgEAGQgDAGgFAEQgFAFgIACQgHADgJAAQgIAAgJgEg");
	this.shape_40.setTransform(98.1,342.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},29).wait(1));

	// sweet-dreams-blush
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6D6D6D").s().p("AAZBEIAAgzQAAgGgBgFQgCgFgCgCQgDgEgEgCQgEgCgFABQgFgBgFACQgFACgEADQgFADgCAFQgDAGAAAIIAAAwIgMAAIAAiIIAMAAIAAA/QACgEAEgDIAHgFQAIgEAIAAQAIAAAGADQAHACAEAGQAFAEACAHQACAHAAAJIAAAzg");
	this.shape_41.setTransform(268.3,188);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6D6D6D").s().p("AgLAsQgFgCgFgDQgEgEgDgFQgDgFAAgGIALAAQACAGAEAEIAGAEQAEABAEAAQAJAAAFgEQAFgEAAgGQAAgFgDgDQgDgEgHgCIgLgCQgMgEgEgDQgEgEgBgEQgCgGABgHQAAgFADgEQACgEAEgDIAJgEQAFgBAEAAIAKABQAFABAEADQAEADACAEQACAFABAGIgMAAQgBgFgFgDQgEgDgGAAQgFAAgFADQgEADgBAFQgBAGAEAEQADADAHABIALADIALAEIAHAFQACADABAFQACADAAAFQAAAGgDAFQgCAEgFAEQgEADgGACQgGACgGAAQgGAAgFgCg");
	this.shape_42.setTransform(258.9,190.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6D6D6D").s().p("AgRAqQgHgCgEgFQgFgFgCgIQgCgHAAgJIAAgyIANAAIAAAyQAAAGABAFQACAFACAEIAHAFQAEACAFAAQAFAAAFgCQAFgCAEgDQAFgEACgFQADgGAAgIIAAgvIAMAAIAABXIgMAAIAAgOQgCAEgEADIgHAFQgIAEgIAAQgIAAgGgDg");
	this.shape_43.setTransform(249.5,190.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6D6D6D").s().p("AgFBEIAAiIIALAAIAACIg");
	this.shape_44.setTransform(242.1,188);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6D6D6D").s().p("AgrBBIAAiBIAuAAQAIgBAHADQAGACAEAFQAFAEACAFQACAGAAAIQAAALgDAGQgCAEgDADQgDADgFACQAFAAAFADQAEADADAFQADAEACAGIABALQAAAHgCAHQgCAHgFAEQgFAGgHACQgHADgIAAgAgfA1IAnAAQAFAAAFgCQAEgCADgEQAEgDABgEQACgEAAgFIgCgKIgFgIQgDgEgFgCQgFgDgFAAIgmAAgAgfgJIAkAAQAFAAAEgBIAGgGIAEgHIABgJQAAgFgCgDQgBgEgDgDQgDgDgFgBIgJgBIghAAg");
	this.shape_45.setTransform(234.5,188.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6D6D6D").s().p("AggAGIAAgLIBBAAIAAALg");
	this.shape_46.setTransform(223.6,190.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6D6D6D").s().p("AgLAsQgFgCgFgDQgEgEgDgFQgDgFAAgGIALAAQACAGAEAEIAGAEQAEABAEAAQAJAAAFgEQAFgEAAgGQAAgFgDgDQgDgEgHgCIgLgCQgMgEgEgDQgEgEgBgEQgCgGABgHQAAgFADgEQACgEAEgDIAJgEQAFgBAEAAIAKABQAFABAEADQAEADACAEQACAFABAGIgMAAQgBgFgFgDQgEgDgGAAQgFAAgFADQgEADgBAFQgBAGAEAEQADADAHABIALADIALAEIAHAFQACADABAFQACADAAAFQAAAGgDAFQgCAEgFAEQgEADgGACQgGACgGAAQgGAAgFgCg");
	this.shape_47.setTransform(215,190.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6D6D6D").s().p("AA5AtIAAgyIgBgLQgBgFgDgEQgDgDgEgCQgEgCgFAAQgGAAgFACQgFABgEAEQgFAEgCAFQgDAGABAIIAAAvIgNAAIAAgyQAAgHgBgEQgCgFgCgEQgDgDgEgCQgEgCgFAAQgGAAgEACQgGABgEAEQgEAEgDAFQgCAGAAAIIAAAvIgNAAIAAhXIANAAIAAAOQACgEADgDIAIgFQAJgEAHAAIAKABIAJAEIAHAGQACADACAFQACgGAFgEQAEgEAFgCQAHgDAKAAQAIAAAGACQAHADAEAFQAEAFADAHQACAIAAAJIAAAyg");
	this.shape_48.setTransform(202.6,190.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6D6D6D").s().p("AgRArQgIgDgHgHQgGgGgDgIQgEgJAAgKQAAgKAEgIQADgJAGgGQAGgGAJgDQAIgDAJAAQAKAAAJAEIAIAFIAGAHIAAgOIANAAIAABXIgNAAIAAgPIgGAHQgEAEgEACIgKADIgJABQgJAAgIgDgAgMgeQgGACgFAEQgEAFgDAGQgCAGAAAHQAAAHACAGQADAGAEAFQAFAEAGADQAGACAGAAQAGAAAGgCQAGgCAFgEQAFgFACgGQADgGAAgIQAAgHgDgHQgDgGgFgEQgFgEgGgDQgFgCgGAAQgGAAgGADg");
	this.shape_49.setTransform(187.9,190.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6D6D6D").s().p("AgQArQgIgDgGgHQgGgGgDgIQgEgJAAgKQAAgKAEgIQADgJAGgGQAGgGAIgDQAIgDAIAAQAKAAAIADQAIADAGAGQAGAGADAJQADAIAAAKIAAAFIhKAAQAAAHADAFQADAFAEAEQAEAEAGACQAFACAFAAQAJAAAIgEQAHgEAFgIIAMADQgCAGgFAFIgJAIQgGADgFABQgHACgHAAQgIAAgIgDgAAfgFQAAgHgEgFQgCgFgEgDQgEgEgFgCQgFgCgHAAQgFAAgFACQgGACgEAEQgEADgDAFQgDAFAAAHIA9AAIAAAAg");
	this.shape_50.setTransform(177.2,190.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6D6D6D").s().p("AgZAtIAAhXIAMAAIAAAUIAEgKIAGgHIAGgEIAJgBQAKAAAEADIgBAMQgGgDgHAAQgHAAgFAEQgDADgEAHQgDAGgBAIQgCAHAAAJIAAAhg");
	this.shape_51.setTransform(168.9,190.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6D6D6D").s().p("Ag0BBIAAiBIAwAAQAHgBAGACQAGABAFACIAKAGIAIAIQAEAFADAFIAFALQADARABAIQgBATgDAHIgFALQgDAGgEAEIgIAHIgKAHQgFACgGABQgGABgHAAgAgoA1IAkAAQAIAAAMgEQAIgEAFgHQAHgHACgJQADgKAAgMQAAgKgDgJQgCgKgHgIQgFgHgIgEIgJgDIgLgBIgkAAg");
	this.shape_52.setTransform(158.3,188.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6D6D6D").s().p("AgHA9IAAhNIgQAAIAAgLIAQAAIAAghIAMAAIAAAhIATAAIAAALIgTAAIAABNg");
	this.shape_53.setTransform(143,188.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6D6D6D").s().p("AgQArQgIgDgGgHQgGgGgDgIQgEgJAAgKQAAgKAEgIQADgJAGgGQAGgGAIgDQAIgDAIAAQAKAAAIADQAIADAGAGQAGAGADAJQADAIAAAKIAAAFIhKAAQAAAHADAFQADAFAEAEQAEAEAGACQAFACAFAAQAJAAAIgEQAHgEAFgIIAMADQgCAGgFAFIgJAIQgGADgFABQgHACgHAAQgIAAgIgDgAAfgFQAAgHgEgFQgCgFgEgDQgEgEgFgCQgFgCgHAAQgFAAgFACQgGACgEAEQgEADgDAFQgDAFAAAHIA9AAIAAAAg");
	this.shape_54.setTransform(134.9,190.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6D6D6D").s().p("AgQArQgIgDgGgHQgGgGgDgIQgEgJAAgKQAAgKAEgIQADgJAGgGQAGgGAIgDQAIgDAIAAQAKAAAIADQAIADAGAGQAGAGADAJQADAIAAAKIAAAFIhKAAQAAAHADAFQADAFAFAEQADAEAGACQAGACAEAAQAKAAAHgEQAHgEAEgIIANADQgDAGgDAFIgKAIQgGADgFABQgHACgHAAQgIAAgIgDgAAfgFQgBgHgDgFQgCgFgEgDQgEgEgFgCQgFgCgHAAQgEAAgGACQgGACgDAEQgFADgDAFQgDAFAAAHIA9AAIAAAAg");
	this.shape_55.setTransform(124.4,190.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6D6D6D").s().p("AAcAsIgchGIgZBGIgLAAIgihXIANAAIAaBDIAZhDIANAAIAZBDIAahDIAOAAIgiBXg");
	this.shape_56.setTransform(111.4,190.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6D6D6D").s().p("AgSBAQgIgEgFgFQgGgGgDgHQgDgHAAgHIANAAQAAAFACAEQACAFAEAEQAEAEAFACQAGADAGAAQAHAAAFgCIAKgFIAGgHQADgEABgEQAAgGgBgFQgCgEgDgDQgEgEgFgCIgKgEIgRgEQgKgBgGgEQgGgDgEgFQgEgGgBgMQAAgIAEgHQADgGAGgFQAGgFAHgDQAHgCAIAAQAIAAAHACQAIADAFAFQAGAFADAHQADAHAAAIIgMAAQAAgFgCgFQgDgFgDgDQgEgDgFgCQgGgCgFAAQgFAAgFACQgFACgEADQgFADgCAEQgCAEAAAGQAAAGADAFIAHAFQAEADAHABIARAEIAOAFQAHADAFAFQAFAFACAHQACAHgBAJQgBAGgEAGQgDAGgFAEQgGAFgIACQgIADgJAAQgJAAgIgDg");
	this.shape_57.setTransform(98.5,188.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgLAqQgFgCgEgDQgFgEgDgFQgDgFAAgGIAPAAQABAHAGADQAFACAHAAQAGAAAEgDQADgDAAgFQAAgEgDgDQgDgCgFgBIgLgDIgKgEIgIgFQgDgDgBgEQgBgEABgHQAAgEADgEQACgEAEgCQAEgDAFgCQAFgCAFAAQAFAAAFABQAFACAEADQAEADADAEQADAFAAAGIgPAAQgBgEgEgDQgEgCgFAAQgDAAgEACQgDACgBADQgBAEABACQACAFAIACIALADQAGACAFADQAEABACADQADAEABADIABAHQAAAGgDAFQgCAEgFAEQgFAEgFABQgGACgGAAQgFAAgGgCg");
	this.shape_58.setTransform(141.5,234.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgaArIAAhTIAQAAIAAATQACgGACgEIAGgGQABgDAEgBQAEgBAEAAQAKAAAEADIgCAPQgGgCgHAAQgGAAgEADQgDADgDAFQgDAFgBAIQgCAGAAAIIAAAfg");
	this.shape_59.setTransform(134.5,234.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgQAoQgIgCgGgHQgGgFgEgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAIgDQAIgDAIAAQAJAAAIADQAIADAGAGQAGAGADAIQAEAIAAAJQAAAKgEAIQgDAIgGAFQgGAHgIACQgIAEgJAAQgIAAgIgEgAgKgZQgEACgFAEQgDADgCAGQgCAEAAAGQAAAGACAFQACAFADAEQAFAEAEACQAGACAEAAQAGAAAFgCQAFgCAEgEQADgEACgFQADgFAAgGQAAgGgDgEQgCgGgDgDQgEgEgFgCQgFgCgGAAQgEAAgGACg");
	this.shape_60.setTransform(125.2,234.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_61.setTransform(117.8,232.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgQAoQgIgCgGgHQgGgFgEgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAIgDQAIgDAIAAQAJAAAIADQAIADAGAGQAGAGADAIQAEAIAAAJQAAAKgEAIQgDAIgGAFQgGAHgIACQgIAEgJAAQgIAAgIgEgAgJgZQgGACgDAEQgFADgBAGQgCAEAAAGQAAAGACAFQABAFAFAEQADAEAGACQAFACAEAAQAGAAAFgCQAFgCAEgEQADgEADgFQACgFAAgGQAAgGgCgEQgDgGgDgDQgEgEgFgCQgFgCgGAAQgEAAgFACg");
	this.shape_62.setTransform(110.5,234.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgEA+IgMgDIgKgGIgKgIIgHgJIgGgLIgEgMIgBgNIABgMIAEgMIAGgLIAHgJIAKgIIAKgGQAGgCAGgBQAFgCAHAAIAOACIAMAEIALAHIAKAIIgNALQgHgHgIgEQgMgEgHAAQgJAAgIADQgJAEgGAGQgGAHgEAJQgDAIAAAJQAAAKADAJQAEAIAGAHQAGAGAJAEQAIADAJAAIAKgBIAJgDQAGgDAJgIIANAKIgJAJIgLAHIgNAEQgHACgHAAQgHAAgFgCg");
	this.shape_63.setTransform(99.4,232.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},29).wait(1));

	// shower copy
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6E6E6E").s().p("AgUA3IAPgkIgfhJIALAAIAZA7IAag7IAKAAIgtBtg");
	this.shape_64.setTransform(621.5,39.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6E6E6E").s().p("AgOA4QgHgDgGgFQgFgGgDgHQgDgHAAgJQAAgIADgIQADgGAFgFQAGgFAHgDQAHgDAHAAQAJAAAGAEIAIAEIAEAGIAAg0IAMAAIAAByIgMAAIAAgNIgEAGIgIAFQgDACgEAAIgIABQgHAAgHgCgAgLgGQgEACgEAEQgEACgCAGQgCAFAAAGQAAAGACAGQACAFAEAEQAEADAEADQAGACAFAAQAFAAAGgCQAEgCAFgEQADgDACgGQACgFAAgHQAAgGgCgGQgCgFgFgDQgDgDgGgCQgEgCgFAAQgFAAgGACg");
	this.shape_65.setTransform(612.4,35.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6E6E6E").s().p("AgPAkQgFgDgEgEQgDgEgCgGQgCgGAAgHIAAgrIAKAAIAAArQAAAEACAFQABADACADIAGAFQADACAFgBQADABAEgCQAFgBADgDQAEgDACgFQACgFAAgHIAAgnIALAAIAABJIgLAAIAAgMQgBADgDADIgHAFQgGADgGAAQgHAAgGgCg");
	this.shape_66.setTransform(603.2,37.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6E6E6E").s().p("AgFAzIAAhAIgOAAIAAgJIAOAAIAAgcIAJAAIAAAcIAQAAIAAAJIgQAAIAABAg");
	this.shape_67.setTransform(596.4,36.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6E6E6E").s().p("AgPA1QgGgCgFgFQgFgEgCgHQgDgFAAgHIALAAQAAAEACAEQABAEAEAEIAIAFQAEACAGAAQAFAAAFgCQAFgBADgDIAFgGIADgGQABgFgCgEQgBgEgDgCQgDgEgEgCIgJgCIgOgDQgIgCgFgDQgFgDgDgEQgEgFgBgKQAAgHADgGQADgFAFgEQAFgEAGgDQAGgCAHAAQAGAAAHACQAGADAEAEQAFAEADAGQACAGAAAHIgKAAQAAgEgCgEQgCgFgDgCQgDgDgFgBQgEgCgEAAQgFAAgEACIgIAEQgDACgCAEQgCADAAAFQAAAFADAEIAFAEQAEADAFABIAPAEIAMADQAGADAEADQAEAFACAGQACAGgBAIQgBAFgDAFQgDAEgFAEQgFAEgGACQgHACgHABQgIAAgHgEg");
	this.shape_68.setTransform(589.4,36);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6D6D6D").s().p("AAUA2IAAgpIgBgJIgDgFQgCgDgEgBQgDgCgEABIgHAAIgIAEQgDACgCAFQgCAFAAAGIAAAmIgKAAIAAhrIAKAAIAAAxQABgDADgCIAGgFQAGgCAGAAQAHAAAFABQAFACADAFQAEADABAGQACAFAAAHIAAApg");
	this.shape_69.setTransform(213,151.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6D6D6D").s().p("AgIAjIgIgEQgDgDgDgEQgBgEgBgFIAJAAQABAFAEADIAEADIAGABQAHAAAEgDQAFgDAAgFQAAgEgDgCQgCgDgFgCIgKgCQgIgDgFgCIgDgHQgCgEABgGQABgDACgDIAEgGIAHgDIAHgBIAJABIAGACIAFAHQACADAAAFIgJAAQgBgFgDgCQgEgCgFAAQgDAAgEACQgEADAAAEQgCAFAFADQACACAFABIAJACIAIAEIAFADIAEAGIAAAHQAAAEgCAFQgBADgEADQgEACgEACQgFABgFABQgEgBgEgBg");
	this.shape_70.setTransform(205.6,153.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6D6D6D").s().p("AgNAiQgFgCgEgEQgDgFgCgFQgCgGAAgHIAAgoIAKAAIAAAoIABAJQABAEACACIAGAEQADACAEAAIAHgBQAFgCADgCQADgDACgFQACgEAAgHIAAglIAKAAIAABFIgKAAIAAgLIgEAGIgGAEQgGADgGAAQgGAAgFgCg");
	this.shape_71.setTransform(198.2,153.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6D6D6D").s().p("AgEA2IAAhrIAJAAIAABrg");
	this.shape_72.setTransform(192.4,151.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6D6D6D").s().p("AgiA0IAAhnIAlAAQAGAAAFACQAFACADADQAEAEACAEQACAFAAAGQgBAIgCAGIgEAFIgGAEQAEAAADACQADACADAEQADAEAAAEIACAJQAAAGgCAFQgCAFgDAEQgFAEgEACQgGADgHAAgAgYAqIAeAAIAIgCIAGgEIAEgGIABgHIgBgIQgBgDgDgDQgDgEgEgBQgDgCgFAAIgdAAgAgYgHIAcAAQAEAAADgBIAFgEIADgGIABgHIgBgHIgFgFQgCgCgDgBIgHgBIgaAAg");
	this.shape_73.setTransform(186.4,151.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6D6D6D").s().p("AgZAFIAAgJIAzAAIAAAJg");
	this.shape_74.setTransform(177.8,153.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6D6D6D").s().p("AgIAjIgIgEQgDgDgDgEQgBgEgBgFIAJAAQABAFAEADIAEADIAHABQAGAAAEgDQAFgDAAgFQAAgEgDgCQgCgDgFgCIgKgCQgIgDgFgCIgDgHQgCgEABgGQABgDACgDIAEgGIAHgDIAIgBIAIABIAGACIAFAHQACADAAAFIgJAAQgBgFgDgCQgEgCgEAAQgEAAgEACQgEADAAAEQgCAFAFADQACACAFABIAJACIAIAEIAFADIAEAGIAAAHQAAAEgCAFQgBADgEADQgEACgFACQgEABgFABQgEgBgEgBg");
	this.shape_75.setTransform(171,153.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6D6D6D").s().p("AAtAkIAAgoIgBgJQgBgEgCgCQgCgDgDgBQgEgCgEAAIgIABQgEACgDACQgEADgCAFQgCAEAAAHIAAAlIgJAAIAAgoIgBgJIgDgGQgCgDgEgBQgDgCgEAAIgIABIgIAEQgDADgCAFQgCAEAAAHIAAAlIgKAAIAAhFIAKAAIAAALIAEgGIAHgEQAGgDAGAAIAIABIAHADIAGAFQABADABAEQADgFADgDIAHgFQAGgDAHAAQAHAAAFACQAFACADAEQAEAEACAGQACAGgBAHIAAAog");
	this.shape_76.setTransform(161.2,153.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6D6D6D").s().p("AgNAiQgHgDgFgEQgEgGgDgGQgDgHAAgIQAAgHADgIQADgGAEgEQAFgFAHgDQAGgDAHABQAIAAAHACIAGAFIAFAFIAAgLIAKAAIAABFIgKAAIAAgMIgFAGQgDADgDABQgEACgEABIgHABQgHgBgGgCgAgKgYQgEACgEAEQgDADgCAFQgCAFAAAFQAAAGACAEQACAFADAEQAEADAEADQAFACAFAAQAFAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgFgCgFQgCgGgFgDQgDgDgFgCQgFgCgEABQgFAAgFABg");
	this.shape_77.setTransform(149.7,153.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6D6D6D").s().p("AgMAiQgHgDgFgEQgFgGgCgGQgDgHAAgIQAAgHADgIQACgGAFgEQAFgFAHgDQAGgDAHABQAHgBAGADQAHADAEAFQAFAEACAGQADAIAAAHIAAAEIg7AAQABAGACADQACAFAEACQADADAEACQAFABAEABQAHAAAFgEQAGgDADgGIAKADQgCAFgDADIgHAGIgJAEIgKACQgHgBgGgCgAAZgEIgDgJIgFgHIgIgEQgEgCgEABQgEgBgFACIgHAEQgEADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_78.setTransform(141.2,153.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6D6D6D").s().p("AgUAkIAAhFIAKAAIAAAQIAEgIIAEgGIAFgDIAHgBQAIAAADADIgBAKQgFgDgFAAQgGAAgEADQgCADgDAFQgCAFgBAGQgCAFAAAIIAAAag");
	this.shape_79.setTransform(134.6,153.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6D6D6D").s().p("AgpA0IAAhnIAnAAIAJABIAJADIAIAFIAGAGIAGAIIADAJQADANAAAGQgBAOgCAHIgDAIIgGAIIgGAGIgIAFIgJADIgJABgAgfAqIAdAAQAFAAAJgDQAHgDAEgGQAFgFACgIQACgIAAgJQAAgIgCgHQgCgIgFgGQgEgFgHgDIgHgDIgHgBIgdAAg");
	this.shape_80.setTransform(126.2,151.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6D6D6D").s().p("AgFAwIAAg8IgNAAIAAgJIANAAIAAgaIAJAAIAAAaIAPAAIAAAJIgPAAIAAA8g");
	this.shape_81.setTransform(114.2,152);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#6D6D6D").s().p("AgMAiQgHgDgFgEQgFgGgCgGQgDgHAAgIQAAgHADgIQACgGAFgEQAFgFAHgDQAGgDAHABQAHgBAGADQAHADAEAFQAFAEACAGQADAIAAAHIAAAEIg7AAQABAGACADQACAFAEACQADADAEACQAFABAEABQAHAAAFgEQAGgDADgGIAKADQgCAFgDADIgHAGIgJAEIgKACQgHgBgGgCgAAZgEIgDgJIgFgHIgIgEQgEgCgEABQgEgBgFACIgHAEQgEADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_82.setTransform(107.8,153.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6D6D6D").s().p("AgMAiQgHgDgFgEQgFgGgCgGQgDgHAAgIQAAgHADgIQACgGAFgEQAFgFAHgDQAGgDAHABQAHgBAGADQAHADAEAFQAFAEACAGQADAIAAAHIAAAEIg7AAQABAGACADQACAFAEACQADADAEACQAFABAEABQAHAAAFgEQAGgDADgGIAKADQgCAFgDADIgHAGIgJAEIgKACQgHgBgGgCgAAZgEIgDgJIgFgHIgIgEQgEgCgEABQgEgBgFACIgHAEQgEADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_83.setTransform(99.5,153.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6D6D6D").s().p("AAWAjIgWg3IgUA3IgIAAIgchFIAMAAIAUA1IAUg1IAJAAIAVA1IAUg1IALAAIgaBFg");
	this.shape_84.setTransform(89.2,153.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6D6D6D").s().p("AgOAyQgGgDgEgEQgEgFgDgFQgCgGAAgFIAKAAIABAIIAFAHQADACAEACQAFACAFAAQAFAAAFgCIAHgDQADgCACgEIADgGQAAgEgBgFQgBgDgDgCIgHgFIgIgDIgNgDQgIgBgFgDQgEgCgDgFQgEgEAAgKQAAgGACgGQADgEAFgFQAEgDAGgCQAGgCAGAAQAGAAAGACQAGACAEAEQAFAEACAGQADAFAAAHIgKAAQAAgFgCgDQgCgEgDgDQgDgCgEgBIgIgCIgIABIgHAEIgGAGQgBADAAAEQAAAGACADIAFAEQAEACAFACIANADIAMADQAFADAEADQAEAEACAGQABAGgBAHIgDAJQgDAEgEAEQgFADgGADQgGACgHAAQgHAAgHgDg");
	this.shape_85.setTransform(79,151.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},29).wait(1));

	// shower
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6E6E6E").s().p("AgVAmIAAhJIAKAAIAAARIAEgJIAEgGIAFgDQAEgBAEAAQAJAAADADIgBAKQgFgCgGAAQgGAAgEADQgDADgDAFQgCAFgBAHQgCAGAAAHIAAAcg");
	this.shape_86.setTransform(553.2,37.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6E6E6E").s().p("AgOAkQgGgDgFgFQgGgFgCgHQgDgHAAgJQAAgIADgHQACgHAGgFQAFgFAGgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFACAHQADAHAAAIIAAAFIg+AAQAAAFADAFQACAEADADIAJAFQAEACAEgBQAIAAAGgDQAGgEAEgFIAKACQgCAFgDAEQgEAEgEADQgFACgFABIgLACQgHAAgHgDgAAagEIgDgKQgCgEgDgDQgEgDgEgCQgFgBgFAAQgEAAgEABQgFACgEADQgDADgCAEQgDAEAAAGIAzAAIAAAAg");
	this.shape_87.setTransform(545.3,37.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6E6E6E").s().p("AAXAlIgXg7IgVA7IgJAAIgdhJIALAAIAWA4IAVg4IALAAIAVA4IAWg4IALAAIgcBJg");
	this.shape_88.setTransform(534.3,37.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6E6E6E").s().p("AgOAkQgHgDgGgFQgFgFgDgHQgDgHAAgJQAAgIADgHQADgHAFgFQAGgFAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAGAFADAHQADAHAAAIQAAAJgDAHQgDAHgGAFQgFAFgHADQgHADgIAAQgHAAgHgDgAgKgaQgGACgDAFQgEADgDAFQgCAGAAAFQAAAHACAEQADAGAEADQADAFAGACQAFABAFAAQAGAAAFgBQAFgCAEgFQAEgDACgGQADgEAAgHQAAgFgDgGQgCgFgEgDQgEgFgFgCQgFgBgGAAQgFAAgFABg");
	this.shape_89.setTransform(523.3,37.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6E6E6E").s().p("AAVA5IAAgrIgBgKIgDgGIgGgEQgEgBgEAAIgIABQgEACgEACQgDACgCAFQgDAFAAAHIAAAoIgKAAIAAhyIAKAAIAAA1IAFgGIAGgEQAHgEAGAAQAHAAAFADQAGACAEAEQADAEACAGQACAFAAAIIAAArg");
	this.shape_90.setTransform(514.2,35.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6E6E6E").s().p("AgPA1QgGgCgFgFQgFgEgCgHQgDgFAAgHIALAAQAAAEACAEQABAEAEAEIAIAFQAEACAGAAQAFAAAFgCQAFgBADgDIAFgGIADgGQABgFgCgEQgBgEgDgCQgDgEgEgCIgJgCIgOgDQgIgCgFgDQgFgDgDgEQgEgFgBgKQAAgHADgGQADgFAFgEQAFgEAGgDQAGgCAHAAQAGAAAHACQAGADAEAEQAFAEADAGQACAGAAAHIgKAAQAAgEgCgEQgCgFgDgCQgDgDgFgBQgEgCgEAAQgFAAgEACIgIAEQgDACgCAEQgCADAAAFQAAAFADAEIAFAEQAEADAFABIAPAEIAMADQAGADAEADQAEAFACAGQACAGgBAIQgBAFgDAFQgDAEgFAEQgFAEgGACQgHACgHABQgIAAgHgEg");
	this.shape_91.setTransform(505.2,36);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6E6E6E").s().p("AgUA3IAPgkIgfhJIALAAIAZA7IAag7IAKAAIgtBtg");
	this.shape_92.setTransform(621.5,39.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6E6E6E").s().p("AgOA4QgHgDgGgFQgFgGgDgHQgDgHAAgJQAAgIADgIQADgGAFgFQAGgFAHgDQAHgDAHAAQAJAAAGAEIAIAEIAEAGIAAg0IAMAAIAAByIgMAAIAAgNIgEAGIgIAFQgDACgEAAIgIABQgHAAgHgCgAgLgGQgEACgEAEQgEACgCAGQgCAFAAAGQAAAGACAGQACAFAEAEQAEADAEADQAGACAFAAQAFAAAGgCQAEgCAFgEQADgDACgGQACgFAAgHQAAgGgCgGQgCgFgFgDQgDgDgGgCQgEgCgFAAQgFAAgGACg");
	this.shape_93.setTransform(612.4,35.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6E6E6E").s().p("AgPAkQgFgDgEgEQgDgEgCgGQgCgGAAgHIAAgrIAKAAIAAArQAAAEACAFQABADACADIAGAFQADACAFgBQADABAEgCQAFgBADgDQAEgDACgFQACgFAAgHIAAgnIALAAIAABJIgLAAIAAgMQgBADgDADIgHAFQgGADgGAAQgHAAgGgCg");
	this.shape_94.setTransform(603.2,37.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6E6E6E").s().p("AgFAzIAAhAIgOAAIAAgJIAOAAIAAgcIAJAAIAAAcIAQAAIAAAJIgQAAIAABAg");
	this.shape_95.setTransform(596.4,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91,p:{x:505.2}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]}).to({state:[{t:this.shape_91,p:{x:589.4}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},29).wait(1));

	// sleep
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6E6E6E").s().p("AgmA4IAAhtIALAAIAAAMIAFgGIAIgEIAHgDIAIgBQAHAAAHADQAHADAGAFQAEAFAEAHQACAIABAIQgBAJgCAHQgEAGgEAFQgGAGgHACQgHADgHAAQgIAAgHgDIgIgFQgDgCgCgEIAAAwgAgJgqQgGABgDAEQgFAEgBAFQgDAGAAAGQAAAHADAFQACAEAEAEQAEAEAGABQAEACAFAAQAFAAAFgCQAFgCAEgDIAGgIQACgFAAgHQAAgGgCgFIgGgJQgEgEgFgCQgFgCgFAAQgGAAgEACg");
	this.shape_96.setTransform(459.7,39.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6E6E6E").s().p("AgOAkQgGgDgFgFQgGgFgCgHQgDgHAAgJQAAgIADgHQACgHAGgFQAFgFAGgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFACAHQADAHAAAIIAAAFIg+AAQAAAFADAFQACAEADADIAJAFQAEACAEgBQAIAAAGgDQAGgEAEgFIAKACQgCAFgDAEQgEAEgEADQgFACgFABIgLACQgHAAgHgDgAAagEIgDgKQgCgEgDgDQgEgDgEgCQgFgBgFAAQgEAAgEABQgFACgEADQgDADgCAEQgDAEAAAGIAzAAIAAAAg");
	this.shape_97.setTransform(450.1,37.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6E6E6E").s().p("AgOAkQgGgDgFgFQgGgFgCgHQgDgHAAgJQAAgIADgHQACgHAGgFQAFgFAGgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFACAHQADAHAAAIIAAAFIg+AAQAAAFADAFQACAEADADIAJAFQAEACAEgBQAIAAAGgDQAGgEAEgFIAKACQgCAFgDAEQgEAEgEADQgFACgFABIgLACQgHAAgHgDgAAagEIgDgKQgCgEgDgDQgEgDgEgCQgFgBgFAAQgEAAgEABQgFACgEADQgDADgCAEQgDAEAAAGIAzAAIAAAAg");
	this.shape_98.setTransform(441.2,37.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6E6E6E").s().p("AgEA5IAAhyIAJAAIAAByg");
	this.shape_99.setTransform(434.9,35.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6E6E6E").s().p("AgPA1QgGgCgFgFQgFgEgCgHQgDgFAAgHIALAAQAAAEACAEQABAEAEAEIAIAFQAEACAGAAQAFAAAFgCQAFgBADgDIAFgGIADgGQABgFgCgEQgBgEgDgCQgDgEgEgCIgJgCIgOgDQgIgCgFgDQgFgDgDgEQgEgFgBgKQAAgHADgGQADgFAFgEQAFgEAGgDQAGgCAHAAQAGAAAHACQAGADAEAEQAFAEADAGQACAGAAAHIgKAAQAAgEgCgEQgCgFgDgCQgDgDgFgBQgEgCgEAAQgFAAgEACIgIAEQgDACgCAEQgCADAAAFQAAAFADAEIAFAEQAEADAFABIAPAEIAMADQAGADAEADQAEAFACAGQACAGgBAIQgBAFgDAFQgDAEgFAEQgFAEgGACQgHACgHABQgIAAgHgEg");
	this.shape_100.setTransform(428.6,36);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6E6E6E").s().p("AgVAmIAAhJIAKAAIAAARIAEgJIAEgGIAFgDQAEgBAEAAQAJAAADADIgBAKQgFgCgGAAQgGAAgEADQgDADgDAFQgCAFgBAHQgCAGAAAHIAAAcg");
	this.shape_101.setTransform(553.2,37.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6E6E6E").s().p("AAXAlIgXg7IgVA7IgJAAIgdhJIALAAIAWA4IAVg4IALAAIAVA4IAWg4IALAAIgcBJg");
	this.shape_102.setTransform(534.3,37.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6E6E6E").s().p("AgOAkQgHgDgGgFQgFgFgDgHQgDgHAAgJQAAgIADgHQADgHAFgFQAGgFAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAGAFADAHQADAHAAAIQAAAJgDAHQgDAHgGAFQgFAFgHADQgHADgIAAQgHAAgHgDgAgKgaQgGACgDAFQgEADgDAFQgCAGAAAFQAAAHACAEQADAGAEADQADAFAGACQAFABAFAAQAGAAAFgBQAFgCAEgFQAEgDACgGQADgEAAgHQAAgFgDgGQgCgFgEgDQgEgFgFgCQgFgBgGAAQgFAAgFABg");
	this.shape_103.setTransform(523.3,37.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6E6E6E").s().p("AAVA5IAAgrIgBgKIgDgGIgGgEQgEgBgEAAIgIABQgEACgEACQgDACgCAFQgDAFAAAHIAAAoIgKAAIAAhyIAKAAIAAA1IAFgGIAGgEQAHgEAGAAQAHAAAFADQAGACAEAEQADAEACAGQACAFAAAIIAAArg");
	this.shape_104.setTransform(514.2,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100,p:{x:428.6}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97,p:{x:450.1}},{t:this.shape_96}]}).to({state:[{t:this.shape_100,p:{x:505.2}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_97,p:{x:545.3}},{t:this.shape_101}]},29).wait(1));

	// eat
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6E6E6E").s().p("AgFAzIAAhAIgOAAIAAgJIAOAAIAAgcIAJAAIAAAcIAQAAIAAAJIgQAAIAABAg");
	this.shape_105.setTransform(386.5,36.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6E6E6E").s().p("AgOAkQgIgDgFgFQgFgFgCgHQgEgHAAgJQAAgIAEgHQACgHAFgFQAFgFAIgDQAGgDAIAAQAJAAAGAEIAHAEIAGAGIAAgMIALAAIAABJIgLAAIAAgMIgGAGIgHAFQgDACgEAAIgIABQgIAAgGgDgAgLgZQgEACgEAEQgEADgCAGQgCAFAAAFQAAAGACAFQACAGAEADQAEAEAEADQAGABAFAAQAFAAAGgBQAEgCAFgEQADgDACgGQACgGABgGQAAgFgDgGQgCgGgEgDQgEgDgFgDQgFgBgFAAQgFAAgGACg");
	this.shape_106.setTransform(378.9,37.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6E6E6E").s().p("AgfA3IAAhtIA+AAIAAALIg0AAIAAAnIAtAAIAAAKIgtAAIAAAmIA1AAIAAALg");
	this.shape_107.setTransform(370.2,36);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6E6E6E").s().p("AgmA4IAAhtIALAAIAAAMIAFgGIAIgEIAHgDIAIgBQAHAAAHADQAHADAGAFQAEAFAEAHQACAIABAIQgBAJgCAHQgEAGgEAFQgGAGgHACQgHADgHAAQgIAAgHgDIgIgFQgDgCgCgEIAAAwgAgJgqQgGABgDAEQgFAEgBAFQgDAGAAAGQAAAHADAFQACAEAEAEQAEAEAGABQAEACAFAAQAFAAAFgCQAFgCAEgDIAGgIQACgFAAgHQAAgGgCgFIgGgJQgEgEgFgCQgFgCgFAAQgGAAgEACg");
	this.shape_108.setTransform(459.7,39.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6E6E6E").s().p("AgOAkQgGgDgFgFQgGgFgCgHQgDgHAAgJQAAgIADgHQACgHAGgFQAFgFAGgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFACAHQADAHAAAIIAAAFIg+AAQAAAFADAFQACAEADADIAJAFQAEACAEgBQAIAAAGgDQAGgEAEgFIAKACQgCAFgDAEQgEAEgEADQgFACgFABIgLACQgHAAgHgDgAAagEIgDgKQgCgEgDgDQgEgDgEgCQgFgBgFAAQgEAAgEABQgFACgEADQgDADgCAEQgDAEAAAGIAzAAIAAAAg");
	this.shape_109.setTransform(450.1,37.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6E6E6E").s().p("AgOAkQgGgDgFgFQgGgFgCgHQgDgHAAgJQAAgIADgHQACgHAGgFQAFgFAGgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFACAHQADAHAAAIIAAAFIg+AAQAAAFADAFQACAEADADIAJAFQAEACAEgBQAIAAAGgDQAGgEAEgFIAKACQgCAFgDAEQgEAEgEADQgFACgFABIgLACQgHAAgHgDgAAagEIgDgKQgCgEgDgDQgEgDgEgCQgFgBgFAAQgEAAgEABQgFACgEADQgDADgCAEQgDAEAAAGIAzAAIAAAAg");
	this.shape_110.setTransform(441.2,37.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6E6E6E").s().p("AgEA5IAAhyIAJAAIAAByg");
	this.shape_111.setTransform(434.9,35.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6E6E6E").s().p("AgPA1QgGgCgFgFQgFgEgCgHQgDgFAAgHIALAAQAAAEACAEQABAEAEAEIAIAFQAEACAGAAQAFAAAFgCQAFgBADgDIAFgGIADgGQABgFgCgEQgBgEgDgCQgDgEgEgCIgJgCIgOgDQgIgCgFgDQgFgDgDgEQgEgFgBgKQAAgHADgGQADgFAFgEQAFgEAGgDQAGgCAHAAQAGAAAHACQAGADAEAEQAFAEADAGQACAGAAAHIgKAAQAAgEgCgEQgCgFgDgCQgDgDgFgBQgEgCgEAAQgFAAgEACIgIAEQgDACgCAEQgCADAAAFQAAAFADAEIAFAEQAEADAFABIAPAEIAMADQAGADAEADQAEAFACAGQACAGgBAIQgBAFgDAFQgDAEgFAEQgFAEgGACQgHACgHABQgIAAgHgEg");
	this.shape_112.setTransform(428.6,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]}).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]},29).wait(1));

	// bundles
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6E6E6E").s().p("AgPA4QgJgDgGgEQgHgFgDgHQgEgIAAgIIAbAAQABAFAFAFQAGAFAIgBQAGgBAEgDQAFgDAAgFQgBgDgDgDQgDgCgGgCIgPgEQgJgCgHgEQgHgEgDgEQgFgGAAgNQAAgHADgGQAEgGAFgFQAGgEAIgDQAHgCAIgBQAHAAAIACQAIADAGAEQAGAEAEAGQADAIABAJIgcAAQAAgGgFgDQgEgCgGAAQgFAAgEACQgEACAAAHQAAADADACQADACAFACIASAEQAJADAHAEQAFADADAFQAFAIABAKQAAAIgFAHQgDAGgHAEQgGAFgIACQgJACgIABQgIgBgHgCg");
	this.shape_113.setTransform(317.4,36.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#6E6E6E").s().p("AgVA2QgKgEgJgIQgHgIgFgLQgFgLAAgMQAAgMAFgLQAFgLAHgHQAJgIAKgFQALgEALAAQALAAALAEQAKAFAIAIQAIAHAEALQAFALgBAMIAAAKIhUAAQAAAFADAFQACAEAFAEQAEACAFACQAGACAEgBQAKABAHgEQAIgEADgGIAXALQgEAIgFAEQgGAGgHADQgHADgIACQgIABgHABQgLgBgLgEgAAdgJQgBgGgCgFQgCgEgEgDQgIgGgLAAQgFAAgFACQgFABgEADIgGAHQgDAFAAAGIA4AAIAAAAg");
	this.shape_114.setTransform(305.4,36.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6E6E6E").s().p("AgOBWIAAisIAdAAIAACsg");
	this.shape_115.setTransform(295.6,33.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6E6E6E").s().p("AgZBTQgKgEgHgHQgIgIgEgLQgFgLAAgNQAAgNAFgLQAEgJAIgIQAHgIAKgEQAKgEALAAQALAAAJAEQAKAFAFAIIAAhMIAdAAIAACsIgdAAIAAgPQgFAIgKAFQgJAFgLAAQgLAAgKgFgAgKABQgGACgEAEQgEAEgCAFQgCAGAAAHQAAAHACAFQACAGAEAEQAEAEAGACQAFADAFAAQAGAAAGgDQAFgCAEgEQAEgEADgFQACgGAAgHQAAgHgCgGQgDgFgEgEQgEgEgGgCQgFgBgGAAQgFAAgFABg");
	this.shape_116.setTransform(284.9,34);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6E6E6E").s().p("AAXA5IAAg8QAAgGgCgEQgBgFgDgDQgGgHgJAAQgKAAgHAGQgDADgCAFQgCAFAAAHIAAA7IgdAAIAAhvIAdAAIAAARQAFgJAJgFQAIgFAKAAQAKAAAIADQAIADAFAGQAGAGACAJQADAJAAAMIAABBg");
	this.shape_117.setTransform(271.3,36.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6E6E6E").s().p("AgZA2QgIgDgGgGQgGgGgDgJQgDgJAAgMIAAhBIAdAAIAAA8QAAAGACAFQACAFADADQAGAGAJAAQAJAAAGgGQAEgDACgFQACgGAAgHIAAg6IAdAAIAABvIgdAAIAAgQQgEAIgKAGQgIAEgIAAQgKAAgIgDg");
	this.shape_118.setTransform(257.5,37);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6E6E6E").s().p("Ag8BTIAAilIBAAAQALAAAJAEQAJADAGAFQAGAGADAJQAEAIAAAKQAAAKgFAJQgDAEgEADQgEAEgGACQAHACAGAEQAGADAEAGQAEAFACAHQACAGAAAFQAAAKgEAJQgDAJgHAHQgHAHgJAEQgKAEgMAAgAgdA3IAlAAQAEAAAEgCQAEgBADgEQAFgGAAgJQAAgJgFgHQgDgEgEgBQgEgCgFAAIgkAAgAgdgPIAfAAQAIAAAFgGQAFgGAAgIQAAgJgFgFQgFgFgJAAIgeAAg");
	this.shape_119.setTransform(243.7,34.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6E6E6E").s().p("AgFAzIAAhAIgOAAIAAgJIAOAAIAAgcIAJAAIAAAcIAQAAIAAAJIgQAAIAABAg");
	this.shape_120.setTransform(386.5,36.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6E6E6E").s().p("AgOAkQgIgDgFgFQgFgFgCgHQgEgHAAgJQAAgIAEgHQACgHAFgFQAFgFAIgDQAGgDAIAAQAJAAAGAEIAHAEIAGAGIAAgMIALAAIAABJIgLAAIAAgMIgGAGIgHAFQgDACgEAAIgIABQgIAAgGgDgAgLgZQgEACgEAEQgEADgCAGQgCAFAAAFQAAAGACAFQACAGAEADQAEAEAEADQAGABAFAAQAFAAAGgBQAEgCAFgEQADgDACgGQACgGABgGQAAgFgDgGQgCgGgEgDQgEgDgFgDQgFgBgFAAQgFAAgGACg");
	this.shape_121.setTransform(378.9,37.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#6E6E6E").s().p("AgfA3IAAhtIA+AAIAAALIg0AAIAAAnIAtAAIAAAKIgtAAIAAAmIA1AAIAAALg");
	this.shape_122.setTransform(370.2,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]}).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]},29).wait(1));

	// price
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B0E029").s().p("AgiCHQgOgEgNgHQgMgIgLgLQgKgLgIgMIArgbQAJAPAOAJQAPAKAPAAQAMAAAMgEQAKgEAIgHQAHgGAEgJQAEgIAAgKQAAgMgEgJQgEgIgHgHQgIgFgJgCQgKgDgJAAQgRAAgPAFQgSAGgOAPIgdgRIAXiOICbAAIAAAvIhyAAIgKA4QAJgHAPgEQANgDANAAQATAAARAGQAQAGAMALQANAMAHAQQAHARAAAWQABAWgJASQgHASgOANQgPANgUAHQgUAHgYAAQgOAAgOgEg");
	this.shape_123.setTransform(396.2,149.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#B0E029").s().p("AgCCLIAAjOIguATIAAgvIBhgrIAAEVg");
	this.shape_124.setTransform(375.4,149);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B0E029").s().p("AgJCNQgPAAgNgFQgNgFgLgHQgLgIgJgKQgIgKgGgMIAtgXQAGANAMAIQANAKAOAAQAIAAAJgDQAIgDAHgGQAGgFADgIQAEgHAAgJQgFglglACIgdAAIAAgtIAdAAQAZAAAFgfQAAgJgFgIQgGgLgNgDQgMgBgKAEQgMAEgIAKIgogaQAGgKAJgIQAIgIALgFQALgGAMgCQANgDAMABQASABAOAGQAPAHALAKQAKALAGANQAGAOAAAPQAAAQgKAPQgJAOgPAJQAKAEAJAHQAJAIAGAKQAHAKADAMQACALgBAMQgBASgKAPQgJAPgOALQgPAKgSAFQgOAEgOAAIgJgBg");
	this.shape_125.setTransform(357.1,149.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B0E029").s().p("AgNDCIAAgwQgUgCgRgIQgQgHgLgMQgMgMgGgPQgHgPAAgRIA2AAQABARANALQAGAGAJADQAKAEAKAAQALAAAJgDQAIgDAGgEQANgKABgPQABgPgKgJQgKgKgVgGIgjgJQgWgHgQgJQgNgJgJgMQgKgOgDgdQAAgRAHgPQAGgOAMgLQAMgLAPgHQAQgHASgCIAAgsIAbAAIAAAtQASACAOAHQAPAHAKALQALALAGAPQAGAPAAASIg2AAQAAgRgLgLQgGgFgIgCQgIgDgJAAQgSAAgNAJQgMAKAAAPQAAAKAFAHQAJALAUAFIAjALQAXAGARAKQAPAIAKANQAIALAEANQADAMgBAOQgBASgIAOQgHAOgMALQgLAKgQAGQgQAHgSABIAAAwg");
	this.shape_126.setTransform(334.1,148.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#6E6E6E").s().p("AgPA4QgJgDgGgEQgHgFgDgHQgEgIAAgIIAbAAQABAFAFAFQAGAFAIgBQAGgBAEgDQAFgDAAgFQgBgDgDgDQgDgCgGgCIgPgEQgJgCgHgEQgHgEgDgEQgFgGAAgNQAAgHADgGQAEgGAFgFQAGgEAIgDQAHgCAIgBQAHAAAIACQAIADAGAEQAGAEAEAGQADAIABAJIgcAAQAAgGgFgDQgEgCgGAAQgFAAgEACQgEACAAAHQAAADADACQADACAFACIASAEQAJADAHAEQAFADADAFQAFAIABAKQAAAIgFAHQgDAGgHAEQgGAFgIACQgJACgIABQgIgBgHgCg");
	this.shape_127.setTransform(317.4,36.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6E6E6E").s().p("AgVA2QgKgEgJgIQgHgIgFgLQgFgLAAgMQAAgMAFgLQAFgLAHgHQAJgIAKgFQALgEALAAQALAAALAEQAKAFAIAIQAIAHAEALQAFALgBAMIAAAKIhUAAQAAAFADAFQACAEAFAEQAEACAFACQAGACAEgBQAKABAHgEQAIgEADgGIAXALQgEAIgFAEQgGAGgHADQgHADgIACQgIABgHABQgLgBgLgEgAAdgJQgBgGgCgFQgCgEgEgDQgIgGgLAAQgFAAgFACQgFABgEADIgGAHQgDAFAAAGIA4AAIAAAAg");
	this.shape_128.setTransform(305.4,36.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#6E6E6E").s().p("AgOBWIAAisIAdAAIAACsg");
	this.shape_129.setTransform(295.6,33.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#6E6E6E").s().p("AgZBTQgKgEgHgHQgIgIgEgLQgFgLAAgNQAAgNAFgLQAEgJAIgIQAHgIAKgEQAKgEALAAQALAAAJAEQAKAFAFAIIAAhMIAdAAIAACsIgdAAIAAgPQgFAIgKAFQgJAFgLAAQgLAAgKgFgAgKABQgGACgEAEQgEAEgCAFQgCAGAAAHQAAAHACAFQACAGAEAEQAEAEAGACQAFADAFAAQAGAAAGgDQAFgCAEgEQAEgEADgFQACgGAAgHQAAgHgCgGQgDgFgEgEQgEgEgGgCQgFgBgGAAQgFAAgFABg");
	this.shape_130.setTransform(284.9,34);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#6E6E6E").s().p("AAXA5IAAg8QAAgGgCgEQgBgFgDgDQgGgHgJAAQgKAAgHAGQgDADgCAFQgCAFAAAHIAAA7IgdAAIAAhvIAdAAIAAARQAFgJAJgFQAIgFAKAAQAKAAAIADQAIADAFAGQAGAGACAJQADAJAAAMIAABBg");
	this.shape_131.setTransform(271.3,36.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#6E6E6E").s().p("AgZA2QgIgDgGgGQgGgGgDgJQgDgJAAgMIAAhBIAdAAIAAA8QAAAGACAFQACAFADADQAGAGAJAAQAJAAAGgGQAEgDACgFQACgGAAgHIAAg6IAdAAIAABvIgdAAIAAgQQgEAIgKAGQgIAEgIAAQgKAAgIgDg");
	this.shape_132.setTransform(257.5,37);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#6E6E6E").s().p("Ag8BTIAAilIBAAAQALAAAJAEQAJADAGAFQAGAGADAJQAEAIAAAKQAAAKgFAJQgDAEgEADQgEAEgGACQAHACAGAEQAGADAEAGQAEAFACAHQACAGAAAFQAAAKgEAJQgDAJgHAHQgHAHgJAEQgKAEgMAAgAgdA3IAlAAQAEAAAEgCQAEgBADgEQAFgGAAgJQAAgJgFgHQgDgEgEgBQgEgCgFAAIgkAAgAgdgPIAfAAQAIAAAFgGQAFgGAAgIQAAgJgFgFQgFgFgJAAIgeAAg");
	this.shape_133.setTransform(243.7,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]}).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},29).wait(1));

	// doin-it-big
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgeCEQgMgEgLgHQgLgHgJgJQgJgKgFgNIAlgSQAGANANAHQAOAJAOAAQAQAAALgGQAKgFAHgKQAGgKACgNQADgMgCgPQgHANgQAIQgQAHgQAAQgRAAgRgGQgQgHgMgLQgNgNgHgQQgHgRAAgVQAAgUAHgSQAHgRANgMQAMgNAQgGQAQgHASAAQAQAAAQAIQAQAHAHANIAAgYIAtAAIAACXQgCAlgFAOIgIAUQgEAIgHAIQgHAGgHAGIgRAIQgTAHgWAAQgNAAgOgDgAgQhWQgJADgHAHQgHAGgDAJQgEAJAAAKQAAAMAEAIQADAJAHAHQAHAGAJACQAIAEAJAAQAJAAAJgDQAIgDAHgGQAHgGAEgJQAEgKAAgLQAAgLgEgJQgDgJgIgGQgGgGgJgDQgJgDgJAAQgJAAgIADg");
	this.shape_134.setTransform(269.6,155.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgWCJIAAiwIAtAAIAACwgAgUhYQgIgJgBgLQABgMAIgIQAJgIALAAQAMAAAJAIQAJAIAAAMQAAALgJAJQgJAIgMAAQgLAAgJgIg");
	this.shape_135.setTransform(253.6,146.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AhfCDIAAkFIBmAAQARAAAOAFQANAFAKAKQALAIAFAOQAFANAAAQQAAARgHAMQgFAIgGAEQgHAGgJAEQALADAJAGQAKAGAGAJQAGAIADALQADAJAAAJQAAAPgGAOQgFAPgKALQgMALgOAGQgQAGgTAAgAguBYIA6AAQAIAAAGgEQAGgDAEgEQAJgLAAgOQAAgPgJgKQgEgGgHgDQgGgDgIAAIg5AAgAgugZIAyAAQAMABAIgKQAHgIABgOQgBgOgHgIQgIgJgOAAIgwAAg");
	this.shape_136.setTransform(237.5,146.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgZB6IAAiLIggAAIAAglIAgAAIAAhDIAuAAIAABDIAlAAIAAAlIglAAIAACLg");
	this.shape_137.setTransform(208.6,147.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgXCDIAAkFIAvAAIAAEFg");
	this.shape_138.setTransform(196.3,146.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgMA4IgEhvIAhAAIgEBvg");
	this.shape_139.setTransform(177.1,139.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAkBbIAAhgQAAgJgCgIQgCgHgFgFQgJgKgPAAQgRAAgKAJQgFAFgDAIQgDAIAAALIAABeIgvAAIAAixIAvAAIAAAbQAHgOAPgJQAOgIAQAAQAPAAANAFQAMAFAIAKQAJAKAEAOQAFAOAAATIAABog");
	this.shape_140.setTransform(162.3,150.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgWCJIAAiwIAtAAIAACwgAgUhYQgIgJAAgLQAAgMAIgIQAJgIALAAQAMAAAJAIQAJAIAAAMQAAALgJAJQgJAIgMAAQgLAAgJgIg");
	this.shape_141.setTransform(146.5,146.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgjBWQgQgHgNgMQgNgMgHgRQgHgSgBgUQABgUAHgSQAHgQANgMQANgNAQgGQARgHASAAQATAAAQAHQASAGAMANQANAMAHAQQAIATAAATQAAAUgIASQgHARgNAMQgMAMgSAHQgRAGgSAAQgSAAgRgGgAgRgqQgJADgFAGQgHAGgDAJQgFAIAAAKQAAALAFAIQADAJAHAHQAFAGAJADQAJADAIAAQAKAAAIgDQAJgDAGgGQAGgHAEgJQAEgIAAgLQAAgKgEgIQgEgJgGgGQgGgGgJgDQgIgDgKAAQgIAAgJADg");
	this.shape_142.setTransform(130.9,151);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AhtCDIAAkFIBmAAQANAAANADQAMADALAEQALAFAJAHQAKAHAHAJQAIAJAGALQAFAJAEAMQAIAiAAARQgCAlgGAQQgEALgFAKQgGALgIAIQgHAKgKAGQgJAIgLAEQgLAFgMACQgNADgNAAgAg8BXIA1AAQAQAAAOgHQAMgGAJgNQAJgMAEgPQAFgQAAgSQAAgQgFgQQgEgQgJgMQgJgMgMgHQgOgGgQgBIg1AAg");
	this.shape_143.setTransform(107.3,146.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#B0E029").s().p("AgiCHQgOgEgNgHQgMgIgLgLQgKgLgIgMIArgbQAJAPAOAJQAPAKAPAAQAMAAAMgEQAKgEAIgHQAHgGAEgJQAEgIAAgKQAAgMgEgJQgEgIgHgHQgIgFgJgCQgKgDgJAAQgRAAgPAFQgSAGgOAPIgdgRIAXiOICbAAIAAAvIhyAAIgKA4QAJgHAPgEQANgDANAAQATAAARAGQAQAGAMALQANAMAHAQQAHARAAAWQABAWgJASQgHASgOANQgPANgUAHQgUAHgYAAQgOAAgOgEg");
	this.shape_144.setTransform(396.2,149.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#B0E029").s().p("AgCCLIAAjOIguATIAAgvIBhgrIAAEVg");
	this.shape_145.setTransform(375.4,149);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#B0E029").s().p("AgJCNQgPAAgNgFQgNgFgLgHQgLgIgJgKQgIgKgGgMIAtgXQAGANAMAIQANAKAOAAQAIAAAJgDQAIgDAHgGQAGgFADgIQAEgHAAgJQgFglglACIgdAAIAAgtIAdAAQAZAAAFgfQAAgJgFgIQgGgLgNgDQgMgBgKAEQgMAEgIAKIgogaQAGgKAJgIQAIgIALgFQALgGAMgCQANgDAMABQASABAOAGQAPAHALAKQAKALAGANQAGAOAAAPQAAAQgKAPQgJAOgPAJQAKAEAJAHQAJAIAGAKQAHAKADAMQACALgBAMQgBASgKAPQgJAPgOALQgPAKgSAFQgOAEgOAAIgJgBg");
	this.shape_146.setTransform(357.1,149.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#B0E029").s().p("AgNDCIAAgwQgUgCgRgIQgQgHgLgMQgMgMgGgPQgHgPAAgRIA2AAQABARANALQAGAGAJADQAKAEAKAAQALAAAJgDQAIgDAGgEQANgKABgPQABgPgKgJQgKgKgVgGIgjgJQgWgHgQgJQgNgJgJgMQgKgOgDgdQAAgRAHgPQAGgOAMgLQAMgLAPgHQAQgHASgCIAAgsIAbAAIAAAtQASACAOAHQAPAHAKALQALALAGAPQAGAPAAASIg2AAQAAgRgLgLQgGgFgIgCQgIgDgJAAQgSAAgNAJQgMAKAAAPQAAAKAFAHQAJALAUAFIAjALQAXAGARAKQAPAIAKANQAIALAEANQADAMgBAOQgBASgIAOQgHAOgMALQgLAKgQAGQgQAHgSABIAAAwg");
	this.shape_147.setTransform(334.1,148.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]}).to({state:[{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]},29).wait(1));

	// question-circle
	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#B1DE35").ss(2,1,1).p("ABUAAQAAAjgYAZQgZAYgjAAQgiAAgYgYQgZgZAAgjQAAgiAZgYQAYgZAiAAQAjAAAZAZQAYAYAAAig");
	this.shape_148.setTransform(154,344.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgeCEQgMgEgLgHQgLgHgJgJQgJgKgFgNIAlgSQAGANANAHQAOAJAOAAQAQAAALgGQAKgFAHgKQAGgKACgNQADgMgCgPQgHANgQAIQgQAHgQAAQgRAAgRgGQgQgHgMgLQgNgNgHgQQgHgRAAgVQAAgUAHgSQAHgRANgMQAMgNAQgGQAQgHASAAQAQAAAQAIQAQAHAHANIAAgYIAtAAIAACXQgCAlgFAOIgIAUQgEAIgHAIQgHAGgHAGIgRAIQgTAHgWAAQgNAAgOgDgAgQhWQgJADgHAHQgHAGgDAJQgEAJAAAKQAAAMAEAIQADAJAHAHQAHAGAJACQAIAEAJAAQAJAAAJgDQAIgDAHgGQAHgGAEgJQAEgKAAgLQAAgLgEgJQgDgJgIgGQgGgGgJgDQgJgDgJAAQgJAAgIADg");
	this.shape_149.setTransform(269.6,155.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgWCJIAAiwIAtAAIAACwgAgUhYQgIgJgBgLQABgMAIgIQAJgIALAAQAMAAAJAIQAJAIAAAMQAAALgJAJQgJAIgMAAQgLAAgJgIg");
	this.shape_150.setTransform(253.6,146.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AhfCDIAAkFIBmAAQARAAAOAFQANAFAKAKQALAIAFAOQAFANAAAQQAAARgHAMQgFAIgGAEQgHAGgJAEQALADAJAGQAKAGAGAJQAGAIADALQADAJAAAJQAAAPgGAOQgFAPgKALQgMALgOAGQgQAGgTAAgAguBYIA6AAQAIAAAGgEQAGgDAEgEQAJgLAAgOQAAgPgJgKQgEgGgHgDQgGgDgIAAIg5AAgAgugZIAyAAQAMABAIgKQAHgIABgOQgBgOgHgIQgIgJgOAAIgwAAg");
	this.shape_151.setTransform(237.5,146.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgZB6IAAiLIggAAIAAglIAgAAIAAhDIAuAAIAABDIAlAAIAAAlIglAAIAACLg");
	this.shape_152.setTransform(208.6,147.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgXCDIAAkFIAvAAIAAEFg");
	this.shape_153.setTransform(196.3,146.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgMA4IgEhvIAhAAIgEBvg");
	this.shape_154.setTransform(177.1,139.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAkBbIAAhgQAAgJgCgIQgCgHgFgFQgJgKgPAAQgRAAgKAJQgFAFgDAIQgDAIAAALIAABeIgvAAIAAixIAvAAIAAAbQAHgOAPgJQAOgIAQAAQAPAAANAFQAMAFAIAKQAJAKAEAOQAFAOAAATIAABog");
	this.shape_155.setTransform(162.3,150.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgWCJIAAiwIAtAAIAACwgAgUhYQgIgJAAgLQAAgMAIgIQAJgIALAAQAMAAAJAIQAJAIAAAMQAAALgJAJQgJAIgMAAQgLAAgJgIg");
	this.shape_156.setTransform(146.5,146.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgjBWQgQgHgNgMQgNgMgHgRQgHgSgBgUQABgUAHgSQAHgQANgMQANgNAQgGQARgHASAAQATAAAQAHQASAGAMANQANAMAHAQQAIATAAATQAAAUgIASQgHARgNAMQgMAMgSAHQgRAGgSAAQgSAAgRgGgAgRgqQgJADgFAGQgHAGgDAJQgFAIAAAKQAAALAFAIQADAJAHAHQAFAGAJADQAJADAIAAQAKAAAIgDQAJgDAGgGQAGgHAEgJQAEgIAAgLQAAgKgEgIQgEgJgGgGQgGgGgJgDQgIgDgKAAQgIAAgJADg");
	this.shape_157.setTransform(130.9,151);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AhtCDIAAkFIBmAAQANAAANADQAMADALAEQALAFAJAHQAKAHAHAJQAIAJAGALQAFAJAEAMQAIAiAAARQgCAlgGAQQgEALgFAKQgGALgIAIQgHAKgKAGQgJAIgLAEQgLAFgMACQgNADgNAAgAg8BXIA1AAQAQAAAOgHQAMgGAJgNQAJgMAEgPQAFgQAAgSQAAgQgFgQQgEgQgJgMQgJgMgMgHQgOgGgQgBIg1AAg");
	this.shape_158.setTransform(107.3,146.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_148}]}).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]},29).wait(1));

	// question-mark
	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#B1DE35").s().p("AgMAoQgCgDAAgEQAAgEACgCQADgDAEAAQAEAAACADQADACgBAEQABAEgDADQgCACgEAAQgEAAgDgCgAgMARIgBgEQAAgFACgEQABgEADgCQACgDALgFQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBIABgEQAAgEgDgCQgEgDgEAAQgEAAgDADQgCADAAAFIgPAAQAAgGACgFIAFgIIAIgFQAFgBAEAAIAKABQAFACADADIAFAHQACAFAAAFIgCAIQgBAEgCADIgFAEIgGADQgFABgBACQgBACgBAEIAAAEg");
	this.shape_159.setTransform(154.2,344.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#B1DE35").ss(2,1,1).p("ABUAAQAAAjgYAZQgZAYgjAAQgiAAgYgYQgZgZAAgjQAAgiAZgYQAYgZAiAAQAjAAAZAZQAYAYAAAig");
	this.shape_160.setTransform(154,344.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_159}]}).to({state:[{t:this.shape_160}]},29).wait(1));

	// stars
	this.instance = new lib.roomifystars();
	this.instance.parent = this;
	this.instance.setTransform(661,495,0.32,0.321);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#B1DE35").s().p("AgMAoQgCgDAAgEQAAgEACgCQADgDAEAAQAEAAACADQADACgBAEQABAEgDADQgCACgEAAQgEAAgDgCgAgMARIgBgEQAAgFACgEQABgEADgCQACgDALgFQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBIABgEQAAgEgDgCQgEgDgEAAQgEAAgDADQgCADAAAFIgPAAQAAgGACgFIAFgIIAIgFQAFgBAEAAIAKABQAFACADADIAFAHQACAFAAAFIgCAIQgBAEgCADIgFAEIgGADQgFABgBACQgBACgBAEIAAAEg");
	this.shape_161.setTransform(154.2,344.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_161}]},29).wait(1));

	// bedding
	this.instance_1 = new lib.roomifywebsitemockupimagef1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(491,154,0.48,0.48);

	this.instance_2 = new lib.roomifystars();
	this.instance_2.parent = this;
	this.instance_2.setTransform(661,495,0.32,0.321);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},29).wait(1));

	// king
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#414141").s().p("AgIAxIgIgDIgHgFIgGgHIAIgFQAEAGAFADQAGADAGAAQAFAAAEgCQAFgCADgEQAEgEABgHQACgHAAgKIgEAGIgGAEIgHADIgHABQgGAAgHgDQgGgCgEgFQgFgEgCgFQgDgHAAgHQAAgIADgGQACgHAFgEQAEgFAGgCQAHgDAGAAIAHABIAHADIAGAEIAEAFIAAgLIAKAAIAAA2QgBAPgCAFIgDAIIgEAFQgFAFgGADQgGACgHAAIgIgBgAgJglIgIAFIgFAIQgBAEAAAGQAAAFABAFIAFAHIAIAFQAFABAEAAQAEAAAEgBQAFgCADgDQAEgDACgEQACgEAAgGQAAgGgCgFQgCgEgDgEQgDgDgFgCQgEgBgFAAQgEAAgFACg");
	this.shape_162.setTransform(388.6,384.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#414141").s().p("AATAiIAAgmIgCgIQgBgEgCgCQgBgDgDgBQgDgBgEAAIgHABIgHAEQgDACgCAEQgCAFAAAGIAAAjIgJAAIAAhBIAJAAIAAALIAEgFIAGgFQAFgDAGAAQAGAAAEACQAFACAEAEQADAEABAGQACAFAAAGIAAAmg");
	this.shape_163.setTransform(380.7,383.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#414141").s().p("AgDAwIAAhAIAIAAIAABAgAgEgkQgCgCAAgDQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQACgCACAAQADAAACACQAAAAABABQAAAAABABQAAAAAAABQAAABAAAAQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_164.setTransform(375.2,381.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#414141").s().p("AAUAwIgqgtIAAAtIgJAAIAAhfIAJAAIAAAvIAjgvIALAAIgkAvIAsAwg");
	this.shape_165.setTransform(370.4,381.8);

	this.instance_3 = new lib.roomifywebsitemockupimagef1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(491,154,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]}).to({state:[{t:this.instance_3}]},29).wait(1));

	// queen
	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#414141").s().p("AATAiIAAgmIgBgIQgCgEgCgCQgCgDgCgBQgDgBgEAAIgHABIgHAEQgDACgCAEQgCAFAAAGIAAAjIgJAAIAAhBIAJAAIAAALIAEgFIAGgFQAGgDAFAAQAGAAAEACQAGACACAEQAEAEACAGQABAFAAAGIAAAmg");
	this.shape_166.setTransform(330.5,383.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#414141").s().p("AgMAgQgFgDgFgEQgFgFgCgGQgCgHgBgHQABgHACgGQACgGAFgFQAFgEAFgDQAHgCAGAAQAHAAAFACQAGADAEAEQAFAFACAGQADAGgBAHIAAAEIg2AAQABAFABAEQACAEAEACQADADAEABQAEACAEAAQAGAAAGgDQAFgDADgFIAJACIgFAHIgGAGQgEADgFABQgEABgFAAQgGAAgHgCgAAXgEQAAgEgCgEQgCgEgEgCQgDgDgDgBQgEgCgEAAQgEAAgEACIgHAEQgEACgCAEQgBAEgBAEIAtAAIAAAAg");
	this.shape_167.setTransform(322.8,383.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#414141").s().p("AgMAgQgFgDgFgEQgEgFgDgGQgDgHABgHQgBgHADgGQADgGAEgFQAFgEAFgDQAHgCAGAAQAHAAAGACQAFADAEAEQAFAFACAGQACAGAAAHIAAAEIg2AAQAAAFACAEQADAEADACQADADAEABQAEACAEAAQAGAAAGgDQAFgDADgFIAJACIgFAHIgGAGQgFADgEABQgEABgFAAQgGAAgHgCgAAXgEQAAgEgCgEQgDgEgDgCQgDgDgDgBQgEgCgEAAQgEAAgEACIgHAEQgEACgCAEQgCAEAAAEIAtAAIAAAAg");
	this.shape_168.setTransform(315,383.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#414141").s().p("AgNAfQgEgBgEgFQgDgDgCgGQgBgEAAgHIAAglIAJAAIAAAlIABAIIADAGIAFAEIAHABIAHgBIAHgEQADgDACgDQACgFAAgFIAAgjIAJAAIAABAIgJAAIAAgLQgCAEgCABIgGAFQgGACgFAAQgGAAgFgCg");
	this.shape_169.setTransform(307.1,383.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#414141").s().p("AARAnQgLADgGAAIgJgBIgJgDIgIgEIgHgGIgHgIIgDgIIgEgJIgBgJIABgKIAEgKIADgIIAHgHIAHgGQAEgDAEgCIAJgDIAJgBIAKABIAJADQAEACAFADIAHAGIAFAHIAFAIIACAKIABAKQABAGgCAGIgFAMQgDAFgEAFIgKAHIALARIgIAFgAgHguIgHADQgKAFgDADQgGAGgCAHQgDAKAAAGIAAAHIADAHQACAIAGAFQADAEAKAFIAHACIAHABIALgBIgKgSIAHgFIAMATIAIgHIAGgIIAEgJQACgFgBgFQAAgGgCgKQgDgHgGgGQgHgGgGgCQgJgEgGAAIgHABg");
	this.shape_170.setTransform(297.7,382.5);

	this.instance_4 = new lib.roomifywebsitemockupimagef1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(491,154,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166}]}).to({state:[{t:this.instance_4}]},29).wait(1));

	// full
	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#414141").s().p("AgEAzIAAhlIAIAAIAABlg");
	this.shape_171.setTransform(255.8,381.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#414141").s().p("AgEAzIAAhlIAIAAIAABlg");
	this.shape_172.setTransform(252.7,381.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#414141").s().p("AgNAfQgEgBgEgFQgDgDgCgGQgBgEAAgHIAAglIAJAAIAAAlIABAIIADAGIAFAEIAHABIAHgBIAHgEQADgDACgDQACgFAAgFIAAgjIAJAAIAABAIgJAAIAAgLQgCAEgCABIgGAFQgGACgFAAQgGAAgFgCg");
	this.shape_173.setTransform(247.1,383.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#414141").s().p("AgaAwIAAhfIA1AAIAAAJIgsAAIAAAjIAjAAIAAAJIgjAAIAAAqg");
	this.shape_174.setTransform(240.1,381.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#414141").s().p("AATAiIAAgmIgBgIQgCgEgCgCQgCgDgCgBQgDgBgEAAIgHABIgHAEQgDACgCAEQgCAFAAAGIAAAjIgJAAIAAhBIAJAAIAAALIAEgFIAGgFQAGgDAFAAQAGAAAEACQAGACACAEQAEAEACAGQABAFAAAGIAAAmg");
	this.shape_175.setTransform(330.5,383.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#414141").s().p("AgMAgQgFgDgFgEQgFgFgCgGQgCgHgBgHQABgHACgGQACgGAFgFQAFgEAFgDQAHgCAGAAQAHAAAFACQAGADAEAEQAFAFACAGQADAGgBAHIAAAEIg2AAQABAFABAEQACAEAEACQADADAEABQAEACAEAAQAGAAAGgDQAFgDADgFIAJACIgFAHIgGAGQgEADgFABQgEABgFAAQgGAAgHgCgAAXgEQAAgEgCgEQgCgEgEgCQgDgDgDgBQgEgCgEAAQgEAAgEACIgHAEQgEACgCAEQgBAEgBAEIAtAAIAAAAg");
	this.shape_176.setTransform(322.8,383.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#414141").s().p("AgMAgQgFgDgFgEQgEgFgDgGQgDgHABgHQgBgHADgGQADgGAEgFQAFgEAFgDQAHgCAGAAQAHAAAGACQAFADAEAEQAFAFACAGQACAGAAAHIAAAEIg2AAQAAAFACAEQADAEADACQADADAEABQAEACAEAAQAGAAAGgDQAFgDADgFIAJACIgFAHIgGAGQgFADgEABQgEABgFAAQgGAAgHgCgAAXgEQAAgEgCgEQgDgEgDgCQgDgDgDgBQgEgCgEAAQgEAAgEACIgHAEQgEACgCAEQgCAEAAAEIAtAAIAAAAg");
	this.shape_177.setTransform(315,383.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#414141").s().p("AARAnQgLADgGAAIgJgBIgJgDIgIgEIgHgGIgHgIIgDgIIgEgJIgBgJIABgKIAEgKIADgIIAHgHIAHgGQAEgDAEgCIAJgDIAJgBIAKABIAJADQAEACAFADIAHAGIAFAHIAFAIIACAKIABAKQABAGgCAGIgFAMQgDAFgEAFIgKAHIALARIgIAFgAgHguIgHADQgKAFgDADQgGAGgCAHQgDAKAAAGIAAAHIADAHQACAIAGAFQADAEAKAFIAHACIAHABIALgBIgKgSIAHgFIAMATIAIgHIAGgIIAEgJQACgFgBgFQAAgGgCgKQgDgHgGgGQgHgGgGgCQgJgEgGAAIgHABg");
	this.shape_178.setTransform(297.7,382.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_174},{t:this.shape_173,p:{x:247.1}},{t:this.shape_172},{t:this.shape_171}]}).to({state:[{t:this.shape_178},{t:this.shape_173,p:{x:307.1}},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175}]},29).wait(1));

	// twin-xl
	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#414141").s().p("AgYAwIAAhfIAJAAIAABWIAoAAIAAAJg");
	this.shape_179.setTransform(201.2,381.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#414141").s().p("AAcAwIgcgsIgcAsIgLAAIAigzIgegsIAMAAIAXAkIAYgkIAMAAIgfAsIAiAzg");
	this.shape_180.setTransform(193.2,381.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#414141").s().p("AATAiIAAgmIgBgIQgCgEgCgCQgBgDgDgBQgEgBgDAAIgHABIgHAEQgDACgCAEQgCAFAAAGIAAAjIgJAAIAAhBIAJAAIAAALIAEgFIAGgFQAGgDAFAAQAGAAAEACQAFACADAEQAEAEACAGQABAFAAAGIAAAmg");
	this.shape_181.setTransform(181.5,383.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#414141").s().p("AgDAwIAAhAIAHAAIAABAgAgEgkQgCgCAAgDQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQACgCACAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_182.setTransform(176,381.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#414141").s().p("AAUAhIgUg0IgTA0IgIAAIgZhBIAKAAIATAyIATgyIAJAAIATAyIATgyIAKAAIgZBBg");
	this.shape_183.setTransform(168.7,383.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#414141").s().p("AgEAwIAAhWIgeAAIAAgJIBGAAIAAAJIggAAIAABWg");
	this.shape_184.setTransform(159.2,381.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#414141").s().p("AgEAzIAAhlIAIAAIAABlg");
	this.shape_185.setTransform(255.8,381.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#414141").s().p("AgEAzIAAhlIAIAAIAABlg");
	this.shape_186.setTransform(252.7,381.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#414141").s().p("AgNAfQgEgBgEgFQgDgDgCgGQgBgEAAgHIAAglIAJAAIAAAlIABAIIADAGIAFAEIAHABIAHgBIAHgEQADgDACgDQACgFAAgFIAAgjIAJAAIAABAIgJAAIAAgLQgCAEgCABIgGAFQgGACgFAAQgGAAgFgCg");
	this.shape_187.setTransform(247.1,383.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#414141").s().p("AgaAwIAAhfIA1AAIAAAJIgsAAIAAAjIAjAAIAAAJIgjAAIAAAqg");
	this.shape_188.setTransform(240.1,381.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179}]}).to({state:[{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185}]},29).wait(1));

	// twin-size-selection
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(547.2,542.2);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

	// get-20
	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgLBFQgFgFABgHQgBgGAFgFQAFgFAGAAQAGAAAGAFQAEAFAAAGQAAAHgEAFQgGAEgGAAQgGAAgFgEgAgKAdIgEhlIAdAAIgEBlg");
	this.shape_189.setTransform(956.3,112.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgMBGQgGgCgFgDQgFgCgEgEQgEgDgDgFQgEgHgEgQQgDgMAAgQQAAgOADgMQABgJAHgOIAHgJIAJgGIALgFQAGgBAGAAQAIAAAGABIALAFIAJAGIAHAJQAGAOACAJQACAMAAAOQAAAQgCAMQgFAQgDAHQgDAFgEADIgJAGQgFADgGACQgGABgIAAQgGAAgGgBgAgLgpQgFADgDAHQgCAGgCAJIgBAQIABASQACAIACAHQADAGAFAEQAFADAGAAQAHAAAFgDQAFgEADgGQADgHABgIIABgSIgBgQQgBgJgDgGQgDgHgFgDQgFgDgHAAQgGAAgFADg");
	this.shape_190.setTransform(947,112.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgsBGIAAgNIA3hCIAGgJQADgFAAgEQAAgIgGgEQgFgFgJAAQgHAAgGAFQgGAGgBAJIgYgEQABgJAEgIQAEgHAGgGQAGgFAIgDQAIgDAIAAQAJAAAIADQAIADAGAFQAGAGAEAIQADAHAAAKQAAAJgEAKQgEAIgGAHIghAnIAtAAIAAAYg");
	this.shape_191.setTransform(934.9,112.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgGBhIAAgYQgKgBgIgEQgIgEgGgFQgGgGgDgIQgDgHAAgJIAaAAQABAIAGAGQAEADAEACQAFABAEAAIAKgBQAFgBADgDQAGgEAAgIQABgHgFgFQgFgFgLgDIgQgEQgMgEgHgEQgHgEgFgGQgFgIgBgOQAAgIADgIQADgHAGgGQAGgFAIgDQAIgEAJgBIAAgWIANAAIAAAXQAJABAHADQAHAEAGAFQAFAGADAHQADAIAAAJIgbAAQAAgJgGgFIgHgEIgIgBQgJAAgGAEQgGAFAAAIQAAAFADADQAEAGAKACIARAGQALADAJAFQAHADAFAGQAEAGACAHQACAGgBAHQAAAIgEAIQgDAHgGAFQgGAFgIADQgIADgJABIAAAYg");
	this.shape_192.setTransform(923.4,112.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgNBIIAAh3IgoAAIAAgYIBrAAIAAAYIgpAAIAAB3g");
	this.shape_193.setTransform(952.2,89.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgtBIIAAiPIBZAAIAAAXIg+AAIAAAmIA2AAIAAAXIg2AAIAAAjIBAAAIAAAYg");
	this.shape_194.setTransform(940.6,89.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgMBJQgIgCgGgDQgHgCgGgEIgKgJIgJgLQgFgGgCgHQgDgHgBgHQgCgHAAgIQAAgGACgIIAEgOQACgGAFgGIAJgLIAKgJIANgHQAGgDAIgCIAOgBIAPABIAPAFIAMAHIAKAJIgUARQgGgGgIgEQgJgEgJAAQgJAAgIAEQgJAEgGAHQgHAGgDAJQgEAJAAAJQAAAKAEAJQADAJAHAHQAGAHAJAEQAIAEAJAAQAHAAAHgDQAHgCAGgEQAFgEAEgFQADgGAAgGIgnAAIAAgWIBGAAQAAAJgCAJQgBAIgCAIQgDAHgEAGQgDAGgFAFIgKAIIgLAGQgHACgHABIgPABIgOgBg");
	this.shape_195.setTransform(926.5,89.6);

	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(547.2,542.2);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189}]}).to({state:[{t:this.instance_6}]},29).wait(1));

	// twin-xl-outline
	this.btn_twinxl = new lib.Symbol3();
	this.btn_twinxl.parent = this;
	this.btn_twinxl.setTransform(178.8,382.9);
	this.btn_twinxl.alpha = 0;
	new cjs.ButtonHelper(this.btn_twinxl, 0, 1, 1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("rgba(176,224,41,0)").ss(4,1,1).p("AiZhwIEzAAQAoAAAAAoIAACRQAAAogoAAIkzAAQgoAAAAgoIAAiRQAAgoAoAAg");
	this.shape_196.setTransform(168.7,379.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(255,255,255,0.008)").s().p("AiZBwQgoAAAAgoIAAiPQAAgpAoAAIEzAAQAoAAAAApIAACPQAAAogoAAg");
	this.shape_197.setTransform(168.7,379.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_197},{t:this.shape_196},{t:this.btn_twinxl,p:{alpha:0}}]}).to({state:[{t:this.shape_197},{t:this.shape_196},{t:this.btn_twinxl,p:{alpha:1}}]},10).to({state:[]},10).wait(10));

	// twin-outline
	this.btn_twin = new lib.twin_btn();
	this.btn_twin.parent = this;
	this.btn_twin.setTransform(114.6,382.6);
	new cjs.ButtonHelper(this.btn_twin, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_twin).to({_off:true},10).wait(20));

	// twin
	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#414141").s().p("AASAiIAAgmIgBgIQgBgEgBgCQgCgDgEgBQgDgBgDAAIgHABIgHAEQgDACgCAEQgCAFAAAGIAAAjIgJAAIAAhBIAJAAIAAALIAEgFIAGgFQAGgDAFAAQAGAAAFACQAEACAEAEQADAEABAGQACAFAAAGIAAAmg");
	this.shape_198.setTransform(125.4,383.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#414141").s().p("AgDAwIAAhAIAIAAIAABAgAgEgkQgCgCAAgDQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQACgCACAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_199.setTransform(119.9,381.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#414141").s().p("AAUAhIgUg0IgTA0IgIAAIgZhBIAKAAIATAyIATgyIAJAAIATAyIATgyIAKAAIgZBBg");
	this.shape_200.setTransform(112.6,383.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#414141").s().p("AgEAwIAAhWIgeAAIAAgJIBFAAIAAAJIgeAAIAABWg");
	this.shape_201.setTransform(103.1,381.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgLBFQgFgFABgHQgBgGAFgFQAFgFAGAAQAGAAAGAFQAEAFAAAGQAAAHgEAFQgGAEgGAAQgGAAgFgEgAgKAdIgEhlIAdAAIgEBlg");
	this.shape_202.setTransform(956.3,112.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgMBGQgGgCgFgDQgFgCgEgEQgEgDgDgFQgEgHgEgQQgDgMAAgQQAAgOADgMQABgJAHgOIAHgJIAJgGIALgFQAGgBAGAAQAIAAAGABIALAFIAJAGIAHAJQAGAOACAJQACAMAAAOQAAAQgCAMQgFAQgDAHQgDAFgEADIgJAGQgFADgGACQgGABgIAAQgGAAgGgBgAgLgpQgFADgDAHQgCAGgCAJIgBAQIABASQACAIACAHQADAGAFAEQAFADAGAAQAHAAAFgDQAFgEADgGQADgHABgIIABgSIgBgQQgBgJgDgGQgDgHgFgDQgFgDgHAAQgGAAgFADg");
	this.shape_203.setTransform(947,112.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgsBGIAAgNIA3hCIAGgJQADgFAAgEQAAgIgGgEQgFgFgJAAQgHAAgGAFQgGAGgBAJIgYgEQABgJAEgIQAEgHAGgGQAGgFAIgDQAIgDAIAAQAJAAAIADQAIADAGAFQAGAGAEAIQADAHAAAKQAAAJgEAKQgEAIgGAHIghAnIAtAAIAAAYg");
	this.shape_204.setTransform(934.9,112.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgGBhIAAgYQgKgBgIgEQgIgEgGgFQgGgGgDgIQgDgHAAgJIAaAAQABAIAGAGQAEADAEACQAFABAEAAIAKgBQAFgBADgDQAGgEAAgIQABgHgFgFQgFgFgLgDIgQgEQgMgEgHgEQgHgEgFgGQgFgIgBgOQAAgIADgIQADgHAGgGQAGgFAIgDQAIgEAJgBIAAgWIANAAIAAAXQAJABAHADQAHAEAGAFQAFAGADAHQADAIAAAJIgbAAQAAgJgGgFIgHgEIgIgBQgJAAgGAEQgGAFAAAIQAAAFADADQAEAGAKACIARAGQALADAJAFQAHADAFAGQAEAGACAHQACAGgBAHQAAAIgEAIQgDAHgGAFQgGAFgIADQgIADgJABIAAAYg");
	this.shape_205.setTransform(923.4,112.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgNBIIAAh3IgoAAIAAgYIBrAAIAAAYIgpAAIAAB3g");
	this.shape_206.setTransform(952.2,89.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgtBIIAAiPIBZAAIAAAXIg+AAIAAAmIA2AAIAAAXIg2AAIAAAjIBAAAIAAAYg");
	this.shape_207.setTransform(940.6,89.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgMBJQgIgCgGgDQgHgCgGgEIgKgJIgJgLQgFgGgCgHQgDgHgBgHQgCgHAAgIQAAgGACgIIAEgOQACgGAFgGIAJgLIAKgJIANgHQAGgDAIgCIAOgBIAPABIAPAFIAMAHIAKAJIgUARQgGgGgIgEQgJgEgJAAQgJAAgIAEQgJAEgGAHQgHAGgDAJQgEAJAAAJQAAAKAEAJQADAJAHAHQAGAHAJAEQAIAEAJAAQAHAAAHgDQAHgCAGgEQAFgEAEgFQADgGAAgGIgnAAIAAgWIBGAAQAAAJgCAJQgBAIgCAIQgDAHgEAGQgDAGgFAFIgKAIIgLAGQgHACgHABIgPABIgOgBg");
	this.shape_208.setTransform(926.5,89.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198}]}).to({state:[{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202}]},29).wait(1));

	// white-block
	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("EgeTAkbQh4AAAAh4MAAAhFFQAAh4B4AAMA8nAAAQB4AAAAB4MAAABFFQAAB4h4AAg");
	this.shape_209.setTransform(247.1,337.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#414141").s().p("AASAiIAAgmIgBgIQgBgEgBgCQgCgDgEgBQgDgBgDAAIgHABIgHAEQgDACgCAEQgCAFAAAGIAAAjIgJAAIAAhBIAJAAIAAALIAEgFIAGgFQAGgDAFAAQAGAAAFACQAEACAEAEQADAEABAGQACAFAAAGIAAAmg");
	this.shape_210.setTransform(125.4,383.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#414141").s().p("AgDAwIAAhAIAIAAIAABAgAgEgkQgCgCAAgDQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQACgCACAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_211.setTransform(119.9,381.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#414141").s().p("AAUAhIgUg0IgTA0IgIAAIgZhBIAKAAIATAyIATgyIAJAAIATAyIATgyIAKAAIgZBBg");
	this.shape_212.setTransform(112.6,383.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#414141").s().p("AgEAwIAAhWIgeAAIAAgJIBFAAIAAAJIgeAAIAABWg");
	this.shape_213.setTransform(103.1,381.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_209}]}).to({state:[{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210}]},29).wait(1));

	// white-nav
	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("EhOcAFUIAAqnMCc5AAAIAAKng");
	this.shape_214.setTransform(500,36,0.996,1.059);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("EgeTAkbQh4AAAAh4MAAAhFFQAAh4B4AAMA8nAAAQB4AAAAB4MAAABFFQAAB4h4AAg");
	this.shape_215.setTransform(247.1,337.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_214}]}).to({state:[{t:this.shape_215}]},29).wait(1));

	// pink
	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("EhOcAFUIAAqnMCc5AAAIAAKng");
	this.shape_216.setTransform(500,36,0.996,1.059);
	this.shape_216._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_216).wait(29).to({_off:false},0).wait(1));

	// trace
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(500.1,303.8,0.625,0.625,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},29).wait(1));

	// trace
	this.instance_8 = new lib.Symbol1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(500.1,303.8,0.625,0.625,0,0,0,0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,303.5,1000,607.5);
// library properties:
lib.properties = {
	id: '29035755BE074461AB7E704B85D7794D',
	width: 1000,
	height: 607,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['29035755BE074461AB7E704B85D7794D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;