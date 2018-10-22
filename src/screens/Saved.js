import React, { Component } from 'react'
import { 
  ScrollView,
  View, 
  Text, 
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions
} from 'react-native'
import GlobalStyles from '../GlobalStyles'
import Utils from '../Utils'
import ListViewItem from '../components/Saved/ListViewItem'
import EmptyState from '../components/Saved/EmptyState'
import realm from '../realm'
const deviceWidth = Dimensions.get('window').width

export default class Saved extends Component {
  static navigatorStyle = Utils.navigatorStyle()

  constructor(props) {
    super(props)
    var src = realm.objects('Recipe')

    this.state = {
      data: src,
      src: src
    }

    realm.write(() => {
      // realm.delete(realm.objects('Recipe'))
    })

    realm.addListener('change', () => {
      this.setState({ src: realm.objects('Recipe') })
    })
  }
 
  setSearchText(event) {
     let searchText = event.nativeEvent.text;
     this.setState({searchText});

     let filteredData = this.filterNotes(searchText, this.state.src);
     this.setState({
       src: filteredData,
     });

    }

    filterNotes(searchText, src) {
      let text = searchText.toLowerCase();

      return this.state.data.filter(n => {
        return n.title.toLowerCase().search(text) !== -1;
      });
    }

  render () {
    return (
      <ScrollView
        style={[GlobalStyles.container, styles.ScrollView]}
        showsVerticalScrollIndicator={false}>
         <TextInput
         autoCorrect
         style={[styles.searchBar]}
         value={this.state.searchText}
         onChange={this.setSearchText.bind(this)}
         placeholder="Search" />
        <View style={styles.innerContainer}>
          <FlatList
            data={Array.from(this.state.src)}
            style={styles.FlatList}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
              <ListViewItem item={item}
                navigator={this.props.navigator} />}
          />
          <EmptyState 
            shouldRender={this.state.data.length == 0}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  ScrollView: {
    paddingTop: 20
  },
  innerContainer: {
    // don't enable left/right margin (already done in listviewitem)
    marginTop: 18
  },
  searchBar: {
    backgroundColor: 'white',
    marginLeft: 26,
    marginRight: 26,
    paddingLeft: 20,
    width: deviceWidth - 52,
    fontSize: 16,
    height: 50,
    // marginBottom: 10,
    borderWidth: 1.5,
    borderColor: '#EDEDED',
    borderRadius: 4,
    fontFamily: 'Circular-Book'
  }
})

module.exports = Saved