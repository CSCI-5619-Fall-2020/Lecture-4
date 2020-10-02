# Lecture 4: Creating Virtual Environments

Detailed explanation of this code can be found in the lecture [video](https://mediaspace.umn.edu/media/1_zlzfxsfh).

## Topics

1. Helpful tips
   - Searching for imports
   - Using the console log
2. Importing and converting 3D models 
   - [Dragonite 3D model](https://clara.io/view/5cf54194-6b42-4d1e-bfc3-4fff1f89287c#) from Clara.io
3. Exporting scene assets from Unity
   - [RPG Poly Pack - Lite](https://assetstore.unity.com/packages/3d/environments/landscapes/rpg-poly-pack-lite-148410) from the Unity Asset Store
   - You will need to build the [UnityGLTF plugin](https://github.com/KhronosGroup/UnityGLTF) from source if you are using a platform other than Windows.
4. Automated deployment to the web
   - Note that you will need to modify the `deploy.sh` script with your information before it will work.

## Participation Exercise

Modify the existing scene by moving at least three mesh objects loaded in `world.glb`.  To do this, you should use the debug inspector to find the node names and determine new position/rotation/scale values to use in your code.  You should submit the modified `index.ts` file on Canvas (do not include any other files).

## License

Material for [CSCI 5619 Fall 2020](https://canvas.umn.edu/courses/194179) by [Evan Suma Rosenberg](https://illusioneering.umn.edu/) is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).

The intent of choosing CC BY-NC-SA 4.0 is to allow individuals and instructors at non-profit entities to use this content.  This includes not-for-profit schools (K-12 and post-secondary). For-profit entities (or people creating courses for those sites) may not use this content without permission (this includes, but is not limited to, for-profit schools and universities and commercial education sites such as Coursera, Udacity, LinkedIn Learning, and other similar sites).   

## Acknowledgments

This lecture was based upon content from the [3D User Interfaces Fall 2020](https://github.blairmacintyre.me/3dui-class-f20) course by Blair MacIntyre.
