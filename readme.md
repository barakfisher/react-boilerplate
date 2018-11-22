# Git commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit -m - Creates a new commit with files from stagin area
git log - View recent commits
git commit -am - if there are no new files we dont need to add  
    everything just use the -am flag

#SSH
ls - will show all files in the directory
-a - will show also the hidden files
~/ - will bring us to the root 
ls -a ~/.ssh - will show all exsisting ssh files

google this : connecting github with ssh 
-t - specify the type
rsa - the type we are going to use
-b - bits 4096
-C - comment our email address "barakfisher@gmail.com"
ssh-keygen -t rsa -b 4096 -C "barakfisher@gmail.com"

#using SSH agent
eval "$(ssh-agent -s)" - will check if the ssh agent is running else wil make it run
ssh-add ~/.ssh/id_rsa - adding the private key file (our privaste id )
adding the key to your clipboard - take command from :
    paste the command from the following to the cmd
    https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/
    go to your github profile page -> edit profile -> SSH and GPG key
    add the new key title  (recomanded to write the os name)
    paste the key in the text area
Test if its working :
ssh -T git@github.com

#Pushing to Github
copy the ssh link from the repo page
git remote add origin (paste the link)
<!-- -u - will create the connection btween local and remotre (use once) -->
git push -u origin master

#Going to Production - setting up the webpack
visit webpack.js.org/guides/production
on package.json create a new build script for production env
on webpack.config we should take the object and return it from the function - will give us access to env    
    varieble.
set a different devtool for production using a different kind of source map

#Webpack style - by extract-text-webpack-plugin
install the plugin:
    yarn add extract-text-webpack-plugin@3.0.0
on webpack.config:
    1. import (require) the plugin
    2. use it whenever you see .css or .scss file
    3. add the plugin array
    4. using the style file with a link tag on index.html

#setting up source map for css
1. on webpack change the development devtool to be 'inline-source-mapp'
