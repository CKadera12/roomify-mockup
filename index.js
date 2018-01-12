(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[1002,1036,200,49],[1002,974,500,60],[0,974,1000,685],[0,0,1600,972]]}
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



(lib.roomifylogo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.roomifystars = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.roomifywebsitemockupimagef1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.trace = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
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
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// roomify-logo
	this.instance = new lib.roomifylogo();
	this.instance.parent = this;
	this.instance.setTransform(55,17,0.725,0.729);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// add-to-cart
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAtIAAhKIgaAAIAAgPIBDAAIAAAPIgaAAIAABKg");
	this.shape.setTransform(354.1,479.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAtIgVggIgGAAIAAAgIgRAAIAAhZIAjAAQAGAAAGADQAGACADAEQAEAEACAGQABAFAAAFIgBAKQgBAEgEADQgCAEgEADQgFACgFABIAWAhgAgOgBIARAAQADAAACgBIAEgDQADgEAAgGQAAgFgDgEIgEgEQgCgBgDAAIgRAAg");
	this.shape_1.setTransform(346.5,479.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZAtIgIgWIghAAIgIAWIgSAAIAihZIARAAIAiBZgAALAJIgLgiIgKAiIAVAAg");
	this.shape_2.setTransform(337.9,479.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAtIgIgDIgIgEIgHgFIgFgIIgEgIIgDgIIgBgJIABgJIADgIIAEgIIAFgGIAHgGIAIgFIAIgCIAJgBIALABIAJAEIAJAFIAHAHIgOAKQgEgFgFgDQgDgCgEAAIgGgBQgFgBgGADQgFACgEAFQgEAEgCAFQgCAGAAAFQAAAGACAFQACAGAEAEQAEAEAFACQAGADAFAAIAHgBIAGgDIAFgDIAFgFIANAJIgHAIIgIAGIgKADIgLACIgJgBg");
	this.shape_3.setTransform(329.3,479.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAtIgIgDIgIgEIgHgFIgGgIIgEgIIgCgIIgCgJIACgJIACgIIAEgIIAGgGIAHgGIAIgFIAIgCIAIgBIAKABIAIACIAHAFIAHAGIAGAGIAEAIQACAEAAAEIACAJIgCAJQAAAFgCADIgEAIIgGAIIgHAFIgHAEIgIADIgKABIgIgBgAgLgbQgFADgEAEQgDAEgCAGQgDAFAAAFQAAAGADAFQACAGADAEQAFAEAEACQAGACAFAAQAGAAAGgCQAEgCAFgEQADgEACgGQADgFAAgGQAAgFgDgFQgCgGgDgEQgFgEgEgDQgGgBgGAAQgFAAgGABg");
	this.shape_4.setTransform(316.4,479.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAtIAAhKIgaAAIAAgPIBDAAIAAAPIgaAAIAABKg");
	this.shape_5.setTransform(307.6,479.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglAtIAAhZIAjAAIAIABQAFABAEACIAGAEIAGAFIAFAHIADAHQADAMAAAFIgDASIgDAHIgFAHIgGAFIgGAEQgEACgFABIgIABgAgUAeIASAAQAFAAAFgDQAEgCADgEQADgEACgFQABgGAAgGQAAgFgBgFQgCgGgDgEQgDgEgEgCQgFgDgFAAIgSAAg");
	this.shape_6.setTransform(296.3,479.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglAtIAAhZIAjAAIAIABQAFABAEACIAGAEIAGAFIAFAHIADAHQADAMAAAFIgDASIgDAHIgFAHIgGAFIgGAEQgEACgFABIgIABgAgUAeIASAAQAFAAAFgDQAEgCADgEQADgEACgFQABgGAAgGQAAgFgBgFQgCgGgDgEQgDgEgEgCQgFgDgFAAIgSAAg");
	this.shape_7.setTransform(287,479.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAtIgIgWIghAAIgIAWIgRAAIAhhZIARAAIAhBZgAAMAJIgMgiIgKAiIAWAAg");
	this.shape_8.setTransform(277.9,479.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},29).wait(1));

	// button-add-to-cart
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ADE229").s().p("ApQChQhDAAgvgvQgvgvAAhDIAAAAQAAhCAvgvQAvgvBDAAIShAAQBDAAAvAvQAvAvAABCIAAAAQAABDgvAvQgvAvhDAAg");
	this.shape_9.setTransform(317.4,479.5,1.261,1.261);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(30));

	// sizes
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAqQgFgCgEgDQgFgEgDgEQgDgGAAgGIAPAAQABAGAGAEQAFACAHABQAGgBADgDQAEgDAAgEQAAgFgEgDQgCgCgFgBIgLgDIgKgEIgIgFQgCgDgBgEQgCgEABgHQAAgEADgEQACgEAEgCQAEgEAFgBQAGgCAEAAQAFAAAFABQAFACAEACQAFADACAFQADAFAAAGIgPAAQgBgEgEgDQgEgCgFgBQgDABgEACQgEACAAADQgBAEABADQACADAIADIALADQAHABAEAEQAEABACADQADADABAEIABAIQAAAFgDAFQgCAFgFADQgFAEgFABQgGACgGAAQgFAAgGgCg");
	this.shape_10.setTransform(130.6,344.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPAoQgIgCgGgHQgGgFgDgIQgEgJAAgJQAAgJAEgIQADgJAGgFQAGgGAIgDQAIgDAHAAQAKAAAHADQAIADAGAGQAFAFADAJQADAIABAJIgBAGIhDAAQABAFACAEQADAFADADQADADAFACIAJABQAIAAAGgDQAHgEADgGIAPAFQgEAGgDAEQgFAEgEADQgGADgFABQgGACgHAAQgHAAgIgEgAAagFQAAgGgDgEQgCgEgEgDQgDgDgEgBQgFgCgFAAQgDAAgFACQgFABgDADIgGAHQgCAEgBAGIAzAAIAAAAg");
	this.shape_11.setTransform(121.7,344.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkAqIAAgNIAxg2IguAAIAAgQIBGAAIAAAOIgyA2IAyAAIAAAPg");
	this.shape_12.setTransform(112.1,344.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHA/IAAhTIAPAAIAABTgAgHgsQgDgDAAgEQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_13.setTransform(105.4,342.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgQA8QgHgDgGgFQgGgFgDgHQgDgHAAgHIAQAAQAAAEACAEQACAEAEADQAEADAEACQAFACAFAAQAGAAAEgCQAFgBADgDIAFgFIACgHQAAgFgBgEQgCgEgDgCIgHgFIgIgCIgPgEQgJgDgHgDQgGgDgDgFQgEgGgBgMQAAgHADgHQADgGAGgFQAFgFAIgCQAHgDAIAAQAHAAAIADQAHACAFAFQAGAFADAHQADAGAAAJIgRAAQAAgFgCgEQgBgDgEgDIgHgEQgEgCgEAAIgJACQgEABgDACQgEADgCADQgCAEAAAEQAAAFADAEIAGAFIAJADIAPAEQAJADAHADQAGADAEAFQAFAEACAHQABAGgBAHQAAAHgEAGQgDAGgFAEQgFAFgIACQgHADgJAAQgIAAgJgEg");
	this.shape_14.setTransform(98.1,342.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},29).wait(1));

	// colors
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLAqQgFgCgEgDQgFgEgDgFQgDgFAAgGIAPAAQABAHAGADQAFACAHAAQAGAAAEgDQADgDAAgFQAAgEgDgDQgDgCgFgBIgLgDIgKgEIgIgFQgDgDgBgEQgBgEABgHQAAgEADgEQACgEAEgCQAEgDAFgCQAFgCAFAAQAFAAAFABQAFACAEADQAEADADAEQADAFAAAGIgPAAQgBgEgEgDQgEgCgFAAQgDAAgEACQgDACgBADQgBAEABACQACAFAIACIALADQAGACAFADQAEABACADQADAEABADIABAHQAAAGgDAFQgCAEgFAEQgFAEgFABQgGACgGAAQgFAAgGgCg");
	this.shape_15.setTransform(141.5,234.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaArIAAhTIAQAAIAAATQACgGACgEIAGgGQABgDAEgBQAEgBAEAAQAKAAAEADIgCAPQgGgCgHAAQgGAAgEADQgDADgDAFQgDAFgBAIQgCAGAAAIIAAAfg");
	this.shape_16.setTransform(134.5,234.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAoQgIgCgGgHQgGgFgEgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAIgDQAIgDAIAAQAJAAAIADQAIADAGAGQAGAGADAIQAEAIAAAJQAAAKgEAIQgDAIgGAFQgGAHgIACQgIAEgJAAQgIAAgIgEgAgKgZQgEACgFAEQgDADgCAGQgCAEAAAGQAAAGACAFQACAFADAEQAFAEAEACQAGACAEAAQAGAAAFgCQAFgCAEgEQADgEACgFQADgFAAgGQAAgGgDgEQgCgGgDgDQgEgEgFgCQgFgCgGAAQgEAAgGACg");
	this.shape_17.setTransform(125.2,234.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_18.setTransform(117.8,232.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAoQgIgCgGgHQgGgFgEgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAIgDQAIgDAIAAQAJAAAIADQAIADAGAGQAGAGADAIQAEAIAAAJQAAAKgEAIQgDAIgGAFQgGAHgIACQgIAEgJAAQgIAAgIgEgAgJgZQgGACgDAEQgFADgBAGQgCAEAAAGQAAAGACAFQABAFAFAEQADAEAGACQAFACAEAAQAGAAAFgCQAFgCAEgEQADgEADgFQACgFAAgGQAAgGgCgEQgDgGgDgDQgEgEgFgCQgFgCgGAAQgEAAgFACg");
	this.shape_19.setTransform(110.5,234.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgEA+IgMgDIgKgGIgKgIIgHgJIgGgLIgEgMIgBgNIABgMIAEgMIAGgLIAHgJIAKgIIAKgGQAGgCAGgBQAFgCAHAAIAOACIAMAEIALAHIAKAIIgNALQgHgHgIgEQgMgEgHAAQgJAAgIADQgJAEgGAGQgGAHgEAJQgDAIAAAJQAAAKADAJQAEAIAGAHQAGAGAJAEQAIADAJAAIAKgBIAJgDQAGgDAJgIIANAKIgJAJIgLAHIgNAEQgHACgHAAQgHAAgFgCg");
	this.shape_20.setTransform(99.4,232.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},29).wait(1));

	// sweet-dreams-blush
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6D6D6D").s().p("AAZBEIAAgzQAAgGgBgFQgCgFgCgCQgDgEgEgCQgEgCgFABQgFgBgFACQgFACgEADQgFADgCAFQgDAGAAAIIAAAwIgMAAIAAiIIAMAAIAAA/QACgEAEgDIAHgFQAIgEAIAAQAIAAAGADQAHACAEAGQAFAEACAHQACAHAAAJIAAAzg");
	this.shape_21.setTransform(268.3,188);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6D6D6D").s().p("AgLAsQgFgCgFgDQgEgEgDgFQgDgFAAgGIALAAQACAGAEAEIAGAEQAEABAEAAQAJAAAFgEQAFgEAAgGQAAgFgDgDQgDgEgHgCIgLgCQgMgEgEgDQgEgEgBgEQgCgGABgHQAAgFADgEQACgEAEgDIAJgEQAFgBAEAAIAKABQAFABAEADQAEADACAEQACAFABAGIgMAAQgBgFgFgDQgEgDgGAAQgFAAgFADQgEADgBAFQgBAGAEAEQADADAHABIALADIALAEIAHAFQACADABAFQACADAAAFQAAAGgDAFQgCAEgFAEQgEADgGACQgGACgGAAQgGAAgFgCg");
	this.shape_22.setTransform(258.9,190.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6D6D6D").s().p("AgRAqQgHgCgEgFQgFgFgCgIQgCgHAAgJIAAgyIANAAIAAAyQAAAGABAFQACAFACAEIAHAFQAEACAFAAQAFAAAFgCQAFgCAEgDQAFgEACgFQADgGAAgIIAAgvIAMAAIAABXIgMAAIAAgOQgCAEgEADIgHAFQgIAEgIAAQgIAAgGgDg");
	this.shape_23.setTransform(249.5,190.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6D6D6D").s().p("AgFBEIAAiIIALAAIAACIg");
	this.shape_24.setTransform(242.1,188);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6D6D6D").s().p("AgrBBIAAiBIAuAAQAIgBAHADQAGACAEAFQAFAEACAFQACAGAAAIQAAALgDAGQgCAEgDADQgDADgFACQAFAAAFADQAEADADAFQADAEACAGIABALQAAAHgCAHQgCAHgFAEQgFAGgHACQgHADgIAAgAgfA1IAnAAQAFAAAFgCQAEgCADgEQAEgDABgEQACgEAAgFIgCgKIgFgIQgDgEgFgCQgFgDgFAAIgmAAgAgfgJIAkAAQAFAAAEgBIAGgGIAEgHIABgJQAAgFgCgDQgBgEgDgDQgDgDgFgBIgJgBIghAAg");
	this.shape_25.setTransform(234.5,188.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6D6D6D").s().p("AggAGIAAgLIBBAAIAAALg");
	this.shape_26.setTransform(223.6,190.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6D6D6D").s().p("AgLAsQgFgCgFgDQgEgEgDgFQgDgFAAgGIALAAQACAGAEAEIAGAEQAEABAEAAQAJAAAFgEQAFgEAAgGQAAgFgDgDQgDgEgHgCIgLgCQgMgEgEgDQgEgEgBgEQgCgGABgHQAAgFADgEQACgEAEgDIAJgEQAFgBAEAAIAKABQAFABAEADQAEADACAEQACAFABAGIgMAAQgBgFgFgDQgEgDgGAAQgFAAgFADQgEADgBAFQgBAGAEAEQADADAHABIALADIALAEIAHAFQACADABAFQACADAAAFQAAAGgDAFQgCAEgFAEQgEADgGACQgGACgGAAQgGAAgFgCg");
	this.shape_27.setTransform(215,190.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6D6D6D").s().p("AA5AtIAAgyIgBgLQgBgFgDgEQgDgDgEgCQgEgCgFAAQgGAAgFACQgFABgEAEQgFAEgCAFQgDAGABAIIAAAvIgNAAIAAgyQAAgHgBgEQgCgFgCgEQgDgDgEgCQgEgCgFAAQgGAAgEACQgGABgEAEQgEAEgDAFQgCAGAAAIIAAAvIgNAAIAAhXIANAAIAAAOQACgEADgDIAIgFQAJgEAHAAIAKABIAJAEIAHAGQACADACAFQACgGAFgEQAEgEAFgCQAHgDAKAAQAIAAAGACQAHADAEAFQAEAFADAHQACAIAAAJIAAAyg");
	this.shape_28.setTransform(202.6,190.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6D6D6D").s().p("AgRArQgIgDgHgHQgGgGgDgIQgEgJAAgKQAAgKAEgIQADgJAGgGQAGgGAJgDQAIgDAJAAQAKAAAJAEIAIAFIAGAHIAAgOIANAAIAABXIgNAAIAAgPIgGAHQgEAEgEACIgKADIgJABQgJAAgIgDgAgMgeQgGACgFAEQgEAFgDAGQgCAGAAAHQAAAHACAGQADAGAEAFQAFAEAGADQAGACAGAAQAGAAAGgCQAGgCAFgEQAFgFACgGQADgGAAgIQAAgHgDgHQgDgGgFgEQgFgEgGgDQgFgCgGAAQgGAAgGADg");
	this.shape_29.setTransform(187.9,190.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6D6D6D").s().p("AgQArQgIgDgGgHQgGgGgDgIQgEgJAAgKQAAgKAEgIQADgJAGgGQAGgGAIgDQAIgDAIAAQAKAAAIADQAIADAGAGQAGAGADAJQADAIAAAKIAAAFIhKAAQAAAHADAFQADAFAEAEQAEAEAGACQAFACAFAAQAJAAAIgEQAHgEAFgIIAMADQgCAGgFAFIgJAIQgGADgFABQgHACgHAAQgIAAgIgDgAAfgFQAAgHgEgFQgCgFgEgDQgEgEgFgCQgFgCgHAAQgFAAgFACQgGACgEAEQgEADgDAFQgDAFAAAHIA9AAIAAAAg");
	this.shape_30.setTransform(177.2,190.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6D6D6D").s().p("AgZAtIAAhXIAMAAIAAAUIAEgKIAGgHIAGgEIAJgBQAKAAAEADIgBAMQgGgDgHAAQgHAAgFAEQgDADgEAHQgDAGgBAIQgCAHAAAJIAAAhg");
	this.shape_31.setTransform(168.9,190.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D6D6D").s().p("Ag0BBIAAiBIAwAAQAHgBAGACQAGABAFACIAKAGIAIAIQAEAFADAFIAFALQADARABAIQgBATgDAHIgFALQgDAGgEAEIgIAHIgKAHQgFACgGABQgGABgHAAgAgoA1IAkAAQAIAAAMgEQAIgEAFgHQAHgHACgJQADgKAAgMQAAgKgDgJQgCgKgHgIQgFgHgIgEIgJgDIgLgBIgkAAg");
	this.shape_32.setTransform(158.3,188.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6D6D6D").s().p("AgHA9IAAhNIgQAAIAAgLIAQAAIAAghIAMAAIAAAhIATAAIAAALIgTAAIAABNg");
	this.shape_33.setTransform(143,188.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6D6D6D").s().p("AgQArQgIgDgGgHQgGgGgDgIQgEgJAAgKQAAgKAEgIQADgJAGgGQAGgGAIgDQAIgDAIAAQAKAAAIADQAIADAGAGQAGAGADAJQADAIAAAKIAAAFIhKAAQAAAHADAFQADAFAEAEQAEAEAGACQAFACAFAAQAJAAAIgEQAHgEAFgIIAMADQgCAGgFAFIgJAIQgGADgFABQgHACgHAAQgIAAgIgDgAAfgFQAAgHgEgFQgCgFgEgDQgEgEgFgCQgFgCgHAAQgFAAgFACQgGACgEAEQgEADgDAFQgDAFAAAHIA9AAIAAAAg");
	this.shape_34.setTransform(134.9,190.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6D6D6D").s().p("AgQArQgIgDgGgHQgGgGgDgIQgEgJAAgKQAAgKAEgIQADgJAGgGQAGgGAIgDQAIgDAIAAQAKAAAIADQAIADAGAGQAGAGADAJQADAIAAAKIAAAFIhKAAQAAAHADAFQADAFAFAEQADAEAGACQAGACAEAAQAKAAAHgEQAHgEAEgIIANADQgDAGgDAFIgKAIQgGADgFABQgHACgHAAQgIAAgIgDgAAfgFQgBgHgDgFQgCgFgEgDQgEgEgFgCQgFgCgHAAQgEAAgGACQgGACgDAEQgFADgDAFQgDAFAAAHIA9AAIAAAAg");
	this.shape_35.setTransform(124.4,190.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6D6D6D").s().p("AAcAsIgchGIgZBGIgLAAIgihXIANAAIAaBDIAZhDIANAAIAZBDIAahDIAOAAIgiBXg");
	this.shape_36.setTransform(111.4,190.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6D6D6D").s().p("AgSBAQgIgEgFgFQgGgGgDgHQgDgHAAgHIANAAQAAAFACAEQACAFAEAEQAEAEAFACQAGADAGAAQAHAAAFgCIAKgFIAGgHQADgEABgEQAAgGgBgFQgCgEgDgDQgEgEgFgCIgKgEIgRgEQgKgBgGgEQgGgDgEgFQgEgGgBgMQAAgIAEgHQADgGAGgFQAGgFAHgDQAHgCAIAAQAIAAAHACQAIADAFAFQAGAFADAHQADAHAAAIIgMAAQAAgFgCgFQgDgFgDgDQgEgDgFgCQgGgCgFAAQgFAAgFACQgFACgEADQgFADgCAEQgCAEAAAGQAAAGADAFIAHAFQAEADAHABIARAEIAOAFQAHADAFAFQAFAFACAHQACAHgBAJQgBAGgEAGQgDAGgFAEQgGAFgIACQgIADgJAAQgJAAgIgDg");
	this.shape_37.setTransform(98.5,188.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},29).wait(1));

	// study
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6E6E6E").s().p("AgUA3IAPgkIgfhJIALAAIAZA7IAag7IAKAAIgtBtg");
	this.shape_38.setTransform(621.5,39.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6E6E6E").s().p("AgOA4QgHgDgGgFQgFgGgDgHQgDgHAAgJQAAgIADgIQADgGAFgFQAGgFAHgDQAHgDAHAAQAJAAAGAEIAIAEIAEAGIAAg0IAMAAIAAByIgMAAIAAgNIgEAGIgIAFQgDACgEAAIgIABQgHAAgHgCgAgLgGQgEACgEAEQgEACgCAGQgCAFAAAGQAAAGACAGQACAFAEAEQAEADAEADQAGACAFAAQAFAAAGgCQAEgCAFgEQADgDACgGQACgFAAgHQAAgGgCgGQgCgFgFgDQgDgDgGgCQgEgCgFAAQgFAAgGACg");
	this.shape_39.setTransform(612.4,35.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6E6E6E").s().p("AgPAkQgFgDgEgEQgDgEgCgGQgCgGAAgHIAAgrIAKAAIAAArQAAAEACAFQABADACADIAGAFQADACAFgBQADABAEgCQAFgBADgDQAEgDACgFQACgFAAgHIAAgnIALAAIAABJIgLAAIAAgMQgBADgDADIgHAFQgGADgGAAQgHAAgGgCg");
	this.shape_40.setTransform(603.2,37.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6E6E6E").s().p("AgFAzIAAhAIgOAAIAAgJIAOAAIAAgcIAJAAIAAAcIAQAAIAAAJIgQAAIAABAg");
	this.shape_41.setTransform(596.4,36.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6E6E6E").s().p("AgPA1QgGgCgFgFQgFgEgCgHQgDgFAAgHIALAAQAAAEACAEQABAEAEAEIAIAFQAEACAGAAQAFAAAFgCQAFgBADgDIAFgGIADgGQABgFgCgEQgBgEgDgCQgDgEgEgCIgJgCIgOgDQgIgCgFgDQgFgDgDgEQgEgFgBgKQAAgHADgGQADgFAFgEQAFgEAGgDQAGgCAHAAQAGAAAHACQAGADAEAEQAFAEADAGQACAGAAAHIgKAAQAAgEgCgEQgCgFgDgCQgDgDgFgBQgEgCgEAAQgFAAgEACIgIAEQgDACgCAEQgCADAAAFQAAAFADAEIAFAEQAEADAFABIAPAEIAMADQAGADAEADQAEAFACAGQACAGgBAIQgBAFgDAFQgDAEgFAEQgFAEgGACQgHACgHABQgIAAgHgEg");
	this.shape_42.setTransform(589.4,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},29).wait(1));

	// shower
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6E6E6E").s().p("AgVAmIAAhJIAKAAIAAARIAEgJIAEgGIAFgDQAEgBAEAAQAJAAADADIgBAKQgFgCgGAAQgGAAgEADQgDADgDAFQgCAFgBAHQgCAGAAAHIAAAcg");
	this.shape_43.setTransform(553.2,37.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6E6E6E").s().p("AgOAkQgGgDgFgFQgGgFgCgHQgDgHAAgJQAAgIADgHQACgHAGgFQAFgFAGgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFACAHQADAHAAAIIAAAFIg+AAQAAAFADAFQACAEADADIAJAFQAEACAEgBQAIAAAGgDQAGgEAEgFIAKACQgCAFgDAEQgEAEgEADQgFACgFABIgLACQgHAAgHgDgAAagEIgDgKQgCgEgDgDQgEgDgEgCQgFgBgFAAQgEAAgEABQgFACgEADQgDADgCAEQgDAEAAAGIAzAAIAAAAg");
	this.shape_44.setTransform(545.3,37.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6E6E6E").s().p("AAXAlIgXg7IgVA7IgJAAIgdhJIALAAIAWA4IAVg4IALAAIAVA4IAWg4IALAAIgcBJg");
	this.shape_45.setTransform(534.3,37.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6E6E6E").s().p("AgOAkQgHgDgGgFQgFgFgDgHQgDgHAAgJQAAgIADgHQADgHAFgFQAGgFAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAGAFADAHQADAHAAAIQAAAJgDAHQgDAHgGAFQgFAFgHADQgHADgIAAQgHAAgHgDgAgKgaQgGACgDAFQgEADgDAFQgCAGAAAFQAAAHACAEQADAGAEADQADAFAGACQAFABAFAAQAGAAAFgBQAFgCAEgFQAEgDACgGQADgEAAgHQAAgFgDgGQgCgFgEgDQgEgFgFgCQgFgBgGAAQgFAAgFABg");
	this.shape_46.setTransform(523.3,37.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6E6E6E").s().p("AAVA5IAAgrIgBgKIgDgGIgGgEQgEgBgEAAIgIABQgEACgEACQgDACgCAFQgDAFAAAHIAAAoIgKAAIAAhyIAKAAIAAA1IAFgGIAGgEQAHgEAGAAQAHAAAFADQAGACAEAEQADAEACAGQACAFAAAIIAAArg");
	this.shape_47.setTransform(514.2,35.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6E6E6E").s().p("AgPA1QgGgCgFgFQgFgEgCgHQgDgFAAgHIALAAQAAAEACAEQABAEAEAEIAIAFQAEACAGAAQAFAAAFgCQAFgBADgDIAFgGIADgGQABgFgCgEQgBgEgDgCQgDgEgEgCIgJgCIgOgDQgIgCgFgDQgFgDgDgEQgEgFgBgKQAAgHADgGQADgFAFgEQAFgEAGgDQAGgCAHAAQAGAAAHACQAGADAEAEQAFAEADAGQACAGAAAHIgKAAQAAgEgCgEQgCgFgDgCQgDgDgFgBQgEgCgEAAQgFAAgEACIgIAEQgDACgCAEQgCADAAAFQAAAFADAEIAFAEQAEADAFABIAPAEIAMADQAGADAEADQAEAFACAGQACAGgBAIQgBAFgDAFQgDAEgFAEQgFAEgGACQgHACgHABQgIAAgHgEg");
	this.shape_48.setTransform(505.2,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},29).wait(1));

	// sleep
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6E6E6E").s().p("AgmA4IAAhtIALAAIAAAMIAFgGIAIgEIAHgDIAIgBQAHAAAHADQAHADAGAFQAEAFAEAHQACAIABAIQgBAJgCAHQgEAGgEAFQgGAGgHACQgHADgHAAQgIAAgHgDIgIgFQgDgCgCgEIAAAwgAgJgqQgGABgDAEQgFAEgBAFQgDAGAAAGQAAAHADAFQACAEAEAEQAEAEAGABQAEACAFAAQAFAAAFgCQAFgCAEgDIAGgIQACgFAAgHQAAgGgCgFIgGgJQgEgEgFgCQgFgCgFAAQgGAAgEACg");
	this.shape_49.setTransform(459.7,39.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6E6E6E").s().p("AgOAkQgGgDgFgFQgGgFgCgHQgDgHAAgJQAAgIADgHQACgHAGgFQAFgFAGgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFACAHQADAHAAAIIAAAFIg+AAQAAAFADAFQACAEADADIAJAFQAEACAEgBQAIAAAGgDQAGgEAEgFIAKACQgCAFgDAEQgEAEgEADQgFACgFABIgLACQgHAAgHgDgAAagEIgDgKQgCgEgDgDQgEgDgEgCQgFgBgFAAQgEAAgEABQgFACgEADQgDADgCAEQgDAEAAAGIAzAAIAAAAg");
	this.shape_50.setTransform(450.1,37.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6E6E6E").s().p("AgOAkQgGgDgFgFQgGgFgCgHQgDgHAAgJQAAgIADgHQACgHAGgFQAFgFAGgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFACAHQADAHAAAIIAAAFIg+AAQAAAFADAFQACAEADADIAJAFQAEACAEgBQAIAAAGgDQAGgEAEgFIAKACQgCAFgDAEQgEAEgEADQgFACgFABIgLACQgHAAgHgDgAAagEIgDgKQgCgEgDgDQgEgDgEgCQgFgBgFAAQgEAAgEABQgFACgEADQgDADgCAEQgDAEAAAGIAzAAIAAAAg");
	this.shape_51.setTransform(441.2,37.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6E6E6E").s().p("AgEA5IAAhyIAJAAIAAByg");
	this.shape_52.setTransform(434.9,35.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6E6E6E").s().p("AgPA1QgGgCgFgFQgFgEgCgHQgDgFAAgHIALAAQAAAEACAEQABAEAEAEIAIAFQAEACAGAAQAFAAAFgCQAFgBADgDIAFgGIADgGQABgFgCgEQgBgEgDgCQgDgEgEgCIgJgCIgOgDQgIgCgFgDQgFgDgDgEQgEgFgBgKQAAgHADgGQADgFAFgEQAFgEAGgDQAGgCAHAAQAGAAAHACQAGADAEAEQAFAEADAGQACAGAAAHIgKAAQAAgEgCgEQgCgFgDgCQgDgDgFgBQgEgCgEAAQgFAAgEACIgIAEQgDACgCAEQgCADAAAFQAAAFADAEIAFAEQAEADAFABIAPAEIAMADQAGADAEADQAEAFACAGQACAGgBAIQgBAFgDAFQgDAEgFAEQgFAEgGACQgHACgHABQgIAAgHgEg");
	this.shape_53.setTransform(428.6,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},29).wait(1));

	// eat
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6E6E6E").s().p("AgFAzIAAhAIgOAAIAAgJIAOAAIAAgcIAJAAIAAAcIAQAAIAAAJIgQAAIAABAg");
	this.shape_54.setTransform(386.5,36.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6E6E6E").s().p("AgOAkQgIgDgFgFQgFgFgCgHQgEgHAAgJQAAgIAEgHQACgHAFgFQAFgFAIgDQAGgDAIAAQAJAAAGAEIAHAEIAGAGIAAgMIALAAIAABJIgLAAIAAgMIgGAGIgHAFQgDACgEAAIgIABQgIAAgGgDgAgLgZQgEACgEAEQgEADgCAGQgCAFAAAFQAAAGACAFQACAGAEADQAEAEAEADQAGABAFAAQAFAAAGgBQAEgCAFgEQADgDACgGQACgGABgGQAAgFgDgGQgCgGgEgDQgEgDgFgDQgFgBgFAAQgFAAgGACg");
	this.shape_55.setTransform(378.9,37.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6E6E6E").s().p("AgfA3IAAhtIA+AAIAAALIg0AAIAAAnIAtAAIAAAKIgtAAIAAAmIA1AAIAAALg");
	this.shape_56.setTransform(370.2,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},29).wait(1));

	// bundles
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6E6E6E").s().p("AgPA4QgJgDgGgEQgHgFgDgHQgEgIAAgIIAbAAQABAFAFAFQAGAFAIgBQAGgBAEgDQAFgDAAgFQgBgDgDgDQgDgCgGgCIgPgEQgJgCgHgEQgHgEgDgEQgFgGAAgNQAAgHADgGQAEgGAFgFQAGgEAIgDQAHgCAIgBQAHAAAIACQAIADAGAEQAGAEAEAGQADAIABAJIgcAAQAAgGgFgDQgEgCgGAAQgFAAgEACQgEACAAAHQAAADADACQADACAFACIASAEQAJADAHAEQAFADADAFQAFAIABAKQAAAIgFAHQgDAGgHAEQgGAFgIACQgJACgIABQgIgBgHgCg");
	this.shape_57.setTransform(317.4,36.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6E6E6E").s().p("AgVA2QgKgEgJgIQgHgIgFgLQgFgLAAgMQAAgMAFgLQAFgLAHgHQAJgIAKgFQALgEALAAQALAAALAEQAKAFAIAIQAIAHAEALQAFALgBAMIAAAKIhUAAQAAAFADAFQACAEAFAEQAEACAFACQAGACAEgBQAKABAHgEQAIgEADgGIAXALQgEAIgFAEQgGAGgHADQgHADgIACQgIABgHABQgLgBgLgEgAAdgJQgBgGgCgFQgCgEgEgDQgIgGgLAAQgFAAgFACQgFABgEADIgGAHQgDAFAAAGIA4AAIAAAAg");
	this.shape_58.setTransform(305.4,36.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6E6E6E").s().p("AgOBWIAAisIAdAAIAACsg");
	this.shape_59.setTransform(295.6,33.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6E6E6E").s().p("AgZBTQgKgEgHgHQgIgIgEgLQgFgLAAgNQAAgNAFgLQAEgJAIgIQAHgIAKgEQAKgEALAAQALAAAJAEQAKAFAFAIIAAhMIAdAAIAACsIgdAAIAAgPQgFAIgKAFQgJAFgLAAQgLAAgKgFgAgKABQgGACgEAEQgEAEgCAFQgCAGAAAHQAAAHACAFQACAGAEAEQAEAEAGACQAFADAFAAQAGAAAGgDQAFgCAEgEQAEgEADgFQACgGAAgHQAAgHgCgGQgDgFgEgEQgEgEgGgCQgFgBgGAAQgFAAgFABg");
	this.shape_60.setTransform(284.9,34);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6E6E6E").s().p("AAXA5IAAg8QAAgGgCgEQgBgFgDgDQgGgHgJAAQgKAAgHAGQgDADgCAFQgCAFAAAHIAAA7IgdAAIAAhvIAdAAIAAARQAFgJAJgFQAIgFAKAAQAKAAAIADQAIADAFAGQAGAGACAJQADAJAAAMIAABBg");
	this.shape_61.setTransform(271.3,36.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6E6E6E").s().p("AgZA2QgIgDgGgGQgGgGgDgJQgDgJAAgMIAAhBIAdAAIAAA8QAAAGACAFQACAFADADQAGAGAJAAQAJAAAGgGQAEgDACgFQACgGAAgHIAAg6IAdAAIAABvIgdAAIAAgQQgEAIgKAGQgIAEgIAAQgKAAgIgDg");
	this.shape_62.setTransform(257.5,37);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6E6E6E").s().p("Ag8BTIAAilIBAAAQALAAAJAEQAJADAGAFQAGAGADAJQAEAIAAAKQAAAKgFAJQgDAEgEADQgEAEgGACQAHACAGAEQAGADAEAGQAEAFACAHQACAGAAAFQAAAKgEAJQgDAJgHAHQgHAHgJAEQgKAEgMAAgAgdA3IAlAAQAEAAAEgCQAEgBADgEQAFgGAAgJQAAgJgFgHQgDgEgEgBQgEgCgFAAIgkAAgAgdgPIAfAAQAIAAAFgGQAFgGAAgIQAAgJgFgFQgFgFgJAAIgeAAg");
	this.shape_63.setTransform(243.7,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},29).wait(1));

	// price
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B0E029").s().p("AgiCHQgOgEgNgHQgMgIgLgLQgKgLgIgMIArgbQAJAPAOAJQAPAKAPAAQAMAAAMgEQAKgEAIgHQAHgGAEgJQAEgIAAgKQAAgMgEgJQgEgIgHgHQgIgFgJgCQgKgDgJAAQgRAAgPAFQgSAGgOAPIgdgRIAXiOICbAAIAAAvIhyAAIgKA4QAJgHAPgEQANgDANAAQATAAARAGQAQAGAMALQANAMAHAQQAHARAAAWQABAWgJASQgHASgOANQgPANgUAHQgUAHgYAAQgOAAgOgEg");
	this.shape_64.setTransform(396.2,149.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B0E029").s().p("AgCCLIAAjOIguATIAAgvIBhgrIAAEVg");
	this.shape_65.setTransform(375.4,149);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B0E029").s().p("AgJCNQgPAAgNgFQgNgFgLgHQgLgIgJgKQgIgKgGgMIAtgXQAGANAMAIQANAKAOAAQAIAAAJgDQAIgDAHgGQAGgFADgIQAEgHAAgJQgFglglACIgdAAIAAgtIAdAAQAZAAAFgfQAAgJgFgIQgGgLgNgDQgMgBgKAEQgMAEgIAKIgogaQAGgKAJgIQAIgIALgFQALgGAMgCQANgDAMABQASABAOAGQAPAHALAKQAKALAGANQAGAOAAAPQAAAQgKAPQgJAOgPAJQAKAEAJAHQAJAIAGAKQAHAKADAMQACALgBAMQgBASgKAPQgJAPgOALQgPAKgSAFQgOAEgOAAIgJgBg");
	this.shape_66.setTransform(357.1,149.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B0E029").s().p("AgNDCIAAgwQgUgCgRgIQgQgHgLgMQgMgMgGgPQgHgPAAgRIA2AAQABARANALQAGAGAJADQAKAEAKAAQALAAAJgDQAIgDAGgEQANgKABgPQABgPgKgJQgKgKgVgGIgjgJQgWgHgQgJQgNgJgJgMQgKgOgDgdQAAgRAHgPQAGgOAMgLQAMgLAPgHQAQgHASgCIAAgsIAbAAIAAAtQASACAOAHQAPAHAKALQALALAGAPQAGAPAAASIg2AAQAAgRgLgLQgGgFgIgCQgIgDgJAAQgSAAgNAJQgMAKAAAPQAAAKAFAHQAJALAUAFIAjALQAXAGARAKQAPAIAKANQAIALAEANQADAMgBAOQgBASgIAOQgHAOgMALQgLAKgQAGQgQAHgSABIAAAwg");
	this.shape_67.setTransform(334.1,148.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},29).wait(1));

	// doin-it-big
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgeCEQgMgEgLgHQgLgHgJgJQgJgKgFgNIAlgSQAGANANAHQAOAJAOAAQAQAAALgGQAKgFAHgKQAGgKACgNQADgMgCgPQgHANgQAIQgQAHgQAAQgRAAgRgGQgQgHgMgLQgNgNgHgQQgHgRAAgVQAAgUAHgSQAHgRANgMQAMgNAQgGQAQgHASAAQAQAAAQAIQAQAHAHANIAAgYIAtAAIAACXQgCAlgFAOIgIAUQgEAIgHAIQgHAGgHAGIgRAIQgTAHgWAAQgNAAgOgDgAgQhWQgJADgHAHQgHAGgDAJQgEAJAAAKQAAAMAEAIQADAJAHAHQAHAGAJACQAIAEAJAAQAJAAAJgDQAIgDAHgGQAHgGAEgJQAEgKAAgLQAAgLgEgJQgDgJgIgGQgGgGgJgDQgJgDgJAAQgJAAgIADg");
	this.shape_68.setTransform(269.6,155.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgWCJIAAiwIAtAAIAACwgAgUhYQgIgJgBgLQABgMAIgIQAJgIALAAQAMAAAJAIQAJAIAAAMQAAALgJAJQgJAIgMAAQgLAAgJgIg");
	this.shape_69.setTransform(253.6,146.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AhfCDIAAkFIBmAAQARAAAOAFQANAFAKAKQALAIAFAOQAFANAAAQQAAARgHAMQgFAIgGAEQgHAGgJAEQALADAJAGQAKAGAGAJQAGAIADALQADAJAAAJQAAAPgGAOQgFAPgKALQgMALgOAGQgQAGgTAAgAguBYIA6AAQAIAAAGgEQAGgDAEgEQAJgLAAgOQAAgPgJgKQgEgGgHgDQgGgDgIAAIg5AAgAgugZIAyAAQAMABAIgKQAHgIABgOQgBgOgHgIQgIgJgOAAIgwAAg");
	this.shape_70.setTransform(237.5,146.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgZB6IAAiLIggAAIAAglIAgAAIAAhDIAuAAIAABDIAlAAIAAAlIglAAIAACLg");
	this.shape_71.setTransform(208.6,147.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgXCDIAAkFIAvAAIAAEFg");
	this.shape_72.setTransform(196.3,146.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgMA4IgEhvIAhAAIgEBvg");
	this.shape_73.setTransform(177.1,139.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAkBbIAAhgQAAgJgCgIQgCgHgFgFQgJgKgPAAQgRAAgKAJQgFAFgDAIQgDAIAAALIAABeIgvAAIAAixIAvAAIAAAbQAHgOAPgJQAOgIAQAAQAPAAANAFQAMAFAIAKQAJAKAEAOQAFAOAAATIAABog");
	this.shape_74.setTransform(162.3,150.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgWCJIAAiwIAtAAIAACwgAgUhYQgIgJAAgLQAAgMAIgIQAJgIALAAQAMAAAJAIQAJAIAAAMQAAALgJAJQgJAIgMAAQgLAAgJgIg");
	this.shape_75.setTransform(146.5,146.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgjBWQgQgHgNgMQgNgMgHgRQgHgSgBgUQABgUAHgSQAHgQANgMQANgNAQgGQARgHASAAQATAAAQAHQASAGAMANQANAMAHAQQAIATAAATQAAAUgIASQgHARgNAMQgMAMgSAHQgRAGgSAAQgSAAgRgGgAgRgqQgJADgFAGQgHAGgDAJQgFAIAAAKQAAALAFAIQADAJAHAHQAFAGAJADQAJADAIAAQAKAAAIgDQAJgDAGgGQAGgHAEgJQAEgIAAgLQAAgKgEgIQgEgJgGgGQgGgGgJgDQgIgDgKAAQgIAAgJADg");
	this.shape_76.setTransform(130.9,151);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AhtCDIAAkFIBmAAQANAAANADQAMADALAEQALAFAJAHQAKAHAHAJQAIAJAGALQAFAJAEAMQAIAiAAARQgCAlgGAQQgEALgFAKQgGALgIAIQgHAKgKAGQgJAIgLAEQgLAFgMACQgNADgNAAgAg8BXIA1AAQAQAAAOgHQAMgGAJgNQAJgMAEgPQAFgQAAgSQAAgQgFgQQgEgQgJgMQgJgMgMgHQgOgGgQgBIg1AAg");
	this.shape_77.setTransform(107.3,146.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},29).wait(1));

	// question-circle
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#B1DE35").ss(2,1,1).p("ABUAAQAAAjgYAZQgZAYgjAAQgiAAgYgYQgZgZAAgjQAAgiAZgYQAYgZAiAAQAjAAAZAZQAYAYAAAig");
	this.shape_78.setTransform(154,344.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_78).wait(30));

	// question-mark
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B1DE35").s().p("AgMAoQgCgDAAgEQAAgEACgCQADgDAEAAQAEAAACADQADACgBAEQABAEgDADQgCACgEAAQgEAAgDgCgAgMARIgBgEQAAgFACgEQABgEADgCQACgDALgFQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBIABgEQAAgEgDgCQgEgDgEAAQgEAAgDADQgCADAAAFIgPAAQAAgGACgFIAFgIIAIgFQAFgBAEAAIAKABQAFACADADIAFAHQACAFAAAFIgCAIQgBAEgCADIgFAEIgGADQgFABgBACQgBACgBAEIAAAEg");
	this.shape_79.setTransform(154.2,344.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(30));

	// stars
	this.instance_1 = new lib.roomifystars();
	this.instance_1.parent = this;
	this.instance_1.setTransform(661,495,0.32,0.321);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// bedding
	this.instance_2 = new lib.roomifywebsitemockupimagef1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(491,154,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// king
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#414141").s().p("AgIAxIgIgDIgHgFIgGgHIAIgFQAEAGAFADQAGADAGAAQAFAAAEgCQAFgCADgEQAEgEABgHQACgHAAgKIgEAGIgGAEIgHADIgHABQgGAAgHgDQgGgCgEgFQgFgEgCgFQgDgHAAgHQAAgIADgGQACgHAFgEQAEgFAGgCQAHgDAGAAIAHABIAHADIAGAEIAEAFIAAgLIAKAAIAAA2QgBAPgCAFIgDAIIgEAFQgFAFgGADQgGACgHAAIgIgBgAgJglIgIAFIgFAIQgBAEAAAGQAAAFABAFIAFAHIAIAFQAFABAEAAQAEAAAEgBQAFgCADgDQAEgDACgEQACgEAAgGQAAgGgCgFQgCgEgDgEQgDgDgFgCQgEgBgFAAQgEAAgFACg");
	this.shape_80.setTransform(388.6,384.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#414141").s().p("AATAiIAAgmIgCgIQgBgEgCgCQgBgDgDgBQgDgBgEAAIgHABIgHAEQgDACgCAEQgCAFAAAGIAAAjIgJAAIAAhBIAJAAIAAALIAEgFIAGgFQAFgDAGAAQAGAAAEACQAFACAEAEQADAEABAGQACAFAAAGIAAAmg");
	this.shape_81.setTransform(380.7,383.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#414141").s().p("AgDAwIAAhAIAIAAIAABAgAgEgkQgCgCAAgDQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQACgCACAAQADAAACACQAAAAABABQAAAAABABQAAAAAAABQAAABAAAAQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_82.setTransform(375.2,381.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#414141").s().p("AAUAwIgqgtIAAAtIgJAAIAAhfIAJAAIAAAvIAjgvIALAAIgkAvIAsAwg");
	this.shape_83.setTransform(370.4,381.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},29).wait(1));

	// queen
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#414141").s().p("AATAiIAAgmIgBgIQgCgEgCgCQgCgDgCgBQgDgBgEAAIgHABIgHAEQgDACgCAEQgCAFAAAGIAAAjIgJAAIAAhBIAJAAIAAALIAEgFIAGgFQAGgDAFAAQAGAAAEACQAGACACAEQAEAEACAGQABAFAAAGIAAAmg");
	this.shape_84.setTransform(330.5,383.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#414141").s().p("AgMAgQgFgDgFgEQgFgFgCgGQgCgHgBgHQABgHACgGQACgGAFgFQAFgEAFgDQAHgCAGAAQAHAAAFACQAGADAEAEQAFAFACAGQADAGgBAHIAAAEIg2AAQABAFABAEQACAEAEACQADADAEABQAEACAEAAQAGAAAGgDQAFgDADgFIAJACIgFAHIgGAGQgEADgFABQgEABgFAAQgGAAgHgCgAAXgEQAAgEgCgEQgCgEgEgCQgDgDgDgBQgEgCgEAAQgEAAgEACIgHAEQgEACgCAEQgBAEgBAEIAtAAIAAAAg");
	this.shape_85.setTransform(322.8,383.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#414141").s().p("AgMAgQgFgDgFgEQgEgFgDgGQgDgHABgHQgBgHADgGQADgGAEgFQAFgEAFgDQAHgCAGAAQAHAAAGACQAFADAEAEQAFAFACAGQACAGAAAHIAAAEIg2AAQAAAFACAEQADAEADACQADADAEABQAEACAEAAQAGAAAGgDQAFgDADgFIAJACIgFAHIgGAGQgFADgEABQgEABgFAAQgGAAgHgCgAAXgEQAAgEgCgEQgDgEgDgCQgDgDgDgBQgEgCgEAAQgEAAgEACIgHAEQgEACgCAEQgCAEAAAEIAtAAIAAAAg");
	this.shape_86.setTransform(315,383.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#414141").s().p("AgNAfQgEgBgEgFQgDgDgCgGQgBgEAAgHIAAglIAJAAIAAAlIABAIIADAGIAFAEIAHABIAHgBIAHgEQADgDACgDQACgFAAgFIAAgjIAJAAIAABAIgJAAIAAgLQgCAEgCABIgGAFQgGACgFAAQgGAAgFgCg");
	this.shape_87.setTransform(307.1,383.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#414141").s().p("AARAnQgLADgGAAIgJgBIgJgDIgIgEIgHgGIgHgIIgDgIIgEgJIgBgJIABgKIAEgKIADgIIAHgHIAHgGQAEgDAEgCIAJgDIAJgBIAKABIAJADQAEACAFADIAHAGIAFAHIAFAIIACAKIABAKQABAGgCAGIgFAMQgDAFgEAFIgKAHIALARIgIAFgAgHguIgHADQgKAFgDADQgGAGgCAHQgDAKAAAGIAAAHIADAHQACAIAGAFQADAEAKAFIAHACIAHABIALgBIgKgSIAHgFIAMATIAIgHIAGgIIAEgJQACgFgBgFQAAgGgCgKQgDgHgGgGQgHgGgGgCQgJgEgGAAIgHABg");
	this.shape_88.setTransform(297.7,382.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},29).wait(1));

	// full
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#414141").s().p("AgEAzIAAhlIAIAAIAABlg");
	this.shape_89.setTransform(255.8,381.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#414141").s().p("AgEAzIAAhlIAIAAIAABlg");
	this.shape_90.setTransform(252.7,381.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#414141").s().p("AgNAfQgEgBgEgFQgDgDgCgGQgBgEAAgHIAAglIAJAAIAAAlIABAIIADAGIAFAEIAHABIAHgBIAHgEQADgDACgDQACgFAAgFIAAgjIAJAAIAABAIgJAAIAAgLQgCAEgCABIgGAFQgGACgFAAQgGAAgFgCg");
	this.shape_91.setTransform(247.1,383.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#414141").s().p("AgaAwIAAhfIA1AAIAAAJIgsAAIAAAjIAjAAIAAAJIgjAAIAAAqg");
	this.shape_92.setTransform(240.1,381.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},29).wait(1));

	// twin-xl
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#414141").s().p("AgYAwIAAhfIAJAAIAABWIAoAAIAAAJg");
	this.shape_93.setTransform(201.2,381.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#414141").s().p("AAcAwIgcgsIgcAsIgLAAIAigzIgegsIAMAAIAXAkIAYgkIAMAAIgfAsIAiAzg");
	this.shape_94.setTransform(193.2,381.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#414141").s().p("AATAiIAAgmIgBgIQgCgEgCgCQgBgDgDgBQgEgBgDAAIgHABIgHAEQgDACgCAEQgCAFAAAGIAAAjIgJAAIAAhBIAJAAIAAALIAEgFIAGgFQAGgDAFAAQAGAAAEACQAFACADAEQAEAEACAGQABAFAAAGIAAAmg");
	this.shape_95.setTransform(181.5,383.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#414141").s().p("AgDAwIAAhAIAHAAIAABAgAgEgkQgCgCAAgDQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQACgCACAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_96.setTransform(176,381.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#414141").s().p("AAUAhIgUg0IgTA0IgIAAIgZhBIAKAAIATAyIATgyIAJAAIATAyIATgyIAKAAIgZBBg");
	this.shape_97.setTransform(168.7,383.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#414141").s().p("AgEAwIAAhWIgeAAIAAgJIBGAAIAAAJIggAAIAABWg");
	this.shape_98.setTransform(159.2,381.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},29).wait(1));

	// get-20
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgLBFQgFgFABgHQgBgGAFgFQAFgFAGAAQAGAAAGAFQAEAFAAAGQAAAHgEAFQgGAEgGAAQgGAAgFgEgAgKAdIgEhlIAdAAIgEBlg");
	this.shape_99.setTransform(956.3,112.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgMBGQgGgCgFgDQgFgCgEgEQgEgDgDgFQgEgHgEgQQgDgMAAgQQAAgOADgMQABgJAHgOIAHgJIAJgGIALgFQAGgBAGAAQAIAAAGABIALAFIAJAGIAHAJQAGAOACAJQACAMAAAOQAAAQgCAMQgFAQgDAHQgDAFgEADIgJAGQgFADgGACQgGABgIAAQgGAAgGgBgAgLgpQgFADgDAHQgCAGgCAJIgBAQIABASQACAIACAHQADAGAFAEQAFADAGAAQAHAAAFgDQAFgEADgGQADgHABgIIABgSIgBgQQgBgJgDgGQgDgHgFgDQgFgDgHAAQgGAAgFADg");
	this.shape_100.setTransform(947,112.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgsBGIAAgNIA3hCIAGgJQADgFAAgEQAAgIgGgEQgFgFgJAAQgHAAgGAFQgGAGgBAJIgYgEQABgJAEgIQAEgHAGgGQAGgFAIgDQAIgDAIAAQAJAAAIADQAIADAGAFQAGAGAEAIQADAHAAAKQAAAJgEAKQgEAIgGAHIghAnIAtAAIAAAYg");
	this.shape_101.setTransform(934.9,112.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgGBhIAAgYQgKgBgIgEQgIgEgGgFQgGgGgDgIQgDgHAAgJIAaAAQABAIAGAGQAEADAEACQAFABAEAAIAKgBQAFgBADgDQAGgEAAgIQABgHgFgFQgFgFgLgDIgQgEQgMgEgHgEQgHgEgFgGQgFgIgBgOQAAgIADgIQADgHAGgGQAGgFAIgDQAIgEAJgBIAAgWIANAAIAAAXQAJABAHADQAHAEAGAFQAFAGADAHQADAIAAAJIgbAAQAAgJgGgFIgHgEIgIgBQgJAAgGAEQgGAFAAAIQAAAFADADQAEAGAKACIARAGQALADAJAFQAHADAFAGQAEAGACAHQACAGgBAHQAAAIgEAIQgDAHgGAFQgGAFgIADQgIADgJABIAAAYg");
	this.shape_102.setTransform(923.4,112.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgNBIIAAh3IgoAAIAAgYIBrAAIAAAYIgpAAIAAB3g");
	this.shape_103.setTransform(952.2,89.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgtBIIAAiPIBZAAIAAAXIg+AAIAAAmIA2AAIAAAXIg2AAIAAAjIBAAAIAAAYg");
	this.shape_104.setTransform(940.6,89.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgMBJQgIgCgGgDQgHgCgGgEIgKgJIgJgLQgFgGgCgHQgDgHgBgHQgCgHAAgIQAAgGACgIIAEgOQACgGAFgGIAJgLIAKgJIANgHQAGgDAIgCIAOgBIAPABIAPAFIAMAHIAKAJIgUARQgGgGgIgEQgJgEgJAAQgJAAgIAEQgJAEgGAHQgHAGgDAJQgEAJAAAJQAAAKAEAJQADAJAHAHQAGAHAJAEQAIAEAJAAQAHAAAHgDQAHgCAGgEQAFgEAEgFQADgGAAgGIgnAAIAAgWIBGAAQAAAJgCAJQgBAIgCAIQgDAHgEAGQgDAGgFAFIgKAIIgLAGQgHACgHABIgPABIgOgBg");
	this.shape_105.setTransform(926.5,89.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},29).wait(1));

	// twin-xl-outline
	this.btn_twinxl = new lib.Symbol3();
	this.btn_twinxl.parent = this;
	this.btn_twinxl.setTransform(178.8,382.9);
	this.btn_twinxl.alpha = 0;
	new cjs.ButtonHelper(this.btn_twinxl, 0, 1, 1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(176,224,41,0)").ss(4,1,1).p("AiZhwIEzAAQAoAAAAAoIAACRQAAAogoAAIkzAAQgoAAAAgoIAAiRQAAgoAoAAg");
	this.shape_106.setTransform(168.7,379.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.008)").s().p("AiZBwQgoAAAAgoIAAiPQAAgpAoAAIEzAAQAoAAAAApIAACPQAAAogoAAg");
	this.shape_107.setTransform(168.7,379.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.btn_twinxl,p:{alpha:0}}]}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.btn_twinxl,p:{alpha:1}}]},10).to({state:[]},10).wait(10));

	// twin-outline
	this.btn_twin = new lib.twin_btn();
	this.btn_twin.parent = this;
	this.btn_twin.setTransform(114.6,382.6);
	new cjs.ButtonHelper(this.btn_twin, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_twin).to({_off:true},10).wait(20));

	// twin
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#414141").s().p("AASAiIAAgmIgBgIQgBgEgBgCQgCgDgEgBQgDgBgDAAIgHABIgHAEQgDACgCAEQgCAFAAAGIAAAjIgJAAIAAhBIAJAAIAAALIAEgFIAGgFQAGgDAFAAQAGAAAFACQAEACAEAEQADAEABAGQACAFAAAGIAAAmg");
	this.shape_108.setTransform(125.4,383.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#414141").s().p("AgDAwIAAhAIAIAAIAABAgAgEgkQgCgCAAgDQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQACgCACAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_109.setTransform(119.9,381.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#414141").s().p("AAUAhIgUg0IgTA0IgIAAIgZhBIAKAAIATAyIATgyIAJAAIATAyIATgyIAKAAIgZBBg");
	this.shape_110.setTransform(112.6,383.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#414141").s().p("AgEAwIAAhWIgeAAIAAgJIBFAAIAAAJIgeAAIAABWg");
	this.shape_111.setTransform(103.1,381.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]}).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]},29).wait(1));

	// white-block
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("EgeTAkbQh4AAAAh4MAAAhFFQAAh4B4AAMA8nAAAQB4AAAAB4MAAABFFQAAB4h4AAg");
	this.shape_112.setTransform(247.1,337.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_112).wait(30));

	// white-nav
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("EhOcAFUIAAqnMCc5AAAIAAKng");
	this.shape_113.setTransform(500,36,0.996,1.059);

	this.timeline.addTween(cjs.Tween.get(this.shape_113).wait(30));

	// pink
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#D07A91","#F891A6"],[0,0.227],0,197.1,0,-343).s().p("EhJmApvQgoAAAAgoMAAAhSNQAAgoAoAAMCTNAAAQAoAAAAAoMAAABSNQAAAogoAAg");
	this.shape_114.setTransform(500.6,303.8,1.051,1.137);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("EhOcAFUIAAqnMCc5AAAIAAKng");
	this.shape_115.setTransform(500,36,0.996,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114}]}).to({state:[{t:this.shape_115}]},29).wait(1));

	// trace
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(500.1,303.8,0.625,0.625,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},29).wait(1));

	// trace
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(500.1,303.8,0.625,0.625,0,0,0,0.1,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,303.5,1000.1,607.7);
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