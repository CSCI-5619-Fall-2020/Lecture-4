/* CSCI 5619 Lecture 4, Fall 2020
 * Author: Evan Suma Rosenberg
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { Color3, Vector3 } from "@babylonjs/core/Maths/math";
import { UniversalCamera } from "@babylonjs/core/Cameras/universalCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight"
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader"
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial"
import { TransformNode } from "@babylonjs/core/Meshes/transformNode"

// Required to populate the Create methods on the mesh class. 
// Without this, the bundle would be smaller,
// but the createXXX methods from mesh would not be accessible.
//import {MeshBuilder} from  "@babylonjs/core/Meshes/meshBuilder";

// side effects
import "@babylonjs/core/Materials/standardMaterial"
import "@babylonjs/core/Loading/loadingScreen"
import "@babylonjs/loaders/OBJ/objFileLoader"
import "@babylonjs/loaders/glTF/2.0/glTFLoader"

// Import debug layer
import "@babylonjs/inspector"


/******* Add the Game class with a static CreateScene function ******/
class Game 
{ 
    public static CreateScene(engine: Engine, canvas: HTMLCanvasElement): Scene 
    {
        // This creates a basic Babylon Scene object (non-mesh)
        var scene = new Scene(engine);

        // This creates and positions a first-person camera (non-mesh)
        var camera = new UniversalCamera("camera1", new Vector3(0, 1.7, 0), scene);

        // This targets the camera to scene origin
        camera.setTarget(new Vector3(0, 1.7, 1));

        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);

        var ambientlight = new HemisphericLight("ambient", new Vector3(0, 1, 0), scene);
        ambientlight.intensity = 1.0;
        ambientlight.diffuse = new Color3(.25, .25, .25);

        var directionalLight = new DirectionalLight("sunlight", new Vector3(0, -1, 0), scene);
        directionalLight.intensity = 1.0;

        var root = new TransformNode("root", scene);

        SceneLoader.ImportMesh("", "assets/models/", "dragonite.obj", scene, (meshes) => { 
            meshes[0].name = "dragonite";
            meshes[0].position = new Vector3(0, 0, 10);
            meshes[0].rotation = new Vector3(0, 180 * Math.PI / 180, 0);
            meshes[0].scaling = new Vector3(10, 10, 10)
            meshes[0].setParent(root);

            var dragoniteMaterial = <StandardMaterial>meshes[0].material;
            dragoniteMaterial.emissiveColor = new Color3(1, 1, 1);
       });

        SceneLoader.ImportMesh("", "assets/models/", "world.glb", scene, (meshes) => { 
            meshes[0].name = "world"
            meshes[0].position = new Vector3(-75, -22, -50);
            meshes[0].setParent(root);
        });

        scene.debugLayer.show();

        return scene;
    }
}
/******* End of the Game class ******/   
 

// Get the canvas element 
const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

// Generate the BABYLON 3D engine
const engine = new Engine(canvas, true); 

// Call the createScene function
const scene = Game.CreateScene(engine, canvas);

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () 
{ 
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () 
{ 
    engine.resize();
});

