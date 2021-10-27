---
title: Spooky Serenade
date: "2021-10-26"
description: Candles call the spooky serenade
tags: ["blog", "itp", "PCOMP", "Out of Order Storytelling"]
thumbnail: ./hero.jpg
---
This week, I took a bit of a detour. A spooky detour.

`youtube: https://youtu.be/sCgfHm83ieI`  

This was created for the Social Genius Halloween Experience Event, taking place on the NYU ITP floor. Pulled from my fondness for Disneyland and Imagineering, I re-imagined the Singing Busts from the Haunted Mansion as an interactive choir, a ghostly chorus that you could all up with candles. The ghosts are a 4k fan-generated video, created for Halloween projections. You can find the [video here on Youtube](https://youtu.be/HECrCf73Jv8).

It's a pretty simple execution: each of the ghosts are obscured by a black box, which fades away when a candle is placed on the candle holder. In addition, the volume gets louder with each added candle. A simple end-screen effect of lightning and text is added when all 5 candles are placed in the holder.

![Image of Candle Holder](https://firebasestorage.googleapis.com/v0/b/sketch-blog-857c6.appspot.com/o/spooky_serenade%2Fcandle_holder.jpg?alt=media&token=ce54854f-790d-4d9e-bb9d-8317b4c4c07f)

You might recognize this candle holder from my Out of Order Storytelling project. It is, in fact, repurposed from that project, though slightly updated and with a fresh new base. I laser cut a temporary cardboard base, as well as a tray for candles. I also cleaned up the wiring a bit, re-programing the Arduino to report which of the photoresistors were covered or uncovered, rather than the number of photoresistors that were reading below the threshold.

The other side of this is all P5. I started by [prototyping a simple fade-in fade-out program using key inputs](https://editor.p5js.org/leils/sketches/hVpZ-QWi4). This program just renders three circles (used to represent three of the ghosts), using keystrokes as input. By pressing the keys 1-3, you can "reveal" a ghost.

![Image of circles to represent ghosts](https://firebasestorage.googleapis.com/v0/b/sketch-blog-857c6.appspot.com/o/spooky_serenade%2FScreen%20Shot%202021-10-26%20at%207.59.13%20PM.png?alt=media&token=fc33f005-5b68-414b-8b59-d5e04904efe5)

After that, it was time to hook up the Arduino. I set up [a very simple serial input with the same circle-ghosts](https://editor.p5js.org/leils/sketches/xMh3R0dUP), just to prove that I could read serial and parse the output.

![Image of circles taking in serial input](https://firebasestorage.googleapis.com/v0/b/sketch-blog-857c6.appspot.com/o/spooky_serenade%2FScreen%20Shot%202021-10-26%20at%207.59.27%20PM.png?alt=media&token=9702a4f2-46b5-47e4-9e39-f377d95dd489)

Then, it was on to video. It took a while to get the video to play at the right resolution and size (especially with the web editor's 5mb upload limit), so I ended up prototyping further with a heavily compressed version of the final video. With this, I was able to run some user tests and get good feedback to iterate on.

`youtube: https://youtu.be/JgJaLWfyUz4`

In order to play the actual video, I moved off the web editor onto the desktop. This local version let me play a high resolution video and iterate a little faster for the final details. Below are some photos of the final install.

![Context view](https://firebasestorage.googleapis.com/v0/b/sketch-blog-857c6.appspot.com/o/spooky_serenade%2Fcontext_view.jpg?alt=media&token=d9bf5e1a-b627-451f-8352-af72528d65ff)

![Side View of Candles](https://firebasestorage.googleapis.com/v0/b/sketch-blog-857c6.appspot.com/o/spooky_serenade%2Fside-view-candles.jpeg?alt=media&token=a5eeb859-05e3-4d20-b336-fe98470578bd)

![Final frame](https://firebasestorage.googleapis.com/v0/b/sketch-blog-857c6.appspot.com/o/spooky_serenade%2FScreen%20Shot%202021-10-24%20at%205.57.35%20PM.png?alt=media&token=6c2737e3-4411-4abe-bfd4-930d1f109184)
All of the P5 code and relevant files are [available here on Github](https://github.com/leils/grinning-ghosts), including the Arduino code.
