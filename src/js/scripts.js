import * as THREE from 'three';


document.addEventListener('DOMContentLoaded', ()=>{
const back = document.getElementById('back-anim');
    const scene= new THREE.Scene();
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
      }
    const camera = new THREE.PerspectiveCamera(74, sizes.width/sizes.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: back
     });
    

     renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0xffffff, 0);

document.body.appendChild(renderer.domElement);
//renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener('resize', function() {
var width = window.innerWidth;
var height = window.innerHeight;
renderer.setSize(width, height);
});

const mainLight = new THREE.PointLight(0xffffff, 2);
const mainLight2 = new THREE.PointLight(0x737070, 2);
const mainLight3 = new THREE.PointLight(0x232323, 10);

mainLight.position.set(-100, 85, 0);
mainLight3.position.set(-100, -85, 10);
mainLight2.position.set(100, -45, -10);


scene.add(mainLight, mainLight2, mainLight3);

 const geometry = new THREE.SphereGeometry();

 const col = [0xad0323, 0x002D62,  0x0603ad, 0x4C0B65, 0x6A08AD,  0x006400, 0xA64B00, 0x808000, 0x282828];

 const group = new THREE.Group();
 const mass =[];
 
 for ( let i = 0; i < 20; i ++ ) {
    for(let n=0; n<9; n++) {
    const object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: col[n] } ) );
    object.position.x = Math.random() * 40 - 20;
    object.position.y = Math.random() * 40 - 20;
    object.position.z = Math.random() * 40 - 20;
    mass.push(object);
    }	
 }
 group.add(...mass);
 scene.add(group);

const group2 = new THREE.Group();
const mass2 =[];

for ( let i = 0; i < 20; i ++ ) {
 for(let n=0; n<9; n++) {
 const object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: col[n] } ) );
 object.position.x = Math.random() * 40 - 20;
 object.position.y = Math.random() * 40 - 20;
 object.position.z = Math.random() * 40 - 20;
 mass2.push(object);
 }	
}
group2.add(...mass2);
scene.add(group2);

const group3 = new THREE.Group();
const mass3 =[];

for ( let i = 0; i < 20; i ++ ) {
 for(let n=0; n<9; n++) {
 const object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: col[n] } ) );
 object.position.x = Math.random() * 40 - 20;
 object.position.y = Math.random() * 40 - 20;
 object.position.z = Math.random() * 40 - 20;
 mass2.push(object);
 }	
}
group3.add(...mass3);
scene.add(group3);

const group4 = new THREE.Group();
const mass4 =[];

for ( let i = 0; i < 20; i ++ ) {
 for(let n=0; n<9; n++) {
 const object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: col[n] } ) );
 object.position.x = Math.random() * 40 - 20;
 object.position.y = Math.random() * 40 - 20;
 object.position.z = Math.random() * 40 - 20;
 mass4.push(object);
 }	
}
group4.add(...mass4);
scene.add(group4);

const group5 = new THREE.Group();
const mass5 =[];

for ( let i = 0; i < 20; i ++ ) {
 for(let n=0; n<9; n++) {
 const object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: col[n] } ) );
 object.position.x = Math.random() * 40 - 20;
 object.position.y = Math.random() * 40 - 20;
 object.position.z = Math.random() * 40 - 20;
 mass5.push(object);
 }	
}
group5.add(...mass5);
scene.add(group5);

const group6 = new THREE.Group();
const mass6 =[];

for ( let i = 0; i < 20; i ++ ) {
 for(let n=0; n<9; n++) {
 const object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: col[n] } ) );
 object.position.x = Math.random() * 40 - 20;
 object.position.y = Math.random() * 40 - 20;
 object.position.z = Math.random() * 40 - 20;
 mass6.push(object);
 }	
}
group6.add(...mass6);
scene.add(group6);


 function animate() {
   requestAnimationFrame( animate );
   group.rotation.y+=0.002;
   group2.rotation.x+=0.002;
   group3.rotation.z+=0.002;
   group4.rotation.y-=0.002;
   group5.rotation.x-=0.002;
   group6.rotation.z-=0.002;
   scene.rotation.y +=0.002;
   scene.rotation.z +=0.002;
   scene.rotation.x -=0.002;
   renderer.render( scene, camera );
}
animate();
});

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';





const sceneStar = document.getElementById('homeHead__star-scene');
if(sceneStar) {
   const scene= new THREE.Scene();
   var clientHeight = document.querySelector('.homeHead').clientHeight;
   const sizes = {
      width: window.innerWidth,
      height: clientHeight
      }
    const camera = new THREE.PerspectiveCamera(74, sizes.width/sizes.height, 0.1, 1000);
  

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: sceneStar
     });

  

     renderer.setSize(sizes.width, sizes.height);
     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
     renderer.setClearColor(0xffffff, 0);
     scene.position.set(0,0, 0);
     // document.body.appendChild(renderer.domElement);
     //renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    var homeHight = document.querySelector('.homeHead ').clientHeight;
     window.addEventListener('resize', function() {
     var width = window.innerWidth;
     var height = homeHight;
     renderer.setSize(width, height);
     });

     const mainLight = new THREE.PointLight(0xffffff);
const mainLight2 = new THREE.PointLight(0x232323);


mainLight.position.set(60, 45, 40);
mainLight2.position.set(-100, -85, 0);
const group = new THREE.Group();
const meshes = [];
//scene.position.set(0, 0, -300);
scene.add(mainLight, mainLight2);

//const sceneStar = document.getElementById('homeHead__star-scene');



      const zvezda = new THREE.SphereGeometry();
    
      const col = [0xffffff, 0x4D57E7, 0x64E3E7, 0xC8E72D];
      for(let i=0; i<500; i++) {
         for(let n=0; n<4; n++) {
      const ZVMater = new THREE.MeshStandardMaterial({color: col[n]});
      const star = new THREE.Mesh(zvezda, ZVMater);
      star.scale.set(0.02, 0.02, 0.02);
      star.position.x = Math.random() * 40 - 20;
      star.position.y = Math.random() * 40 - 20;
      star.position.z = Math.random() * 40 - 20;
      meshes.push(star);
   }
     }
   group.add(...meshes);
   scene.add(group);
    
 

   if(window.innerWidth > 1045) {
   
      const plane = new THREE.Mesh(
         new THREE.PlaneGeometry( 200, 10000),
         new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.3, transparent: true } )
      );
      plane.position.set(0, -35.8, -100);
      plane.rotation.x = - Math.PI / 2;
      scene.add( plane );
   

      const loaderfont = new FontLoader();
     const font = sceneStar.getAttribute('data-fonts');

     loaderfont.load(font, function(font) {
         const geo = new TextGeometry('WebSites Master', {
            font: font,
            size: 9,
            height: 4
         });
         geo.computeBoundingBox();
         const textMesh = new THREE.Mesh(geo, [
            new THREE.MeshPhongMaterial({color: 0x1b06a1}),
            new THREE.MeshPhongMaterial({color: 0x777777})
         ]);
         let centerOffset = - 0.5 * ( geo.boundingBox.max.x - geo.boundingBox.min.x );
         textMesh.castShadow= true;
         textMesh.position.set(centerOffset, -36, -80);
        scene.add(textMesh);
        
       const material = new THREE.MeshPhongMaterial( { color: 0x012854,  flatShading: true } );
         const textMesh1 = new THREE.Mesh( geo, material );
        
          textMesh1.position.x = centerOffset;
				textMesh1.position.y = -38;
				textMesh1.position.z = -75;
				textMesh1.rotation.x = Math.PI;
            textMesh1.rotation.y = Math.PI*2;
            scene.add(textMesh1);
     });
     
     const loader = new GLTFLoader();
     const image = sceneStar.getAttribute('data-src');
     let mixer = null;
     loader.load(image, function(gltf) { 
      mixer = new THREE.AnimationMixer(gltf.scene);
      const action = mixer.clipAction(gltf.animations[0]);
	 const action2 = mixer.clipAction(gltf.animations[1]);
	  const action3 = mixer.clipAction(gltf.animations[2]);
	const action4 = mixer.clipAction(gltf.animations[3]);
	  const action5 = mixer.clipAction(gltf.animations[4]);
	  const action6 = mixer.clipAction(gltf.animations[5]);
     const action7 = mixer.clipAction(gltf.animations[6]);
     const action8 = mixer.clipAction(gltf.animations[7]);
     const action9 = mixer.clipAction(gltf.animations[8]);
     const action10 = mixer.clipAction(gltf.animations[9]);
     const action11 = mixer.clipAction(gltf.animations[10]);
     const action12 = mixer.clipAction(gltf.animations[11]);
     const action13 = mixer.clipAction(gltf.animations[12]);
     const action14 = mixer.clipAction(gltf.animations[13]);
     const action15 = mixer.clipAction(gltf.animations[14]);
      action.play();
	  action2.play();
	  action3.play();
	  action4.play();
	action5.play();
	action6.play();
   action7.play();
   action8.play();
   action9.play();
   action10.play();
   action11.play();
   action12.play();
   action13.play();
   action14.play();
   action15.play();
   gltf.scene.position.set(-50, 0, -100 );
     gltf.scene.rotation.set(0, 5.4, 0 );
        scene.add(gltf.scene);
       
        const clock = new THREE.Clock();
        function animate() {
         requestAnimationFrame( animate );
         
         const delta = clock.getDelta();
         mixer.update(delta);
         renderer.render( scene, camera );
      }
      animate();
      
     });
  
   }
   const mainLighttext = new THREE.PointLight(0x36353b, 2);
   mainLighttext.position.set(160, 20, 120);
   scene.add(mainLighttext);
   const textureloader = new THREE.TextureLoader();
   const loadTexture = sceneStar.getAttribute('data-texture');
     const planetes = new THREE.SphereGeometry();
     const planetesMap = new THREE.MeshStandardMaterial({
         map: textureloader.load(loadTexture),
         blending: THREE.AdditiveBlending,
     });
   const plMesh = new THREE.Mesh(planetes, planetesMap); 
   plMesh.rotation.x =0.5;
      plMesh.position.set(0, -0.4, -4.5);
      scene.add(plMesh);

      const oblloader = new THREE.TextureLoader();
      const oblTexture = sceneStar.getAttribute('data-obl');
        const obl = new THREE.SphereGeometry();
        const oblMap = new THREE.MeshPhongMaterial({    
            map: oblloader.load(oblTexture),
            transparent: true,
            blending: THREE.AdditiveBlending,
        });
      const oblMesh = new THREE.Mesh(obl, oblMap); 
      oblMesh.rotation.x =0.5;
      oblMesh.position.set(0, -0.4, -4.5);
         scene.add(oblMesh);



     function animate() {
       requestAnimationFrame( animate );
       group.rotation.y +=0.001;
       plMesh.rotation.y +=0.01;
       oblMesh.rotation.y +=0.01;
       renderer.render( scene, camera );
    }
    animate();
   
}



    if(window.innerWidth > 800) { 

    const HomeCanv = document.getElementById('zakSite__animate-home');
   if(HomeCanv) {
   const scene = new THREE.Scene();
   var clientWidth = document.getElementById('zakSite__left').clientWidth;
   var clientHeight = document.getElementById('zakSite__left').clientHeight;
   const sizes = {
   width: clientWidth,
   height: clientHeight
   }
   const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
  
   const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
      canvas: HomeCanv
   });
   
   renderer.setSize(sizes.width, sizes.height);
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
   
   renderer.setClearColor(0xffffff, 0);
   camera.position.set(0, 1.1, 0);
   scene.rotation.set(3.5, 17, 3.2);
   scene.position.set(0, 0, -23);
  
 

window.addEventListener('resize', function() {
   var clientWidth = document.getElementById('zakSite__left').clientWidth;
   var width = clientWidth;
   var height = clientHeight;
   renderer.setSize(width, height);
   });
   

   //const mainLight = new THREE.AmbientLight(0xffffff);
  const mainLight = new THREE.PointLight(0xffffff);
    const mainLight2 = new THREE.PointLight(0xffffff);
   
   mainLight.position.set(40, 15, -20);
    mainLight2.position.set(-40, 15, 40);
   
   scene.add(mainLight, mainLight2);

     const loader = new GLTFLoader();
     const image = HomeCanv.getAttribute('data-src');
     let mixer = null;
     loader.load(image, function(gltf) {
      mixer = new THREE.AnimationMixer(gltf.scene);
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();
   scene.add(gltf.scene);
   const moneta = gltf.scene;
   scene.position.set(0, 2, -15);
   scene.add( moneta);
   const clock = new THREE.Clock();
   function animmonet(){
      requestAnimationFrame( animmonet );
      const delta = clock.getDelta();
      //scene.rotation.y +=0.001;
      mixer.update(delta);
      moneta.rotation.y-=0.01;
   }
   animmonet();
     });
    
   

     function animate() {
       requestAnimationFrame( animate );
       renderer.render( scene, camera );
     }
     animate();
   } 
   
   const servPage = document.getElementById('servicePage__animate');
   if(servPage) {
      const scene = new THREE.Scene();
      var clientWidth = document.getElementById('servicePage__conten-right').clientWidth;
      var clientHeight = document.getElementById('servicePage__conten-right').clientHeight;
      const sizes = {
      width: clientWidth,
      height: clientHeight 
      }
      const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
      
      const renderer = new THREE.WebGLRenderer({
       antialias: true,
       alpha: true,
         canvas: servPage
      });
     // scene.background = new THREE.Color(0x151515);
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
     
      renderer.setClearColor(0xffffff, 0);
      camera.position.set(0, 3.6, 4);
      scene.rotation.set(3.4, 17, 3.2);
      scene.position.set(0, 3.1, -27);
      
      window.addEventListener('resize', function() {
         var clientWidth = document.getElementById('servicePage__conten-right').clientWidth;
         var clientHeight = document.getElementById('servicePage__conten-right').clientHeight;
         var width = clientWidth;
         var height = clientHeight;
         renderer.setSize(width, height);
         });

         
      
      const mainLight = new THREE.PointLight(0xffffff);
      const mainLight2 = new THREE.PointLight(0xffffff);
      mainLight.position.set(40, 15, -20);
      mainLight2.position.set(-40, 6, 30);
      scene.add(mainLight, mainLight2);
      
 
      const loader = new GLTFLoader();
      const image = servPage.getAttribute('data-src');
      loader.load(image, function(gltf) {
          scene.add(gltf.scene);
         
      });
     
      function animate() {
        requestAnimationFrame( animate );
     
      scene.rotation.y+=0.01;
        renderer.render( scene, camera );
      }
      animate();
   }
   
   const onas = document.getElementById('ONas__animate');
   if(onas) {
      const scene = new THREE.Scene();
   var clientWidth = document.getElementById('ONas__page').clientWidth;
   var clientHeight = document.getElementById('ONas__page').clientHeight;
   const sizes = {
   width: clientWidth,
   height: clientHeight
   }
   const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
   
   const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: onas
   });
   renderer.setSize(sizes.width, sizes.height);
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
   renderer.setClearColor(0xffffff, 0);
   camera.position.set(0, 0, 20);
   
   scene.position.set(0, 0, 0);
   renderer.render(scene, camera);

   window.addEventListener('resize', function() {
      var clientWidth = document.getElementById('ONas__page').clientWidth;
      var clientHeight = document.getElementById('ONas__page').clientHeight;
      var width = clientWidth;
      var height = clientHeight;
      renderer.setSize(width, height);
      });
   
   const mainLight = new THREE.PointLight(0xffffff);
   const mainLight2 = new THREE.PointLight(0xffffff);
   mainLight.position.set(40, 15, -20);
   mainLight2.position.set(-40, 6, 30);
   scene.add(mainLight, mainLight2);
   let mixer = null;
   const loader = new GLTFLoader();
   const image = onas.getAttribute('data-src');
   loader.load(image, function(gltf) {
      mixer = new THREE.AnimationMixer(gltf.scene);
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();
      scene.add(gltf.scene);
     gltf.scene.position.set(0, 0, 5);
  
   });

   const clock = new THREE.Clock();
   function animate() {
      requestAnimationFrame( animate );
      const delta = clock.getDelta();
      //scene.rotation.y +=0.001;
      mixer.update(delta);
      scene.rotation.y +=0.01;
      renderer.render( scene, camera );
   }
   animate();
   
}
    }
//actions//
//popup show//
if (document.cookie.indexOf('_visited=1') == -1){
if(document.querySelector('.action__body')) {
   let messagePopup = document.querySelector('.action__body');
   window.addEventListener('load', ()=> {
      setTimeout(() => {
         messagePopup.classList.add('action__open');
         messagePopup.classList.add('action__show');
       }, 10000);
      });
   }
   document.cookie = '_visited=1; path=/';
}
   // end popup show//
   // popup close //
var popupButtonClose = document.getElementsByClassName('action__close');
var popupBody = document.getElementsByClassName('action__body');
popupButtonClose[0].onclick = function() {
   popupBody[0].classList.remove('action__open');

}



const div = document.querySelector( '#action');
 
document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(div);
 
	if ( ! withinBoundaries ) {
		div.style.display = 'none'; // скрываем элемент т к клик был за его пределами
	}
})


// end popup close //


    const actions = document.getElementById('action');
    if (actions) {
      function getTimeRemaining(endtime) {
         var t = Date.parse(endtime) - Date.parse(new Date());
         var seconds = Math.floor((t / 1000) % 60);
         var minutes = Math.floor((t / 1000 / 60) % 60);
         var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
         var days = Math.floor(t / (1000 * 60 * 60 * 24));
         return {
           'total': t,
           'days': days,
           'hours': hours,
           'minutes': minutes,
           'seconds': seconds
         };
       }
       
       function initializeClock(id, endtime) {
         var clock = document.getElementById(id);
         var daysSpan = clock.querySelector('.days');
         var hoursSpan = clock.querySelector('.hours');
         var minutesSpan = clock.querySelector('.minutes');
         var secondsSpan = clock.querySelector('.seconds');
       
         function updateClock() {
           var t = getTimeRemaining(endtime);
       
           daysSpan.innerHTML = t.days;
           hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
           minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
           secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
       
           if (t.total <= 0) {
             clearInterval(timeinterval);
           }
         }
       
         updateClock();
         var timeinterval = setInterval(updateClock, 1000);
       }
       
       var deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
       var deadline = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000); // for endless timer
       initializeClock('countdown', deadline);
    }
    const actionsanim = document.getElementById('actions-anim');
    if (actionsanim) {
      const scene = new THREE.Scene();
      const sizes = {
      width: 280,
      height: 440
      }
      const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
      
      const renderer = new THREE.WebGLRenderer({
         antialias: true,
         alpha: true,
         canvas: actionsanim
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0xffffff, 0);
      camera.position.set(0, 0, 20);
      
      //scene.position.set(0, 0, -5);
      renderer.render(scene, camera);
      const mainLight = new THREE.PointLight(0xffffff, 1);
      const mainLight2 = new THREE.PointLight(0xffffff, 1);
      mainLight.position.set(4, 8, 0);
      mainLight2.position.set(0, -8, 0);
   
      scene.add(mainLight, mainLight2);

   const loader = new GLTFLoader();
   const image = actionsanim.getAttribute('data-src');
   let mixer = null;
   loader.load(image, function(gltf) {
      mixer = new THREE.AnimationMixer(gltf.scene);
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();
      gltf.scene.position.set(-2, -8, -8);
      gltf.scene.rotation.set(0, 5.1, 0 );
      scene.add(gltf.scene);

   });
   const clock = new THREE.Clock();
   function animate() {
      requestAnimationFrame( animate );
      const delta = clock.getDelta();
      //scene.rotation.y +=0.001;
      mixer.update(delta);
      renderer.render( scene, camera );
   }
   animate();

    }
//end actions //



   if(window.innerWidth > 850) {
      //popup show//
      if(document.querySelector('.popup__body')) {
         let messagePopup = document.querySelector('.popup__body');
         window.addEventListener('load', ()=> {
            setTimeout(() => {
               messagePopup.classList.add('pop-open');
               messagePopup.classList.add('popup__show');
             }, 500);
            });
         }
         // end popup show//
         // popup close //
      var popupButtonClose = document.getElementsByClassName('popup__close');
      var popupBody = document.getElementsByClassName('popup__body');
      popupButtonClose[0].onclick = function() {
         popupBody[0].classList.remove('pop-open');
      }
      // end popup close //
      const minipopup = document.getElementById('minipopup');
      if (minipopup) {
        const scene = new THREE.Scene();
        const sizes = {
        width: 90,
        height: 120
        }
        const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
        
        const renderer = new THREE.WebGLRenderer({
           antialias: true,
           alpha: true,
           canvas: minipopup
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0xffffff, 0);
        camera.position.set(0, 0, 20);
        const loader = new GLTFLoader();
        const image = minipopup.getAttribute('data-src');
        const mainLight = new THREE.PointLight(0xffffff, 1);
        const mainLight2 = new THREE.PointLight(0xffffff, 1);
        mainLight.position.set(0, 8, 0);
        mainLight2.position.set(0, -8, 0);
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        directionalLight.position.set(2, -9, -2);
        scene.add(mainLight, mainLight2, directionalLight);
        let mixer = null;
        loader.load(image, function(gltf) { 
           mixer = new THREE.AnimationMixer(gltf.scene);
           const action = mixer.clipAction(gltf.animations[0]);
           action.play();
           scene.add(gltf.scene);
           gltf.scene.position.set(-2, -9, -2 );
           gltf.scene.rotation.set(0, 5.5, 0 );
        });

        //
        const clock = new THREE.Clock();
        function animate() {
           requestAnimationFrame( animate);
           const delta = clock.getDelta();
           mixer.update(delta);
           renderer.render( scene, camera );
        }
        animate();

      }

      }

