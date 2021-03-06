# Catastrophee Development

Cloning the repo

Running examples

Then run

```
yarn install
```

```
yarn start
```

Storybook will be available on **http://localhost:9001**, it should open automatically for you on your browser. If it doesn't, go to that link.

Any changes to any of the stories, packages components will be loaded instantly.

## Ready to develop components?

All components are available in the **/packages** folder. Each folder is a different library, has its own version and can be published separately.
We currently have 3 packages:

- **models**: gets published to _@catastrophee/models_
- **styles**: gets published to _@catastrophee/styles_
- **uicommon**: gets published to _@catastrophee/ui_

More information about each component is available in their own README.

## Updating and publishing components

After you improved a component, you need to publish a new version so it is available for everyone to use.
To publish, make sure you are in the root folder and run the following command:

```
lerna publish
```

It will ask you to update the version, you can update the version number and continue.
Don't forget to push your updates to master after you are done. I would like anyone to know the oficial published version by looking at the **package.json** in the repo.

Example: You just updated the **JumpMenu** compononent in the _uicommon_ library. Make sure you are in **root folder** and run **lerna publish**.

**Note**: At the moment of this writing, consider Catastrophee components a **BETA** testing library. If you are reading this note it means it is still beta. I will remove this warning once it is not beta anymore. This means that components are not all bullet proof yet and may need updates. I will try to make a note in the readme to let you know what features may be missing or what not, but the components available should give you at least the basics.

# Updating Storybook

In the root folder

```
yarn run build-storybook
git add storybook-static/
git commit -m "Update docs"
git push origin mater
```

_Note_ when you run **yarn run build-storybook** it will create a bunch of js and d.ts files in the packages folder, don't commit those to master. Please only commit the storybook-static folder

```

```
