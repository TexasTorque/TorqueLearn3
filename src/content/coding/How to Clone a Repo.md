---
title: GitHub and Repositories
date: 2026-02-19T17:47:00.000-06:00
author: Davis Jenney
---

# Overview

A TexasTorque robot repository is structured very specifically. This, for example, is the file structure of the **TorqueTemplate**, which will remain virtually unchanged besides subsystems and file contents.

```sh
├── build.gradle
├── gradle
├── gradlew
├── gradlew.bat
├── settings.gradle
├── src
│   └── main
│       ├── deploy
│       └── java
│           └── org
│               └── texastorque
│                   ├── Input.java
│                   ├── Main.java
│                   ├── Ports.java
│                   ├── Robot.java
│                   ├── Subsystems.java
│                   ├── torquelib    <- Git Submodule
|                   ├── subsystems
|                   |   └── <SUBSYSTEM>.java
|                   └── auto
|                       └── AutoManager.java
└── vendordeps
    ├── AdvantageKit.json
    ├── PathPlannerLib-2026.1.2.json
    ├── Phoenix5-5.36.0.json
    ├── Phoenix6-26.1.0.json
    ├── REVLib.json
    ├── Studica.json
    ├── StudicaLib.json
    ├── WPILibNewCommands.json
    └── photonlib.json
```

Our repositories rely on a singular repository: *torquelib*. It is a Git submodule, or a repository that when cloned recursively will be included with the file. Think of it like the foundation of a house: you need it to start building anything substantial.

# Constructing a Repo

From here, you either have to determine if your project is a Torque project or a personal. If it's personal, make a copy of the TorqueTemplate and work from there. If it's for Torque, create a new repo in the organization and develop from that instead.

*Cloning to Personal Account*: If you need to clone to your personal account, click your profile picture, then repositories. Click "New", name it, change the template to **TorqueTemplate**. From there, clone it to your computer.

*Cloning to Texas Torque*: If you need to clone to the Texas Torque organization, go to the organization page. Scroll down to repositories and click new. Name it accordingly and set the template to **TorqueTemplate**. From there, clone it to your computer.

## Cloning Repos

From here, you should have your repo established, but only on the cloud. Navigate to the repo's page and do one of the following:
* Click "Code", copy the HTML link, and open your Terminal/Command Prompt. Run `git clone --recursive <URL>` in the folder you wish to work in. Otherwise, it will do it in the active directory, typically your C: drive.
* Download the ZIP file and extract to a desired location.

# Branching

Git utilizes what are called branches to maintain different versions. Think of them as splits in lines of development. When making any changes to a repository that is not solely developed by you, you should only push to a branch. This allows another programmer, typically the lead, to look over your changes and integrate it into the `master` or `main` branch, otherwise thought of as the primary branch.

*Assuming you are using VS Code Git*, creating a branch is easy. On the Git tab (found on the left-most panel), your directory should be connected to the repository. If it isn't, check that you are in the parent directory. On the Source Control panel (just to the right of the Git button), you'll see a list of all your changes. To create a branch, click the three dots on the repository at the top, click "Branch", then "Create Branch...". Name it, then push to that branch.

## Merging Branches

Whenever it has been deemed sufficient to merge a branch, you always merge *into* the master branch. On the GitHub page, navigate to the "Pull Requests" tab. Create a new pull request, requesting for the sub-branch to be merged into the master branch. Check that they are compatible, then approve it. 

# Commits

Commits are our way of making recorded changes to the GitHub repository, also allowing other programmers to clone/pull the repo to develop from where you left off. This allows for far faster development and should be done consistently upon making any large amounts of progress.

To do so in VS Code, navigate to the Source Control Panel. Under Changes, click the plus button to "Stage All Changes". Write a commit message to describe what you've done, then click "Commit". Ensure that you are committing to the correct branch before doing this.

# Pulls

Pulls are how you refresh your local repository with anything any other programmer has done to your branch. This allows you to build off of others without having to clone the entire repo again. To do so, navigate to the Source Control Panel and find Graphs. Click the downward arrow button for "Pull". This will download any new changes for you automatically. 

If you wish to use a clean slate from a pull, pull then discard all changes by going to Changes and clicking the undo arrow button for "Discard All Changes". This resets any missing or altered files from the newest commit to the branch you are on.

# Miscellaneous

On the off chance that *torquelib* or any of the vendordeps receive updates, run `git submodule update --remote --merge`.
