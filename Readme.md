# Backend sereis learning
## First commit: ""
- this commit is only for creating repo on github.
## second commit : project setup part -1
- to keep empty folders and subfolders tracked by git add .gitkeep file in that subfolders/folder to being tracked by remaing empty.
- .gitignore generator : to  add all the git igonore file list ( visit .gitignore generator and copy paste in .gitignore file)
-  npm i nodemon - this will add nodemon in dependency object of the package.json
- npm i -D nodemon this will add in dev dependencies object that will only work at the time of development not in productions.

## second commit : project setup part -2
- added some empty folders in src folder like controllers db middlewares modes routs utils
- npm i prettier and then -> .prettier file created

## third commit : Method 1. connect db in index file using IFFE 
- save port number , mongoDb url in .env file.
- add db name in constant.js
- install dotenv , mongoose , express
- db connection ko hamesa try catch me wrap karo
- db hamesa dusre continent me hai matlb connection me time    lagta hai to async await ka use karo..

## third commit : Method 2. connect db in another file to keep the index file clean.
- read about process.exit from doc.
- know more about connection-instance object


