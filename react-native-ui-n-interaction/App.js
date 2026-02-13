import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LotsOfStyles from './components/StyleSheet';
import FixedDimensionsBasics from './components/FixedDimensions';
import FlexDimensionsBasics from './components/FlexDimensions';
import PercentageDimensionsBasics from './components/PercentageDimensions';

export default function App() {
  return (
    <View>
      {/* <LotsOfStyles /> */}
      {/* <FixedDimensionsBasics /> */}
      {/* <FlexDimensionsBasics /> */}
      <PercentageDimensionsBasics />
    </View>
  );
}


