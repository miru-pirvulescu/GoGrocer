import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from '../styles.js';
import recipes from '../../data/recipes.json';
import RecipeCard from './RecipeCard';

export default function RecipeView() {
  const contents = recipes.contents.map(r => (
    <RecipeCard recipeName={r.recipeName} />
  ));
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      {contents}
    </ScrollView>
  );
}
