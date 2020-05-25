# vscodeangularwebapief
Writing code using ef cf, webapi, angular

Everything in this project is done using vscode

How repository created from command line

created repostiroty on github.com with name vscodeangularwebapief

git init

git add .

git commit -am "first changes"

git config --global user.name "jitups"

git config --global user.password "XXXXX"

git remote set-url origin https://github.com/jitups/vscodeangularwebapief.git

git push -f origin master


login: admin@admin.com / Test@123

To remove unwanted file folder from git repository
first configure them to .gitgnore file
then use following command to untrack them from repository

git rm -r --cached ./node_modules 

git rm -r --cached *.cache

git rm -r --cached ./obj 
