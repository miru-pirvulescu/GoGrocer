import React from 'react';
import {Button} from 'react-native';
import {Card} from 'react-native-elements';
import {styles} from '../styles.js';

export default function CategoryCard({categoryName}) {
  return (
    <>
      <Card
        containerStyle={styles.recipeCard}
        title={categoryName}
        image={require('../assets/img/test.png')}>
        <Button title="View recipes" />
      </Card>
    </>
  );
}
