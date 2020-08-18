---
layout: post
category: ゆうごうひかり
date: 2018-04-20
title: A Glance At Autonomous Driving
tag: 
- autonomous driving
---


Full autonomous (FA) driving in the urban area is the ultimate goal for the autonomous vehicle developing teams in the<!-- more --> recent years[^eco], both from the famous internet technology companies and correspondingly, the automobile companies. The former team includes Google, Uber, Baidu and perhaps, Tesla[^ran]. Differing from their advantages of algorithm developing and software solutions, the latter seems more conservative on investments strategies, but they have already succeeded benefitting from their assistant autonomous technology, including General Motors, Ford, and Daimler. Before achieving the goal, FA driving, we shall figure out what is the essential technology and critical algorithms serving for autonomous driving. Furthermore, it is also crucial to discover their relation with electronic science and engineering, both in the term of software and hardware.

## Perception

Ahead of moving forward, absolutely, the vehicle is supposed to know the information about the other vehicles on the same road and to predict how they will move in the last fewer seconds. This is the main task for environment perception. 

First key point is to recognize the moving objects nearby, then to determine the fronts, the sides, which is function realized by the Image-processing program. Subsequently, analyze the dynamical parameters, such as position, velocity and acceleration. Once the processor perceived they might appear the driving direction, the vehicle will update their path or just stop to avoid the collision. The solutions are more about computation science, like computer vision and deep learning, somehow is the advantages of technology companies.

## Sensor Fusion

The sensors are composed of optical cameras, RADARs, and so-called LiDAR. Cameras are able to identify the near objects but cannot measure the distances, while RADARs are able to calculate the distances but without the ability to figure the outlines. However, the LiDAR is able to detect either the outlines or the distances. In result, almost all the prototype AV cars are equipped with such a system on the roof.

Last November, the most famous LiDAR maker, Velodyne company introduced its latest LiDAR sensor for automated driving, the VLS-128. This palm-sized product integrates 128 channels with the longest range at 200 to 250 meters[^velo][^velo2]. In respect to the microelectronics industry, it is possible to realize a more compact LiDAR system.

## Localization and Navigation 

Nowadays, the common solution is GPS/IMU. Due to the space industry, now it is easy to master vehicles' attitude, velocity, angular rate, specific force and sometimes the magnetic field around. By gathering accelerometers, gyroscopes and magnetometers, IMU (Inertial measurement unit) serves as a specific orientation sensor beyond those used for detection and perception.  As to navigation satellite system, besides the GPS, BeiDou (China), GLONASS (Russia), GALILEO (Europe) etc. are some of the alternatives.

## Motion planning and trajectory making

Like perception of the around objectives, the planning subsystem is more about software engineering, including the components like path planners, behavioral planners, and route planners.  Two common algorithms are incremental search-based algorithm and sampling based planning algorithm, both serving for the university and industry research groups. To satisfy the urban autonomous driving challenge, lower source consumption and high accuracy algorithms will also make differences.

## Control and integration

With help of complex computation algorithm, the autonomous driving is more like the interface between software infrastructure and vehicle controlling system including the throttle, the brake, the steering and the transmission. In respect to electricity consumption, the electoral motors are much preferred since the available voltage and intrinsic electricity supply. As to operation system, due to the public kernel and IoT (Internet of Things) communication, researchers prefer to choose Linux and its various releases as computer systems.

In the term of the interdisciplinary, urban autonomous driving is still challenging and demanding. By interface with IoT, V2V/V2X (Vehicle to Vehicle/ Vehicle to everything) is a future tendency to improve the scalability and enhance the communication with other intelligent tools in modern society. Since that, along with automobile industry and computer science, electronic and electrical subjects are about to contribute to realizing the most compact, reliable and energy-saving components.

### Bibliography

[^eco]: Autonomous-vehicle technology is advancing ever faster. (2018, March 01). Retrieved April 19, 2018, from https://www.economist.com/news/special-report/21737420-making-vehicles-drive-themselves-hard-getting-easier-autonomous-vehicle-technology
[^ran]: Muoio, D. (2017, September 27). RANKED: The 18 companies most likely to get self-driving cars on the road first. Retrieved April 19, 2018, from http://www.businessinsider.com/the-companies-most-likely-to-get-driverless-cars-on-the-road-first-2017-4
[^velo]: Velodyne LiDAR Products. Retrieved April 19, 2018, from http://velodynelidar.com/products.html
[^velo2]: Burke, K. (n.d.). Velodyne rolls out smaller, more powerful lidar sensor. Retrieved April 19, 2018, from http://www.autonews.com/article/20171129/MOBILITY/171129761/velodyne-rolls-out-smaller-more-powerful-lidar-sensor
[^1]: Franke, U., Gavrila, D., Gorzig, S., Lindner, F., Puetzold, F., & Wohler, C. (1998). Autonomous driving goes downtown. IEEE Intelligent Systems, 13(6), 40-48. doi:10.1109/5254.736001

[^2]: Levinson, J., Askeland, J., Becker, J., Dolson, J., Held, D., Kammel, S., . . . Thrun, S. (2011). Towards fully autonomous driving: Systems and algorithms. 2011 IEEE Intelligent Vehicles Symposium (IV). doi:10.1109/ivs.2011.5940562
[^3]: Chris Urmson et al. (2008). Autonomous Driving in UrbanEnvironments: Boss and the Urban Challenge. Journal of Field Robotics 25(8), 425–466.
[^4]: Campbell, M., Egerstedt, M., How, J. P., & Murray, R. M. (2010). Autonomous driving in urban environments: Approaches, lessons and challenges. Philosophical Transactions of the Royal Society A: Mathematical, Physical and Engineering Sciences, 368(1928), 4649-4672. doi:10.1098/rsta.2010.0110
