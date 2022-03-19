import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_203_51069}>
        <View style={styles.View_I203_51069_192_41093} />
      </View>
      <View style={styles.View_203_51070}>
        <Text style={styles.Text_203_51070}>Select or create a client</Text>
      </View>
      <View style={styles.View_203_51071}>
        <Text style={styles.Text_203_51071}>
          Which client would you like to create this for?
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f9a/1131/f34dd8c5b16b3adbdaedfcd4bf574d22"
        }}
        style={styles.ImageBackground_203_51072}
      />
      <View style={styles.View_203_51073}>
        <View style={styles.View_I203_51073_254_39749} />
        <View style={styles.View_I203_51073_254_39752}>
          <View style={styles.View_I203_51073_254_39754}>
            <Text style={styles.Text_I203_51073_254_39754}>
              Search client...
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/314f/63f0/17469f7fc3fe041274b8d2173adbfee5"
          }}
          style={styles.ImageBackground_I203_51073_254_39755}
        />
      </View>
      <View style={styles.View_203_51074}>
        <View style={styles.View_I203_51074_201_24900}>
          <View style={styles.View_I203_51074_201_24901}>
            <Text style={styles.Text_I203_51074_201_24901}>+ Add client</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_51075} />
      <View style={styles.View_203_51076}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cafd/4bdc/18ac7175cd5a8a78cff1a531e5815575"
          }}
          style={styles.ImageBackground_203_51077}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cafd/4bdc/18ac7175cd5a8a78cff1a531e5815575"
          }}
          style={styles.ImageBackground_203_51078}
        />
        <View style={styles.View_203_51079}>
          <View style={styles.View_203_51080}>
            <Text style={styles.Text_203_51080}>
              Marina Stone, 2 properties
            </Text>
          </View>
          <View style={styles.View_203_51081}>
            <Text style={styles.Text_203_51081}>
              +38 066 657 87 12 | marina.stone@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_51086}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cafd/4bdc/18ac7175cd5a8a78cff1a531e5815575"
          }}
          style={styles.ImageBackground_203_51087}
        />
        <View style={styles.View_203_51088}>
          <View style={styles.View_203_51089}>
            <Text style={styles.Text_203_51089}>Marina Stone, 1 property</Text>
          </View>
          <View style={styles.View_203_51090}>
            <Text style={styles.Text_203_51090}>
              123 Broadway Street Apt. 5 New York, NY, USA +38 066 657 87 12 |
              marina.stone@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_51091}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cafd/4bdc/18ac7175cd5a8a78cff1a531e5815575"
          }}
          style={styles.ImageBackground_203_51092}
        />
        <View style={styles.View_203_51093}>
          <View style={styles.View_203_51094}>
            <Text style={styles.Text_203_51094}>Marina Stone, 1 property</Text>
          </View>
          <View style={styles.View_203_51095}>
            <Text style={styles.Text_203_51095}>
              123 Broadway Street Apt. 5 New York, NY, USA +38 066 657 87 12 |
              marina.stone@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_51096}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cafd/4bdc/18ac7175cd5a8a78cff1a531e5815575"
          }}
          style={styles.ImageBackground_203_51097}
        />
        <View style={styles.View_203_51098}>
          <View style={styles.View_203_51099}>
            <Text style={styles.Text_203_51099}>Marina Stone, 1 property</Text>
          </View>
          <View style={styles.View_203_51100}>
            <Text style={styles.Text_203_51100}>
              123 Broadway Street Apt. 5 New York, NY, USA +38 066 657 87 12 |
              marina.stone@gmail.com
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_203_51069: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_51069_192_41093: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_203_51070: {
    width: wp("88%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%"),
    justifyContent: "flex-end"
  },
  Text_203_51070: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_51071: {
    width: wp("67%"),
    minWidth: wp("67%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_203_51071: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_51072: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_203_51073: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_51073_254_39749: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_I203_51073_254_39752: {
    flexGrow: 1,
    width: wp("75%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_51073_254_39754: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_51073_254_39754: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_51073_254_39755: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%")
  },
  View_203_51074: {
    width: wp("88%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("22%"),
    backgroundColor: "rgba(222, 88, 84, 1)"
  },
  View_I203_51074_201_24900: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_51074_201_24901: {
    width: wp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_51074_201_24901: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_51075: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("45%"),
    backgroundColor: "rgba(9, 10, 10, 1)",
    opacity: 0.6000000238418579
  },
  View_203_51076: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_203_51077: {
    width: wp("88%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_203_51078: {
    width: wp("88%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_51079: {
    width: wp("79%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_51080: {
    width: wp("51%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_51080: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_51081: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_203_51081: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_51086: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_203_51087: {
    width: wp("88%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_51088: {
    width: wp("88%"),
    height: hp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_51089: {
    width: wp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_51089: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_51090: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_203_51090: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_51091: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("71%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_203_51092: {
    width: wp("88%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_51093: {
    width: wp("80%"),
    height: hp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_51094: {
    width: wp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_51094: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_51095: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_203_51095: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_51096: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("85%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_203_51097: {
    width: wp("88%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_51098: {
    width: wp("80%"),
    height: hp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_51099: {
    width: wp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_51099: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_51100: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_203_51100: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
