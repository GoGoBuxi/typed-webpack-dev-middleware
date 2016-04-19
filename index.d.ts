// Copyright (c) 2016
//   ____        ____       ____             _
//  / ___| ___  / ___| ___ | __ ) _   ___  _(_)
// | |  _ / _ \| |  _ / _ \|  _ \| | | \ \/ / |
// | |_| | (_) | |_| | (_) | |_) | |_| |>  <| |
//  \____|\___/ \____|\___/|____/ \__,_/_/\_\_|
//
// Licensed under MIT.

import * as webpack from 'webpack';
import * as express from 'express';

declare function webpackDevMiddleware(compiler: webpack.compiler.Compiler, options?: webpackDevMiddleware.WebpackDevMiddlewareOptions): express.RequestHandler;

declare namespace webpackDevMiddleware {
    export interface WebpackDevMiddlewareOptions {
        watchOptions?: { aggregateTimeout?: number; };
        watchDelay?: number;
        stats?: { context?: string; };
        lazy?: boolean;
        filename?: string|RegExp;
        quiet?: boolean;
        noInfo?: boolean;
        publicPath?: string;
        headers?: {};
    }
}
export = webpackDevMiddleware;