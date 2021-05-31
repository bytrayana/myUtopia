let f;
//let bg;
let angle = 0;
let w = 20;
let w2 = 50;
let w1 = 15;
let s = "BLOCK BLOCK BLOCK";
let sentenceArray = [];
let theta = 0.0; // Start angle at 0
let amplitude = 150.0; // Height of wave
let img, img2, img3, img4, img5, img6, img7,img8,img9, img10;
let city;
let london;
let graphics;

let test;

function preload() {
    london = loadModel('assets/london9.stl');
    //mtl = loadModel('assets/london8.mtl');
}

function setup() {
 // bg = loadImage('bg.jpg');
	createCanvas(windowWidth,windowHeight, WEBGL);
  graphics = createGraphics(60,30);
  
  test = createGraphics(200,200);
  test.fill(255);
  test.textAlign(CENTER);
  test.textSize(32);
  test.text('test',100,50);
   
  sentenceArray = s.split("");
  city = loadImage('assets/map-01.jpg');
  img = loadImage('assets/TRUTH4-01.png');
  img2 = loadImage('assets/BLOCK-01.png');
  img3 = loadImage('assets/test-01.png');
  img4 = loadImage('assets/idk-01.png');
  img5 = loadImage('assets/ESTATE-01.png');
  img6 = loadImage('assets/techno-01.png');
  img7 = loadImage('assets/ORDER2-01.png');
  img8 = loadImage('assets/ac-01.png');
  img9 = loadImage('assets/free-01.png');
  img10 = loadImage('assets/accomm-01.png');
  
  
}

function draw() {
	background(0);
    
    orbitControl();
    //lights();
    let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
 // directionalLight(255, 255, 255, -dirX, -dirY, -1);
    //ortho();
    //directionalLight(255,255, 255, 0, -1,0)
	translate(0, 0, -50);
    //camera(50,0,-200);
   // ambientLight(100);
  //  directionalLight(255, 255, 255, 0, 0, 1);
	rectMode(CENTER);
   
    //normalMaterial();
    push();
    rotateX(PI/2);
    //translate(0,-180,-180);
    texture(city);
    plane(600,600);
    //model(london);
    pop();

    rotateY(-PI / 10.9);
    let offset = 0;

//building 1 - cheap rent estate agency
	for(let y = 0; y < 195; y+=15) {
        push();
        let a = angle+ offset;
        let h = map(sin(a),-1,1,0,100);
        fill(255);
        translate(60,y-190, 60);
        texture(img5);
        //rotateY(-PI/3);
        box(h, 15, 40);
        //text(s,h,w);
        //rect(x-width/2 + w/2,0,w-2,h);
        offset += 0.1;
        pop();   
    }

     //building2 - truth advertising 
    for(let y = 0; y < 200; y+=50) {
        push();
        let a = angle+ offset;
        let h = map(cos(a),-1,1,0,100);
        fill(255);
        translate(160,y-180,40);
        rotateX(angle*0.2);
        texture(img);
        box(h-20, 50, 50);
        //text(s,h,w);
        //rect(x-width/2 + w/2,0,w-2,h);
        offset += 0.5;
        pop();   
    }

    //building3 - texhnology research 
  	for(let y = 0; y < 120; y+=w) {
        push();
        let a = angle+ offset;
        let h = map(sin(a),-0.8,0.8,0,100);
        fill(255);
        translate(250,y-110,30);
        rotateY(PI/12);
        noStroke();
        texture(img6);
        box(h-40, w, 20);
        //text(s,h,w);
        //rect(x-width/2 + w/2,0,w-2,h);
        offset = 0.5;
        pop(); 
        
        
    }
    //building4 - public order
    for (let x = 0; x < 90; x += 30) {
      for (let y = 0; y < 180; y += 30) {
  
        push();
        let a = angle + offset;
        let h = map(sin(a), -1, 1, 0, 100);
        rotateY(PI/2);
        translate(x - 80, y - 160, -80);
        noStroke();
        texture(img7);
        box(30, 30, h-30 );
        offset += 0.1;
        pop();
      }
    }

    //building5 - 
    for(let y = 0; y < 350; y+=w2) {
      push();
      let a = angle+ offset;
	  let h = map(sin(a),-1,1,0,100);
	  fill(255);
      noStroke();
      translate(-100,y-315,-160);
      texture(img8);
      rotateY(PI/2);
      box(h, 20, 50);
      //text(s,h,w);
	  //rect(x-width/2 + w/2,0,w-2,h);
      offset += 0.3;
      pop(); 
        
      push();
      fill(255);
      noStroke();
      translate(-100,y-325,-80);
      texture(img9);
      rotateY(PI/2);
      box(h, 50, 60);
      pop();
}
// building 6
    for(let y = 0; y < 375; y+=w1) {
      push();
      let a = angle+ offset;
    let h = map(sin(a),-0.8,0.8,0,100);
    fill(255);
      translate(-170,y-365,80);
      rotateY(angle*0.2);
      texture(img);
      box(h-20, w1, 30);
      //text(s,h,w);
    //rect(x-width/2 + w/2,0,w-2,h);
      offset += 0.3;
      pop();   
    }

// building 7
  // for (let y = 0; y < 100; y+=w) {

  //   push();
  //   let a = angle + offset;
  //   let h = map(sin(a), -1, 1, 20, 80);
  //   translate(130,y -90, -120);
    
  //   rotateX(PI/2);
  //   texture(img3);
  //   torus(h-20,10,20);
  //   offset += 0.2;
  //   pop();
  // } 

//       for(let y = 0; y < 600; y+=w) {
//       push();
//       let a = angle+ offset;
// 	  let h = map(sin(a),-0.8,0.8,0,100);
// 	  fill(255);
//       translate(-60,y-300,-100);
//       box(h, 90, 50);
//       //text(s,h,w);
// 	  //rect(x-width/2 + w/2,0,w-2,h);
//       offset += 0.5;
//       pop();   
// }
  

  
//       for(let x = 0; x < 100; x+=w) {
//       push();
//       let a = angle+ offset;
// 	  let h = map(sin(a),-0.5,0.5,0,100);
// 	  fill(255);
//       translate(x +300,100,-200);
//       //rotateY(angle*0.2);
        
//       box(w, h+400, 50);
//       //text(s,h,w);
// 	  //rect(x-width/2 + w/2,0,w-2,h);
//       offset += 0.3*0.2;
//       pop();   
// }
  





  
//     for (let x = 0; x < 140; x += 70) {
//     for (let y = 0; y < 490; y += 70) {

//       push();
//       let a = angle + offset;
//       let h = map(sin(a), -0.5, 0.5, 0, 100);
//       let wave1 = sin(radians(frameCount + x * 5)) * 70;
//       let wave2 = map( cos(radians(y+(frameCount*0.15 + (y*20)*0.20))), -1, 1, -width*0.100, width*0.100);
//       translate(x + 300, y , 350);
//       box(70+wave2, 70+wave2, h + 70);
//       offset += 0.1;
//       pop();
//     }
//   }

 
  angle += 0.05;
    //renderWave();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight,WEBGL);
  }