const config = require("./config/config");
const bootstrap = require("./server/server");

bootstrap(config.PORT);
