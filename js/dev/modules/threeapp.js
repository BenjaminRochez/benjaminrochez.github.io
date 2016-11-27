var renderer, scene, camera, composer, planet, squelette;

window.onload = function() {
  init();
  animate();
}

function init() {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, 300);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById('canvas').appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xA6CDFB, 1, 1000);

  camera = new THREE.PerspectiveCamera(25, window.innerWidth / 300, 1, 1000);
  camera.position.z = 400;
  camera.position.x = 0;
  camera.position.y = 100;
  scene.add(camera);

  planet = new THREE.Object3D();
  squelette = new THREE.Object3D();
  scene.add(planet);
  scene.add(squelette);

  planet.position.y = -180;
  squelette.position.y = -180;

  var geom = new THREE.IcosahedronGeometry(15, 2);
  var mat = new THREE.MeshPhongMaterial({
    //color: 0xBD9779,
    color: 0x6A83A1,
    shading: THREE.FlatShading
  });
  var bones = new THREE.MeshPhongMaterial({
    //color: 0xBD9779,
    color: 0x6A83A1,
    wireframe: true,
    side: THREE.DoubleSide
  });

  var mesh = new THREE.Mesh(geom, mat);
  mesh.scale.x = mesh.scale.y = mesh.scale.z = 18;
  planet.add(mesh);

  var mesh = new THREE.Mesh(geom, bones);
  mesh.scale.x = mesh.scale.y = mesh.scale.z = 20;
  squelette.add(mesh);

  var ambientLight = new THREE.AmbientLight(0xBD9779);
  scene.add(ambientLight);

  var directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);

  window.addEventListener('resize', onWindowResize, false);

};

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  planet.rotation.z += .001;
  planet.rotation.y = 0;
  planet.rotation.x = 0;
  squelette.rotation.z -= .001;
  squelette.rotation.y = 0;
  squelette.rotation.x = 0;
  renderer.clear();

  renderer.render( scene, camera );
};
