import React from 'react';
import {Text} from 'react-native';
import {styles} from '../styles.js';

function CardItem({key, ingredients, recipe, recipeName}) {
  return (
    <>
      <Text style={styles.sectionSubTitle}>{recipeName}</Text>
      <Text style={styles.sectionDescription}>Ingredients:</Text>
      {Object.keys(ingredients).map((k, index) => (
        <Text style={styles.sectionDescription}>
          {k}: {ingredients[k]}
        </Text>
      ))}
      <Text style={styles.sectionDescription}>
        Instructions:{'\n'}
        {recipe}
      </Text>
      <Text>{'\n'}</Text>
    </>
  );
}

export default CardItem;
