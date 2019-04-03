const { port } = require("./config/config");
const bootstrap = require("./server/server");

bootstrap(port);
