# Rio Development

Cloning the repo

```
git clone https://github.com/stephy/catastrophee.git
```

Running examples
```
yarn install
```

```
yarn start
```

Storybook will be available on **http://localhost:9001**, it should open automatically for you on your browser. If it doesn't, go to that link.

Any changes to any of the stories, packages components will be loaded instantly.

## Ready to develop components?

Make sure you are using **node version >10.8.0**

All components are available in the **/packages** folder. Each folder is a different library, has its own version and can be published separately. 
We currently have 5 packages:

* **models**: gets published to *@catastrophee/models*
* **pdf**: gets published to *catastropheepdf*
* **styles**: gets published to *@catastrophee/styles*
* **typeahead**: gets published to *catastropheetypeahead*
* **uicommon**: gets published to *@catastrophee/ui*
* **media**: gets published to *catastropheemedia*
  
More information about each component is available in their own README.

## Updating and publishing components

After you improved a component, you need to publish a new version so it is available for everyone to use.
To publish, make sure you are in the root folder and run the following command:

```
lerna publish
```

It will ask you to update the version, you can update the version number and continue.
Don't forget to push your updates to master after you are done. I would like anyone to know the oficial published version by looking at the **package.json** in the repo.

Example: You just updated the **JumpMenu** compononent in the *uicommon* library. Make sure you are in **root folder** and run **lerna publish**.


**Note**: At the moment of this writing, consider Rio components a **BETA** testing library. If you are reading this note it means it is still beta. I will remove this warning once it is not beta anymore. This means that components are not all bullet proof yet and may need updates. I will try to make a note in the readme to let you know what features may be missing or what not, but the components available should give you at least the basics.

## Want to test Rio on another project without publishing Rio? 

We have a command you can run that will help you test Rio in other apps without the need to publish the component (Thank you Justin Spears!)
* **crosslink**
  In the root folder of Rio run:
  ```
  node crosslink.js -r /path/to/yourproject
  ```
You make changes in Rio, changes show up in your project :)

If the project doens't auto update, you may need to run
```
yarn build
```
inside of packages/libraryYouAreUpdating in Rio, for the changes to show in your project

*Note* Every time you run ```npm install``` or ```yarn add``` on your project you will lose the link to Rio. Just run the crosslink command again in Rio to re-link everything.

## Need a quick overview of Rio published versions?
(Thank you Justin Spears!)
In the root folder run the following command:
```
yarn reversion
```

# Updating Storybook on go/rio

In the root folder
```
yarn run build-storybook
git add storybook-static/
git commit -m "Update go/rio docs"
git push origin mater
```

*Note* when you run **yarn run build-storybook** it will create a bunch of js and d.ts files in the packages folder, don't commit those to master. Please only commit the storybook-static folder

