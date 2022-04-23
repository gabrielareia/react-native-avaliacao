export default sideMenuStyle = (state) => ({
  drawerLabelStyle: {
    color: (state && state.theme.sideMenuItemColor) || '#888',
    fontSize: 20,
    height: 40,
    textAlignVertical: 'center',
  },
  drawerItemStyle: {
    marginHorizontal: 0,
    marginVertical: 0,
    marginBottom: 1,
    width: '100%',
    borderRadius: 0,
    justifyContent: 'center',
    backgroundColor: (state && state.theme.sideMenuItemBackground) || '#888',
  },
  // lightbulbStyle: {
  //   marginLeft: 'auto',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: 50,
  //   aspectRatio: 1,
  //   borderRadius: 10,
  // }
});
