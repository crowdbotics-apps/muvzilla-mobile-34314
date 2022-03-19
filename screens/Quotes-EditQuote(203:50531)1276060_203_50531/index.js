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
      <View style={styles.View_203_50532}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1555/b50a/a2faa26efeb969eeb92a91e7f2b16486"
          }}
          style={styles.ImageBackground_I203_50532_203_49391}
        />
        <View style={styles.View_I203_50532_203_49392}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ac0/c6f7/3cfc06b21bab00db272c6a5bb1548a98"
            }}
            style={styles.ImageBackground_I203_50532_203_49396}
          />
          <View style={styles.View_I203_50532_203_49397}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d04/f2a9/f85f21016c36ef92fc88f0b84587344e"
              }}
              style={styles.ImageBackground_I203_50532_203_49398}
            />
            <View style={styles.View_I203_50532_203_49399}>
              <Text style={styles.Text_I203_50532_203_49399}>9</Text>
            </View>
          </View>
          <View style={styles.View_I203_50532_203_49400}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7737/87c3/c460e6f004001c5f61b65d34a649eb1a"
              }}
              style={styles.ImageBackground_I203_50532_203_49400_287_50850}
            />
          </View>
        </View>
        <View style={styles.View_I203_50532_203_49401}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3113/8259/1db7356c33ef06e84e16242b38b6881e"
            }}
            style={styles.ImageBackground_I203_50532_203_49401_287_50827}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
          }}
          style={styles.ImageBackground_I203_50532_203_49402}
        />
      </View>
      <View style={styles.View_203_50533}>
        <Text style={styles.Text_203_50533}>Edit quote</Text>
      </View>
      <View style={styles.View_203_50534}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d362/191e/30ac34dab1b77f5e754bcd612b8b7d3a"
          }}
          style={styles.ImageBackground_I203_50534_194_72710}
        />
        <View style={styles.View_I203_50534_194_72711}>
          <Text style={styles.Text_I203_50534_194_72711}>
            Back to quotes list
          </Text>
        </View>
      </View>
      <View style={styles.View_203_50535}>
        <View style={styles.View_I203_50535_203_50087}>
          <View style={styles.View_I203_50535_203_50087_192_41093} />
        </View>
        <View style={styles.View_I203_50535_203_50088}>
          <View style={styles.View_I203_50535_203_50089}>
            <View style={styles.View_I203_50535_203_50091}>
              <Text style={styles.Text_I203_50535_203_50091}>Request</Text>
            </View>
            <View style={styles.View_I203_50535_203_50092}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a76/0028/5e974926de763564ddac2687e15ee66c"
                }}
                style={styles.ImageBackground_I203_50535_203_50092_217_24851}
              />
            </View>
          </View>
          <View style={styles.View_I203_50535_203_50093}>
            <View style={styles.View_I203_50535_203_50094} />
            <View style={styles.View_I203_50535_203_50095}>
              <Text style={styles.Text_I203_50535_203_50095}>Quote</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/076a/e2cc/46eecb316bb3823818ebf1bd48ebb02f"
              }}
              style={styles.ImageBackground_I203_50535_203_50096}
            />
          </View>
          <View style={styles.View_I203_50535_203_50097}>
            <View style={styles.View_I203_50535_203_50099}>
              <Text style={styles.Text_I203_50535_203_50099}>Job</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b8/3007/e63a21e2bf6995e132401f9d262f0cc7"
              }}
              style={styles.ImageBackground_I203_50535_203_50100}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1534/5894/b00059131e5866bc5fabd863a47d8f26"
            }}
            style={styles.ImageBackground_I203_50535_203_50101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1534/5894/b00059131e5866bc5fabd863a47d8f26"
            }}
            style={styles.ImageBackground_I203_50535_203_50102}
          />
        </View>
      </View>
      <View style={styles.View_203_50536}>
        <View style={styles.View_203_50537}>
          <View style={styles.View_I203_50537_287_49331} />
          <View style={styles.View_I203_50537_287_49332}>
            <View style={styles.View_I203_50537_287_49334}>
              <View style={styles.View_I203_50537_287_49335}>
                <Text style={styles.Text_I203_50537_287_49335}>
                  Client name
                </Text>
              </View>
              <View style={styles.View_I203_50537_287_49336}>
                <Text style={styles.Text_I203_50537_287_49336}>Alisha Key</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I203_50537_287_49337}>
            <View style={styles.View_I203_50537_287_49337_254_37598}>
              <View style={styles.View_I203_50537_287_49337_254_37597} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f83/dddc/de272ec7fe21a8391b1d19f35789123b"
                }}
                style={styles.ImageBackground_I203_50537_287_49337_254_37594}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_203_50538}>
          <View style={styles.View_203_50539}>
            <Text style={styles.Text_203_50539}>
              +38 066 657 87 12 marina.stone@gmail.com
            </Text>
          </View>
          <View style={styles.View_203_50540}>
            <Text style={styles.Text_203_50540}>Property address:</Text>
          </View>
          <View style={styles.View_203_50541}>
            <Text style={styles.Text_203_50541}>Contact details:</Text>
          </View>
          <View style={styles.View_203_50542}>
            <Text style={styles.Text_203_50542}>
              123 Broadway Street Apt. 5 New York, NY, USA 10101 Change
            </Text>
          </View>
        </View>
        <View style={styles.View_203_50543}>
          <View style={styles.View_I203_50543_287_49331} />
          <View style={styles.View_I203_50543_287_49332}>
            <View style={styles.View_I203_50543_287_49334}>
              <View style={styles.View_I203_50543_287_49335}>
                <Text style={styles.Text_I203_50543_287_49335}>
                  Quote title
                </Text>
              </View>
              <View style={styles.View_I203_50543_287_49336}>
                <Text style={styles.Text_I203_50543_287_49336}>
                  Replacing the bathroom sink
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_203_50544}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
            }}
            style={styles.ImageBackground_I203_50544_194_72713}
          />
          <View style={styles.View_I203_50544_194_72714}>
            <View style={styles.View_I203_50544_194_72715}>
              <Text style={styles.Text_I203_50544_194_72715}>General</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I203_50544_194_72717}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64b0/91f6/0ee0fbf4e5cf54f89c0a40c1b1217942"
            }}
            style={styles.ImageBackground_I203_50544_194_72718}
          />
        </View>
      </View>
      <View style={styles.View_203_50545}>
        <View style={styles.View_203_50546}>
          <View style={styles.View_I203_50546_202_25047} />
          <View style={styles.View_I203_50546_202_25050}>
            <View style={styles.View_I203_50546_202_25052}>
              <Text style={styles.Text_I203_50546_202_25052}>
                Please provide as much information as you can
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_203_50547}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
            }}
            style={styles.ImageBackground_I203_50547_194_72713}
          />
          <View style={styles.View_I203_50547_194_72714}>
            <View style={styles.View_I203_50547_194_72715}>
              <Text style={styles.Text_I203_50547_194_72715}>
                Service Details
              </Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I203_50547_194_72717}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad6/5a7a/b8ce91e8d278da41de7a9610b4013897"
            }}
            style={styles.ImageBackground_I203_50547_194_72718}
          />
        </View>
      </View>
      <View style={styles.View_203_50548}>
        <View style={styles.View_203_50549}>
          <View style={styles.View_I203_50549_202_25047} />
          <View style={styles.View_I203_50549_202_25050}>
            <View style={styles.View_I203_50549_202_25052}>
              <Text style={styles.Text_I203_50549_202_25052}>Note details</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_203_50552}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
            }}
            style={styles.ImageBackground_I203_50552_194_72713}
          />
          <View style={styles.View_I203_50552_194_72714}>
            <View style={styles.View_I203_50552_194_72715}>
              <Text style={styles.Text_I203_50552_194_72715}>
                Notes &amp; Attachements
              </Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I203_50552_194_72717}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1497/95a5/94de507189fa79978079f6a3f73045d0"
            }}
            style={styles.ImageBackground_I203_50552_194_72718}
          />
        </View>
        <View style={styles.View_203_50553}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/e9ab/79f029cb09017b84e50e833c623418e1"
            }}
            style={styles.ImageBackground_203_50554}
          />
          <View style={styles.View_203_50555}>
            <Text style={styles.Text_203_50555}>Add attachements</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_50556}>
        <View style={styles.View_I203_50556_202_25378}>
          <View style={styles.View_I203_50556_202_25379}>
            <Text style={styles.Text_I203_50556_202_25379}>Delete</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_50557}>
        <View style={styles.View_I203_50557_256_42164}>
          <View style={styles.View_I203_50557_256_42165}>
            <View style={styles.View_I203_50557_256_42166}>
              <Text style={styles.Text_I203_50557_256_42166}>
                Document name.pdf
              </Text>
            </View>
            <View style={styles.View_I203_50557_256_42167}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c9f/8c3d/7de0bce8e994ab45af34e1ab43d12073"
                }}
                style={styles.ImageBackground_I203_50557_256_42168}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebe8/f5cf/44b52cd91449abfd07b93541e1b4dee9"
                }}
                style={styles.ImageBackground_I203_50557_256_42169}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_203_50558}>
        <View style={styles.View_I203_50558_256_42164}>
          <View style={styles.View_I203_50558_256_42165}>
            <View style={styles.View_I203_50558_256_42166}>
              <Text style={styles.Text_I203_50558_256_42166}>Text.pdf</Text>
            </View>
            <View style={styles.View_I203_50558_256_42167}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c9f/8c3d/7de0bce8e994ab45af34e1ab43d12073"
                }}
                style={styles.ImageBackground_I203_50558_256_42168}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebe8/f5cf/44b52cd91449abfd07b93541e1b4dee9"
                }}
                style={styles.ImageBackground_I203_50558_256_42169}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_203_50559}>
        <View style={styles.View_203_50560}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
            }}
            style={styles.ImageBackground_I203_50560_194_72713}
          />
          <View style={styles.View_I203_50560_194_72714}>
            <View style={styles.View_I203_50560_194_72715}>
              <Text style={styles.Text_I203_50560_194_72715}>
                Product &amp; Services
              </Text>
            </View>
            <View style={styles.View_I203_50560_194_72716}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2332/1197/40759802f14d36f3853a6016906c271d"
                }}
                style={styles.ImageBackground_I203_50560_194_72716_228_25912}
              />
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I203_50560_194_72717}
            />
          </View>
          <View style={styles.View_I203_50560_194_72718}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8e8/dd83/995c1384fc8460e5e602d2744f19df1e"
              }}
              style={styles.ImageBackground_I203_50560_194_72718_256_41701}
            />
          </View>
        </View>
        <View style={styles.View_203_50561}>
          <View style={styles.View_203_50562}>
            <View style={styles.View_I203_50562_254_39749} />
            <View style={styles.View_I203_50562_254_39752}>
              <View style={styles.View_I203_50562_254_39754}>
                <Text style={styles.Text_I203_50562_254_39754}>Item</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_203_50563}>
            <View style={styles.View_I203_50563_202_25047} />
            <View style={styles.View_I203_50563_202_25050}>
              <View style={styles.View_I203_50563_202_25052}>
                <Text style={styles.Text_I203_50563_202_25052}>
                  Description
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_203_50564}>
            <View style={styles.View_I203_50564_287_49331} />
            <View style={styles.View_I203_50564_287_49332}>
              <View style={styles.View_I203_50564_287_49334}>
                <View style={styles.View_I203_50564_287_49335}>
                  <Text style={styles.Text_I203_50564_287_49335}>Qty</Text>
                </View>
                <View style={styles.View_I203_50564_287_49336}>
                  <Text style={styles.Text_I203_50564_287_49336}>0</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_203_50565}>
            <View style={styles.View_203_50566}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c32a/4c62/7465c1d38ff0f0396ccbaa7940c4be67"
                }}
                style={styles.ImageBackground_I203_50566_228_26061}
              />
            </View>
            <View style={styles.View_203_50567}>
              <Text style={styles.Text_203_50567}>Delete item</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
            }}
            style={styles.ImageBackground_203_50568}
          />
          <View style={styles.View_203_50569}>
            <View style={styles.View_I203_50569_287_49331} />
            <View style={styles.View_I203_50569_287_49332}>
              <View style={styles.View_I203_50569_287_49334}>
                <View style={styles.View_I203_50569_287_49335}>
                  <Text style={styles.Text_I203_50569_287_49335}>
                    Unit price
                  </Text>
                </View>
                <View style={styles.View_I203_50569_287_49336}>
                  <Text style={styles.Text_I203_50569_287_49336}>$100.00</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_203_50570}>
            <Text style={styles.Text_203_50570}>$0.00</Text>
          </View>
          <View style={styles.View_203_50571}>
            <Text style={styles.Text_203_50571}>Total</Text>
          </View>
        </View>
        <View style={styles.View_203_50572}>
          <View style={styles.View_203_50573}>
            <View style={styles.View_I203_50573_287_49331} />
            <View style={styles.View_I203_50573_287_49332}>
              <View style={styles.View_I203_50573_287_49334}>
                <View style={styles.View_I203_50573_287_49335}>
                  <Text style={styles.Text_I203_50573_287_49335}>Item</Text>
                </View>
                <View style={styles.View_I203_50573_287_49336}>
                  <Text style={styles.Text_I203_50573_287_49336}>
                    Replacing the bathroom sink
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_203_50574}>
            <View style={styles.View_I203_50574_202_25055} />
            <View style={styles.View_I203_50574_202_25056}>
              <View style={styles.View_I203_50574_202_25058}>
                <View style={styles.View_I203_50574_202_25059}>
                  <Text style={styles.Text_I203_50574_202_25059}>
                    Description
                  </Text>
                </View>
                <View style={styles.View_I203_50574_202_25060}>
                  <Text style={styles.Text_I203_50574_202_25060}>
                    The text is written here
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_203_50575}>
            <View style={styles.View_I203_50575_287_49331} />
            <View style={styles.View_I203_50575_287_49332}>
              <View style={styles.View_I203_50575_287_49334}>
                <View style={styles.View_I203_50575_287_49335}>
                  <Text style={styles.Text_I203_50575_287_49335}>Qty</Text>
                </View>
                <View style={styles.View_I203_50575_287_49336}>
                  <Text style={styles.Text_I203_50575_287_49336}>2</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_203_50576}>
            <View style={styles.View_203_50577}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c32a/4c62/7465c1d38ff0f0396ccbaa7940c4be67"
                }}
                style={styles.ImageBackground_I203_50577_228_26061}
              />
            </View>
            <View style={styles.View_203_50578}>
              <Text style={styles.Text_203_50578}>Delete item</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
            }}
            style={styles.ImageBackground_203_50579}
          />
          <View style={styles.View_203_50580}>
            <View style={styles.View_I203_50580_287_49331} />
            <View style={styles.View_I203_50580_287_49332}>
              <View style={styles.View_I203_50580_287_49334}>
                <View style={styles.View_I203_50580_287_49335}>
                  <Text style={styles.Text_I203_50580_287_49335}>
                    Unit price
                  </Text>
                </View>
                <View style={styles.View_I203_50580_287_49336}>
                  <Text style={styles.Text_I203_50580_287_49336}>$200.00</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_203_50581}>
            <Text style={styles.Text_203_50581}>$200.00</Text>
          </View>
          <View style={styles.View_203_50582}>
            <Text style={styles.Text_203_50582}>Total</Text>
          </View>
        </View>
        <View style={styles.View_203_50583}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
            }}
            style={styles.ImageBackground_203_50584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
            }}
            style={styles.ImageBackground_203_50585}
          />
          <View style={styles.View_203_50586}>
            <Text style={styles.Text_203_50586}>Tax</Text>
          </View>
          <View style={styles.View_203_50587}>
            <Text style={styles.Text_203_50587}>Total</Text>
          </View>
          <View style={styles.View_203_50588}>
            <Text style={styles.Text_203_50588}>add tax</Text>
          </View>
          <View style={styles.View_203_50589}>
            <Text style={styles.Text_203_50589}>$200.00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
            }}
            style={styles.ImageBackground_203_50590}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
            }}
            style={styles.ImageBackground_203_50591}
          />
          <View style={styles.View_203_50592}>
            <Text style={styles.Text_203_50592}>Discount</Text>
          </View>
          <View style={styles.View_203_50593}>
            <View style={styles.View_203_50594} />
            <View style={styles.View_203_50595}>
              <Text style={styles.Text_203_50595}>10,00</Text>
            </View>
            <View style={styles.View_203_50596}>
              <Text style={styles.Text_203_50596}>%</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/099b/a7ab/0f58e1412832a38a06dfbedbf14c2f1e"
              }}
              style={styles.ImageBackground_203_50597}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/931a/d4f8/2bf070a3ea1f81ef91c8f8d24aa1fe9c"
              }}
              style={styles.ImageBackground_203_50605}
            />
          </View>
          <View style={styles.View_203_50606}>
            <Text style={styles.Text_203_50606}>Subtotal</Text>
          </View>
          <View style={styles.View_203_50607}>
            <Text style={styles.Text_203_50607}>- $20.00</Text>
          </View>
          <View style={styles.View_203_50608}>
            <Text style={styles.Text_203_50608}>$200.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_50609}>
        <View style={styles.View_I203_50609_201_24900}>
          <View style={styles.View_I203_50609_201_24901}>
            <Text style={styles.Text_I203_50609_201_24901}>Update</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_203_50610}>
        <View style={styles.View_203_50611}>
          <View style={styles.View_203_50613} />
        </View>
        <View style={styles.View_203_50614}>
          <View style={styles.View_203_50615}>
            <View style={styles.View_I203_50615_201_24900}>
              <View style={styles.View_I203_50615_201_24901}>
                <Text style={styles.Text_I203_50615_201_24901}>
                  + Create tax
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_203_50616}>
            <View style={styles.View_I203_50616_239_88772} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3b1/4911/d346160f3dc17fc371431e9e1184e839"
              }}
              style={styles.ImageBackground_I203_50616_239_88767}
            />
            <View style={styles.View_I203_50616_239_88774}>
              <Text style={styles.Text_I203_50616_239_88774}>Tax (10.00%)</Text>
            </View>
          </View>
          <View style={styles.View_203_50617}>
            <View style={styles.View_I203_50617_239_88771} />
            <View style={styles.View_I203_50617_239_88773}>
              <Text style={styles.Text_I203_50617_239_88773}>Name</Text>
            </View>
          </View>
          <View style={styles.View_203_50618}>
            <View style={styles.View_I203_50618_239_88771} />
            <View style={styles.View_I203_50618_239_88773}>
              <Text style={styles.Text_I203_50618_239_88773}>Tax (12.00%)</Text>
            </View>
          </View>
          <View style={styles.View_203_50619}>
            <View style={styles.View_I203_50619_239_88771} />
            <View style={styles.View_I203_50619_239_88773}>
              <Text style={styles.Text_I203_50619_239_88773}>
                Tax name (20.00%)
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b63/ce2a/f776150b225eab7551c825e94327f399"
            }}
            style={styles.ImageBackground_203_50620}
          />
        </View>
        <View style={styles.View_203_50621} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e21f/d230/39b5b94f72809bdd8533c89cf7546b3c"
          }}
          style={styles.ImageBackground_203_50622}
        />
        <View style={styles.View_203_50623}>
          <Text style={styles.Text_203_50623}>Select tax</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 249, 1)" },
  View_2: { height: hp("252%") },
  View_203_50532: {
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
  ImageBackground_I203_50532_203_49391: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  View_I203_50532_203_49392: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  ImageBackground_I203_50532_203_49396: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_50532_203_49397: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I203_50532_203_49398: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_50532_203_49399: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I203_50532_203_49399: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I203_50532_203_49400: {
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
  ImageBackground_I203_50532_203_49400_287_50850: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I203_50532_203_49401: {
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
  ImageBackground_I203_50532_203_49401_287_50827: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I203_50532_203_49402: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_203_50533: {
    width: wp("33%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_203_50533: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50534: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I203_50534_194_72710: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_50534_194_72711: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50534_194_72711: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50535: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50535_203_50087: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50535_203_50087_192_41093: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_I203_50535_203_50088: {
    flexGrow: 1,
    width: wp("71%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_I203_50535_203_50089: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_50535_203_50091: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-end"
  },
  Text_I203_50535_203_50091: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_I203_50535_203_50092: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_50535_203_50092_217_24851: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I203_50535_203_50093: {
    width: wp("27%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_I203_50535_203_50094: {
    width: wp("27%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 236, 251, 1)"
  },
  View_I203_50535_203_50095: {
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-end"
  },
  Text_I203_50535_203_50095: {
    color: "rgba(18, 36, 52, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I203_50535_203_50096: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_I203_50535_203_50097: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  View_I203_50535_203_50099: {
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-end"
  },
  Text_I203_50535_203_50099: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I203_50535_203_50100: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I203_50535_203_50101: {
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("4%")
  },
  ImageBackground_I203_50535_203_50102: {
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("4%")
  },
  View_203_50536: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("35%")
  },
  View_203_50537: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50537_287_49331: {
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
  View_I203_50537_287_49332: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50537_287_49334: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_50537_287_49335: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50537_287_49335: {
    color: "rgba(186, 191, 197, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_50537_287_49336: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I203_50537_287_49336: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_50537_287_49337: {
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
  View_I203_50537_287_49337_254_37598: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I203_50537_287_49337_254_37597: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I203_50537_287_49337_254_37594: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_203_50538: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_203_50539: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_203_50539: {
    color: "rgba(97, 103, 117, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50540: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_50540: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50541: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_50541: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50542: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_203_50542: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50543: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50543_287_49331: {
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
  View_I203_50543_287_49332: {
    flexGrow: 1,
    width: wp("57%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50543_287_49334: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_50543_287_49335: {
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
  Text_I203_50543_287_49335: {
    color: "rgba(186, 191, 197, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_50543_287_49336: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I203_50543_287_49336: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50544: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I203_50544_194_72713: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_I203_50544_194_72714: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("-1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50544_194_72715: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_50544_194_72715: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_50544_194_72717: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  ImageBackground_I203_50544_194_72718: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_50545: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("76%")
  },
  View_203_50546: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50546_202_25047: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_I203_50546_202_25050: {
    flexGrow: 1,
    width: wp("71%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50546_202_25052: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_50546_202_25052: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50547: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I203_50547_194_72713: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_I203_50547_194_72714: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("-1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50547_194_72715: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_50547_194_72715: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_50547_194_72717: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%")
  },
  ImageBackground_I203_50547_194_72718: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_50548: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("205%")
  },
  View_203_50549: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50549_202_25047: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_I203_50549_202_25050: {
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
  View_I203_50549_202_25052: {
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
  Text_I203_50549_202_25052: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50552: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I203_50552_194_72713: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_I203_50552_194_72714: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("-1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50552_194_72715: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_50552_194_72715: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_50552_194_72717: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  ImageBackground_I203_50552_194_72718: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_50553: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%")
  },
  ImageBackground_203_50554: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_50555: {
    width: wp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_203_50555: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50556: {
    width: wp("42%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("241%"),
    backgroundColor: "rgba(222, 225, 230, 1)"
  },
  View_I203_50556_202_25378: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50556_202_25379: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50556_202_25379: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50557: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("233%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50557_256_42164: {
    flexGrow: 1,
    width: wp("56%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 241, 244, 1)"
  },
  View_I203_50557_256_42165: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50557_256_42166: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_50557_256_42166: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I203_50557_256_42167: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%")
  },
  ImageBackground_I203_50557_256_42168: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I203_50557_256_42169: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_203_50558: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("233%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50558_256_42164: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 241, 244, 1)"
  },
  View_I203_50558_256_42165: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50558_256_42166: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_50558_256_42166: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I203_50558_256_42167: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%")
  },
  ImageBackground_I203_50558_256_42168: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I203_50558_256_42169: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_203_50559: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("101%")
  },
  View_203_50560: {
    width: wp("91%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I203_50560_194_72713: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_I203_50560_194_72714: {
    flexGrow: 1,
    width: wp("46%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("-1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50560_194_72715: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I203_50560_194_72715: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_50560_194_72716: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_50560_194_72716_228_25912: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I203_50560_194_72717: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%")
  },
  View_I203_50560_194_72718: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_50560_194_72718_256_41701: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_50561: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_203_50562: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50562_254_39749: {
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
  View_I203_50562_254_39752: {
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
  View_I203_50562_254_39754: {
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
  Text_I203_50562_254_39754: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50563: {
    width: wp("91%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50563_202_25047: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_I203_50563_202_25050: {
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
  View_I203_50563_202_25052: {
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
  Text_I203_50563_202_25052: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50564: {
    width: wp("30%"),
    height: hp("7%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50564_287_49331: {
    flexGrow: 1,
    width: wp("30%"),
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
  View_I203_50564_287_49332: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50564_287_49334: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_50564_287_49335: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50564_287_49335: {
    color: "rgba(186, 191, 197, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_50564_287_49336: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I203_50564_287_49336: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50565: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%")
  },
  View_203_50566: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_50566_228_26061: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_203_50567: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_203_50567: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_50568: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_50569: {
    width: wp("30%"),
    height: hp("7%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50569_287_49331: {
    flexGrow: 1,
    width: wp("30%"),
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
  View_I203_50569_287_49332: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50569_287_49334: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_50569_287_49335: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50569_287_49335: {
    color: "rgba(186, 191, 197, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_50569_287_49336: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I203_50569_287_49336: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50570: {
    width: wp("12%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    justifyContent: "center"
  },
  Text_203_50570: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50571: {
    width: wp("7%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    justifyContent: "flex-start"
  },
  Text_203_50571: {
    color: "rgba(186, 191, 197, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50572: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%")
  },
  View_203_50573: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50573_287_49331: {
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
  View_I203_50573_287_49332: {
    flexGrow: 1,
    width: wp("57%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50573_287_49334: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_50573_287_49335: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50573_287_49335: {
    color: "rgba(186, 191, 197, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_50573_287_49336: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I203_50573_287_49336: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50574: {
    width: wp("91%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50574_202_25055: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_I203_50574_202_25056: {
    flexGrow: 1,
    width: wp("46%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50574_202_25058: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_50574_202_25059: {
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
  Text_I203_50574_202_25059: {
    color: "rgba(186, 191, 197, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_50574_202_25060: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I203_50574_202_25060: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50575: {
    width: wp("30%"),
    height: hp("7%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50575_287_49331: {
    flexGrow: 1,
    width: wp("30%"),
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
  View_I203_50575_287_49332: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50575_287_49334: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_50575_287_49335: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50575_287_49335: {
    color: "rgba(186, 191, 197, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_50575_287_49336: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I203_50575_287_49336: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50576: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%")
  },
  View_203_50577: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_50577_228_26061: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_203_50578: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_203_50578: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_50579: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_50580: {
    width: wp("30%"),
    height: hp("7%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50580_287_49331: {
    flexGrow: 1,
    width: wp("30%"),
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
  View_I203_50580_287_49332: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50580_287_49334: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I203_50580_287_49335: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50580_287_49335: {
    color: "rgba(186, 191, 197, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_50580_287_49336: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I203_50580_287_49336: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50581: {
    width: wp("17%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    justifyContent: "center"
  },
  Text_203_50581: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50582: {
    width: wp("7%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    justifyContent: "flex-start"
  },
  Text_203_50582: {
    color: "rgba(186, 191, 197, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50583: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%")
  },
  ImageBackground_203_50584: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_203_50585: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_50586: {
    width: wp("7%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_50586: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50587: {
    width: wp("10%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_50587: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50588: {
    width: wp("15%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    justifyContent: "flex-start"
  },
  Text_203_50588: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50589: {
    width: wp("17%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_203_50589: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_50590: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_203_50591: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_50592: {
    width: wp("18%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_50592: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50593: {
    width: wp("34%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_203_50594: {
    width: wp("34%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_50595: {
    width: wp("11%"),
    minWidth: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_203_50595: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50596: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_203_50596: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_50597: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_203_50605: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("1%")
  },
  View_203_50606: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_50606: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50607: {
    width: wp("17%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_203_50607: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50608: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    justifyContent: "flex-start"
  },
  Text_203_50608: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50609: {
    width: wp("44%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("241%"),
    backgroundColor: "rgba(222, 88, 84, 1)"
  },
  View_I203_50609_201_24900: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50609_201_24901: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50609_201_24901: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50610: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("196%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_50611: {
    width: wp("63%"),
    height: hp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_50613: {
    flexGrow: 1,
    width: wp("63%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 81, 249, 1)",
    opacity: 0.009999999776482582,
    borderColor: "rgba(0, 81, 249, 1)",
    borderWidth: 1
  },
  View_203_50614: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  View_203_50615: {
    width: wp("50%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(222, 88, 84, 1)"
  },
  View_I203_50615_201_24900: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50615_201_24901: {
    width: wp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50615_201_24901: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50616: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50616_239_88772: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(18, 36, 52, 1)",
    borderWidth: 2
  },
  ImageBackground_I203_50616_239_88767: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I203_50616_239_88774: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50616_239_88774: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50617: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50617_239_88771: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 225, 230, 1)",
    borderWidth: 2
  },
  View_I203_50617_239_88773: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50617_239_88773: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50618: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50618_239_88771: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 225, 230, 1)",
    borderWidth: 2
  },
  View_I203_50618_239_88773: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50618_239_88773: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_50619: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_50619_239_88771: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 225, 230, 1)",
    borderWidth: 2
  },
  View_I203_50619_239_88773: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_50619_239_88773: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_50620: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  View_203_50621: {
    flexGrow: 1,
    width: wp("63%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(56, 65, 84, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_203_50622: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("-1%")
  },
  View_203_50623: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_203_50623: {
    color: "rgba(255, 255, 255, 1)",
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
