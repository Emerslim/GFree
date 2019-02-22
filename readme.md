Is That Gluten Free?
==============

About
--------------

Just a demo Vue app to hit the USDA API for data and do something with the data.

To Run
--------------

Requires Node.js installed

1. Install dependences

  npm update
  
2. Build

  npm run build
  
3. Serve

  npm run serve
  
4. Navigate to http://localhost:3000

Notes
--------------

Some caveats:

- You will have to put your own API key for the USDA API in the config file before the build.
- IE9 requires that you reconfigure express to host as https, as the browser prevents cross-protocol requests.
