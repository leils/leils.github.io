---
  layout: post
  title: Spherical World Navigation in OpenGL
  tags:
  - OpenGL
  - Quaternions
  - GameDev
  categories:
---

Quaternions can be a pain to understand, but sometimes they're useful as hell.

I'm creating a game where you play a character on a tiny, spherical world. This makes navigation quite a challenge - how do you map your normal WASD movement scheme to the turning of a globe?

The decision to make was whether to move the camera, or to move the planet.
Because the character was never moving relative to the camera, it seemed that it could go either way. But rotating the camera seemed to incorporate a lot more math - needing to not only bind the camera's position to the radius of a sphere, but also change the lookat point of the camera to stay on the surface of the planet.
Let's rotate the world!

Obviously, the naieve approach is to try and rotate the world by Euler angles. Euler angles and coordinates are the easiest to think about.
However, when you begin to move, you might find that the angular rotations corrupt each other. Because of the Euler representation as well, you may end up with Gimbal lock.



<link to the video I took>


https://en.wikipedia.org/wiki/Quaternion
http://mathinsight.org/spherical_coordinates
http://stackoverflow.com/questions/3349575/opengl-matrix-rotation-quaternions
https://glm.g-truc.net/0.9.0/api/a00135.html
https://glm.g-truc.net/0.9.4/api/a00153.html#ga72457604550d0414e522dbec0d98f276
