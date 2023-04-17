import React, {Component} from 'react';
import {
  StyleSheet,
  View, Text,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import Scheadule from '../Scheadule/index';

const {width: windowWidth} = Dimensions.get('window');
/*/ tableData: [
  ['1', <View style={styles.classContainer}><View style={styles.classSubContainer}><Text style={styles.classHead}>Calculo II</Text><Text style={styles.classSub}>Robert Drey</Text></View></View>, '3'],
  ['a', 'b', 'c'],
  ['1', '2', '3'],
  ['a', 'b', 'c']
] /*/
export default class NoticesCarousel extends Component {

  constructor(props){
      super(props);
      this.state = {
        activeIndex:0,
        carouselItems: []
    }
  }
  
  componentDidMount(){
    this.loadItems();
  }
  
  loadItems(){
    const stateScheadule = [
    [
      ['1', <View style={styles.classContainer}><View style={styles.classSubContainer}><Text style={styles.classHead}>Calculo II</Text><Text style={styles.classSub}>Robert Drey</Text></View></View>, '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c']
    ],
    [
      ['1', <View style={styles.classContainer}><View style={styles.classSubContainer}><Text style={styles.classHead}>Calculo II</Text><Text style={styles.classSub}>Robert Drey</Text></View></View>, '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c']
    ],
    [
      ['1', <View style={styles.classContainer}><View style={styles.classSubContainer}><Text style={styles.classHead}>Calculo II</Text><Text style={styles.classSub}>Robert Drey</Text></View></View>, '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c']
    ],
    ];
    this.setState({ carouselItems: stateScheadule });
    console.log(this.carouselItems);
    };

renderItem = ({item}) => {
  return (
  <View>
    <Scheadule
      tabledata = {this.carouselItems}
    />
  </View>
  )
};

render() {
  return (
  <View style={styles.carouselContainer}>
      <Carousel
      style={styles.carousel}
      data={this.state.carouselItems}
      renderItem={this.renderItem}
      itemWidth={windowWidth * 0.8}
      separatorWidth={0}
      containerWidth={windowWidth}
      ref={c => {
          this.numberCarousel = c;
        }}
    />
  </View>
  );
}
}

const styles = StyleSheet.create({
  carousel: {
    flexGrow: 0,
    height: 290,
    backgroundColor: 'transparent'
  },
  item: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    lineHeight: 22,
    fontSize: 16,
    textAlign: 'center',
  }
});