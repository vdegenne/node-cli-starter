/// <reference path="../custom_typings/command-line-args.d.ts" />
import { ArgDescriptor } from "command-line-args";

import { args } from "./args";

import * as commandLineArgs from "command-line-args";
import * as commandLineUsage from "command-line-usage";


export async function run() {
    const argsWithHelp: ArgDescriptor[] = args.concat({
        name: 'help',
        description: 'Shows this help message',
        type: Boolean
    });

    let cliOptions: any;

    try {
        cliOptions = commandLineArgs(args);
    } catch(e) {
        printUsage(argsWithHelp);
        return;
    }
    
    if (cliOptions.help) {
        printUsage(cliOptions);
        return;
    }

    /**
     * Start your program HERE
     */


}



function printUsage(options: any): void {
    const usage = commandLineUsage([{
        header: 'HEADER',
        title: 'TITLE',
        optionList: options
    }]);
    console.log(usage);
}