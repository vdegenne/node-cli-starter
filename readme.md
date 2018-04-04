# node-cli-starter

A starter for making a cli type program in NodeJs.


## Installation

```bash
$ git clone https://github.com/vdegenne/node-cli-starter.git
```

But it's not recommended because this will fetch the last state of the repo, hence it could be buggy if some changes occur. Instead download from the *release section* of github or use `github-fetch-starter` ([click here for more details](https://github.com/vdegenne/github-fetch-starter).git). `github-fetch-starter` lets you download a specific release and install it on your filesystem in just a **\*snap\***

```bash
github-fetch-starter --user vdegenne --app-name myapp node-cli-starter
# or
github-fetch-starter -u vdegenne -n myapp node-cli-starter # for short
```

*It will create a directory `myapp` from your cwd with all the starter files inside*


## Post-installation

- After the download. You have to install the dependencies (not included for making the release small).

```bash
$ yarn install
```

- Replace all the uppercase placeholders in the `package.json` and rename the file `RENAME` under `./bin` to the name of your app. Search for all `RENAME` occurence in the project and replace with the name you've just set.
- Change `tsconfig.json` to your needs.
- You can start to modify the tests (under `\src\test`) and the sources (under `\src`). Small chunks have been left intentionnally for you to have an idea how to write a test and start the code.

Once you are ready to try some tests, run `yarn test:watch` in a separate command line. This will respond to any further changes you make in the `src` directory, and run `tsc` and `mocha` subsequently.


## Run the application

- the starter is using the bin file under `./bin` to invoke the program. You can run using `./bin/<app-name>` (replace `<app-name>` with the name you replaced in the **Post-installation** section). The file is configure to run `node` as the invoker. If your system struggles to pick `node` as the launcher, it may be having trouble to understand the *shebang* in the file. You can just run using `node ./bin/<app-name>`.

*(Note: if you are making a `script` in `package.json` to launch your application, write the arguments directly in the command and not when you call `yarn run <script-name>` because the process won't pass the arguments to the underlying call. For instance if you have a script `"start": "./bin/<app-name>"`, running `yarn run start --arg1=value` is same as just running `yarn run start`.)*


Enjoy, if you have any question, feel free to contact me <vdegenne@gmail.com>
