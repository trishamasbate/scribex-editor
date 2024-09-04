# ✍🏻 ScribeX: A Text Editor

[![github-follow](https://img.shields.io/github/followers/trishamasbate?label=Follow&logoColor=purple&style=social)](https://github.com/trishamasbate)
[![license](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)

## 📃 Description:
Introducing **ScribeX**, the ultimate single-page text editor that works wherever you do—online or offline. As a Progressive Web Application (PWA), ScribeX ensures your work is always secure and accessible, even without an internet connection. Powered by IndexedDB and optimized with the idb package, it offers lightning-fast performance and reliable data storage, no matter which browser you're using. Designed to meet the highest PWA standards, ScribeX keeps your workflow uninterrupted, so you can focus on creating, anytime, anywhere.

## 📌 Table of Contents
- [✍🏻 ScribeX: A Text Editor](#-scribex-a-text-editor)
  - [📃 Description:](#-description)
  - [📌 Table of Contents](#-table-of-contents)
  - [🔎 User Story](#-user-story)
  - [✅ Acceptance Criteria](#-acceptance-criteria)
  - [💡 Usage and Installation Instructions](#-usage-and-installation-instructions)
      - [1. Clone the Repository](#1-clone-the-repository)
      - [2. Navigate to the Project Directory and Install Dependencies](#2-navigate-to-the-project-directory-and-install-dependencies)
      - [3. Build the Application](#3-build-the-application)
      - [4. Start the Development Server](#4-start-the-development-server)
      - [5. Open the Application](#5-open-the-application)
  - [🎞️ Previews and Walkthrough Videos:](#️-previews-and-walkthrough-videos)
  - [🗝️ Resources](#️-resources)
  - [❓ Questions](#-questions)
  - [🪪 License](#-license)

## 🔎 User Story
```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## ✅ Acceptance Criteria
```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application.
```

## 💡 Usage and Installation Instructions
✨ **Using Render:**

[ScribeX Website]()

✨ **Using the GitHub Repository:**


To get started with ScribeX, follow these steps:

#### 1. Clone the Repository
First, clone the ScribeX repository to your local machine:

```md
git clone https://github.com/trishamasbate/scribex-editor
```

#### 2. Navigate to the Project Directory and Install Dependencies
Once the repository is cloned, move into the project directory. Then, you will need to install the required dependencies for both the client and server:

  - Navigate to the client directory and install dependencies:

```md
cd client
npm install
```

  - Next, navigate to the server directory and install its dependencies:

```md
cd ../server
npm install
```

  - Finally, go back to the root directory and install any additional dependencies:

```md
cd ..
npm install
```

#### 3. Build the Application
To prepare the application for production, run the build script:

```md
npm run build
```

#### 4. Start the Development Server
To run the application in development mode, start the server with the following command:

```md
npm run start:dev
```

#### 5. Open the Application
After starting the server, open your web browser and navigate to:

```md
http://localhost:3000
```

## 🎞️ Previews and Walkthrough Videos:

**Preview**
![](./public/) 

**Click on the links below**
- [ScribeX Walkthrough Online]()
- [ScribeX Walkthrough on VSCode Terminal]()

## 🗝️ Resources
- Dynamic JavaScript
- License Badge: [Shields.io](https://shields.io/)
- [Starter Code](https://github.com/coding-boot-camp/cautious-meme)
- [Render](https://coding-boot-camp.github.io/full-stack/render/render-deployment-guide)
- [Express.js Version 4.17.1](https://www.npmjs.com/package/express)
- [if-env Version 1.0.4](https://www.npmjs.com/package/if-env)
- [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [idb](https://www.npmjs.com/package/idb)
- [Nodemon Version 2.0.4](https://www.npmjs.com/package/nodemon)
- [Concurrently Version 5.2.0](https://www.npmjs.com/package/concurrently)
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Visual Studio Code](https://code.visualstudio.com/)


## ❓ Questions
Contact the author with any questions!<br>
Github link: [trishamasbate](https://github.com/trishamasbate)<br>
Email: trisha.masbate@gmail.com

## 🪪 License
This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.<br />

Copyright © 2024 [TRISHA MASBATE](https://github.com/trishamasbate)
  
<hr>
<p align='center'><i>
All the best! 🤟🏻 TRISHA MASBATE
</i></p>