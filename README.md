# static-koa-server

a package can specify a folder as a local static resource server from the command line 

# Getting started

-   Install node.js
-   Install npm package globally npm -g install static-koa-server
-   Go to the folder you want to serve which has html file in dist
-   Run the server static-server

# Options

```markdown
-p, the port to listen to for incoming HTTP connections,
-o, open browser
-d, specifies a folder as the root path of the static resource server
```



# Configuration File

You can create a file named static.config.js in the current directory where the command is executed to gain more capabilities through configuration information.

For example, you can use the `responseHeaders` property to configure the response headers of a static resource server.

```js
module.exports = {
    responseHeaders: {
        'Cache-Control': 'max-age=2000'
    }
}
```





