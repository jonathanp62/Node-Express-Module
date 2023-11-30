/**
 * (#)express-module.mjs    1.0.0   09/13/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

import { config } from '../config.mjs';

import expressPackage from 'express';

/**
 * The express module class.
 */
class ExpressModule {
    /**
     * The constructor.
     *
     * @param   {config}    config
     */
    constructor(config) {
        this._config = config;
    }

    /**
     * The run method.
     */
    run() {
        const express = expressPackage;
        const app = express();

        app.get("/", (request, response) => {
            response.send(this._config.htmlContent.root);
        });

        app.get("/about", (request, response) => {
            response.send(this._config.htmlContent.about);
        });

        app.get("/stop", (request, response) => {
            server.close();
        });

        const server = app.listen((this._config.port), () => {
            console.log(`Listening on the port ${this._config.port}...`);
        });
    }
}

export { ExpressModule };
