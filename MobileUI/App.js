/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
const Images = {
  logo: require('./assets/Image/Avatar.png'),
  screenshot1: require('./assets/Image/Screenshot1.png'),
  speakerDisable: require('./assets/Image/speaker-disable.png'),
  truck1: require('./assets/Image/Truck1.png'),
  charger: require('./assets/Image/charger.png'),
  gift: require('./assets/Image/Gift.png'),
  mmt: require('./assets/Image/mmt.png'),
  screenshot2: require('./assets/Image/screenshot2.png'),
  speaker: require('./assets/Image/speaker.png'),
};
const App = () => {
  const headers = () => {
    return (
      <View style={[styles.headersContainer]}>
        <View>
          <Text style={styles.headersText1}>Welcome Back,</Text>
          <Text style={styles.headersText2}>Rahul Kumar</Text>
        </View>
        <Image source={Images.logo} style={styles.headersImage} />
      </View>
    );
  };
  const commonText = commonHeaderText => {
    return (
      <View>
        <Text style={styles.commonText1}>{commonHeaderText}</Text>
        <Text style={styles.commonText2}>
          Save up for the next iPhone and
          <Text style={styles.commonText2SubText}>get 10% Cashback!</Text>
        </Text>
      </View>
    );
  };

  const bottomListOption = () => {
    return (
      <View style={styles.optionListContainer}>
        <View style={styles.optionImageTextContainer}>
          <View style={styles.optionImageContainer}>
            <Image source={Images.truck1} style={styles.optionImage} />
          </View>
          <Text style={styles.optionText}>Priority Delivery</Text>
        </View>
        <View style={styles.optionImageTextContainer}>
          <View style={styles.optionImageContainer}>
            <Image
              source={Images.charger}
              style={[
                styles.optionImage,
                {
                  transform: [{rotate: '-21.81deg'}],
                },
              ]}
            />
          </View>
          <Text style={styles.optionText}>Free Charger</Text>
        </View>
        <View style={styles.optionImageTextContainer}>
          <View style={styles.optionImageContainer}>
            <Image source={Images.gift} style={styles.optionImage} />
          </View>
          <Text style={styles.optionText}>Tortoise Merch</Text>
        </View>
      </View>
    );
  };
  const cardImage1 = () => {
    return (
      <View>
        <Image source={Images.screenshot1} style={styles.card1MainImage} />
        <View style={styles.card1MainImageSubImageContainer}>
          <Image
            source={Images.speakerDisable}
            style={styles.card1MainImageSubImage}
          />
        </View>
      </View>
    );
  };
  const cardImage2 = () => {
    return (
      <View>
        <Image
          source={Images.screenshot2}
          style={[styles.card1MainImage, {height: 531}]}
        />
        <View style={styles.card2MainImageSubImageContainer}>
          <Image source={Images.speaker} style={{height: 16, width: 20}} />
        </View>
        <Image
          source={Images.mmt}
          style={{
            height: 56,
            width: 56,
            position: 'absolute',
            bottom: '0%',
            marginLeft: 18.81,
            marginBottom: 12.72,
          }}
        />
      </View>
    );
  };
  const cards = (cardImage, bottomOption, commonHeaderText) => {
    return (
      <View style={[styles.cardContainer]}>
        {cardImage === 1 ? cardImage1() : cardImage2()}
        <View style={styles.cardCommonBottomView}>
          {commonText(commonHeaderText)}
          {bottomOption ? bottomListOption() : null}
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.container, styles.mainScreenBackground]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9F9F9" />
      <SafeAreaView style={styles.mainScreenBackground} />
      {headers()}
      <ScrollView style={{flex: 1, marginHorizontal: 20}}>
        {cards(1, true, 'IPHONE SAVINGS PLAN')}
        {cards(null, null, 'MAKE MY TRIP SAVINGS PLAN')}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  mainScreenBackground: {
    backgroundColor: '#F9F9F9',
  },
  headersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingRight: 22,
    paddingLeft: 24,
    paddingBottom: 32,
  },
  headersText1: {
    color: '#11142DA6',
    fontFamily: 'Haffer XH',
    fontWeight: '500',
    fontSize: 12,
  },
  headersText2: {
    color: '#11142D',
    fontFamily: 'Haffer XH',
    fontWeight: '600',
    fontSize: 24,
  },
  headersImage: {alignSelf: 'center', height: 40, width: 40},
  commonText1: {
    color: '#6F767E',
    fontFamily: 'Haffer XH',
    fontWeight: '600',
    fontSize: 12,
  },
  commonText2: {
    color: '#001B19',
    fontFamily: 'Haffer XH',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 22.133,
  },
  commonText2SubText: {
    color: '#008000',
    fontFamily: 'Haffer XH',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 22.133,
  },
  cardContainer: {
    // flex:1,
    marginBottom: 27.67,
    borderRadius: 17.7,
    shadowColor: 'rgba(0, 0, 0, 0.28)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
  },
  card1MainImage: {
    width: '100%',
    height: 256,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    resizeMethod: 'resize',
    resizeMode: 'cover',
  },
  card1MainImageSubImageContainer: {
    backgroundColor: '#FFFFFFA1',
    position: 'absolute',
    bottom: '0%',
    right: 11,
    paddingTop: 9.69,
    paddingLeft: 18.69,
    paddingRight: 18.32,
    paddingBottom: 6.56,
    borderRadius: 6,
    marginBottom: 12.32,
  },
  card1MainImageSubImage: {height: 14.76, width: 12, paddingTop: 6},
  cardCommonBottomView: {
    paddingLeft: 19,
    paddingRight: 23,
    paddingTop: 13.68,
    paddingBottom: 27.74,
  },
  optionListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 24.11,
  },
  optionImageTextContainer: {alignItems: 'center'},
  optionImageContainer: {
    backgroundColor: '#EFEFEF',
    paddingTop: 6.94,
    paddingBottom: 3.96,
    paddingHorizontal: 5.94,
    borderRadius: 3.96,
  },
  optionImage: {width: 67.37, height: 48.55},
  optionText: {
    fontSize: 9.9,
    fontWeight: '600',
    color: '#00000080',
    fontFamily: 'Haffer XH',
  },
  card2MainImageSubImageContainer: {
    backgroundColor: '#FFFFFFA1',
    position: 'absolute',
    bottom: '0%',
    right: 11,
    paddingTop: 7.04,
    paddingLeft: 15,
    paddingRight: 14,
    paddingBottom: 7.96,
    borderRadius: 6,
    marginBottom: 10,
  },
});

export default App;
