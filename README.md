![evoytic com_ (1)](https://user-images.githubusercontent.com/7526910/119469396-077f5a80-bd67-11eb-83c8-c1c9941d5d5b.png)


## Prerequisite
- [x] [Node](https://nodejs.org/en/)
- [x] [Gatsby](https://www.gatsbyjs.com/)

## Extra Packages / Except Gatsby Stater
- [x] [Styled Components](https://styled-components.com/)
- [x] [Gh-pages](https://github.com/tschaub/gh-pages)
- [x] [Google gtag](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/)
- [x] [Webfonts](https://www.gatsbyjs.com/plugins/gatsby-plugin-webfonts/)
 

## Run locally

- Clone project in your local machine
```
git clone https://github.com/evoytic/evoytic.git evoytic
```

- Install packages ```npm i```

- Run and browse project
```
npm run build && npm run serve
```
- Open link in browser http://localhost:9000

## Modify site
- Update package file
   * Update name, description, version and author
   * Update repo / bug URL & add to your repo

   <br/>

   ``` 
   rm -rf .git
   ```
   #### Create a new repository on the command line
   ```33
   git init
   git add --all
   git commit -m "initialization repo"
   git remote add origin https://github.com/evoytic/evoytic.git
   git push -u origin main
   ``` 
   
   #### Push an existing repository from the command line
   ``` 
   git remote add origin https://github.com/evoytic/evoytic.git
   git push -u origin main
   ```
   

   |Pages|Components|
   |-|-|
   |Home ```index.js```|Header ```header.js```|
   ||Footer ```footer.js```|
   ||Banner ```banner.js```|
   ||About ```about.js```|
   ||Services ```services.js```|
   ||Product ```product.js```|
   
- Run ```npm run develop``` or ```gatsby develop```

- Browse ```http://localhost:8000```

## Deploy on ```gh-pages```
- Create new empty branch ```gh-pages``` ***important***
 
   #### create branch, remove files, commit & push
   ```
    git checkout --orphan gh-pages
    git rm -rf .
    git commit --allow-empty -m "root commit"
    git push origin gh-pages
   ```
- Update script on ```package.json```

   * Remove code ~~```echo 'DOMAIN-NAME' > ./public/CNAME &&```~~, If not using **custom domain**
   * Change ```DOMAIN-NAME```, If using custom domain

- Deploy ```npm run deploy```

<hr/>

### :+1: good to go

<a href="https://www.buymeacoffee.com/saroz" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

<hr/>

## Support ?

Write us an email for any help - contact[at]evoytic.com


###### :zap: Video by <a href="https://pixabay.com/users/artdio2020-8194567/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=46962">Art Dio</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=46962">Pixabay</a>
