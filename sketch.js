let camera, scene, renderer;
let angle = 0;
let w = 24;

let theta = 0.0; // Start angle at 0
let amplitude = 150.0; // Height of wave

let sentence = "WAVE";
let sentenceArray = [];

function setup() {
	var c = createCanvas(windowWidth, windowHeight);
	c.parent('p5Div');
	fill('red');
	ellipse(width / 2, height / 2, 80, 80);
  sentenceArray = sentence.split("");
  textSize(11);
   
  }
  function draw() {
    //background(0);
    calcWave();
    renderWave();
  }
  
  function calcWave() {
    theta += 0.02;
  
  }
  
  function renderWave() {
     let magnitude = 100;
  
    noStroke();
    fill(255);
    
        for(let i = 0;i < sentenceArray.length;i++) {
          let wave1 = cos(radians(frameCount + i * 5)) * magnitude;
          let wave2 = sin(radians(i + (i * frameCount * 0.009))) * magnitude;
          push();
          translate(wave1, wave2);
          text(sentenceArray[i], width/2+ wave1, height/2+wave2);
          pop();
          
      }
  
  }

  function init() {
    // Init scene
    scene = new THREE.Scene();
  
    // Init camera (PerspectiveCamera)
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
  
    // Init renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
  
    // Set size (whole window)
    renderer.setSize(window.innerWidth, window.innerHeight);
  
    // Render to canvas element
    document.body.appendChild(renderer.domElement);
  
    // Init BoxGeometry object (rectangular cuboid)
    const geometry = new THREE.BoxGeometry(3, 3, 3);
  
    // Create material with color
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  
    // Add texture - 
    // const texture = new THREE.TextureLoader().load('textures/crate.gif');
  
    // Create material with texture
    // const material = new THREE.MeshBasicMaterial({ map: texture });
  
    // Create mesh with geo and material
    cube = new THREE.Mesh(geometry, material);
    // Add to scene
    scene.add(cube);
  
    // Position camera
    camera.position.z = 5;
  
   
  }
  
  
  // Draw the scene every time the screen is refreshed
  function animate() {
    requestAnimationFrame(animate);
  
    // Rotate cube (Change values to change speed)
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  
    renderer.render(scene, camera);
  }
  
  function onWindowResize() {
    // Camera frustum aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    // After making changes to aspect
    camera.updateProjectionMatrix();
    // Reset size
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  window.addEventListener('resize', onWindowResize, false);
  
  init();
  animate();
  