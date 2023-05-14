# Text Editor Web Application
This is a web-based text editor application with client-server architecture, built using modern web technologies.

## Installation and Setup
Clone the repository to your local machine.
Install the necessary dependencies by running npm install from the root directory.
Start the application by running npm run start from the root directory.

## Building the Client Code
The client code is written in JavaScript and bundled using webpack. To build the client code, run npm run build from the root directory. This will generate a dist folder containing the bundled JavaScript files.

## HTML, Service Worker, and Manifest File Generation
In addition to bundling the client code, running npm run build will also generate an HTML file, service worker, and manifest file using webpack plugins.

## Next-Gen JavaScript
The application uses next-gen JavaScript features to provide a modern user experience. Despite using modern features, the text editor still functions without errors in the browser.

## Install Button and Desktop Icon
The application has an Install button that allows users to download the web application as an icon on their desktop.

## Service Worker
The application uses workbox to register a service worker. When the application is loaded, the static assets are pre-cached, along with subsequent pages and static assets.

## Deployment
The application is deployed to Heroku using proper build scripts for a webpack application.