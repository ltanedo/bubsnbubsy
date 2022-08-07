# Host your social site on gh-pages!
> Example used is for the couple cartoonist group Bubsnbubsy. Check em out on [bubsnbubsy.art](bubsnbubsy.art)


Check out this open-source tech stack built on react-bootstrap and the gh-pages cli.    Feel free to clone the repo and launch your own social site!

&nbsp;

  | General       | Technology    |
  | ------------- | ------------- |
  | UI-Kit        | Bootstrap 4   |
  | Framework     | React         |
  | Hosting       | Github Pages  |
  | Domain        | Google Domains|
  
&nbsp;
 
<h1 align="center">Deployment Gude</h1>

&nbsp;


###   1.  Change the "homepage" key in "package.json" 
```
http://USERNAME.github.io/           <- If repo name included "USERNAME.github.io"
```
```
http://USERNAME.github.io/repo_name  <- If repo name doesn't include "USERNAME.github.io"
```

### 2. Create repo on github, or use gh cli
> please search on google for more details

### 3. Commit + push to repo 
```
# ... Code to add remote 

git add .
git commit -m "example push"
git push origin
```

### 4. Deploy react project to github pages
```
npm run deploy
```

### 5. Check it out!
> Your site  will be live from the "homepage" key in "package.json"

