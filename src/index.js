import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import Home from './views/Home';
import Notifications from './views/Notifications';
import SurveyTasks from './views/SurveyTasks';
import Fitbit from './views/Fitbit';
import DeviceData from './views/DeviceData';
import ConnectEhr from './views/ConnectEhr';
import ExternalAccounts from "./views/ExternalAccounts";
import TaskProgress from './components/TaskProgress/TaskProgress';

if (window.location.hostname === "localhost") {
	window.MyDataHelps.setParticipantAccessToken({ "access_token": process.env.REACT_APP_PARTICIPANT_ACCESS_TOKEN, "expires_in": 21600, "token_type": "Bearer" }, "https://mydatahelps.org/");
}

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home/" element={<Home />} />
				<Route path="/notifications/" element={<Notifications />} />
				<Route path="/surveytasks/" element={<SurveyTasks />} />
				<Route path="/fitbit/" element={<Fitbit />} />
				<Route path="/devicedata/" element={<DeviceData />} />
				<Route path="/connectehr/" element={<ConnectEhr />} />
				<Route path="/externalaccounts/" element={<ExternalAccounts />} />
				<Route path="/taskprogress/" element={<TaskProgress />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);