import {
    HttpServer,
    envVariables,
    dbConnection
} from "./configs";

const { port, mongoURI } = envVariables;

import {
    defaultMiddleware,
    errorHandle
} from "./middlewares";

const main = async() => {
    const server = new HttpServer(port);
    server.registerMiddleware(defaultMiddleware);
    server.listen();

    dbConnection(mongoURI);
    // api


    server.registerMiddleware(errorHandle);

};
main();