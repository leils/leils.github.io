---
title: Hypercinema - Synthetic Media
date: "2021-09-27"
description: An example and its issues
tags: ['itp', 'hypercinema', 'blog']
thumbnail: ./deoldify-screenshot.png
---
We talk a lot about deepfakes and generated media when it comes to synthetic media, but a subtler form of synthetic media is augmenting pre-existing media. Recently, videos like the ones below show an AI recolorization of old black-and-white films. This has been applied to videos taken candidly of people, to production videos of dances and entertainment, and to movies. The main re-colorizer that I've seen used is [DeOldify](https://github.com/jantic/DeOldify) .

`youtube: https://www.youtube.com/watch?v=hZ1OgQL9_Cw`
`youtube: https://www.youtube.com/watch?v=vif94mNX8Nk`

I consider this to be synthetic media because it inherently generates net new information that is incorporated in the final form of the media. For the AI, there is no data on what colors were popular for clothing in this era, or how exactly they might have been portrayed through the black-and-white film. It simply sees black and white, and generates its best guess at what the color may have been. The model has been trained with data from [https://image-net.org](https://image-net.org/), a dataset of over 15 million images. The model has been fed black-and-white versions of those images, and then trained against the original color versions. One of the issues here is that the images have been converted to black-and-white through digital means, but there is no direct film-to-digital-color comparison being made. When all of the old black-and-white video was done on film, this seems like a bit of a missed opportunity (though an understandable one, considering how limited the data would be).

While colorization may seem like a minor detail, I think that representing the output of this ML model as "truth" is ethically fraught. Our current response to video media is to understand it as truth, something that Deep Fakes make us question. Faking color is another, subtler form of information creation, one that has its own biases and issues. Already we have issues with how the AI represents different skin colors and tones, something that shows the biases in its training data. How can we know whether the AI has colored a dress the way that it would have appeared in real life? How does it represent hair colors, eye colors, textures? These details change how we see the world, and making them up may leave us with the wrong impressions.
