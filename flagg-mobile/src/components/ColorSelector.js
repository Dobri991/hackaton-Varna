import React, { useState } from 'react';
import { Button, Menu } from 'react-native-paper';
import { withTheme } from 'react-native-paper';
import { generateColor } from '../common/helpers';
import { editOutpost } from '../api/OutpostsClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../common/colors';

const ColorSelector = ({ item }) => {
  const [visibile, setVisible] = useState(false);
  const openDropdown = () => setVisible(true);
  const closeDropdown = () => setVisible(false);
  const [selectedFlag, setSelectedFlag] = useState(item.flag);

  const dropdownButton = (
    <Button
      onPress={openDropdown}
      style={{
        backgroundColor: generateColor(selectedFlag),
        marginRight: 15,
        width: 50,
        height: 40,
        borderRadius: 50
      }}></Button>
  );

  const edit = async (color) => {
    const token = await AsyncStorage.getItem('token');

    const response = await editOutpost(token, {
      outpost_id: item.outpost_id,
      flag: color
    });
    if (response.data) {
      setSelectedFlag(color);
    }
  };

  const getMenuItems = () => {
    const menuItems = [];
    for (const [key, value] of Object.entries(colors)) {
      menuItems.push(
        <Menu.Item
          style={{ backgroundColor: value }}
          onPress={() => {
            edit(key);
            closeDropdown();
          }}
          title=""
          key={key}
        />
      );
    }
    return menuItems;
  };

  return (
    <Menu visible={visibile} onDismiss={closeDropdown} anchor={dropdownButton}>
      {getMenuItems().map((menuItem) => {
        return menuItem;
      })}
    </Menu>
  );
};

export default withTheme(ColorSelector);
