---
title: How to Setup VSCode
date: 2026-02-20T16:38:00.000-06:00
author: Davis Jenney
---

# How to Setup VSCode Code

**Notes: **
- VS Code Docs located [here](https://code.visualstudio.com/docs). Please check this first before asking questions.
- WPILib installs its own VSCode. If you only plan on having VSCode for robotics, don't install it normally.

Visual Studio Code, or VS Code, is the IDE (Integrated Development Environment) used at Texas Torque. The reason for this is the fact that it is easy to use with WPILib and has an incredible amount of tools, or extensions, available to us. A shortcut to keep in mind is Ctrl (Cmd) + Shift + P. This opens the commands which can be used to deploy to a bot, refresh parts of VS Code, and other highly efficient things.

# Installation

WPILib, due to licensing reasons, must install VSCode for itself every season. Typically, you'll only need to do this once with the exception being that there is an update that you want. What system you are running will affect your installation process.

## Downloading

## Windows

For Windows, the process is relatively simple. From [this](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html) page, download the .ISO file. Once it's down downloading, right-click it and select "Mount". On the new Disk Drive (found on the left panel), run the "WPILibInstaller.exe".

### MacOS

For MacOS, download the .DMG file. Double click it and run "WPILibInstaller".

**Note:** Returning members may need to eject any previous seasons' WPILibs to ensure the .DMG file properly mounts.

### Linux

**Note:** Only Ubuntu is officially supported by WPI. Certain versions of Ubuntu are unsupported. Please refer to the page to determine if yours can run WPILib. Other versions of Linux may run it, though troubleshooting is likely.

Download the .tar.gz file. Extract it and run "WPILibInstaller". 

*Ubuntu* may attempt to open the WPILibInstaller as a shared library instead of an executable, so run it from the terminal instead.

## Installation

After launching WPILibInstaller, click "Start". Ensure that "Everything" is selected. Click "Install for this User". Then select "Download for this computer only". Let WPILib install. You can then open it through your OS' start menu. 

## C/C++ (TurboTorque/7492) 

WPILibInstaller bundles the Java JDK with it, not a C++ compiler. Installing one is a requirement to deploy any code to a C++ robot.

### Windows

Install the [Visual Studio Installer Community Edition](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Stable). On install, select "Desktop Development with C++".

### MacOS

Install XCode.

### Linux

Install the `build-essentials` package through your package manager (`apt` for Ubuntu). 

# VS Code

## Environment

To get familiar with the IDE, it helps to first set it up. When you open it, you'll either be met with an empty page or the last project you had open in it. This is where you will write all of your code. On the right-hand side, you have a panel for finding sections of code quickly if the program you are working on is long. 

On the left-most side, we have our tabs. You'll spend most of your time in the Explorer tab, which is used to open files in a directory, so you'll frequently use this in any project. The other tab you need to know is the Extensions tab. By default, it is the third tab, but you can move them. Here, you'll have access to any of the extensions posted by people around the world.

## Extensions

Extensions are what they seem: extensions for VS Code. Installing these will increase the usability, capability, and efficiency of VS Code in any dev environment. For Texas Torque, this means installing a few right off the bat.

- WPILib (Installed with WPILib)
- Extensions Pack for Java (by Microsoft), which comes with:
  - Language Support for Java(TM) by Red Hat
  - Debugger for Java
  - Maven for Java
  - Project Manager for Java
  - Test Runner for Java
- Extension Pack for Java
- Gradle for Java
- [LiveShare](/coding/how-to-use-liveshare) (optional)

While you can install additional ones, it's typically unnecessary.

## Git and source control

Sign in to Visual Studio with Github. This allows you to access Git functions in source control tab. You can explore Git integration [here](coding/github-and-repositories).

## WPILib

WPILib extension will add a red "W" hexagon shaped button in the top right of the editor pane. You can use that or use the command pallet to access all of the WPILib extensions (CTRL (CMD) + Shift + P).
