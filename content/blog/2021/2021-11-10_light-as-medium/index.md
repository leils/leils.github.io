---
title: Light as Medium
date: "2021-11-10"
description: PCOMP Project 2 - Muscle Sensors and Kinect
tags: ["blog", "itp", "PCOMP"]
thumbnail: ./light-cover.jpg
---
Partners: [Nunnapat "Spencer" Ratanavanh](https://ratanav.com/) , [Bruce Arthur Jr.](https://www.notion.so/PCOMP-2ab84977b87b41b9a2c7d8dcdfbaf140)

Under instruction to explore microcontroller-to-PC communication, we experimented with the use of [MyoWare Muscle sensors](https://www.adafruit.com/product/2699?gclid=CjwKCAiA1aiMBhAUEiwACw25MWvuIKJTwjj9595sLOel6BRqeLPVS8DwwC-IDC0Vl2cJ5TfB8L7X0BoCAU8QAvD_BwE) ( + EMG electrodes), the Kinect, and P5 to create a visual performance tool.

Here, we have created a series of  through which the performer (in this case, Spencer) may dynamically control their environment through movement. Muscle sensors record both muscle engagement and heart beat in the performer's chest and hands, and the Kinect tracks hand position. Each of these inputs directly affects the rendered circles in P5 which are then projected back onto the performer's body, creating a cycle between the dancer and their environment.

`video:https://youtu.be/dlhKv5GDMiE`

In this version, the distance between the hands affects the color of the circles. The size of the circles is controlled by both the heart and bicep sensor, and the bicep sensor going high causes a mode to switch that determines whether or not the background is redrawn.

Initially, the project was conceived as a way to create volumes of light on stage, directly controlled through the performer's body. Some of the earlier explorations here reflect this strongly, but the project evolved over time. This work has gone through (and likely will continue to go) through many iterations. An earlier version, below, only used the heart beat to augment the shape of a single circle.

`video:https://vimeo.com/639571795/dbcad8e61f`

The piece consists of two muscle sensors, one placed above the heart and one placed on the bicep of the performer. These are connected to an Arduino Nano IOT 33. This data is read and sent via asynchronous serial to P5. This P5 sketch receives data not only via serial but also from Kinect, from which we take the location of IR-visible hands.

![circuit diagram](https://firebasestorage.googleapis.com/v0/b/sketch-blog-857c6.appspot.com/o/light-as-medium%2Flight-as-medium-circuit-diagram.jpg?alt=media&token=1186b1ac-e80b-48c3-997c-4fbb5ec49074)

For next time:

- The muscle sensors were connected directly to the arduino via long wires, which became cumbersome and somewhat fragile over time. While this provided reduced lag and increased reliability, it may be desirable to pursue a wireless form factor in the future.
- The current iteration is very fun to play with, but in some ways lacks finesse and controllability.
