# A No Framework Web App

A web application that doesn't use a JavaScript framework.

## Synopsis

Not being a fan of frameworks (I often find their limitations too...limiting...) I wanted to learn how to create web applications without them, e.g., "vanilla Javascript." This project is intended to be an "evergreen" repository - providing a constant demonstration of my learning and an opportunity to do so. This application was created using the video _JavaScript BookList App | No Frameworks_ from the channel Traversy Media which you can find [here](https://youtu.be/JaMCxVWtW58) (as well as in the Credits and Resources section of this document).

## Running the App

This application can be seen [here](https://kyleegland.github.io/no_framework_web_app/), served via [GitHub Pages](https://pages.github.com/). Should you want to edit the code, the site can be served via any simple server program, application, or extension. I use, and would recommend, editing with [Visual Studio Code](https://code.visualstudio.com/) which has a plethora of extensions, including [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), that can serve this project locally.

Alternatively, Python 3 can be used to invoke a server from the command line that serves up a locally cloned version of this project as well:

`user@machine:~/project/dir/no_framework_web_app# python -m http.server -p 8000 --directory ./`

*NOTE: This will bind to all interfaces, if you want to serve it to local host only add `--bind 127.0.0.1` to the command.*

## Credits and Resources

- [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
- [GitHub Pages](https://pages.github.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
