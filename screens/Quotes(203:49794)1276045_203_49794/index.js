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
      <View style={styles.View_203_49795}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1555/b50a/a2faa26efeb969eeb92a91e7f2b16486"
          }}
          style={styles.ImageBackground_I203_49795_203_49391}
        />
        <View style={styles.View_I203_49795_203_49392}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/109f/7137/ea2c2d59e94727f9450c143061d6f3c9"
            }}
            style={styles.ImageBackground_I203_49795_203_49396}
          />
          <View style={styles.View_I203_49795_203_49397}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d04/f2a9/f85f21016c36ef92fc88f0b84587344e"
              }}
              style={styles.ImageBackground_I203_49795_203_49398}
            />
            <View style={styles.View_I203_49795_203_49399}>
              <Text style={styles.Text_I203_49795_203_49399}>9</Text>
            </View>
          </View>
          <View style={styles.View_I203_49795_203_49400}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7737/87c3/c460e6f004001c5f61b65d34a649eb1a"
              }}
              style={styles.ImageBackground_I203_49795_203_49400_287_50850}
            />
          </View>
        </View>
        <View style={styles.View_I203_49795_203_49401}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3113/8259/1db7356c33ef06e84e16242b38b6881e"
            }}
            style={styles.ImageBackground_I203_49795_203_49401_287_50827}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
          }}
          style={styles.ImageBackground_I203_49795_203_49402}
        />
      </View>
      <View style={styles.View_203_49796}>
        <Text style={styles.Text_203_49796}>Quotes</Text>
      </View>
      <View style={styles.View_203_49797}>
        <View style={styles.View_I203_49797_254_39749} />
        <View style={styles.View_I203_49797_254_39752}>
          <View style={styles.View_I203_49797_254_39754}>
            <Text style={styles.Text_I203_49797_254_39754}>
              Search quote...
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/314f/63f0/17469f7fc3fe041274b8d2173adbfee5"
          }}
          style={styles.ImageBackground_I203_49797_254_39755}
        />
      </View>
      <View style={styles.View_203_49801}>
        <View style={styles.View_203_49802} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b36/9f6f/73797fa123d0684c105d83d418eef6dd"
          }}
          style={styles.ImageBackground_203_49803}
        />
      </View>
      <View style={styles.View_203_49804}>
        <View style={styles.View_203_49805} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/daea/942f/c1703be91150c0109df8de71f3bad05a"
          }}
          style={styles.ImageBackground_203_49806}
        />
      </View>
      <View style={styles.View_203_49807}>
        <View style={styles.View_I203_49807_192_41093} />
      </View>
      <View style={styles.View_203_49808}>
        <View style={styles.View_203_49809}>
          <Text style={styles.Text_203_49809}>
            Large title here stay, $159.36
          </Text>
        </View>
        <View style={styles.View_203_49811}>
          <Text style={styles.Text_203_49811}>Wade Warren</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
          }}
          style={styles.ImageBackground_203_49812}
        />
        <View style={styles.View_203_49813}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f80/4d04/cc03c0a8016cc2ba203f532704e4cb01"
            }}
            style={styles.ImageBackground_I203_49813_233_26928}
          />
        </View>
        <View style={styles.View_203_49814}>
          <Text style={styles.Text_203_49814}>Created: Aug 27, 2019</Text>
        </View>
        <View style={styles.View_203_49815}>
          <View style={styles.View_I203_49815_270_44754}>
            <Text style={styles.Text_I203_49815_270_44754}>
              Awaiting response
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_49816}>
        <View style={styles.View_I203_49816_203_49809}>
          <Text style={styles.Text_I203_49816_203_49809}>
            Large title here stay, $159.36
          </Text>
        </View>
        <View style={styles.View_I203_49816_203_49811}>
          <Text style={styles.Text_I203_49816_203_49811}>Wade Warren</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
          }}
          style={styles.ImageBackground_I203_49816_203_49812}
        />
        <View style={styles.View_I203_49816_203_49813}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f80/4d04/cc03c0a8016cc2ba203f532704e4cb01"
            }}
            style={styles.ImageBackground_I203_49816_203_49813_233_26928}
          />
        </View>
        <View style={styles.View_I203_49816_203_49814}>
          <Text style={styles.Text_I203_49816_203_49814}>
            Created: Aug 27, 2019
          </Text>
        </View>
        <View style={styles.View_I203_49816_203_49815}>
          <View style={styles.View_I203_49816_203_49815_270_44754}>
            <Text style={styles.Text_I203_49816_203_49815_270_44754}>
              Awaiting response
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_49817}>
        <View style={styles.View_I203_49817_203_49809}>
          <Text style={styles.Text_I203_49817_203_49809}>
            Large title here loom... $159.36
          </Text>
        </View>
        <View style={styles.View_I203_49817_203_49811}>
          <Text style={styles.Text_I203_49817_203_49811}>Wade Warren</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
          }}
          style={styles.ImageBackground_I203_49817_203_49812}
        />
        <View style={styles.View_I203_49817_203_49813}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f80/4d04/cc03c0a8016cc2ba203f532704e4cb01"
            }}
            style={styles.ImageBackground_I203_49817_203_49813_233_26928}
          />
        </View>
        <View style={styles.View_I203_49817_203_49814}>
          <Text style={styles.Text_I203_49817_203_49814}>
            Created: Aug 27, 2019
          </Text>
        </View>
        <View style={styles.View_I203_49817_203_49815}>
          <View style={styles.View_I203_49817_203_49815_270_44754}>
            <Text style={styles.Text_I203_49817_203_49815_270_44754}>
              Awaiting response
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_49818}>
        <View style={styles.View_I203_49818_203_49809}>
          <Text style={styles.Text_I203_49818_203_49809}>
            Large title here loom... $159.36
          </Text>
        </View>
        <View style={styles.View_I203_49818_203_49811}>
          <Text style={styles.Text_I203_49818_203_49811}>Wade Warren</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
          }}
          style={styles.ImageBackground_I203_49818_203_49812}
        />
        <View style={styles.View_I203_49818_203_49813}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f80/4d04/cc03c0a8016cc2ba203f532704e4cb01"
            }}
            style={styles.ImageBackground_I203_49818_203_49813_233_26928}
          />
        </View>
        <View style={styles.View_I203_49818_203_49814}>
          <Text style={styles.Text_I203_49818_203_49814}>
            Created: Aug 27, 2019
          </Text>
        </View>
        <View style={styles.View_I203_49818_203_49815}>
          <View style={styles.View_I203_49818_203_49815_270_44754}>
            <Text style={styles.Text_I203_49818_203_49815_270_44754}>
              Awaiting response
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_49819}>
        <View style={styles.View_I203_49819_194_72677}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eee8/ee9e/7e7e156dbe3e15f2231b288ad5508ca6"
            }}
            style={styles.ImageBackground_I203_49819_194_72678}
          />
          <View style={styles.View_I203_49819_194_72681}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88a7/729c/4e3744e45b29ed891102ae69ed43d939"
              }}
              style={styles.ImageBackground_I203_49819_194_72682}
            />
            <View style={styles.View_I203_49819_194_72683}>
              <Text style={styles.Text_I203_49819_194_72683}>1</Text>
            </View>
          </View>
          <View style={styles.View_I203_49819_194_72684}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/515f/453c/75456cf0e9de3fe0ab828d4de8b44378"
              }}
              style={styles.ImageBackground_I203_49819_194_72685}
            />
            <View style={styles.View_I203_49819_194_72686}>
              <Text style={styles.Text_I203_49819_194_72686}>2</Text>
            </View>
          </View>
          <View style={styles.View_I203_49819_194_72693}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/515f/453c/75456cf0e9de3fe0ab828d4de8b44378"
              }}
              style={styles.ImageBackground_I203_49819_194_72694}
            />
            <View style={styles.View_I203_49819_194_72695}>
              <Text style={styles.Text_I203_49819_194_72695}>3</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05d9/599e/484d5259cded293798ae88f1cc7a2634"
            }}
            style={styles.ImageBackground_I203_49819_194_72696}
          />
        </View>
      </View>
      <View style={styles.View_203_49820}>
        <View style={styles.View_I203_49820_244_32018}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7a/c569/c254e07f8ac5ab0437f1b19ceba28262"
            }}
            style={styles.ImageBackground_I203_49820_244_32019}
          />
          <View style={styles.View_I203_49820_244_32020} />
        </View>
        <View style={styles.View_I203_49820_251_33945}>
          <View style={styles.View_I203_49820_244_32021}>
            <Text style={styles.Text_I203_49820_244_32021}>
              Send as email Mark as approved
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04b2/504f/afb127640f2a355a7c7b83ed5e491d53"
            }}
            style={styles.ImageBackground_I203_49820_251_33938}
          />
          <View style={styles.View_I203_49820_251_33932}>
            <Text style={styles.Text_I203_49820_251_33932}>
              Create similar quote Download as pdf Print Edit Archive
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 249, 1)" },
  View_2: { height: hp("120%") },
  View_203_49795: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I203_49795_203_49391: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  View_I203_49795_203_49392: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  ImageBackground_I203_49795_203_49396: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49795_203_49397: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I203_49795_203_49398: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49795_203_49399: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I203_49795_203_49399: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I203_49795_203_49400: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49795_203_49400_287_50850: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I203_49795_203_49401: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49795_203_49401_287_50827: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I203_49795_203_49402: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_203_49796: {
    width: wp("23%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_203_49796: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49797: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49797_254_39749: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_I203_49797_254_39752: {
    flexGrow: 1,
    width: wp("75%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49797_254_39754: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_49797_254_39754: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49797_254_39755: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_203_49801: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("11%")
  },
  View_203_49802: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 88, 84, 1)"
  },
  ImageBackground_203_49803: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_203_49804: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("11%")
  },
  View_203_49805: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 225, 230, 1)"
  },
  ImageBackground_203_49806: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_203_49807: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49807_192_41093: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_203_49808: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_49809: {
    flexGrow: 1,
    width: wp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_203_49809: {
    color: "rgba(29, 38, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49811: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_203_49811: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_49812: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_203_49813: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49813_233_26928: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_203_49814: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_203_49814: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49815: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(243, 236, 251, 1)"
  },
  View_I203_49815_270_44754: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_49815_270_44754: {
    color: "rgba(158, 100, 232, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_203_49816: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49816_203_49809: {
    flexGrow: 1,
    width: wp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_49816_203_49809: {
    color: "rgba(29, 38, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49816_203_49811: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I203_49816_203_49811: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49816_203_49812: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_I203_49816_203_49813: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49816_203_49813_233_26928: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I203_49816_203_49814: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I203_49816_203_49814: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49816_203_49815: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(243, 236, 251, 1)"
  },
  View_I203_49816_203_49815_270_44754: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_49816_203_49815_270_44754: {
    color: "rgba(158, 100, 232, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_203_49817: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("69%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49817_203_49809: {
    flexGrow: 1,
    width: wp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_49817_203_49809: {
    color: "rgba(29, 38, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49817_203_49811: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I203_49817_203_49811: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49817_203_49812: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_I203_49817_203_49813: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49817_203_49813_233_26928: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I203_49817_203_49814: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I203_49817_203_49814: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49817_203_49815: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(243, 236, 251, 1)"
  },
  View_I203_49817_203_49815_270_44754: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_49817_203_49815_270_44754: {
    color: "rgba(158, 100, 232, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_203_49818: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("88%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49818_203_49809: {
    flexGrow: 1,
    width: wp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_49818_203_49809: {
    color: "rgba(29, 38, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49818_203_49811: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I203_49818_203_49811: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49818_203_49812: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_I203_49818_203_49813: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49818_203_49813_233_26928: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I203_49818_203_49814: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I203_49818_203_49814: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49818_203_49815: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(243, 236, 251, 1)"
  },
  View_I203_49818_203_49815_270_44754: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_49818_203_49815_270_44754: {
    color: "rgba(158, 100, 232, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_203_49819: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("108%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49819_194_72677: {
    flexGrow: 1,
    width: wp("75%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I203_49819_194_72678: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49819_194_72681: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I203_49819_194_72682: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49819_194_72683: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I203_49819_194_72683: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49819_194_72684: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I203_49819_194_72685: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49819_194_72686: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I203_49819_194_72686: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49819_194_72693: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I203_49819_194_72694: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49819_194_72695: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I203_49819_194_72695: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49819_194_72696: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  View_203_49820: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49820_244_32018: {
    flexGrow: 1,
    width: wp("53%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%")
  },
  ImageBackground_I203_49820_244_32019: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  View_I203_49820_244_32020: {
    flexGrow: 1,
    width: wp("53%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 81, 249, 1)",
    opacity: 0.009999999776482582,
    borderColor: "rgba(0, 81, 249, 1)",
    borderWidth: 1
  },
  View_I203_49820_251_33945: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49820_244_32021: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49820_244_32021: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49820_251_33938: {
    width: wp("40%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_I203_49820_251_33932: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I203_49820_251_33932: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
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
