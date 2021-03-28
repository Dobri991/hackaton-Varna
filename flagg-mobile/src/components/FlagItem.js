import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { withTheme } from 'react-native-paper';
import ColorSelector from './ColorSelector';

const FlagItem = ({ key, item }) => {
  return (
    <Surface style={styles.surface}>
      <View style={styles.leftContainer}>
        <Text style={{ paddingLeft: 15 }} id={item.outpost_id}>
          {item.name}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <ColorSelector item={item} />
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    elevation: 4,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default withTheme(FlagItem);
