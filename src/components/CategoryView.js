import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from '../styles.js';
import recipes from '../data/recipes.json';
import CategoryCard from './CategoryCard';

export default function CategoryView() {
  var tags = [];
  recipes.contents.map(r => r.tags.map(t => tags.push(t)));
  const aux = new Set(tags);
  tags = [...aux];
  const contents = tags.map(tag => <CategoryCard categoryName={tag} />);
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      {contents}
    </ScrollView>
  );
}
