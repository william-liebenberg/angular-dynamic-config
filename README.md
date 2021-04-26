# Angular Dynamic Config

This sample shows how to load application configuration from a `config.json` file at run-time. This allows you to build the application once, and deploy multiple times to different environments that require individual configurations (api endpoints, flags, etc.).

Once you have run `ng build --prod` you can keep the `dist` folder output as an artifact in your DevOps pipeline. When releasing you can replace the `config.json` file with whatever values are appropriate for that environment.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Testing your production build

You can test your production built application by installing `http-server`

To install `http-server`
``` 
npm i -g http-server
```

Once installed, you can `cd` into the `dist/angular-dynamic-config` folder and run `http-server` from the command line.

Example output:

```
Starting up http-server, serving ./
Available on:
  http://192.168.0.25:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```

Now you can navigate to your app using one of the displayed URLs.

To test your runtime config, make changes to the `assets/config.json` file and refresh the page (you may have to force refresh) to see the config changes. 

DONE!
