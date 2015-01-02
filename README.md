Node.js webapp protected by the connect-cas client (https://github.com/AceMetrix/connect-cas)
==

![English](https://www.casinthecloud.com/img/other/flag_en.png)

Demo using the connect-cas client (v1.4.3) to protect a Express web application (`npm install express`, `npm install express-session`, `npm install connect-cas`).

Use **npm start** to start the webapp on **http://localhost:3000**. The url 'protected/index' is protected and should trigger a CAS authentication.

Most of the configuration is defined in the **app.js** file.

Use your own CAS in the cloud server with the following option:

- 'Authorize redirection urls after logout'

and the following service:

- Service url: 'http://localhost:3000/protected/*' as an 'Ant pattern'
- 'Call from the browser to the specific application url for logout: http://localhost:3000/logout'.

==

![Français](https://www.casinthecloud.com/img/other/flag_fr.png)

Démo utilisant le client connect-cas (v1.4.3) pour protéger une application web Express (`npm install express`, `npm install express-session`, `npm install connect-cas`).

Utilisez **npm start** pour lancer le site web sur **http://localhost:3000**. L'url 'protected/index' est protégée et déclenche une authentification CAS.

L'essentiel de la configuration est défini dans le fichier **app.js**.

Utilisez votre propre serveur CAS in the cloud avec l'option :

- 'Autoriser les urls de redirection après déconnexion'

et le service suivant :

- Url de service : 'http://localhost:3000/protected/*' en tant que 'Expression Ant'
- 'Appel depuis le navigateur de l'url applicative spécifique pour la déconnexion : http://localhost:3000/logout'.
