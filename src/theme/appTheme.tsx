import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },

  title: {
    fontSize: 30,
  },

  btnBig: {
    width: 100,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginVertical: 10,
  },

  btnBigText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  avatarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },

  menuBtn: {
    marginVertical: 10,
  },

  menuItem: {
    fontSize: 20,
  },
});
