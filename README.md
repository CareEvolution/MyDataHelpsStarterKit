# MyDataHelps Starter Kit

This starter kit should provide a quick jumping off point to creating your own [MyDataHelps Custom Views](https://developer.mydatahelps.org/views/).

This repository uses the components from [MyDataHelpsUI](https://github.com/CareEvolution/MyDataHelpsUI), which contains many pre-built and localized components that are commonly useful in custom views.  It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Starting Development

1. Clone/copy/fork the code in this repository to your local machine
2. ```npm install```
3. Get a [participant access token](https://developer.mydatahelps.org/sdk/participant_tokens.html) - either using browser dev tools while logged in as a test participant, or by using the REST API.
4. Create a .env file with a single line:
```
REACT_APP_PARTICIPANT_ACCESS_TOKEN={your access token}
```
5. ```npm start```

You should see the default project home page appear and populate itself with data from your participant.

Navigate to other routes defined in ```src/index.js``` to see more pre-built views, or build your own!

## Exploring the Code

A handful of views are set up already that you can see referenced in MyDataHelps.js.

- Some views, such as "ConnectEhr", just include the pre-built views in MyDataHelpsUI.  
- "Home" and "DeviceData" views showcase how you can use or reorder the various MyDataHelpsUI components
- "TaskProgress" is a custom view with a custom component (inside src/components/TaskProgress) showing how you can write your own components

## Hosting your project

To be embedded inside MyDataHelps, your custom view must be hosted on the internet.  

[View the Guide on Hosting Views](https://developer.mydatahelps.org/views/hosting.html)

Once you have hosted your view, use the "App Layout" tab in your project to point to the url(s) for your view(s).