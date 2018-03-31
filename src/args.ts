// Those are examples of arguments you could write.
// Change the file to your convenience.


/// <reference path="../custom_typings/command-line-args.d.ts" />
import { ArgDescriptor } from "command-line-args";

export const args: ArgDescriptor[] = [
    {
        name: 'atom',
        alias: 'a',
        description: 'The name of an atom.',
        type: String,
        defaultValue: 'hydrogen'
    },
    {
        name: 'directory',
        description: 'The directory where you want to send your atom',
        type: String,
        defaultValue: './here',
        defaultOption: true
    }
];