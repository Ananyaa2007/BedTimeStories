import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
       <AppContainer/>;
    </View>
  );
}
}

const TabNavigator = createBottomTabNavigator({
  //"Write Story": {screen: WriteStoryScreen},
  "Read Story": {screen: ReadStoryScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName==="Read Story"){
        return(
          <Image source = {require('./read.png')}
          style={{width: 40, height: 40}}/>
        )
      } else if(routeName==="Write Story"){
        return(
          <Image source = {require('./write.png')}
          style={{width: 40, height: 40}}/>
        )
      }
    }
  })
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})


