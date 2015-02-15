Node.js webapp protected by the connect-cas client (https://github.com/AceMetrix/connect-cas)
==

Demo using the connect-cas client (v1.4.3) to protect a Express web application (`npm install express`, `npm install express-session`, `npm install connect-cas`).

Use **npm start** to start the webapp on **http://localhost:3000**. The url 'protected/index' is protected and should trigger a CAS authentication.

Most of the configuration is defined in the **app.js** file.

A specific logout application url is available at: http://localhost:3000/logout.

Run your CAS server on http://localhost:8888/cas.
