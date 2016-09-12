# Description

This is a simple/barebone React.JS project that can be used as a starting point. 

I use [Semantic-UI](http://semantic-ui.com/) framework in this project
but it can be easily removed or swapped out with React-Bootstrap or Zurb Foundation. I like Semantic-UI because it is simple
to read and understand. If you haven't used Semantic-UI, please give it a try.

# How to set up and run the project

1. Clone this project: ```git clone git@github.com:divinetouch/react-barebone.git```
2. Go to the project folder/directory: ```cd react-barebone```
3. Run npm install: ```npm install```
4. Start the server: ```npm start```

# How to build the project

All the artifacts will be saved in the ```dist``` folder

- Build for devevelpment environment: ```npm run build-dev```.
- Build for staging environment: ```npm run build-staging```. 
- Build for production environment: ```npm run build-production```. This build version turn off the 
debugging and run other optimzation such as uglify and remove duplicate plugin. 

# How to run tests

This project uses [jest](https://facebook.github.io/jest/) testing framework for React.js.

- To run the test, simple run the command: ```npm test```
