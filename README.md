# Sketch & Pose
App for posing creating character pose references for artists

The online version is available at
https://thelouiselawrence.github.io/sketch-pose/index.html

In addition to being a useful tool (when it is finished), this app is an exercise in pushing the limits of JavaScript and the pages functionality of GitHub pages (which by the way is cool when it works). It also will have procedural generated content.

## Roadmap
- Create a default scene with objects
- Generate rigged character models of humans, with some variety
- Add basic props (primitives, common furniture) and lights
- Basic editing functionality (move, scale, rotate, duplicate, delete)
- Save and upload models (eventually)
- AR support (view models in the real world)

## Running Local Instance
- Ensure that Node.js is installed
- Install Vite
- Install Three.js
- Use the npm commands

## Notes
Creating a Three.js project from scratch is somewhat challenging as many of the instructions are incomplete.

However, the Three.js Journey tutorial seems to be the best.

-	Make sure that Node.js is installed (W3Schools has some good instructions)
-	Navigate to the folder with the Sketch & Pose project
-	Open the terminal (or command tool) and create a package.json
    -	npm init -y
-	Install Vite and initialize the node_modules folder
    -	npm install vite
-	Install Three.js
    -	npm install three
-	Run
    -	npm run dev
-	Open the browser using the host name
-	Everything should be running
