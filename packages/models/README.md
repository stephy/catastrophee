# Getting started with Catatrophee Models

## Install dependencies

```
npm install -s @catastrophee/models
```

or

```
yarn add @catastrophee/models
```

Catastrophee models have mobx as a dependency, mobx should be installed automatically when you install @catastrophee/models, but in case it doesn't, please install mobx.

```
npm install --save mobx
```

# How to use it

You can use Catastrophee models in two different ways.

1. With an already existing model or any other javascript code, including node when it is not browser dependant\*
2. On your component

\*_Browser dependant models can attach event listeners or need the window object, when you are using node, most likely those are not going to be available_

## With existing model

Simply import the model of your choice and use it as you would any other model.

## On your components

### Make your component observable

In order for your component to render with the lastet synchronized changes, it needs to be active listening when data changes on your model. In order for that to happen you need to wrap your component in an observer. The observer helper is available from 'mobx-react' (note: not mobx)

### Install mobx-react

```
npm install --save mobx-react
```

On your component, import mobx-react and wrap the component on a observer

### For class based components

```js
import { observer } from 'mobx-react';

@observer
export class MyComponent extends React.Component {
  ...
}
```

### For functional components

```js
import { observer } from 'mobx-react';

export const MyComponent = observer(({ props }) => {
  ...
})
```
