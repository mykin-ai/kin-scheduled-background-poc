## Background Task POC

This is a simple POC to demonstrate how to use background tasks expo
using `expo-task-manager` and `expo-background-fetch` to run background tasks in a react native app.

## Code example

Find the code in `App.js` file.

```javascript
const BACKGROUND_NOTIFICATIONS_TASK = 'BACKGROUND-NOTIFICATIONS-TASK';

TaskManager.defineTask(BACKGROUND_NOTIFICATIONS_TASK, async () => {
    console.log('Start');
    const test = async function () {
        console.log('async func call');
    };
    await test();
    console.log('Is this ever reached');

    return BackgroundFetch.BackgroundFetchResult.NewData;
});

BackgroundFetch.registerTaskAsync(BACKGROUND_NOTIFICATIONS_TASK, {
    minimumInterval: 10, // 15 minutes
    stopOnTerminate: false,
    startOnBoot: true,
}).then();
```

## Issue description

The background task is not running as expected in Android.
The code after `await` just suspends and nothing happened in case of `background` or `terminated` application state.
The output of the code is:
```
 LOG  Start
 LOG  async func call
```
in case of `active` (`foreground`) application state and
```
 LOG  Start
 LOG  async func call
 LOG  Is this ever reached
```

## How to Run
```
yarn install
npx expo prebuild --clean
yarn run android
```
