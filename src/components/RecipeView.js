/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Container,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import recipes from '../../data/recipes.json';

export default function RecipeView() {
const contents = recipes.contents.map(r =>
  <>
    <Text style={styles.sectionSubTitle}>{r.key}. {r.recipeName}</Text>
    <Text style={styles.sectionDescription}>Ingredients:</Text>
    {Object.keys(r.ingredients).map((k, v) => <Text style={styles.sectionDescription}>{k}: {r.ingredients[k]}</Text>)}
    <Text style={styles.sectionDescription}>Instructions:{'\n'}{r.recipe}</Text>
  </>
);
  return (
    <>
      <View>
        <ScrollView style={styles.scrollView}>{contents}</ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
  },
  engine: {
    position: 'absolute',
    right: 0,
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
