---
title: How to use Liveshare
date: 2026-02-18T17:14:00.000-06:00
author: Davis Jenney
---

# How to use LiveShare

LiveShare is a real-time coding collaboration software developed by Microsoft to use in Visual Studio Code. LiveShare is very handy when multiple people need to work on a project simultaneously. Everyone on the LiveShare can read and edit code while seeing what others are working on.

## Install
To get started, install the LiveShare by Microsoft extension in the Visual Studio Extensions. After you install, the Live Share extension icon should pop up on your main panel.

## Start a LiveShare
To open a LiveShare, open the project you'd like to work on and go to the LiveShare extension on your VSCode panel (left-most panel). Hit share (read/write), and a link will automatically be copied to your keyboard. You can either send the link directly to your collaborators through various services, such as Slack. 

### Joining a LiveShare
Once you have a link, follow it to the web version of VS Code. If this is the first time you have done so, it should prompt you to either continue on the Web Version or open/install VS Code. Open VS Code. If prompted on an account, you can remain "anonymous", or you can sign into an account to be more easily recognizable (recommended if working with multiple collaborators).

### Closing a LiveShare
You can either:
* Close VS Code
* On the LiveShare Panel, click the "Stop LiveShare" in the top right corner.

## Notes Regarding LiveShare
* If you aren't prompted to leave the web version, try clearing your cookies. This should reset the site and prompt you again.
* **We keep disconnecting during robot development!** This is because, to deploy to a robot, you must disconnect from the internet and instead connect to the robot Wi-Fi. In this case, it's better to deploy from a different device so that you do not need to restart the LiveShare after every deploy.
