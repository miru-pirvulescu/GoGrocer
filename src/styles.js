import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  appName: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '600',
    color: 'green',
  },
  scrollView: {
    backgroundColor: 'grey',
  },
  recipeCard: {
    width: Dimensions.get('window').width - 70,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionSubTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
