    "dev1": "next", # starts in dev mode.. when no server.js is availabe
    "dev1": "node server.js", # starts in dev mode.. when server.js is availabe
    "start4": "NODE_ENV=production node server.js", // sets env to prod
    "start3": "node server.js", starts server with server.js (do a build before to have an optimized build)
    "start2": "next start -p $PORT", Start on different port PORT=8081 node server.js
    "start1": "next start",
