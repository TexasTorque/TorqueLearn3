---
title: Coding for FRC
date: 2026-02-18T17:04:00.000-06:00
author: Davis Jenney
---

# Coding for FRC

Before we program a robot, make sure you have the items installed as detailed in [Getting Started](/coding/getting-started).

## How to use WPILib

The version of Visual Studio Code that you installed earlier has WPILib built in. With the WPILib button in the top-right of the window, you have access to commands for writing, building, and deploying robot code.

## Making a New Project

Before you get into actually coding, first:
* Evaluate: Is this going to be a repo everyone uses? 
  * Yes: Create a repo in the TexasTorque GitHub (if you don't have access, talk to your subsection student mentor) and create a new repository. Clone the TorqueTemplate, clone to your computer, and begin work. 
  * No: Are you going to need a repo for this?
    * Yes: Go to your profile, then your repositories, then create a new repo. Clone from TorqueTemplate, clone to computer, and begin work.
    * No: Clone TorqueTemplate and begin work. Just do not run any commits.

Now what?

**NOTE: Assume Java from now on!**

## Project Layout

In TorqueTemplate, you are given an empty robot. It, assuming you cloned recursively, will have access to *torquelib* and holds proper file structure. But what do these files do?

* Main.java calls Robot.java. This is what Java itself will run, so leave it alone.
* Robot.java is where you will add subsystems so Java knows where to run code.
* Ports.java is a constant file. Every motor on a robot has a port, and the variables you declare here, assuming you import it, allows you to maintain global consistency throughout files. If done correctly, fixing a port here fixes it everywhere.
* Input.java controls controller inputs. We utilize Xbox controllers, which utilize two analog sticks, a D-Pad, two triggers, two paddles, and the four buttons. While you could theoretically use the Xbox button, pause button, and window button, it is uncommon to do so. Lastly, it will also handle any rumble/vibrations if needed.
* /Subsystems is a folder for, you guessed it, subsystems. All subsystem classes, each as their own java file, will go in here. Remember to add the subsystem to *Robot.java* to ensure it is actually used.
