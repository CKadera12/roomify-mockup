(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib.trace = function() {
	this.initialize(img.trace);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,972);// helper functions:

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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trace();
	this.instance.parent = this;
	this.instance.setTransform(-800,-486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-800,-486,1600,972), null);


// stage content:
(lib.roomify = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4));

	// add-to-cart
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAtIAAhNIgbAAIAAgMIBBAAIAAAMIgbAAIAABNg");
	this.shape.setTransform(291,382.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAtIgWgiIgMAAIAAAiIgLAAIAAhZIAhAAQAGAAAGADQAFACADAEQADAEABAFQACAFAAAFIgBAKQgBAFgDACQgDAEgFADQgEACgGABIAYAigAgSAAIAVAAQADAAADgBQADgBADgCIACgGIAAgGIAAgGIgCgFIgFgEQgDgCgDAAIgWAAg");
	this.shape_1.setTransform(283.7,382.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbAtIgIgXIglAAIgJAXIgMAAIAihZIAMAAIAiBZgAAPALIgPgnIgOAnIAdAAg");
	this.shape_2.setTransform(275.2,382.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAtIgIgDIgIgEIgHgFIgFgIIgEgHIgDgJIgBgJIABgJQABgEACgEIAEgIIAFgGIAHgHIAIgDIAIgDIAIgBIAKABIAKADIAIAFIAHAGIgJAIQgGgGgFgCQgKgDgFAAQgFAAgGADQgHACgEAFQgEAEgDAHQgDAGAAAGQAAAHADAHQADAFAEAFQAEAFAHADQAGACAFAAIAIgBIAHgCQAEgCAHgGIAJAIIgHAGIgIAEIgJADQgFACgGAAIgIgBg");
	this.shape_3.setTransform(266.8,382.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAtIgJgDIgIgEIgGgFIgGgIIgEgHIgCgJIgBgJIABgJQAAgEACgEIAEgIIAGgGIAGgHIAIgDIAJgDIAIgBIAJABIAJADIAIADIAGAHIAGAGIAEAIQACAEAAAEIABAJIgBAJIgCAJIgEAHIgGAIIgGAFIgIAEIgJADIgJABIgIgBgAgMgeQgGACgFAFQgEAEgDAHQgCAGAAAGQAAAHACAHQADAFAEAFQAFAFAGADQAGACAGAAQAHAAAGgCQAGgDAFgFQAEgFADgFQACgHAAgHQAAgGgCgGQgDgHgEgEQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_4.setTransform(253.7,382.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAtIAAhNIgbAAIAAgMIBBAAIAAAMIgbAAIAABNg");
	this.shape_5.setTransform(244.8,382.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkAtIAAhZIAiAAIAIABIAIADIAHAEIAGAFIAEAHIAEAHQACAMAAAFQAAAMgCAGIgEAHIgEAHIgGAFIgHAEIgIADIgIABgAgYAhIAWAAQAGAAAFgCQAGgDADgEQAEgFACgGQABgGAAgHQAAgGgBgGQgCgGgEgFQgDgEgGgDQgFgDgGAAIgWAAg");
	this.shape_6.setTransform(233.4,382.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkAtIAAhZIAiAAIAIABIAIADIAHAEIAGAFIAEAHIAEAHQACAMAAAFQAAAMgCAGIgEAHIgEAHIgGAFIgHAEIgIADIgIABgAgYAhIAWAAQAGAAAFgCQAGgDADgEQAEgFACgGQABgGAAgHQAAgGgBgGQgCgGgEgFQgDgEgGgDQgFgDgGAAIgWAAg");
	this.shape_7.setTransform(224,382.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcAtIgJgXIglAAIgIAXIgOAAIAihZIAMAAIAiBZgAAPALIgPgnIgOAnIAdAAg");
	this.shape_8.setTransform(214.9,382.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(1));

	// button-add-to-cart
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ADE229").s().p("ApQChQhDAAgvgvQgvgvAAhDIAAAAQAAhCAvgvQAvgvBDAAIShAAQBDAAAvAvQAvAvAABCIAAAAQAABDgvAvQgvAvhDAAg");
	this.shape_9.setTransform(252.5,382.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(5));

	// sweet-dreams-blush
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D6D6D").s().p("AAUA2IAAgpIgBgJIgDgFQgCgDgEgBQgDgCgEABIgHAAIgIAEQgDACgCAFQgCAFAAAGIAAAmIgKAAIAAhrIAKAAIAAAxQABgDADgCIAGgFQAGgCAGAAQAHAAAFABQAFACADAFQAEADABAGQACAFAAAHIAAApg");
	this.shape_10.setTransform(213,151.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D6D6D").s().p("AgIAjIgIgEQgDgDgDgEQgBgEgBgFIAJAAQABAFAEADIAEADIAGABQAHAAAEgDQAFgDAAgFQAAgEgDgCQgCgDgFgCIgKgCQgIgDgFgCIgDgHQgCgEABgGQABgDACgDIAEgGIAHgDIAHgBIAJABIAGACIAFAHQACADAAAFIgJAAQgBgFgDgCQgEgCgFAAQgDAAgEACQgEADAAAEQgCAFAFADQACACAFABIAJACIAIAEIAFADIAEAGIAAAHQAAAEgCAFQgBADgEADQgEACgEACQgFABgFABQgEgBgEgBg");
	this.shape_11.setTransform(205.6,153.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D6D6D").s().p("AgNAiQgFgCgEgEQgDgFgCgFQgCgGAAgHIAAgoIAKAAIAAAoIABAJQABAEACACIAGAEQADACAEAAIAHgBQAFgCADgCQADgDACgFQACgEAAgHIAAglIAKAAIAABFIgKAAIAAgLIgEAGIgGAEQgGADgGAAQgGAAgFgCg");
	this.shape_12.setTransform(198.2,153.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6D6D6D").s().p("AgEA2IAAhrIAJAAIAABrg");
	this.shape_13.setTransform(192.4,151.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D6D6D").s().p("AgiA0IAAhnIAlAAQAGAAAFACQAFACADADQAEAEACAEQACAFAAAGQgBAIgCAGIgEAFIgGAEQAEAAADACQADACADAEQADAEAAAEIACAJQAAAGgCAFQgCAFgDAEQgFAEgEACQgGADgHAAgAgYAqIAeAAIAIgCIAGgEIAEgGIABgHIgBgIQgBgDgDgDQgDgEgEgBQgDgCgFAAIgdAAgAgYgHIAcAAQAEAAADgBIAFgEIADgGIABgHIgBgHIgFgFQgCgCgDgBIgHgBIgaAAg");
	this.shape_14.setTransform(186.4,151.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6D6D6D").s().p("AgZAFIAAgJIAzAAIAAAJg");
	this.shape_15.setTransform(177.8,153.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6D6D6D").s().p("AgIAjIgIgEQgDgDgDgEQgBgEgBgFIAJAAQABAFAEADIAEADIAHABQAGAAAEgDQAFgDAAgFQAAgEgDgCQgCgDgFgCIgKgCQgIgDgFgCIgDgHQgCgEABgGQABgDACgDIAEgGIAHgDIAIgBIAIABIAGACIAFAHQACADAAAFIgJAAQgBgFgDgCQgEgCgEAAQgEAAgEACQgEADAAAEQgCAFAFADQACACAFABIAJACIAIAEIAFADIAEAGIAAAHQAAAEgCAFQgBADgEADQgEACgFACQgEABgFABQgEgBgEgBg");
	this.shape_16.setTransform(171,153.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6D6D6D").s().p("AAtAkIAAgoIgBgJQgBgEgCgCQgCgDgDgBQgEgCgEAAIgIABQgEACgDACQgEADgCAFQgCAEAAAHIAAAlIgJAAIAAgoIgBgJIgDgGQgCgDgEgBQgDgCgEAAIgIABIgIAEQgDADgCAFQgCAEAAAHIAAAlIgKAAIAAhFIAKAAIAAALIAEgGIAHgEQAGgDAGAAIAIABIAHADIAGAFQABADABAEQADgFADgDIAHgFQAGgDAHAAQAHAAAFACQAFACADAEQAEAEACAGQACAGgBAHIAAAog");
	this.shape_17.setTransform(161.2,153.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6D6D6D").s().p("AgNAiQgHgDgFgEQgEgGgDgGQgDgHAAgIQAAgHADgIQADgGAEgEQAFgFAHgDQAGgDAHABQAIAAAHACIAGAFIAFAFIAAgLIAKAAIAABFIgKAAIAAgMIgFAGQgDADgDABQgEACgEABIgHABQgHgBgGgCgAgKgYQgEACgEAEQgDADgCAFQgCAFAAAFQAAAGACAEQACAFADAEQAEADAEADQAFACAFAAQAFAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgFgCgFQgCgGgFgDQgDgDgFgCQgFgCgEABQgFAAgFABg");
	this.shape_18.setTransform(149.7,153.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6D6D6D").s().p("AgMAiQgHgDgFgEQgFgGgCgGQgDgHAAgIQAAgHADgIQACgGAFgEQAFgFAHgDQAGgDAHABQAHgBAGADQAHADAEAFQAFAEACAGQADAIAAAHIAAAEIg7AAQABAGACADQACAFAEACQADADAEACQAFABAEABQAHAAAFgEQAGgDADgGIAKADQgCAFgDADIgHAGIgJAEIgKACQgHgBgGgCgAAZgEIgDgJIgFgHIgIgEQgEgCgEABQgEgBgFACIgHAEQgEADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_19.setTransform(141.2,153.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6D6D6D").s().p("AgUAkIAAhFIAKAAIAAAQIAEgIIAEgGIAFgDIAHgBQAIAAADADIgBAKQgFgDgFAAQgGAAgEADQgCADgDAFQgCAFgBAGQgCAFAAAIIAAAag");
	this.shape_20.setTransform(134.6,153.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6D6D6D").s().p("AgpA0IAAhnIAnAAIAJABIAJADIAIAFIAGAGIAGAIIADAJQADANAAAGQgBAOgCAHIgDAIIgGAIIgGAGIgIAFIgJADIgJABgAgfAqIAdAAQAFAAAJgDQAHgDAEgGQAFgFACgIQACgIAAgJQAAgIgCgHQgCgIgFgGQgEgFgHgDIgHgDIgHgBIgdAAg");
	this.shape_21.setTransform(126.2,151.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6D6D6D").s().p("AgFAwIAAg8IgNAAIAAgJIANAAIAAgaIAJAAIAAAaIAPAAIAAAJIgPAAIAAA8g");
	this.shape_22.setTransform(114.2,152);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6D6D6D").s().p("AgMAiQgHgDgFgEQgFgGgCgGQgDgHAAgIQAAgHADgIQACgGAFgEQAFgFAHgDQAGgDAHABQAHgBAGADQAHADAEAFQAFAEACAGQADAIAAAHIAAAEIg7AAQABAGACADQACAFAEACQADADAEACQAFABAEABQAHAAAFgEQAGgDADgGIAKADQgCAFgDADIgHAGIgJAEIgKACQgHgBgGgCgAAZgEIgDgJIgFgHIgIgEQgEgCgEABQgEgBgFACIgHAEQgEADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_23.setTransform(107.8,153.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6D6D6D").s().p("AgMAiQgHgDgFgEQgFgGgCgGQgDgHAAgIQAAgHADgIQACgGAFgEQAFgFAHgDQAGgDAHABQAHgBAGADQAHADAEAFQAFAEACAGQADAIAAAHIAAAEIg7AAQABAGACADQACAFAEACQADADAEACQAFABAEABQAHAAAFgEQAGgDADgGIAKADQgCAFgDADIgHAGIgJAEIgKACQgHgBgGgCgAAZgEIgDgJIgFgHIgIgEQgEgCgEABQgEgBgFACIgHAEQgEADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_24.setTransform(99.5,153.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6D6D6D").s().p("AAWAjIgWg3IgUA3IgIAAIgchFIAMAAIAUA1IAUg1IAJAAIAVA1IAUg1IALAAIgaBFg");
	this.shape_25.setTransform(89.2,153.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6D6D6D").s().p("AgOAyQgGgDgEgEQgEgFgDgFQgCgGAAgFIAKAAIABAIIAFAHQADACAEACQAFACAFAAQAFAAAFgCIAHgDQADgCACgEIADgGQAAgEgBgFQgBgDgDgCIgHgFIgIgDIgNgDQgIgBgFgDQgEgCgDgFQgEgEAAgKQAAgGACgGQADgEAFgFQAEgDAGgCQAGgCAGAAQAGAAAGACQAGACAEAEQAFAEACAGQADAFAAAHIgKAAQAAgFgCgDQgCgEgDgDQgDgCgEgBIgIgCIgIABIgHAEIgGAGQgBADAAAEQAAAGACADIAFAEQAEACAFACIANADIAMADQAFADAEADQAEAEACAGQABAGgBAHIgDAJQgDAEgEAEQgFADgGADQgGACgHAAQgHAAgHgDg");
	this.shape_26.setTransform(79,151.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},4).wait(1));

	// price
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B0E029").s().p("AgcBtQgLgDgLgGQgKgHgIgHQgIgKgGgKIAjgWQAHAMALAIQAMAIAMAAQAKAAAJgDQAJgDAFgGQAHgFADgHQAEgHAAgHQAAgKgEgIQgEgGgGgFQgFgFgIgBQgIgDgHAAQgOAAgMAEQgPAFgLAMIgYgOIAUhzIB9AAIAAAmIhdAAIgIAuQAIgGALgDQAMgDAKABQAPgBANAFQAOAFAKAJQALAKAFAMQAGAPAAASQAAAQgHAQQgGAOgMAKQgLALgRAGQgQAGgTAAQgMAAgLgEg");
	this.shape_27.setTransform(316.3,120.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B0E029").s().p("AgCBwIAAimIglAPIAAgmIBOgjIAADgg");
	this.shape_28.setTransform(299.5,120.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B0E029").s().p("AgIBzQgLgBgLgEQgKgDgJgHQgJgGgHgIQgHgIgFgKIAlgTQAFALAJAHQALAHALAAQAHAAAHgCQAGgCAFgFQAFgEADgGQADgHAAgHQgEgdgeABIgXAAIAAgkIAXAAQAUAAAFgZQAAgIgEgGQgFgJgLgCQgJgBgJADQgJADgGAJIghgWQAFgIAHgGQAHgGAJgFQAIgEAKgCQALgCAJAAQAOABAMAFQAMAFAJAJQAIAIAFALQAEALAAANQAAANgHAMQgIALgMAHQAJADAHAGQAHAGAFAJQAFAIADAJQACAKgBAJQgBAOgIANQgHAMgMAIQgMAJgPAEQgMADgLAAIgHAAg");
	this.shape_29.setTransform(284.6,120.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B0E029").s().p("AgLCdIAAgnQgQgBgNgHQgNgGgKgJQgJgKgFgMQgFgMAAgOIArAAQABANAKAKQAFAFAIACQAHADAJAAQAIAAAHgCQAHgCAFgEQALgIAAgMQABgMgIgIQgIgIgRgEIgcgIQgSgFgNgHQgLgIgHgJQgIgMgCgXQAAgOAFgMQAFgMAKgJQAJgJANgFQAMgGAPgBIAAgkIAWAAIAAAkQAOACAMAGQAMAFAIAJQAJAJAFAMQAFANAAAOIgsAAQAAgOgJgIQgFgEgGgCQgHgDgHAAQgPAAgKAIQgKAIAAAMQAAAIAFAGQAGAIARAFIAcAIQATAFANAJQANAGAHAKQAHAJADALQADAKgBALQgBAOgGAMQgGALgJAJQgKAIgNAFQgMAFgPABIAAAng");
	this.shape_30.setTransform(266.1,119.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},4).wait(1));

	// doin-it-big
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXBnQgKgDgJgFQgIgFgHgIQgHgHgFgKIAegPQAEAKALAGQALAHALAAQAMAAAJgFQAIgEAFgHQAFgIACgKQABgKAAgLQgGAJgNAGQgMAHgNgBQgOABgMgGQgNgFgKgJQgKgKgFgMQgGgOAAgQQAAgQAGgOQAFgOAKgKQAKgJANgGQAMgEAOAAQANgBAMAGQANAGAGAKIAAgTIAjAAIAAB3QgCAegDALIgHAPQgDAIgGAFQgFAGgGADIgNAHQgPAGgRgBQgLAAgKgDgAgNhEQgHADgFAFQgFAFgDAHQgDAHAAAJQAAAIADAHQADAHAFAGQAFAEAHACQAHADAHgBQAHABAHgDQAGgCAGgEQAFgGAEgGQADgIAAgIQAAgKgDgHQgDgHgGgEQgFgFgHgDQgHgCgHAAQgHAAgHACg");
	this.shape_31.setTransform(214.1,125.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgRBsIAAiLIAkAAIAACLgAgPhFQgIgHAAgJQAAgJAIgHQAHgGAJAAQAJAAAHAGQAGAHAAAJQAAAJgGAHQgHAGgJAAQgJAAgHgGg");
	this.shape_32.setTransform(201.5,118);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhLBnIAAjNIBQAAQAOAAALAEQALADAHAIQAJAHADAKQAFALAAANQAAAMgGALQgDAFgGAEQgFAFgHADQAJACAHAFQAHAEAFAIQAFAGADAIQABAHAAAHQAAANgDALQgFALgIAJQgJAJgMAEQgMAFgPAAgAgkBFIAuAAQAGAAAFgCQAEgDAEgEQAHgIAAgLQgBgMgGgIQgEgEgFgDQgFgCgGAAIgtAAgAgkgTIAnAAQAKAAAGgIQAGgHAAgKQAAgLgGgHQgGgGgLAAIgmAAg");
	this.shape_33.setTransform(188.8,118.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgTBhIAAhuIgaAAIAAgdIAaAAIAAg2IAjAAIAAA2IAeAAIAAAdIgeAAIAABug");
	this.shape_34.setTransform(166,119.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSBnIAAjNIAlAAIAADNg");
	this.shape_35.setTransform(156.3,118.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgJAsIgDhXIAZAAIgDBXg");
	this.shape_36.setTransform(141.1,112.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAdBIIAAhMQAAgHgCgGQgCgGgEgEQgHgIgMAAQgMAAgIAIQgFADgCAHQgCAGAAAJIAABKIglAAIAAiMIAlAAIAAAVQAFgLAMgHQALgFAMAAQANgBAJAEQAKAEAHAIQAGAIAEALQADALAAAOIAABTg");
	this.shape_37.setTransform(129.4,121.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgRBsIAAiLIAjAAIAACLgAgPhFQgHgHAAgJQAAgJAHgHQAHgGAIAAQAKAAAGAGQAIAHgBAJQABAJgIAHQgGAGgKAAQgIAAgHgGg");
	this.shape_38.setTransform(116.9,118);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgbBEQgNgGgLgJQgJgKgHgNQgFgOAAgQQAAgPAFgOQAHgNAJgKQALgKANgFQANgFAOAAQAPAAANAFQANAFAKAKQAKAKAGANQAGAOAAAPQAAAQgGAOQgGANgKAKQgKAJgNAGQgOAFgOAAQgOAAgNgFgAgNghQgHACgFAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAFAFAHADQAHACAGAAQAHAAAHgCQAHgDAFgFQAFgFACgHQAEgHAAgIQAAgHgEgHQgCgHgFgFQgFgFgHgCQgHgDgHAAQgGAAgHADg");
	this.shape_39.setTransform(104.6,121.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhWBnIAAjNIBQAAQAKAAALACQAJACAJADQAIAEAIAGQAIAFAGAHIAKAQQAFAIACAJQAHAbAAANQgDAdgEAMQgCAJgFAJIgKAPQgGAHgIAFQgIAGgIADQgJAEgJACQgLACgKAAgAgwBEIAqAAQANAAALgFQAJgFAIgKQAGgJAEgMQADgNAAgOQAAgNgDgMQgEgNgGgJQgIgKgJgFQgLgFgNAAIgqAAg");
	this.shape_40.setTransform(86,118.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},4).wait(1));

	// trace
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(400,243,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,243,800,486);
// library properties:
lib.properties = {
	id: '29035755BE074461AB7E704B85D7794D',
	width: 800,
	height: 486,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/trace.png", id:"trace"}
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