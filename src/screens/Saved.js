import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  FlatList
} from 'react-native'
import GlobalStyles from '../GlobalStyles'
import Utils from '../Utils'
import ListViewItem from '../components/ListViewItem'

export default class Saved extends Component {
  static navigatorStyle = Utils.navigatorStyle()

  constructor(props) {
    super(props)
     // var src = realm.objects('Program')

      this.state = {
        // src: src
      }

      // realm.addListener('change', () => {
      //   this.setState({ src: realm.objects('Program') })
      // })

  }

  makeRemoteRequest = () => {    
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });
    fetch(url)      
      .then(res => res.json())      
      .then(res => {        
        this.setState({          
          data: res.results,          
          error: res.error || null,          
          loading: false,        
        });        
       this.arrayholder = res.results;      
     })      
     .catch(error => {        
       this.setState({ error, loading: false });      
     });  
  };

  renderHeader = () => {    
    return (      
      <SearchBar        
        placeholder="Type Here..."        
        lightTheme        
        round        
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}             
      />    
    );  
  };

  searchFilterFunction = text => {    
  const newData = this.arrayholder.filter(item => {      
    const itemData = `${item.name.title.toUpperCase()}   
    ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
     const textData = text.toUpperCase();
      
     return itemData.indexOf(textData) > -1;    
  });    
  this.setState({ data: newData });  
};

  render () {
    return (
      <View style={[GlobalStyles.container]}>
        <View style={GlobalStyles.innerContainer}>
         <FlatList 
            data={[{title: "Title Text"}]} 
            keyExtractor={item => item.title}
            renderItem={({item}) => 
              <ListViewItem 
                item={item}
                navigator={this.props.navigator}/>
            } 
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

module.exports = Saved