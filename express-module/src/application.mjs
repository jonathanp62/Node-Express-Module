/**
 * (#)application.mjs   1.0.0   09/13/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
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
