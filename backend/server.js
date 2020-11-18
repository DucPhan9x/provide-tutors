import { HttpServer, envVariables, dbConnection } from "./configs";

const { port, mongoURI } = envVariables;

import { defaultMiddleware, errorHandle } from "./middlewares";

import { authRouter, studentRouter, tutorRouter, scheduleRouter } from "./routes";

const main = async () => {
    const server = new HttpServer(port);
    server.registerMiddleware(defaultMiddleware);
    server.listen();

    dbConnection(mongoURI);
    // api
    server.registerRouter(authRouter);
    server.registerRouter(studentRouter);
    server.registerRouter(tutorRouter);
    server.registerRouter(scheduleRouter);

    server.registerMiddleware(errorHandle);
};
main();
