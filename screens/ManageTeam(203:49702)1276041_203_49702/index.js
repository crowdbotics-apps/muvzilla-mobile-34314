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
      <View style={styles.View_203_49703}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1555/b50a/a2faa26efeb969eeb92a91e7f2b16486"
          }}
          style={styles.ImageBackground_I203_49703_203_49391}
        />
        <View style={styles.View_I203_49703_203_49392}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/109f/7137/ea2c2d59e94727f9450c143061d6f3c9"
            }}
            style={styles.ImageBackground_I203_49703_203_49396}
          />
          <View style={styles.View_I203_49703_203_49397}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d04/f2a9/f85f21016c36ef92fc88f0b84587344e"
              }}
              style={styles.ImageBackground_I203_49703_203_49398}
            />
            <View style={styles.View_I203_49703_203_49399}>
              <Text style={styles.Text_I203_49703_203_49399}>9</Text>
            </View>
          </View>
          <View style={styles.View_I203_49703_203_49400}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e22c/1b89/239f580778f0459ae92e6f14b77c0b09"
              }}
              style={styles.ImageBackground_I203_49703_203_49400_287_50850}
            />
          </View>
        </View>
        <View style={styles.View_I203_49703_203_49401}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3113/8259/1db7356c33ef06e84e16242b38b6881e"
            }}
            style={styles.ImageBackground_I203_49703_203_49401_287_50827}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
          }}
          style={styles.ImageBackground_I203_49703_203_49402}
        />
      </View>
      <View style={styles.View_203_49704}>
        <Text style={styles.Text_203_49704}>Manage team</Text>
      </View>
      <View style={styles.View_203_49705}>
        <View style={styles.View_I203_49705_254_39749} />
        <View style={styles.View_I203_49705_254_39752}>
          <View style={styles.View_I203_49705_254_39754}>
            <Text style={styles.Text_I203_49705_254_39754}>Search user...</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/314f/63f0/17469f7fc3fe041274b8d2173adbfee5"
          }}
          style={styles.ImageBackground_I203_49705_254_39755}
        />
      </View>
      <View style={styles.View_203_49706}>
        <View style={styles.View_203_49707} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b36/9f6f/73797fa123d0684c105d83d418eef6dd"
          }}
          style={styles.ImageBackground_203_49708}
        />
      </View>
      <View style={styles.View_203_49709}>
        <View style={styles.View_I203_49709_192_41093} />
      </View>
      <View style={styles.View_203_49710}>
        <View style={styles.View_203_49711}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f80/4d04/cc03c0a8016cc2ba203f532704e4cb01"
            }}
            style={styles.ImageBackground_I203_49711_233_26928}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ca2/fe2c/318026f0447cfdbe800674e49586fc3f"
          }}
          style={styles.ImageBackground_203_49712}
        />
        <View style={styles.View_203_49713}>
          <Text style={styles.Text_203_49713}>+44 1632 960905</Text>
        </View>
        <View style={styles.View_203_49714}>
          <Text style={styles.Text_203_49714}>Worker</Text>
        </View>
        <View style={styles.View_203_49715}>
          <Text style={styles.Text_203_49715}>wade.warren@gmail.com</Text>
        </View>
        <View style={styles.View_203_49716}>
          <Text style={styles.Text_203_49716}>Last login: Aug 27, 2019</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
          }}
          style={styles.ImageBackground_203_49717}
        />
        <View style={styles.View_203_49718}>
          <Text style={styles.Text_203_49718}>Ronald Richards</Text>
        </View>
      </View>
      <View style={styles.View_203_49720}>
        <View style={styles.View_I203_49720_203_49711}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f80/4d04/cc03c0a8016cc2ba203f532704e4cb01"
            }}
            style={styles.ImageBackground_I203_49720_203_49711_233_26928}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ca2/fe2c/318026f0447cfdbe800674e49586fc3f"
          }}
          style={styles.ImageBackground_I203_49720_203_49712}
        />
        <View style={styles.View_I203_49720_203_49713}>
          <Text style={styles.Text_I203_49720_203_49713}>+44 1632 960905</Text>
        </View>
        <View style={styles.View_I203_49720_203_49714}>
          <Text style={styles.Text_I203_49720_203_49714}>Worker</Text>
        </View>
        <View style={styles.View_I203_49720_203_49715}>
          <Text style={styles.Text_I203_49720_203_49715}>
            wade.warren@gmail.com
          </Text>
        </View>
        <View style={styles.View_I203_49720_203_49716}>
          <Text style={styles.Text_I203_49720_203_49716}>
            Last login: Aug 27, 2019
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
          }}
          style={styles.ImageBackground_I203_49720_203_49717}
        />
        <View style={styles.View_I203_49720_203_49718}>
          <Text style={styles.Text_I203_49720_203_49718}>Ronald Richards</Text>
        </View>
      </View>
      <View style={styles.View_203_49721}>
        <View style={styles.View_I203_49721_203_49711}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f80/4d04/cc03c0a8016cc2ba203f532704e4cb01"
            }}
            style={styles.ImageBackground_I203_49721_203_49711_233_26928}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ca2/fe2c/318026f0447cfdbe800674e49586fc3f"
          }}
          style={styles.ImageBackground_I203_49721_203_49712}
        />
        <View style={styles.View_I203_49721_203_49713}>
          <Text style={styles.Text_I203_49721_203_49713}>+44 1632 960905</Text>
        </View>
        <View style={styles.View_I203_49721_203_49714}>
          <Text style={styles.Text_I203_49721_203_49714}>Worker</Text>
        </View>
        <View style={styles.View_I203_49721_203_49715}>
          <Text style={styles.Text_I203_49721_203_49715}>
            wade.warren@gmail.com
          </Text>
        </View>
        <View style={styles.View_I203_49721_203_49716}>
          <Text style={styles.Text_I203_49721_203_49716}>
            Last login: Aug 27, 2019
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
          }}
          style={styles.ImageBackground_I203_49721_203_49717}
        />
        <View style={styles.View_I203_49721_203_49718}>
          <Text style={styles.Text_I203_49721_203_49718}>Ronald Richards</Text>
        </View>
      </View>
      <View style={styles.View_203_49722}>
        <View style={styles.View_I203_49722_203_49711}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f80/4d04/cc03c0a8016cc2ba203f532704e4cb01"
            }}
            style={styles.ImageBackground_I203_49722_203_49711_233_26928}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ca2/fe2c/318026f0447cfdbe800674e49586fc3f"
          }}
          style={styles.ImageBackground_I203_49722_203_49712}
        />
        <View style={styles.View_I203_49722_203_49713}>
          <Text style={styles.Text_I203_49722_203_49713}>+44 1632 960905</Text>
        </View>
        <View style={styles.View_I203_49722_203_49714}>
          <Text style={styles.Text_I203_49722_203_49714}>Worker</Text>
        </View>
        <View style={styles.View_I203_49722_203_49715}>
          <Text style={styles.Text_I203_49722_203_49715}>
            wade.warren@gmail.com
          </Text>
        </View>
        <View style={styles.View_I203_49722_203_49716}>
          <Text style={styles.Text_I203_49722_203_49716}>
            Last login: Aug 27, 2019
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
          }}
          style={styles.ImageBackground_I203_49722_203_49717}
        />
        <View style={styles.View_I203_49722_203_49718}>
          <Text style={styles.Text_I203_49722_203_49718}>Ronald Richards</Text>
        </View>
        <View style={styles.View_I203_49722_203_49719}>
          <View style={styles.View_I203_49722_203_49719_223_26221}>
            <Text style={styles.Text_I203_49722_203_49719_223_26221}>
              Deactivated
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_49723}>
        <View style={styles.View_I203_49723_194_72677}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eee8/ee9e/7e7e156dbe3e15f2231b288ad5508ca6"
            }}
            style={styles.ImageBackground_I203_49723_194_72678}
          />
          <View style={styles.View_I203_49723_194_72681}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88a7/729c/4e3744e45b29ed891102ae69ed43d939"
              }}
              style={styles.ImageBackground_I203_49723_194_72682}
            />
            <View style={styles.View_I203_49723_194_72683}>
              <Text style={styles.Text_I203_49723_194_72683}>1</Text>
            </View>
          </View>
          <View style={styles.View_I203_49723_194_72684}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/515f/453c/75456cf0e9de3fe0ab828d4de8b44378"
              }}
              style={styles.ImageBackground_I203_49723_194_72685}
            />
            <View style={styles.View_I203_49723_194_72686}>
              <Text style={styles.Text_I203_49723_194_72686}>2</Text>
            </View>
          </View>
          <View style={styles.View_I203_49723_194_72693}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/515f/453c/75456cf0e9de3fe0ab828d4de8b44378"
              }}
              style={styles.ImageBackground_I203_49723_194_72694}
            />
            <View style={styles.View_I203_49723_194_72695}>
              <Text style={styles.Text_I203_49723_194_72695}>3</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05d9/599e/484d5259cded293798ae88f1cc7a2634"
            }}
            style={styles.ImageBackground_I203_49723_194_72696}
          />
        </View>
      </View>
      <View style={styles.View_203_49724}>
        <View style={styles.View_I203_49724_244_32018}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7a/c569/c254e07f8ac5ab0437f1b19ceba28262"
            }}
            style={styles.ImageBackground_I203_49724_244_32019}
          />
          <View style={styles.View_I203_49724_244_32020} />
        </View>
        <View style={styles.View_I203_49724_251_33945}>
          <View style={styles.View_I203_49724_244_32021}>
            <Text style={styles.Text_I203_49724_244_32021}>
              Deactivate Edit
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 249, 1)" },
  View_2: { height: hp("138%") },
  View_203_49703: {
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
  ImageBackground_I203_49703_203_49391: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  View_I203_49703_203_49392: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  ImageBackground_I203_49703_203_49396: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49703_203_49397: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I203_49703_203_49398: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49703_203_49399: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I203_49703_203_49399: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I203_49703_203_49400: {
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
  ImageBackground_I203_49703_203_49400_287_50850: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I203_49703_203_49401: {
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
  ImageBackground_I203_49703_203_49401_287_50827: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I203_49703_203_49402: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_203_49704: {
    width: wp("43%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_203_49704: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49705: {
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
  View_I203_49705_254_39749: {
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
  View_I203_49705_254_39752: {
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
  View_I203_49705_254_39754: {
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
  Text_I203_49705_254_39754: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49705_254_39755: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_203_49706: {
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
  View_203_49707: {
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
  ImageBackground_203_49708: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_203_49709: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("106%"),
    minHeight: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49709_192_41093: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_203_49710: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_49711: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49711_233_26928: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_203_49712: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_49713: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_203_49713: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49714: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_203_49714: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49715: {
    flexGrow: 1,
    width: wp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_203_49715: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49716: {
    flexGrow: 1,
    width: wp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_203_49716: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_49717: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  View_203_49718: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_203_49718: {
    color: "rgba(29, 38, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49720: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49720_203_49711: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49720_203_49711_233_26928: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I203_49720_203_49712: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_49720_203_49713: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_I203_49720_203_49713: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49720_203_49714: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I203_49720_203_49714: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49720_203_49715: {
    flexGrow: 1,
    width: wp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_I203_49720_203_49715: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49720_203_49716: {
    flexGrow: 1,
    width: wp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_I203_49720_203_49716: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49720_203_49717: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  View_I203_49720_203_49718: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I203_49720_203_49718: {
    color: "rgba(29, 38, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49721: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49721_203_49711: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49721_203_49711_233_26928: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I203_49721_203_49712: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_49721_203_49713: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_I203_49721_203_49713: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49721_203_49714: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I203_49721_203_49714: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49721_203_49715: {
    flexGrow: 1,
    width: wp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_I203_49721_203_49715: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49721_203_49716: {
    flexGrow: 1,
    width: wp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_I203_49721_203_49716: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49721_203_49717: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  View_I203_49721_203_49718: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I203_49721_203_49718: {
    color: "rgba(29, 38, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49722: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49722_203_49711: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49722_203_49711_233_26928: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I203_49722_203_49712: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_49722_203_49713: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_I203_49722_203_49713: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49722_203_49714: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I203_49722_203_49714: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49722_203_49715: {
    flexGrow: 1,
    width: wp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_I203_49722_203_49715: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49722_203_49716: {
    flexGrow: 1,
    width: wp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_I203_49722_203_49716: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49722_203_49717: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  View_I203_49722_203_49718: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I203_49722_203_49718: {
    color: "rgba(29, 38, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49722_203_49719: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("6%"),
    backgroundColor: "rgba(239, 241, 244, 1)"
  },
  View_I203_49722_203_49719_223_26221: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_49722_203_49719_223_26221: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_203_49723: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49723_194_72677: {
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
  ImageBackground_I203_49723_194_72678: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49723_194_72681: {
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
  ImageBackground_I203_49723_194_72682: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49723_194_72683: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I203_49723_194_72683: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49723_194_72684: {
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
  ImageBackground_I203_49723_194_72685: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49723_194_72686: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I203_49723_194_72686: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49723_194_72693: {
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
  ImageBackground_I203_49723_194_72694: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49723_194_72695: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I203_49723_194_72695: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49723_194_72696: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  View_203_49724: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49724_244_32018: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%")
  },
  ImageBackground_I203_49724_244_32019: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%")
  },
  View_I203_49724_244_32020: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("13%"),
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
  View_I203_49724_251_33945: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49724_244_32021: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49724_244_32021: {
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
