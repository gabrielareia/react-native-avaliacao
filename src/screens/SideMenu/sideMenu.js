import { FlatList, TouchableOpacity } from "react-native";
import {
  SideMenuItem,
  SideMenuItemText,
  SideMenu,
  LightbulbTheme,
} from "../../styles/styles";

const SideMenuScreen = (props) => {
  const {
    navigation,
  } = props;

  const menuItems = [
    { title: 'Home', key: 1, redirect: 'Home' },
    { title: 'Games', key: 2, redirect: 'Games' },
    { title: 'About', key: 3, redirect: 'About' },
  ];

  return (
    <SideMenu>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.redirect)}
          >
            <SideMenuItem>
              <SideMenuItemText>
                {item.title}
              </SideMenuItemText>
            </SideMenuItem>
          </TouchableOpacity>
        )}
      />
      <LightbulbTheme />
    </SideMenu>
  );
}

export default SideMenuScreen;