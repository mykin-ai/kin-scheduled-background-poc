import { StyleSheet, Text, View } from 'react-native';
import * as TaskManager from "expo-task-manager";
import * as BackgroundFetch from "expo-background-fetch";


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

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello From POC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
