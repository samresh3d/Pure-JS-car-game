(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#141413",
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/back_screen_2.png", id:"back_screen_2"},
		{src:"images/bush1.png", id:"bush1"},
		{src:"images/bush2.png", id:"bush2"},
		{src:"images/car_1.png", id:"car_1"},
		{src:"images/car_2.png", id:"car_2"},
		{src:"images/car_3.png", id:"car_3"},
		{src:"images/carSelector.png", id:"carSelector"},
		{src:"images/firetruck.png", id:"firetruck"},
		{src:"images/blast.png", id:"blast"},
		{src:"images/introScreen.png", id:"introScreen"},
		{src:"images/logoarrowpngcopy.png", id:"logoarrowpngcopy"},
		{src:"images/logo_screen1.png", id:"logo_screen1"},
		{src:"images/nitro_fire.png", id:"nitro_fire"},
		{src:"images/nos.png", id:"nos"},
		{src:"images/option.png", id:"option"},
		{src:"images/play.png", id:"play"},
		{src:"images/play_screen_2.png", id:"play_screen_2"},
		{src:"images/road_mark.jpg", id:"road_mark"},
		{src:"images/screen2_bg.jpg", id:"screen2_bg"},
		{src:"images/screen3_bg.jpg", id:"screen3_bg"},
		{src:"images/screen3_Details.png", id:"screen3_Details"},
		{src:"images/screen_4.jpg", id:"screen_4"},
		{src:"images/start.jpg", id:"start"},
		{src:"images/tree1.png", id:"tree1"},
		{src:"images/tree2.png", id:"tree2"},
		{src:"images/truck_2.png", id:"truck_2"},
		{src:"images/truck_3.png", id:"truck_3"},
        {src:"images/CAR_FRONT_LIGHT.png", id:"CAR_FRONT_LIGHT"},
		{src:"images/CAR_REAR_LIGHT.png", id:"CAR_REAR_LIGHT"}
	]
};



// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,10);


(lib.back_screen_2 = function() {
	this.initialize(img.back_screen_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,14);


(lib.bush1 = function() {
	this.initialize(img.bush1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,552);


(lib.bush2 = function() {
	this.initialize(img.bush2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,230);


(lib.car_1 = function() {
	this.initialize(img.car_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,110);


(lib.car_2 = function() {
	this.initialize(img.car_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,110);


(lib.car_3 = function() {
	this.initialize(img.car_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,110);

(lib.CAR_FRONT_LIGHT = function() {
	this.initialize(img.CAR_FRONT_LIGHT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,167);

(lib.CAR_REAR_LIGHT = function() {
	this.initialize(img.CAR_REAR_LIGHT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,79);
    
(lib.carSelector = function() {
	this.initialize(img.carSelector);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,128);


(lib.firetruck = function() {
	this.initialize(img.firetruck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,164);


(lib.blast = function() {
	this.initialize(img.blast);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,55);


(lib.introScreen = function() {
	this.initialize(img.introScreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logoarrowpngcopy = function() {
	this.initialize(img.logoarrowpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,36);


(lib.logo_screen1 = function() {
	this.initialize(img.logo_screen1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,99);


(lib.nitro_fire = function() {
	this.initialize(img.nitro_fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,68);


(lib.nos = function() {
	this.initialize(img.nos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,6);


(lib.option = function() {
	this.initialize(img.option);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,13);


(lib.play = function() {
	this.initialize(img.play);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,13);


(lib.play_screen_2 = function() {
	this.initialize(img.play_screen_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,14);


(lib.road_mark = function() {
	this.initialize(img.road_mark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,63);


(lib.screen2_bg = function() {
	this.initialize(img.screen2_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.screen3_bg = function() {
	this.initialize(img.screen3_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.screen_4 = function() {
	this.initialize(img.screen_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.start = function() {
	this.initialize(img.start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,168);


(lib.tree1 = function() {
	this.initialize(img.tree1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,105);


(lib.tree2 = function() {
	this.initialize(img.tree2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,80);


(lib.truck_2 = function() {
	this.initialize(img.truck_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,204);


(lib.truck_3 = function() {
	this.initialize(img.truck_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,126);

(lib.screen3_Details = function() {
	this.initialize(img.screen3_Details);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);
    
(lib.screen4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.screen_4();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nitro_fire();
	this.instance.setTransform(-12.5,-42.5,1.25,1.25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-42.5,25,85);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nitro_fire();
	this.instance.setTransform(-10,-34);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-34,20,68);


(lib.truck_3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.truck_2();
	this.instance.setTransform(-33,-102);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-102,66,204);


(lib.truck_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.truck_3();
	this.instance.setTransform(-31.5,-63);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.5,-63,63,126);


(lib.truck_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.firetruck();
	this.instance.setTransform(-35.5,-82);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.5,-82,71,164);


(lib.tree2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tree1();
	this.instance.setTransform(-21,-52.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21,-52.5,42,105);


(lib.tree1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tree2();
	this.instance.setTransform(-21,-40);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21,-40,42,80);


(lib.startMarking = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.start();
	this.instance.setTransform(-85.5,-42,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.5,-42,171,84);


(lib.roadMarking = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.road_mark();
	this.instance.setTransform(-3.2,-275.3,0.5,0.5);

	this.instance_1 = new lib.road_mark();
	this.instance_1.setTransform(-3.2,-210.4,0.5,0.5);

	this.instance_2 = new lib.road_mark();
	this.instance_2.setTransform(-3.2,-145.5,0.5,0.5);

	this.instance_3 = new lib.road_mark();
	this.instance_3.setTransform(-3.2,-80.6,0.5,0.5);

	this.instance_4 = new lib.road_mark();
	this.instance_4.setTransform(-3.2,-15.7,0.5,0.5);

	this.instance_5 = new lib.road_mark();
	this.instance_5.setTransform(-3.2,49.2,0.5,0.5);

	this.instance_6 = new lib.road_mark();
	this.instance_6.setTransform(-3.2,114.1,0.5,0.5);

	this.instance_7 = new lib.road_mark();
	this.instance_7.setTransform(-3.2,179,0.5,0.5);

	this.instance_8 = new lib.road_mark();
	this.instance_8.setTransform(-3.2,243.9,0.5,0.5);

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.2,-275.3,6.5,550.7);


(lib.carred = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.car_2();
	this.instance.setTransform(-28.5,-55);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-55,57,110);


(lib.car_White = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.car_1();
	this.instance.setTransform(-28.5,-55);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-55,57,110);


(lib.car_green = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.car_3();
	this.instance.setTransform(-28.5,-55);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-55,57,110);


(lib.bush2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bush2();
	this.instance.setTransform(-19,-115);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-115,38,230);


(lib.bush1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bush1();
	this.instance.setTransform(-21,-276);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21,-276,42,552);


(lib.play_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.play_screen_2();
	this.instance.setTransform(-42.5,-7);
    
    // Layer 2
	this.bg = new lib.Symbol1();
	this.bg.alpha = 0.1;
    
    this.bg.cursor ="pointer";
    
	this.addChild(this.instance,this.bg);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.5,-7,85,14);


(lib.nosFill = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nos();
	this.instance.setTransform(-14.5,-3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.5,-3,29,6);


(lib.hitarea = function() {
	this.initialize();
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlGpSIKNAAIAASlIqNAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlGJSIAAyjIKNAAIAASjg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.7,-60.5,67.5,121);


(lib.carSelector_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.carSelector();
	this.instance.setTransform(-36,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36,-64,72,128);


(lib.back = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.back_screen_2();
	this.instance.setTransform(-47,-7);
    
    // Layer 2
	this.bg = new lib.Symbol1();
	this.bg.alpha = 0.1;
    
    this.bg.cursor ="pointer";
    
	this.addChild(this.instance,this.bg);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47,-7,94,14);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logoarrowpngcopy();
	this.instance.setTransform(-48,-6.9,0.806,0.806,-9.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-21.7,96.2,43.5);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnJiOIOTAAIAAEdIuTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnJCPIAAkdIOTAAIAAEdg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.8,-15.3,93.8,30.8);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("An3iOIPvAAIAAEdIvvAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("An3CPIAAkdIPvAAIAAEdg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.4,-15.3,102.9,30.8);


(lib.screen1_Logo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo_screen1();
	this.instance.setTransform(-136,-49.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-136,-49.5,272,99);


(lib.playArrow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.setTransform(-8,-5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-5,16,10);

(lib.backLight = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CAR_REAR_LIGHT();
	this.instance.setTransform(-31,-19.7,0.75,0.75);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31,-19.7,62,39.5);    

(lib.nos_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween6("synched",0);

	this.instance_1 = new lib.Tween7("synched",0);

	this.instance_2 = new lib.nitro_fire();
	this.instance_2.setTransform(-15,-51,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-34,20,68);


(lib.cars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{car1:0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));
    

	// cars
	this.car1 = new lib.car_White();

	this.car2 = new lib.carred();

	this.car3 = new lib.car_green();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.car1}]}).to({state:[{t:this.car2}]},1).to({state:[{t:this.car3}]},1).wait(1));
    
    // break Light
	this.backLight = new lib.backLight();
	this.backLight.setTransform(-7,48);
	this.backLight.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.backLight).wait(3));
    
	// CAR_FRONT_LIGHT 
	this.frontLight = new lib.CAR_FRONT_LIGHT();
	this.frontLight.setTransform(-48,-170,.75,.75);
    this.frontLight.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.frontLight).wait(3));
	// NOS
	this.nos = new lib.nos_1();
	this.nos.setTransform(0,76.5);
	this.nos.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.nos).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-55,57,165.5);


(lib.screen_2 = function() {
	this.initialize();

	// Nos Fill
	this.palynext = new lib.play_1();
	this.palynext.setTransform(77.5,252);

	this.back = new lib.back();
	this.back.setTransform(-83,252);

	this.n6 = new lib.nosFill();
	this.n6.setTransform(102.1,113);
	this.n6.alpha = 0;

	this.n5 = new lib.nosFill();
	this.n5.setTransform(102.1,120);
	this.n5.alpha = 0;

	this.n4 = new lib.nosFill();
	this.n4.setTransform(102.1,127);
	this.n4.alpha = 0;

	this.n3 = new lib.nosFill();
	this.n3.setTransform(102.1,134);
	this.n3.alpha = 0;

	this.n2 = new lib.nosFill();
	this.n2.setTransform(102.1,141);
	this.n2.alpha = 0;

	this.n1 = new lib.nosFill();
	this.n1.setTransform(102.1,148);
	this.n1.alpha = 0;

	// selector
	this.selector = new lib.carSelector_1();
	this.selector.setTransform(2,-134);

	// car3
	this.car3 = new lib.hitarea();
	this.car3.setTransform(91.3,-134);
	this.car3.alpha = 0.012;
    this.car3.cursor = "pointer";

	// car2
	this.car2 = new lib.hitarea();
	this.car2.setTransform(1.3,-134);
	this.car2.alpha = 0.012;
    this.car2.cursor = "pointer";
    
	// car1
	this.car1 = new lib.hitarea();
	this.car1.setTransform(-90.7,-134);
	this.car1.alpha = 0.012;
    this.car1.cursor = "pointer";

	// screen2_bg.png
	this.instance = new lib.screen2_bg();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance,this.car1,this.car2,this.car3,this.selector,this.n1,this.n2,this.n3,this.n4,this.n5,this.n6,this.back,this.palynext);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.play_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.play();
	this.instance.setTransform(-31,-6.5);

	// Layer 2
	this.bg = new lib.Symbol2();
	this.bg.alpha = 0.1;
    this.bg.cursor = "pointer";

	this.addChild(this.bg,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.3,-14.8,92.8,29.8);


(lib.option_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.option();
	this.instance.setTransform(-51,-6.5);

	// Layer 2
	this.bg = new lib.Symbol1();
	this.bg.alpha = 0.1;
    this.bg.cursor = "pointer";

	this.addChild(this.bg,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-14.8,102,29.8);


(lib.arraow_1 = function() {
	this.initialize();

	// arrow
	this.instance = new lib.Tween2("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-21.7,96.2,43.5);


(lib.screen3MC = function() {
	this.initialize();

	// Trees and bush
	this.truck2 = new lib.truck_2_1();
	this.truck2.setTransform(45,-600);
    //this.truck2.shadow = new createjs.Shadow("rgba(0,0,0,0.5)", -5, 0, 1);
    
	this.truck1 = new lib.truck_1();
	this.truck1.setTransform(-45,-1800);
    //this.truck1.shadow = new createjs.Shadow("rgba(0,0,0,0.5)", -5, 0, 1);
    
	this.truck3 = new lib.truck_3_1();
	this.truck3.setTransform(45,-3000);
    //this.truck3.shadow = new createjs.Shadow("rgba(0,0,0,0.5)", -5, 0, 1);

	this.fill8 = new lib.nosFill();
	this.fill8.setTransform(-119.4,-131.9,0.845,0.617);
    this.fill8.alpha=0;

	this.fill7 = new lib.nosFill();
	this.fill7.setTransform(-119.4,-126.9,0.845,0.617);
    this.fill7.alpha=0;

	this.fill6 = new lib.nosFill();
	this.fill6.setTransform(-119.4,-121.9,0.845,0.617);
    this.fill6.alpha=0;

	this.fill5 = new lib.nosFill();
	this.fill5.setTransform(-119.4,-116.9,0.845,0.617);
    this.fill5.alpha=0;

	this.fill4 = new lib.nosFill();
	this.fill4.setTransform(-119.4,-111.9,0.845,0.617);
    this.fill4.alpha=0;

	this.fill3 = new lib.nosFill();
	this.fill3.setTransform(-119.4,-106.9,0.845,0.617);
    this.fill3.alpha=0;

	this.fill2 = new lib.nosFill();
	this.fill2.setTransform(-119.4,-101.9,0.845,0.617);
    this.fill2.alpha=0;

	this.fill1 = new lib.nosFill();
	this.fill1.setTransform(-119.4,-96.9,0.845,0.617);
    this.fill1.alpha=0;

	this.tree1 = new lib.tree2_1();
	this.tree1.setTransform(-121,42);

	this.tree2 = new lib.tree1_1();
	this.tree2.setTransform(-129,-361);

	this.bush2 = new lib.bush2_1();
	this.bush2.setTransform(125,-562);

	this.bush1 = new lib.bush1_1();
	this.bush1.setTransform(125,0);

	// Road Markings
	this.startMark = new lib.startMarking();
	this.startMark.setTransform(0,137);

	this.RM2 = new lib.roadMarking();
	this.RM2.setTransform(0,-810);

	this.RM1 = new lib.roadMarking();
	this.RM1.setTransform(0,-210);

	// cars
	this.cars = new lib.cars();
	this.cars.setTransform(-45,228.8,0.8,0.8);
    //this.cars.shadow = new createjs.Shadow("rgba(0,0,0,0.5)", -5, 0, 1);

	// screen3_Details.png
	this.instance = new lib.screen3_Details();
	this.instance.setTransform(-150,-300);

	// screen3_bg.png
	this.instance_1 = new lib.screen3_bg();
	this.instance_1.setTransform(-150,-300);

	this.addChild(this.instance_1,this.RM1,this.RM2,this.startMark,this.bush1,this.bush2,this.tree2,this.tree1,this.fill1,this.fill2,this.fill3,this.fill4,this.fill5,this.fill6,this.fill7,this.fill8,this.truck3,this.truck1,this.truck2,this.instance,this.cars);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-1085.3,300,1402.6);


(lib.screen1 = function() {
	this.initialize();

	// Layer 12
	this.screen1Logo = new lib.screen1_Logo();
	this.screen1Logo.setTransform(280,-260);

	// Layer 11
	this.option_mc = new lib.option_mc();
	this.option_mc.setTransform(0,-58);
	this.option_mc.alpha = 0;
    this.option_mc.cursor = "pointer";
    
	this.play_mc = new lib.play_mc();
	this.play_mc.setTransform(0,-94);
	this.play_mc.alpha = 0;
    this.play_mc.cursor = "pointer";

	// optionArr
	this.optionArr = new lib.playArrow();
	this.optionArr.setTransform(-64.8,-56);
	this.optionArr.alpha = 0;

	// playArr
	this.playArr = new lib.playArrow();
	this.playArr.setTransform(-43.8,-95.1);
	this.playArr.alpha = 0;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ao/jHIR/AAIAAGPIx/AAg");
	this.shape.setTransform(-3.7,-92.2);

	// arrow3
	this.arrow3 = new lib.arraow_1();
	this.arrow3.setTransform(-209.3,-136,1.128,1.128);

	// arrow2
	this.arrow2 = new lib.arraow_1();
	this.arrow2.setTransform(-189.6,-206.6,0.718,0.718);

	// arrow1
	this.arrow1 = new lib.arraow_1();
	this.arrow1.setTransform(-203.1,-234);

	// introScreen
	this.instance = new lib.introScreen();
	this.instance.setTransform(-156.5,-300);

	this.addChild(this.instance,this.arrow1,this.arrow2,this.arrow3,this.shape,this.playArr,this.optionArr,this.play_mc,this.option_mc,this.screen1Logo);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-263.5,-309.5,679.5,609.5);


// stage content:
(lib.game = function() {
	this.initialize();

	// Layer 1
	this.screen4 = new lib.screen4();
	this.screen4.setTransform(150,300);
	this.screen4.alpha = 0;
	this.screen4.visible = false;

	// car_3.png
	this.screen3 = new lib.screen3MC();
	this.screen3.setTransform(150,300);
	this.screen3.alpha = 0;
	this.screen3.visible = false;

	// Screen2
	this.screen2 = new lib.screen_2();
	this.screen2.setTransform(150,300);
	this.screen2.alpha = 0;
	this.screen2.visible = false;

	// screen1
	this.screen1 = new lib.screen1();
	this.screen1.setTransform(156.6,300);
	this.screen1.alpha = 0;

	this.addChild(this.screen1,this.screen2,this.screen3,this.screen4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(43.1,-485.3,679.5,1402.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;