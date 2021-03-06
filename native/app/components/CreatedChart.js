import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  ScrollView,
  Switch,
  Animated,
  Easing
} from 'react-native'

export default class CreatedChart extends Component{
  constructor (props) {
   super(props);
 }

 render() {
   return (
     <View style={styles.postChart}>
     {this.props.posts.sort(function(a,b) {
       let aScore = a.maker_inside
       let bScore = b.maker_inside
       return bScore - aScore
      }).map(function(post, i) {
       if(post.maker_inside) {
         scoreColor = '#EB5424'
       } else {
         scoreColor = '#F0F0F0'
       }
       return (
         <View style={styles.postChart} key={i}>
          <Animated.View
            style={[{height: 20, backgroundColor:scoreColor}, styles.bar, styles.barRating]} />
         </View>
       )}
     )}
     </View>
   )
 }
}

const styles = StyleSheet.create({
  postChart: {
    top: 10,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 1,
  },
  bar: {
    width: 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginLeft: 1,
  }
});
