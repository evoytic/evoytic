
# Evoytic, Inc.

Build using [gatsby](https://www.gatsbyjs.com/)

#### Run Locally


- Clone
- Install packages ```npm i```
    * install [node](https://nodejs.org/en/)

- Develop ```npm run develop``` or ```gatsby develop```
    * install [Gatsby CLI](https://www.gatsbyjs.com/docs/how-to/local-development/), if you want to develop using ```gatsby```
- Browse ```http://localhost:8000```

#### Deploy on ```gh-pages```
- Create new empty branch ```gh-pages``` (important)
```
    # create branch
    git checkout --orphan gh-pages

    # remove files
    git rm -rf .

    # commit
    git commit --allow-empty -m "root commit"

    # push
    git push origin gh-pages

```
- Create ```CNAME``` and write ```your domain``` inside ```public/static``` folder
```
    # example
    evoytic.com
```
- Deploy ```npm run deploy```


Write us an email - hello[at]evoytic.com
