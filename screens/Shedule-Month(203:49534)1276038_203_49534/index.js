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
      <View style={styles.View_203_49535}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1555/b50a/a2faa26efeb969eeb92a91e7f2b16486"
          }}
          style={styles.ImageBackground_I203_49535_203_49391}
        />
        <View style={styles.View_I203_49535_203_49392}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/109f/7137/ea2c2d59e94727f9450c143061d6f3c9"
            }}
            style={styles.ImageBackground_I203_49535_203_49396}
          />
          <View style={styles.View_I203_49535_203_49397}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d04/f2a9/f85f21016c36ef92fc88f0b84587344e"
              }}
              style={styles.ImageBackground_I203_49535_203_49398}
            />
            <View style={styles.View_I203_49535_203_49399}>
              <Text style={styles.Text_I203_49535_203_49399}>9</Text>
            </View>
          </View>
          <View style={styles.View_I203_49535_203_49400}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7737/87c3/c460e6f004001c5f61b65d34a649eb1a"
              }}
              style={styles.ImageBackground_I203_49535_203_49400_287_50850}
            />
          </View>
        </View>
        <View style={styles.View_I203_49535_203_49401}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3113/8259/1db7356c33ef06e84e16242b38b6881e"
            }}
            style={styles.ImageBackground_I203_49535_203_49401_287_50827}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
          }}
          style={styles.ImageBackground_I203_49535_203_49402}
        />
      </View>
      <View style={styles.View_203_49536}>
        <Text style={styles.Text_203_49536}>Shedule</Text>
      </View>
      <View style={styles.View_203_49537}>
        <View style={styles.View_203_49538}>
          <View style={styles.View_203_49539} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1400/09c6/0d755e07ee90f68157af9077cf048a5f"
            }}
            style={styles.ImageBackground_203_49540}
          />
        </View>
        <View style={styles.View_203_49541}>
          <View style={styles.View_203_49542} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c3f/fa74/067070f0fdf1881ebcc092ad424da2e6"
            }}
            style={styles.ImageBackground_203_49543}
          />
        </View>
        <View style={styles.View_203_49544}>
          <View style={styles.View_I203_49544_254_39749} />
          <View style={styles.View_I203_49544_254_39752}>
            <View style={styles.View_I203_49544_254_39754}>
              <Text style={styles.Text_I203_49544_254_39754}>
                December 2021
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf45/3354/0b137adf3d235e86327f428b0ff222cd"
            }}
            style={styles.ImageBackground_I203_49544_254_39755}
          />
        </View>
      </View>
      <View style={styles.View_203_49545}>
        <View style={styles.View_203_49546} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/daea/942f/c1703be91150c0109df8de71f3bad05a"
          }}
          style={styles.ImageBackground_203_49547}
        />
      </View>
      <View style={styles.View_203_49548}>
        <View style={styles.View_203_49549}>
          <View style={styles.View_I203_49549_192_41093} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dabb/149a/cc3ca414d0ac2378b2fe4e537fbe44cd"
          }}
          style={styles.ImageBackground_203_49550}
        />
        <View style={styles.View_203_49551}>
          <Text style={styles.Text_203_49551}>29</Text>
        </View>
        <View style={styles.View_203_49552}>
          <Text style={styles.Text_203_49552}>6</Text>
        </View>
        <View style={styles.View_203_49553}>
          <Text style={styles.Text_203_49553}>13</Text>
        </View>
        <View style={styles.View_203_49554}>
          <Text style={styles.Text_203_49554}>20</Text>
        </View>
        <View style={styles.View_203_49555}>
          <Text style={styles.Text_203_49555}>27</Text>
        </View>
        <View style={styles.View_203_49556}>
          <Text style={styles.Text_203_49556}>30</Text>
        </View>
        <View style={styles.View_203_49557}>
          <Text style={styles.Text_203_49557}>7</Text>
        </View>
        <View style={styles.View_203_49558}>
          <Text style={styles.Text_203_49558}>14</Text>
        </View>
        <View style={styles.View_203_49559}>
          <Text style={styles.Text_203_49559}>21</Text>
        </View>
        <View style={styles.View_203_49560}>
          <Text style={styles.Text_203_49560}>28</Text>
        </View>
        <View style={styles.View_203_49561}>
          <Text style={styles.Text_203_49561}>1</Text>
        </View>
        <View style={styles.View_203_49562}>
          <Text style={styles.Text_203_49562}>8</Text>
        </View>
        <View style={styles.View_203_49563}>
          <Text style={styles.Text_203_49563}>15</Text>
        </View>
        <View style={styles.View_203_49564}>
          <Text style={styles.Text_203_49564}>22</Text>
        </View>
        <View style={styles.View_203_49565}>
          <Text style={styles.Text_203_49565}>29</Text>
        </View>
        <View style={styles.View_203_49566}>
          <Text style={styles.Text_203_49566}>2</Text>
        </View>
        <View style={styles.View_203_49567}>
          <Text style={styles.Text_203_49567}>9</Text>
        </View>
        <View style={styles.View_203_49568}>
          <Text style={styles.Text_203_49568}>16</Text>
        </View>
        <View style={styles.View_203_49569}>
          <Text style={styles.Text_203_49569}>23</Text>
        </View>
        <View style={styles.View_203_49570}>
          <Text style={styles.Text_203_49570}>30</Text>
        </View>
        <View style={styles.View_203_49571}>
          <Text style={styles.Text_203_49571}>3</Text>
        </View>
        <View style={styles.View_203_49572}>
          <Text style={styles.Text_203_49572}>10</Text>
        </View>
        <View style={styles.View_203_49573}>
          <Text style={styles.Text_203_49573}>17</Text>
        </View>
        <View style={styles.View_203_49574}>
          <Text style={styles.Text_203_49574}>24</Text>
        </View>
        <View style={styles.View_203_49575}>
          <Text style={styles.Text_203_49575}>31</Text>
        </View>
        <View style={styles.View_203_49576}>
          <Text style={styles.Text_203_49576}>4</Text>
        </View>
        <View style={styles.View_203_49577}>
          <Text style={styles.Text_203_49577}>11</Text>
        </View>
        <View style={styles.View_203_49578}>
          <Text style={styles.Text_203_49578}>18</Text>
        </View>
        <View style={styles.View_203_49579}>
          <Text style={styles.Text_203_49579}>25</Text>
        </View>
        <View style={styles.View_203_49580}>
          <Text style={styles.Text_203_49580}>1</Text>
        </View>
        <View style={styles.View_203_49581}>
          <Text style={styles.Text_203_49581}>5</Text>
        </View>
        <View style={styles.View_203_49582}>
          <Text style={styles.Text_203_49582}>12</Text>
        </View>
        <View style={styles.View_203_49583}>
          <Text style={styles.Text_203_49583}>19</Text>
        </View>
        <View style={styles.View_203_49584}>
          <Text style={styles.Text_203_49584}>26</Text>
        </View>
        <View style={styles.View_203_49585}>
          <Text style={styles.Text_203_49585}>2</Text>
        </View>
        <View style={styles.View_203_49586}>
          <Text style={styles.Text_203_49586}>Sun</Text>
        </View>
        <View style={styles.View_203_49587}>
          <Text style={styles.Text_203_49587}>Mon</Text>
        </View>
        <View style={styles.View_203_49588}>
          <Text style={styles.Text_203_49588}>Tue</Text>
        </View>
        <View style={styles.View_203_49589}>
          <Text style={styles.Text_203_49589}>Wed</Text>
        </View>
        <View style={styles.View_203_49590}>
          <Text style={styles.Text_203_49590}>Thu</Text>
        </View>
        <View style={styles.View_203_49591}>
          <Text style={styles.Text_203_49591}>Fri</Text>
        </View>
        <View style={styles.View_203_49592}>
          <Text style={styles.Text_203_49592}>Sat</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
          }}
          style={styles.ImageBackground_203_49593}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fc9/3ce5/d31c5e252085eda66fe14fd877bfb3a1"
          }}
          style={styles.ImageBackground_203_49594}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb25/34ab/3aa616fa07cc782e89a4c6e0bbd85984"
          }}
          style={styles.ImageBackground_203_49597}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb25/34ab/3aa616fa07cc782e89a4c6e0bbd85984"
          }}
          style={styles.ImageBackground_203_49600}
        />
      </View>
      <View style={styles.View_203_49603}>
        <View style={styles.View_203_49604}>
          <View style={styles.View_I203_49604_192_41093} />
        </View>
        <View style={styles.View_203_49605}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d294/a267/f57454b7267a400c2f2bb661dabe2a4f"
            }}
            style={styles.ImageBackground_203_49606}
          />
          <View style={styles.View_203_49607}>
            <Text style={styles.Text_203_49607}>10 Dec, 2021 12:00-14:00</Text>
          </View>
          <View style={styles.View_203_49608}>
            <Text style={styles.Text_203_49608}>
              Olga Smith - Replacing the bathroom
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3e1/d1cf/8ca442043faa7699ab6ae225e1e9768b"
            }}
            style={styles.ImageBackground_203_49609}
          />
        </View>
        <View style={styles.View_203_49610}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7974/91dd/2645696a35040e1ae555f474c23190fe"
            }}
            style={styles.ImageBackground_203_49611}
          />
          <View style={styles.View_203_49612}>
            <Text style={styles.Text_203_49612}>10 Dec, 2021 14:00-15:00</Text>
          </View>
          <View style={styles.View_203_49613}>
            <Text style={styles.Text_203_49613}>
              Olga Smith - Replacing the bathroom
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 249, 1)" },
  View_2: { height: hp("100%") },
  View_203_49535: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I203_49535_203_49391: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  View_I203_49535_203_49392: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  ImageBackground_I203_49535_203_49396: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49535_203_49397: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I203_49535_203_49398: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49535_203_49399: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I203_49535_203_49399: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I203_49535_203_49400: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49535_203_49400_287_50850: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I203_49535_203_49401: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49535_203_49401_287_50827: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I203_49535_203_49402: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_203_49536: {
    width: wp("25%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_203_49536: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49537: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%")
  },
  View_203_49538: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_49539: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  ImageBackground_203_49540: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_203_49541: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("0%")
  },
  View_203_49542: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  ImageBackground_203_49543: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_203_49544: {
    flexGrow: 1,
    width: wp("54%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49544_254_39749: {
    flexGrow: 1,
    width: wp("54%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_I203_49544_254_39752: {
    flexGrow: 1,
    width: wp("75%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49544_254_39754: {
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
  Text_I203_49544_254_39754: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49544_254_39755: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("2%")
  },
  View_203_49545: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("13%")
  },
  View_203_49546: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 225, 230, 1)"
  },
  ImageBackground_203_49547: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_203_49548: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("32%")
  },
  View_203_49549: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49549_192_41093: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  ImageBackground_203_49550: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("14%")
  },
  View_203_49551: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_203_49551: {
    color: "rgba(222, 225, 230, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49552: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_203_49552: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49553: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_203_49553: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49554: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_203_49554: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49555: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_203_49555: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49556: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_203_49556: {
    color: "rgba(222, 225, 230, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49557: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_203_49557: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49558: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_203_49558: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49559: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_203_49559: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49560: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_203_49560: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49561: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_203_49561: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49562: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_203_49562: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49563: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_203_49563: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49564: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_203_49564: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49565: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_203_49565: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49566: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_203_49566: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49567: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_203_49567: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49568: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_203_49568: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49569: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_203_49569: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49570: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_203_49570: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49571: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_203_49571: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49572: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_203_49572: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49573: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_203_49573: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49574: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_203_49574: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49575: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_203_49575: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49576: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_203_49576: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49577: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_203_49577: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49578: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_203_49578: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49579: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_203_49579: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49580: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_203_49580: {
    color: "rgba(222, 225, 230, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49581: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_203_49581: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49582: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_203_49582: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49583: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_203_49583: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49584: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_203_49584: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49585: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_203_49585: {
    color: "rgba(222, 225, 230, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49586: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "center"
  },
  Text_203_49586: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49587: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "center"
  },
  Text_203_49587: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49588: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "center"
  },
  Text_203_49588: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49589: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    justifyContent: "center"
  },
  Text_203_49589: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49590: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    justifyContent: "center"
  },
  Text_203_49590: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49591: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    justifyContent: "center"
  },
  Text_203_49591: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49592: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    justifyContent: "center"
  },
  Text_203_49592: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_49593: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_203_49594: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("31%")
  },
  ImageBackground_203_49597: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("18%")
  },
  ImageBackground_203_49600: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("25%")
  },
  View_203_49603: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("72%")
  },
  View_203_49604: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49604_192_41093: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_203_49605: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  ImageBackground_203_49606: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49607: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_49607: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_203_49608: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_203_49608: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_49609: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49610: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("14%")
  },
  ImageBackground_203_49611: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49612: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_49612: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_203_49613: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_203_49613: {
    color: "rgba(56, 65, 84, 1)",
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
