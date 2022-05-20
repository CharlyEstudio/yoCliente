import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';

// Dispatchs
import { goTo } from '../reducers/navigator';

// Components
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    // top: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  },
});

const UsersScreen = ({ customers, goTo, navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
          style={styles.list}
          data={customers}
          keyExtractor={x => x.id}
          renderItem={
              ({ item }) => <ListItem onPress={goTo} nav={navigation} customer={item} />
          }
      />
    </View>
  )
};

// Data Redux
const mapStateToProps = state => {
  return { customers: state.customers };
};

const mapDispatchToPros = dispatch => ({
  goTo: customer => dispatch(goTo(customer)),
});

export default connect(mapStateToProps, mapDispatchToPros)(UsersScreen);