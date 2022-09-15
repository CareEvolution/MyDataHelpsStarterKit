# MyDataHelps Starter Kit

This starter kit should provide a quick jumping off point to creating your own [MyDataHelps Custom Views](https://developer.mydatahelps.org/views/).

This repository uses the components from [MyDataHelpsUI](https://github.com/CareEvolution/MyDataHelpsUI), which contains many pre-built and localized components that are commonly useful in custom views.  It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Starting Development

1. Clone/copy/fork the code in this repository to your local machine
2. ```npm install```
3. Get a [participant access token](https://developer.mydatahelps.org/sdk/participant_tokens.html) - either using browser dev tools while logged in as a test participant at mydatahelps.org, or by using the REST API.
    - Hint: if using browser dev tools, examine the response on the request to https://mydatahelps.org/identityserver/connect/token.
4. Create a .env file with a single line:
```
REACT_APP_PARTICIPANT_ACCESS_TOKEN={your access token}
```
5. ```npm start```

You should see the default project home page appear and populate itself with data from your participant

Navigate to other routes defined in ```src/index.js``` to see more pre-built views, edit existing views, or build your own!

**Important:** *These views are static, based on your participant's data at the time the page is loaded. To interact with your view, follow the instructions in [Hosting your project](#hosting-your-project) to embed your view within MyDataHelps.* 

## Exploring the Code

A handful of views have been set up already to walk you through various use cases that you may encounter when building your custom view.

#### I want to use a pre-built view from MyDataHelpsUI:
"ConnectEhr" 

#### I want to reorder the various MyDataHelpsUI components to make my own view:
- "Home" and "DeviceData" views 

#### I want to build my own custom components and views
- "TaskProgress" is a custom view with a custom component (inside src/components/TaskProgress)

## Hosting your project

To be embedded inside MyDataHelps, your custom view must be hosted on the internet.  

[View the Guide on Hosting Views](https://developer.mydatahelps.org/views/hosting.html)

Once you have hosted your view, use the "App Layout" tab in your project to point to the url(s) for your view(s).