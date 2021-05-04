import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allStories: [],
      datasource: [],
      search: '',
    };
  }

  retrieveStories = () => {
    var allStories = [];
    var stories = db
      .collection('User-Story')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allStories.push(doc.data());
          console.log(allStories);
        });
        this.setState({ allStories });
      });
  };

  componentDidMount = () => {
    this.retrieveStories();
  };

  searchStory(text) {
    var newData = this.state.allStories.filter((item) => {
      const itemdata = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textdata = text.toUpperCase();
      return itemdata.indexOf(textdata)>-1;
    });
    this.setState({
      datasource: newData,
      search: text,
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header
          backgroundColor={'pink'}
          centerComponent={{
            text: 'Story Hub',
            style: { fontFamily: 'Times', fontSize: 27, fontWeight: 'bold' },
          }}
        />
        <SearchBar
          placeholder="Search"
          onChangeText={(text) => this.searchStory(text)}
          onClear={(text) => this.searchStory('')}
          value={this.state.search}
        />
        <FlatList
          data={
            this.state.search == ''
              ? this.state.allStories
              : this.state.datasource
          }
          renderItem={({ item }) => (
            <View style = {styles.flatlist}>
              <Text style={styles.storyText}>Title : {item.title}</Text>
              <Text style={styles.storyText}>Author : {item.author}</Text>
            </View>
          )}
          keyExtractor={(item,index)=>index.toString()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'times',
    marginTop: 10,
    color: 'purple',
    backgroundColor: 'yellow',
  },

  text3: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'purple',
    marginRight: 90,
    marginLeft: 60,
  },
  text2: {
    fontSize: 14,
    marginRight: 3,
    marginLeft: 5,
  },
flatlist:{
  width:'100%',
  borderWidth:3,
  borderColor:'orange',
  justifyContent : 'center',
  alignSelf : 'center',
  height : 80,
  marginTop :2
},
storyText:{
   fontFamily: 'times',
   fontSize: 20
}
});
