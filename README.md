
# Evoytic, Inc.

Build using [gatsby](https://www.gatsbyjs.com/)

### Run Locally

**Required** - [node](https://nodejs.org/en/)

- Clone
- Install packages ```npm i```
- Develop ```npm run develop``` or ```gatsby develop```
    * install [Gatsby CLI](https://www.gatsbyjs.com/docs/how-to/local-development/), if you want to develop using ```gatsby```
- Browse ```http://localhost:8000```

### Deploy on ```gh-pages```
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
- Make update on ```package.json```
    * Remove ```echo 'your-domain-name' > ./public/CNAME &&```, If not using **custom domain**

    * Change ```DOMAIN-NAME```, If using custom domain

    ```
    "deploy": "gatsby build --prefix-paths && echo 'DOMAIN-NAME' > ./public/CNAME && gh-pages -d public -b gh-pages",
    ```

- Deploy ```npm run deploy```

#
Write us an email for any help - contact[at]evoytic.com
