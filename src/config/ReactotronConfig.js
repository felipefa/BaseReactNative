import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const host = '10.10.1.36';
  const tron = Reactotron.configure({ host })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
