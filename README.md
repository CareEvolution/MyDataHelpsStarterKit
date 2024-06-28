# MyDataHelps Starter Kit

This starter kit should provide a quick jumping off point to creating your own [MyDataHelps Custom Views](https://developer.mydatahelps.org/views/).

This repository uses the components from [MyDataHelpsUI](https://github.com/CareEvolution/MyDataHelpsUI), which contains many pre-built and localized React components that are commonly useful in custom views.  It is bootstrapped with [Vite](https://vitejs.dev).

## Development Workflow

You will normally start by developing and testing your custom view in a local environment.

1. Clone/fork the code in this repository to your local machine.
2. Run `npm install`.
3. Get a participant access token - see below.
4. Create a file named `.env.development` with a single line:
```
VITE_PARTICIPANT_ACCESS_TOKEN=your_access_token
```
5. Run `npm run dev`.

You should see the default project home page appear and populate itself with data from your participant. ```src/main.tsx``` contains other routes. Navigate to them in your browser to see other pre-build views in action.

You can use or edit one of the existing views, or build your own using [MyDataHelpsUI](https://github.com/CareEvolution/MyDataHelpsUI) and/or the [MyDataHelps SDK](https://developer.mydatahelps.org/sdk/)!

### Participant Access Tokens

When running in development mode, you must manually configure an access token so the custom view can get and show participant data. This simulates a participant accessing the view through MyDataHelps.

First, identify which participant you want to test with. Ideally this will be a fake participant from your test/dry-run project. 

There are several ways to obtain an access token for the identified participant. Choose any of the following methods:

* Log in to mydatahelps.org using that participant. Use the browser developer tools to examine the request to `https://mydatahelps.org/identityserver/connect/token`. The access token will be in the response.
* Use the [MyDataHelps REST API NodeJS Quickstart](https://github.com/CareEvolution/mydatahelps-rest-api-node-quickstart) or [MyDataHelps REST API Python Quickstart](https://github.com/CareEvolution/mydatahelps-rest-api-python-quickstart) apps to generate a token for your test participant, You will need to edit the code to specify the participant identifier and the necessary scope: `api`.
* Use the [MyDataHelps REST API](https://developer.mydatahelps.org/embeddables/participant_tokens.html) to generate a token for your test participant. Request the `api` scope.

Once you have the token, store it in the `.env.development` file as explained above. 

**IMPORTANT NOTES:** 

1. Take care not to commit the token to source control.
2. Use the `.env.development` file (not `.env`) so the token is not deployed in production.
2. The starter kit will only use the token from the environment file when running in development mode. When the custom view is displayed within MyDataHelps, the system will automatically provide a token for the current participant.

## Production Workflow

Your custom view must be hosted on the internet before MyDataHelps can use it. We recommend using a CI/CD process to automatically build and deploy your view. See the [hosting guide](https://developer.mydatahelps.org/views/hosting.html) for recommendations and best practices. 

1. Use `npm run build` to build the view for production, then deploy it to your chosen host.
2. Once your view is deployed, create a new tab in your project app layout and point it to your custom view URL. See [Using Views](https://developer.mydatahelps.org/views/#use-view) for details.
3. Before you can use your custom view in a production project, it will have to pass a security review. [Learn about the security review process](https://developer.mydatahelps.org/views/review.html).

## Exploring the Code

A handful of views have been set up already to walk you through various use cases that you may encounter when building your custom view.

#### I want to use a pre-built view from MyDataHelpsUI.
The "ConnectEhr" view just includes pre-built views from MyDataHelpsUI

#### I want to reorder the various MyDataHelpsUI components to make my own view:
"Home" and "DeviceData" views show you how to import specific components into your view

#### I want to build my own custom components and views
"TaskProgress" is a custom view with a custom component (inside src/components/TaskProgress)

#### I want to edit one of the MyDataHelpsUI components:
To edit a component, you may wish to build a new custom component that models the logic used to build the [original component in MyDataHelpsUI](https://github.com/CareEvolution/MyDataHelpsUI/tree/main/src/components)

