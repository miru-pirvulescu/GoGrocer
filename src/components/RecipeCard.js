import React from 'react';
import {Button, Modal, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {styles} from '../styles.js';
import RecipeCardItem from './RecipeCardItem';

function openModal() {
  <Modal>
    <Text>Hello</Text>
  </Modal>;
}

export default function RecipeCard({key, recipe, recipeName}) {
  return (
    <>
      <Card
        containerStyle={styles.recipeCard}
        title={recipeName}
        image={require('../../assets/img/test.png')}>
        <Button title="View recipe" />
      </Card>
    </>
  );
}
