---
layout: post
title: Sensors and Touchscreens in Smartphones
category: ゆうごうひかり
tag: 
  - MEMS
  - smartphone
comments: true
date: 2018-05-31
---

## Sensors in the smartphones

From the products website of the Apple, we can find below are totally six kinds of sensors equipped in their latest mobile phones, the iPhone X[^i]. 
<!-- more -->

1. gyroscope
2. accelerometer
3. ambient light sensor
4. proximity sensor
5. hall sensor / magnetometer
6. barometer

Except the barometer, which is a novel addition since the products of last generation, the other five are some kind of essential sensors to add rich location and motion capabilities to the applications[^ii] running on the smart phones. 

### Gyroscopes

Modern gyroscopes used in smartphones and other electronics are typically, Vibrating structure gyroscope, (VGS). It can sense the rate of turn (degree/s) without a fixed point of reference, like conventional gyroscopes while based on microelectromechanical systems. MEMS VSG gyros use a vibrating or resonating ring fabricated using a DRIE (Deep Reactive Ion Etch) bulk silicon process. The annular ring is supported in free-space by eight pairs of 'dog-leg' shaped, symmetrical spokes. The bulk silicon etch process and unique patented ring design enable close tolerance geometrical properties for precise balance and thermal stability[^iii].

### Accelerometers

A dynamic accelerometer measures gravitational pull to determine the angle at which a device is tilted with respect to the Earth. By sensing the amount of acceleration, users analyze how the device is moving.

The basic principle of operation behind the MEMS accelerometer is the displacement of a small proof mass etched into the silicon surface of the integrated circuit and suspended by small beams. Consistent with Newton's second law of motion, as an acceleration is applied to the device, a force develops which displaces the mass[^iv]. The support beams act as a spring, and the fluid trapped inside the IC acts as a damper, resulting in a second order lumped physical system. This is the source of the limited operational bandwidth and non-uniform frequency response of accelerometers.

### Ambient light sensor

An ambient light sensor (ALS) is a component used for brightness adjustment and widely used in the customer electronics and other devices in order to save the battery lifetime and decrease the power hunger by the display.

In a cell phone, to enable automatic control of display backlight brightness over a wide range of illumination conditions from a dark environment to direct sunlight, designers use several kinds of photoelectric devices, such photo diodes, CdS photoelectric cells or photo transistors, as the photodetectors[^v]. With the input electronic signals, micro control units will then increase or decrease the brightness of the display.

### Proximity sensor 

The proximity sensor is common on most smartphones. This is because the primary function of a proximity sensor is to disable accidental touch events. Among all the technologies for proximity sensing, most economic choice is the optical sensor[^vi]. 

Such a device uses a chip placed close to the speaker facing the user and consists of two IR light transmitter and receiver. Usually, the receiver can only detect part of the light emitted by the chip. When something is closer to the ambient-light around the sensor, the ambient light drops down and the reflected IR light increase. Thus, the controller switches from far to near. 

## Touchscreens for handed electronic devices

Touchscreens's main demand is from the growing customer digital devices. And the history of touchscreens began at the 1970s, when Dr. G. Samuel Hurst first invented the first resistive touchscreen while the capacitive touchscreens was put forward by Eric Johnson in 1965.i 
As we all know, the resistive and capacitive touchscreens are two main categories. However the technology and knowledge is a little different.

### Resistive 

A typical different feature of the resistive touchscreen it that when you touch the screen, you will find slightly bend of the top layer, which also indicates the principle. 
Usually, the screen includes two layers bending to touch one another. One of those thin yellow layers is resistive and the other is conductive, separated by a gap of tiny dots called spacers to keep the two layers apart until you touch it. An electrical current runs through those yellow layers at all times, but when your finger hits the screen the two are pressed together and the electrical current changes at the point of contact. The software recognizes a change in the current at these coordinates and carries out the function that corresponds with that spot.

### Capacitive

Unlike resistive touch screens, capacitive screens do not use the pressure of your finger to create a change in the flow of electricity. Instead, they work with anything that holds an electrical charge, including human skin. Capacitive touch screens are constructed from materials like copper or indium tin oxide that store electrical charges in an electrostatic grid of tiny wires.

There are two main types of capacitive touchscreens - surface and projective. Surface capacitive uses sensors at the corners and a thin evenly distributed film across the surface, whereas projective capacitive uses a grid of rows and columns with a separate chip for sensingii. When a finger hits the screen, a tiny electrical charge is transferred to the finger to complete the circuit, creating a voltage drop on that point of the screen. The software processes the location of  this voltage drop and orders the ensuing action.

# References

[^i]: Technical specification of the iPhone X,  retrieved from https://apple.com/iphone-x/specs/
[^ii]: Sensor Overview, Android developer documents, retrieved from https://developer.android.com/guide/topics/sensors/
[^iii]: MEMS VSG gyros - a short description of their basic construction and operation, retrieved from https://www.siliconsensing.com/technology/mems-gyroscopes/
[^iv]: Principles of Operation, retrieved from http://www.sensorwiki.org/doku.php/sensors/accelerometer#external_links_references
[^v]: Ambient Light Sensor (ALS) Applications in Portable Electronics, White Paper Presented by ROHM Semiconductor
[^vi]: Proximity Sensor on Android Gingerbread, retrieved from http://thecodeartist.blogspot.com/2011/01/proximity-sensor-on-android-gingerbread.html
[^vii]: From touch displays to the Surface: A brief history of touchscreen technology, retrieved from https://arstechnica.com/gadgets/2013/04/from-touch-displays-to-the-surface-a-brief-history-of-touchscreen-technology/2/
[^viii]: Okay, but how do touch screens actually work? retrieved from http://scienceline.org/2012/01/okay-but-how-do-touch-screens-actually-work/




