import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import RecipeView from './RecipeView';
import {styles} from '../styles.js';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.appName}>GoGrocer</Text>
          <Text style={styles.sectionTitle}>Recipes</Text>
          <RecipeView />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
