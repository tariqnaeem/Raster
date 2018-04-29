# BonesUi

1. Install Yarn on your host (not guest container) - https://yarnpkg.com/lang/en/docs/install/
2. Create a new BonesUi module by issuing the following command from the application root

```
$ ./bones ui MyNewModule
```
3. Install all the node dependencies

```
$ cd modules/MyNewModuleUi
$ yarn install
```

4. Ensure your webpack API proxy is configured correctly to point to your API endpoint. It will default to proxying 
traffic to '/my-entity' to localhost:3001/my-entity. Depending on where your API is being served from, you may need to 
set it to that instead. Locate the proxy setting in MyNewModule/package.json and change it accordingly:

```
"proxy": "http://localhost:3001"
```

Alternatively, if you are running the iPACT application in a container with virtualbox, consider adding a portforwarding
rule from port 3001 to port 80 of your docker container.

4. Login to iPACT (incase your API endpoint is locked down) and ensure your user has has access to the API endpoint. By
default, the endpoint is 'Read' protected with '/my-entity/fetchall'.
5. Start the webpack dev server on port 3000

```
$ yarn start
```

This should also launch your default browser and boot the application.
6. To create production CSS and JS bundles

```
$ yarn build
```
7. To test the current API


## Todo
- Authenticate with dredd hooks - need to authenticate and collect the cookie in the cookiejar
