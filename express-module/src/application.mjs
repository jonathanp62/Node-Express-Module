/**
 * (#)application.mjs   1.0.0   09/13/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { config } from '../config.mjs';
import { ExpressModule } from "./express-module.mjs";

/**
 * The application class.
 */
class Application {
    /**
     * The configuration.
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
        new ExpressModule(this._config).run();
    }
}

export { Application };
