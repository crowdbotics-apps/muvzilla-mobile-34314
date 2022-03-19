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
      <View style={styles.View_203_49640}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1555/b50a/a2faa26efeb969eeb92a91e7f2b16486"
          }}
          style={styles.ImageBackground_I203_49640_203_49391}
        />
        <View style={styles.View_I203_49640_203_49392}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/109f/7137/ea2c2d59e94727f9450c143061d6f3c9"
            }}
            style={styles.ImageBackground_I203_49640_203_49396}
          />
          <View style={styles.View_I203_49640_203_49397}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d04/f2a9/f85f21016c36ef92fc88f0b84587344e"
              }}
              style={styles.ImageBackground_I203_49640_203_49398}
            />
            <View style={styles.View_I203_49640_203_49399}>
              <Text style={styles.Text_I203_49640_203_49399}>9</Text>
            </View>
          </View>
          <View style={styles.View_I203_49640_203_49400}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e22c/1b89/239f580778f0459ae92e6f14b77c0b09"
              }}
              style={styles.ImageBackground_I203_49640_203_49400_287_50850}
            />
          </View>
        </View>
        <View style={styles.View_I203_49640_203_49401}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3113/8259/1db7356c33ef06e84e16242b38b6881e"
            }}
            style={styles.ImageBackground_I203_49640_203_49401_287_50827}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
          }}
          style={styles.ImageBackground_I203_49640_203_49402}
        />
      </View>
      <View style={styles.View_203_49641}>
        <Text style={styles.Text_203_49641}>Approve time sheets</Text>
      </View>
      <View style={styles.View_203_49642}>
        <View style={styles.View_I203_49642_287_49331} />
        <View style={styles.View_I203_49642_287_49332}>
          <View style={styles.View_I203_49642_287_49334}>
            <View style={styles.View_I203_49642_287_49335}>
              <Text style={styles.Text_I203_49642_287_49335}>Approve to</Text>
            </View>
            <View style={styles.View_I203_49642_287_49336}>
              <Text style={styles.Text_I203_49642_287_49336}>05.22.2021</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I203_49642_287_49337}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/319c/ed89/1d30d59eb183fc720e0fb677a2f0df41"
            }}
            style={styles.ImageBackground_I203_49642_287_49337_217_24841}
          />
        </View>
      </View>
      <View style={styles.View_203_49643}>
        <Text style={styles.Text_203_49643}>
          Logged hours awaiting approval
        </Text>
      </View>
      <View style={styles.View_203_49644} />
      <View style={styles.View_203_49645} />
      <View style={styles.View_203_49646} />
      <View style={styles.View_203_49647}>
        <View style={styles.View_203_49648}>
          <View style={styles.View_I203_49648_192_41093} />
        </View>
        <View style={styles.View_203_49649}>
          <View style={styles.View_203_49650}>
            <View style={styles.View_I203_49650_236_64149}>
              <View style={styles.View_I203_49650_236_64150} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a64/842d/2cd16ab1b910f373824f98c483328bf0"
                }}
                style={styles.ImageBackground_I203_49650_236_64156}
              />
            </View>
          </View>
          <View style={styles.View_203_49651}>
            <View style={styles.View_203_49652}>
              <Text style={styles.Text_203_49652}>Oct 31, Sunday</Text>
            </View>
            <View style={styles.View_203_49653}>
              <View style={styles.View_I203_49653_239_73625}>
                <Text style={styles.Text_I203_49653_239_73625}>Unapproved</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_203_49654}>
            <Text style={styles.Text_203_49654}>1:00</Text>
          </View>
        </View>
        <View style={styles.View_203_49655}>
          <View style={styles.View_203_49656}>
            <View style={styles.View_I203_49656_236_64149}>
              <View style={styles.View_I203_49656_236_64150} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a64/842d/2cd16ab1b910f373824f98c483328bf0"
                }}
                style={styles.ImageBackground_I203_49656_236_64156}
              />
            </View>
          </View>
          <View style={styles.View_203_49657}>
            <View style={styles.View_203_49658}>
              <Text style={styles.Text_203_49658}>Oct 31, Sunday</Text>
            </View>
            <View style={styles.View_203_49659}>
              <View style={styles.View_I203_49659_239_73625}>
                <Text style={styles.Text_I203_49659_239_73625}>Unapproved</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_203_49660}>
            <Text style={styles.Text_203_49660}>9:00</Text>
          </View>
        </View>
        <View style={styles.View_203_49661}>
          <View style={styles.View_203_49662}>
            <View style={styles.View_I203_49662_236_64144}>
              <View style={styles.View_I203_49662_236_64145} />
            </View>
          </View>
          <View style={styles.View_203_49663}>
            <View style={styles.View_203_49664}>
              <Text style={styles.Text_203_49664}>Oct 31, Sunday</Text>
            </View>
            <View style={styles.View_203_49665}>
              <View style={styles.View_I203_49665_239_73625}>
                <Text style={styles.Text_I203_49665_239_73625}>Unapproved</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_203_49666}>
            <Text style={styles.Text_203_49666}>1:00</Text>
          </View>
        </View>
        <View style={styles.View_203_49667}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
            }}
            style={styles.ImageBackground_203_49668}
          />
          <View style={styles.View_203_49669}>
            <View style={styles.View_I203_49669_236_64149}>
              <View style={styles.View_I203_49669_236_64150} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5cd/b408/45b29ebff9991c93110daa0c15826062"
                }}
                style={styles.ImageBackground_I203_49669_236_64156}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a57/1209/eb599b922d9e2349237731276fcb7778"
            }}
            style={styles.ImageBackground_203_49670}
          />
          <View style={styles.View_203_49671}>
            <Text style={styles.Text_203_49671}>Marina Stone</Text>
          </View>
          <View style={styles.View_203_49672}>
            <Text style={styles.Text_203_49672}>11:00</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_49673}>
        <View style={styles.View_203_49674}>
          <View style={styles.View_I203_49674_192_41093} />
        </View>
        <View style={styles.View_203_49675}>
          <View style={styles.View_203_49676}>
            <View style={styles.View_I203_49676_236_64149}>
              <View style={styles.View_I203_49676_236_64150} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a64/842d/2cd16ab1b910f373824f98c483328bf0"
                }}
                style={styles.ImageBackground_I203_49676_236_64156}
              />
            </View>
          </View>
          <View style={styles.View_203_49677}>
            <View style={styles.View_203_49678}>
              <Text style={styles.Text_203_49678}>Oct 31, Sunday</Text>
            </View>
            <View style={styles.View_203_49679}>
              <View style={styles.View_I203_49679_239_73625}>
                <Text style={styles.Text_I203_49679_239_73625}>Unapproved</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_203_49680}>
            <Text style={styles.Text_203_49680}>1:00</Text>
          </View>
        </View>
        <View style={styles.View_203_49681}>
          <View style={styles.View_203_49682}>
            <View style={styles.View_I203_49682_236_64149}>
              <View style={styles.View_I203_49682_236_64150} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a64/842d/2cd16ab1b910f373824f98c483328bf0"
                }}
                style={styles.ImageBackground_I203_49682_236_64156}
              />
            </View>
          </View>
          <View style={styles.View_203_49683}>
            <View style={styles.View_203_49684}>
              <Text style={styles.Text_203_49684}>Oct 31, Sunday</Text>
            </View>
            <View style={styles.View_203_49685}>
              <View style={styles.View_I203_49685_239_73625}>
                <Text style={styles.Text_I203_49685_239_73625}>Unapproved</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_203_49686}>
            <Text style={styles.Text_203_49686}>9:00</Text>
          </View>
        </View>
        <View style={styles.View_203_49687}>
          <View style={styles.View_203_49688}>
            <View style={styles.View_I203_49688_236_64144}>
              <View style={styles.View_I203_49688_236_64145} />
            </View>
          </View>
          <View style={styles.View_203_49689}>
            <View style={styles.View_203_49690}>
              <Text style={styles.Text_203_49690}>Oct 31, Sunday</Text>
            </View>
            <View style={styles.View_203_49691}>
              <View style={styles.View_I203_49691_239_73625}>
                <Text style={styles.Text_I203_49691_239_73625}>Unapproved</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_203_49692}>
            <Text style={styles.Text_203_49692}>1:00</Text>
          </View>
        </View>
        <View style={styles.View_203_49693}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
            }}
            style={styles.ImageBackground_203_49694}
          />
          <View style={styles.View_203_49695}>
            <View style={styles.View_I203_49695_236_64149}>
              <View style={styles.View_I203_49695_236_64150} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5cd/b408/45b29ebff9991c93110daa0c15826062"
                }}
                style={styles.ImageBackground_I203_49695_236_64156}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a57/1209/eb599b922d9e2349237731276fcb7778"
            }}
            style={styles.ImageBackground_203_49696}
          />
          <View style={styles.View_203_49697}>
            <Text style={styles.Text_203_49697}>Marina Stone</Text>
          </View>
          <View style={styles.View_203_49698}>
            <Text style={styles.Text_203_49698}>11:00</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_49699}>
        <View style={styles.View_203_49700}>
          <View style={styles.View_I203_49700_201_24900}>
            <View style={styles.View_I203_49700_201_24901}>
              <Text style={styles.Text_I203_49700_201_24901}>Approve</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_203_49701}>
          <View style={styles.View_I203_49701_202_25378}>
            <View style={styles.View_I203_49701_202_25379}>
              <Text style={styles.Text_I203_49701_202_25379}>Disapprove</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 249, 1)" },
  View_2: { height: hp("131%") },
  View_203_49640: {
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
  ImageBackground_I203_49640_203_49391: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  View_I203_49640_203_49392: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  ImageBackground_I203_49640_203_49396: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49640_203_49397: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I203_49640_203_49398: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49640_203_49399: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I203_49640_203_49399: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I203_49640_203_49400: {
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
  ImageBackground_I203_49640_203_49400_287_50850: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I203_49640_203_49401: {
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
  ImageBackground_I203_49640_203_49401_287_50827: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I203_49640_203_49402: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_203_49641: {
    width: wp("65%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_203_49641: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49642: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49642_287_49331: {
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
  View_I203_49642_287_49332: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49642_287_49334: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_49642_287_49335: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49642_287_49335: {
    color: "rgba(186, 191, 197, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49642_287_49336: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I203_49642_287_49336: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49642_287_49337: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49642_287_49337_217_24841: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_203_49643: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_203_49643: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49644: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("32%"),
    backgroundColor: "rgba(239, 241, 244, 1)"
  },
  View_203_49645: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("32%"),
    backgroundColor: "rgba(222, 88, 84, 1)"
  },
  View_203_49646: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("31%"),
    backgroundColor: "rgba(222, 88, 84, 1)",
    borderColor: "rgba(247, 248, 249, 1)",
    borderWidth: 1
  },
  View_203_49647: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("36%")
  },
  View_203_49648: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49648_192_41093: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_203_49649: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("11%")
  },
  View_203_49650: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49650_236_64149: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_49650_236_64150: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 38, 58, 1)"
  },
  ImageBackground_I203_49650_236_64156: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_203_49651: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%")
  },
  View_203_49652: {
    width: wp("31%"),
    minWidth: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_203_49652: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49653: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(242, 221, 223, 1)"
  },
  View_I203_49653_239_73625: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_49653_239_73625: {
    color: "rgba(191, 80, 81, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_203_49654: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_203_49654: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49655: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("20%")
  },
  View_203_49656: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49656_236_64149: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_49656_236_64150: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 38, 58, 1)"
  },
  ImageBackground_I203_49656_236_64156: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_203_49657: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%")
  },
  View_203_49658: {
    width: wp("31%"),
    minWidth: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_203_49658: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49659: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(242, 221, 223, 1)"
  },
  View_I203_49659_239_73625: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_49659_239_73625: {
    color: "rgba(191, 80, 81, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_203_49660: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_203_49660: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49661: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("30%")
  },
  View_203_49662: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49662_236_64144: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_49662_236_64145: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 225, 230, 1)",
    borderWidth: 2
  },
  View_203_49663: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%")
  },
  View_203_49664: {
    width: wp("31%"),
    minWidth: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_203_49664: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49665: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(242, 221, 223, 1)"
  },
  View_I203_49665_239_73625: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_49665_239_73625: {
    color: "rgba(191, 80, 81, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_203_49666: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_203_49666: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49667: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  ImageBackground_203_49668: {
    width: wp("78%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49669: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49669_236_64149: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_49669_236_64150: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 38, 58, 1)"
  },
  ImageBackground_I203_49669_236_64156: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_203_49670: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_203_49671: {
    width: wp("27%"),
    minWidth: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_203_49671: {
    color: "rgba(29, 38, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49672: {
    width: wp("11%"),
    minWidth: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_203_49672: {
    color: "rgba(29, 38, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49673: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("78%")
  },
  View_203_49674: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49674_192_41093: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_203_49675: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("11%")
  },
  View_203_49676: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49676_236_64149: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_49676_236_64150: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 38, 58, 1)"
  },
  ImageBackground_I203_49676_236_64156: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_203_49677: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%")
  },
  View_203_49678: {
    width: wp("31%"),
    minWidth: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_203_49678: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49679: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(242, 221, 223, 1)"
  },
  View_I203_49679_239_73625: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_49679_239_73625: {
    color: "rgba(191, 80, 81, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_203_49680: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_203_49680: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49681: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("20%")
  },
  View_203_49682: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49682_236_64149: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_49682_236_64150: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 38, 58, 1)"
  },
  ImageBackground_I203_49682_236_64156: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_203_49683: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%")
  },
  View_203_49684: {
    width: wp("31%"),
    minWidth: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_203_49684: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49685: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(242, 221, 223, 1)"
  },
  View_I203_49685_239_73625: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_49685_239_73625: {
    color: "rgba(191, 80, 81, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_203_49686: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_203_49686: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49687: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("30%")
  },
  View_203_49688: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49688_236_64144: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_49688_236_64145: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 225, 230, 1)",
    borderWidth: 2
  },
  View_203_49689: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%")
  },
  View_203_49690: {
    width: wp("31%"),
    minWidth: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_203_49690: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49691: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(242, 221, 223, 1)"
  },
  View_I203_49691_239_73625: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_49691_239_73625: {
    color: "rgba(191, 80, 81, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_203_49692: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_203_49692: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49693: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  ImageBackground_203_49694: {
    width: wp("78%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49695: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49695_236_64149: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_49695_236_64150: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 38, 58, 1)"
  },
  ImageBackground_I203_49695_236_64156: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_203_49696: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_203_49697: {
    width: wp("27%"),
    minWidth: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_203_49697: {
    color: "rgba(29, 38, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49698: {
    width: wp("11%"),
    minWidth: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_203_49698: {
    color: "rgba(29, 38, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49699: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("120%")
  },
  View_203_49700: {
    width: wp("44%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 88, 84, 1)"
  },
  View_I203_49700_201_24900: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49700_201_24901: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49700_201_24901: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49701: {
    width: wp("44%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 225, 230, 1)"
  },
  View_I203_49701_202_25378: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49701_202_25379: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49701_202_25379: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
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
