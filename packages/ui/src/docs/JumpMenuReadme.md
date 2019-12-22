## Example JumpMenu

```
import React from 'React';
import { JumpMenu } from '@catastrophee/ui";

export const MyComponent = () => {
  const options = [
    {
      id: "item1",
      label: "Stranger Things",
      action: () => {
        console.log("item 1");
      }
    },
    {
      id: "item2",
      label: "Good Girls",
      action: () => {
        console.log("item 2");
      }
    }
  ];
  return (
    <JumpMenu
      id={"unique-id"}
      options={options}
      selectedId={undefined}
      width={346}
    />
  );
}

```

## Example JumpMenu

```
import React from 'React';
import { JumpMenu } from '@catastrophee/ui";

export const MyComponent = () => {
    const options = [
      {
        id: "item1",
        label: "Stranger Things",
        action: () => {
          console.log("item 1");
        }
      },
      {
        id: "item2",
        label: "Good Girls",
        action: () => {
          console.log("item 2");
        }
      }
    ];
    return (
      <JumpMenu
        id={"unique-id"}
        options={options}
        selectedId={undefined}
        width={346}
        style={{
          list: {
            overflow: "hide"
          }
        }}
      />
    );
}

```