import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from '../styles.js';
import recipes from '../../data/recipes.json';
import CardItem from './CardItem';

export default function RecipeView() {
  const contents = recipes.contents.map(r => (
    <CardItem
      key={r.key}
      ingredients={r.ingredients}
      recipe={r.recipe}
      recipeName={r.recipeName}
    />
  ));
  return <ScrollView style={styles.scrollView}>{contents}</ScrollView>;
}
