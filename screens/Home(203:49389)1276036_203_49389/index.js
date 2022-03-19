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
      <View style={styles.View_203_49390}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1555/b50a/a2faa26efeb969eeb92a91e7f2b16486"
          }}
          style={styles.ImageBackground_203_49391}
        />
        <View style={styles.View_203_49392}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/109f/7137/ea2c2d59e94727f9450c143061d6f3c9"
            }}
            style={styles.ImageBackground_203_49396}
          />
          <View style={styles.View_203_49397}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d04/f2a9/f85f21016c36ef92fc88f0b84587344e"
              }}
              style={styles.ImageBackground_203_49398}
            />
            <View style={styles.View_203_49399}>
              <Text style={styles.Text_203_49399}>9</Text>
            </View>
          </View>
          <View style={styles.View_203_49400}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7737/87c3/c460e6f004001c5f61b65d34a649eb1a"
              }}
              style={styles.ImageBackground_I203_49400_287_50850}
            />
          </View>
        </View>
        <View style={styles.View_203_49401}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3113/8259/1db7356c33ef06e84e16242b38b6881e"
            }}
            style={styles.ImageBackground_I203_49401_287_50827}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8bd/864a/9a07cf159c359dd0d4ad9218779506f0"
          }}
          style={styles.ImageBackground_203_49402}
        />
      </View>
      <View style={styles.View_203_49403}>
        <View style={styles.View_203_49404}>
          <View style={styles.View_I203_49404_192_41093} />
        </View>
        <View style={styles.View_203_49405}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f60/cf21/a6463d5a16539aa75bfdcbd669a7e2e3"
            }}
            style={styles.ImageBackground_203_49406}
          />
          <View style={styles.View_203_49410}>
            <Text style={styles.Text_203_49410}>Last 7 days</Text>
          </View>
          <View style={styles.View_203_49411}>
            <View style={styles.View_203_49412}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8cd/ec88/63364f53b3e62095f62de02c1eb54b91"
                }}
                style={styles.ImageBackground_203_49413}
              />
              <View style={styles.View_203_49414}>
                <Text style={styles.Text_203_49414}>Received</Text>
              </View>
            </View>
            <View style={styles.View_203_49415}>
              <View style={styles.View_203_49416}>
                <Text style={styles.Text_203_49416}>Converted</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99f9/b888/e2d78cd99423e5657047b10670f12c5b"
                }}
                style={styles.ImageBackground_203_49417}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_203_49418}>
          <View style={styles.View_203_49419}>
            <Text style={styles.Text_203_49419}>91</Text>
          </View>
          <View style={styles.View_203_49420}>
            <Text style={styles.Text_203_49420}>Overdue</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e656/a1af/b4dca7543e18c724ce7a64ff0d0a1705"
            }}
            style={styles.ImageBackground_203_49421}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
            }}
            style={styles.ImageBackground_203_49422}
          />
          <View style={styles.View_203_49423}>
            <View style={styles.View_203_49424}>
              <Text style={styles.Text_203_49424}>View</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f50/dd5f/2b54a05053d960eaaf37e6ac45176224"
              }}
              style={styles.ImageBackground_203_49425}
            />
          </View>
        </View>
        <View style={styles.View_203_49426}>
          <View style={styles.View_203_49427}>
            <Text style={styles.Text_203_49427}>48</Text>
          </View>
          <View style={styles.View_203_49428}>
            <Text style={styles.Text_203_49428}>Converted</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3069/b0b8/a93c4d6a07ec803f3a8ff78f6e7dbbac"
            }}
            style={styles.ImageBackground_203_49429}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
            }}
            style={styles.ImageBackground_203_49430}
          />
          <View style={styles.View_203_49431}>
            <View style={styles.View_203_49432}>
              <Text style={styles.Text_203_49432}>View</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f50/dd5f/2b54a05053d960eaaf37e6ac45176224"
              }}
              style={styles.ImageBackground_203_49433}
            />
          </View>
        </View>
        <View style={styles.View_203_49434}>
          <View style={styles.View_203_49435}>
            <Text style={styles.Text_203_49435}>139</Text>
          </View>
          <View style={styles.View_203_49436}>
            <Text style={styles.Text_203_49436}>New</Text>
          </View>
          <View style={styles.View_203_49437}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/350c/ba2f/31d827d24aa54291b22c3bab0578bf3a"
              }}
              style={styles.ImageBackground_I203_49437_217_25337}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
            }}
            style={styles.ImageBackground_203_49438}
          />
          <View style={styles.View_203_49439}>
            <View style={styles.View_203_49440}>
              <Text style={styles.Text_203_49440}>View</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f50/dd5f/2b54a05053d960eaaf37e6ac45176224"
              }}
              style={styles.ImageBackground_203_49441}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b710/9322/a7011b8c85decf567784f47960ab7466"
          }}
          style={styles.ImageBackground_203_49442}
        />
        <View style={styles.View_203_49443}>
          <View style={styles.View_I203_49443_201_24900}>
            <View style={styles.View_I203_49443_201_24901}>
              <Text style={styles.Text_I203_49443_201_24901}>
                + Add request
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_203_49444}>
          <Text style={styles.Text_203_49444}>Requests</Text>
        </View>
      </View>
      <View style={styles.View_203_49445}>
        <View style={styles.View_I203_49445_203_49404}>
          <View style={styles.View_I203_49445_203_49404_192_41093} />
        </View>
        <View style={styles.View_I203_49445_203_49405}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ec5/f73f/76fac732f51eb102f595868aaf6120ec"
            }}
            style={styles.ImageBackground_I203_49445_203_49406}
          />
          <View style={styles.View_I203_49445_203_49410}>
            <Text style={styles.Text_I203_49445_203_49410}>Last 7 days</Text>
          </View>
          <View style={styles.View_I203_49445_203_49411}>
            <View style={styles.View_I203_49445_203_49412}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f702/dff5/36c085231ba156edd813b6e1ae5eb9b4"
                }}
                style={styles.ImageBackground_I203_49445_203_49413}
              />
              <View style={styles.View_I203_49445_203_49414}>
                <Text style={styles.Text_I203_49445_203_49414}>Sent</Text>
              </View>
            </View>
            <View style={styles.View_I203_49445_203_49415}>
              <View style={styles.View_I203_49445_203_49416}>
                <Text style={styles.Text_I203_49445_203_49416}>Converted</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3515/075e/a536945acaa71ffa277f6dab1ee0560c"
                }}
                style={styles.ImageBackground_I203_49445_203_49417}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I203_49445_203_49418}>
          <View style={styles.View_I203_49445_203_49419}>
            <Text style={styles.Text_I203_49445_203_49419}>17 $1900</Text>
          </View>
          <View style={styles.View_I203_49445_203_49420}>
            <Text style={styles.Text_I203_49445_203_49420}>Draft</Text>
          </View>
          <View style={styles.View_I203_49445_203_49421}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b41f/84d7/ee8a0690c413893416a5e52f85ca9f72"
              }}
              style={styles.ImageBackground_I203_49445_203_49421_249_33138}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
            }}
            style={styles.ImageBackground_I203_49445_203_49422}
          />
          <View style={styles.View_I203_49445_203_49423}>
            <View style={styles.View_I203_49445_203_49424}>
              <Text style={styles.Text_I203_49445_203_49424}>View</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f50/dd5f/2b54a05053d960eaaf37e6ac45176224"
              }}
              style={styles.ImageBackground_I203_49445_203_49425}
            />
          </View>
        </View>
        <View style={styles.View_I203_49445_203_49426}>
          <View style={styles.View_I203_49445_203_49427}>
            <Text style={styles.Text_I203_49445_203_49427}>7 $10</Text>
          </View>
          <View style={styles.View_I203_49445_203_49428}>
            <Text style={styles.Text_I203_49445_203_49428}>
              Changes request
            </Text>
          </View>
          <View style={styles.View_I203_49445_203_49429}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/979b/253d/0b284535e8d64552ebb84921c5cea3a2"
              }}
              style={styles.ImageBackground_I203_49445_203_49429_249_33118}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
            }}
            style={styles.ImageBackground_I203_49445_203_49430}
          />
          <View style={styles.View_I203_49445_203_49431}>
            <View style={styles.View_I203_49445_203_49432}>
              <Text style={styles.Text_I203_49445_203_49432}>View</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f50/dd5f/2b54a05053d960eaaf37e6ac45176224"
              }}
              style={styles.ImageBackground_I203_49445_203_49433}
            />
          </View>
        </View>
        <View style={styles.View_I203_49445_203_49434}>
          <View style={styles.View_I203_49445_203_49435}>
            <Text style={styles.Text_I203_49445_203_49435}>67 $120</Text>
          </View>
          <View style={styles.View_I203_49445_203_49436}>
            <Text style={styles.Text_I203_49445_203_49436}>Approved</Text>
          </View>
          <View style={styles.View_I203_49445_203_49437}>
            <View style={styles.View_I203_49445_203_49437_217_25317}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9fb/ec6e/d53d5da3c89b5cf78f7fcad59fe9a521"
                }}
                style={styles.ImageBackground_I203_49445_203_49437_217_25309}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9953/6979/0704275dca03f5d45303fad0a681346a"
                }}
                style={styles.ImageBackground_I203_49445_203_49437_217_25316}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
            }}
            style={styles.ImageBackground_I203_49445_203_49438}
          />
          <View style={styles.View_I203_49445_203_49439}>
            <View style={styles.View_I203_49445_203_49440}>
              <Text style={styles.Text_I203_49445_203_49440}>View</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f50/dd5f/2b54a05053d960eaaf37e6ac45176224"
              }}
              style={styles.ImageBackground_I203_49445_203_49441}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b710/9322/a7011b8c85decf567784f47960ab7466"
          }}
          style={styles.ImageBackground_I203_49445_203_49442}
        />
        <View style={styles.View_I203_49445_203_49443}>
          <View style={styles.View_I203_49445_203_49443_201_24900}>
            <View style={styles.View_I203_49445_203_49443_201_24901}>
              <Text style={styles.Text_I203_49445_203_49443_201_24901}>
                + Add quote
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I203_49445_203_49444}>
          <Text style={styles.Text_I203_49445_203_49444}>Quotes</Text>
        </View>
      </View>
      <View style={styles.View_203_49446}>
        <Text style={styles.Text_203_49446}>Home</Text>
      </View>
      <View style={styles.View_203_49447}>
        <View style={styles.View_I203_49447_203_49404}>
          <View style={styles.View_I203_49447_203_49404_192_41093} />
        </View>
        <View style={styles.View_I203_49447_203_49405}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a584/b90a/3cf3fca29f2f5d613151586b95c89cb5"
            }}
            style={styles.ImageBackground_I203_49447_203_49406}
          />
          <View style={styles.View_I203_49447_203_49410}>
            <Text style={styles.Text_I203_49447_203_49410}>Last 7 days</Text>
          </View>
          <View style={styles.View_I203_49447_203_49411}>
            <View style={styles.View_I203_49447_203_49412}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0306/c666/d1bde983148e1ca4e4e95bf4c32062fa"
                }}
                style={styles.ImageBackground_I203_49447_203_49413}
              />
              <View style={styles.View_I203_49447_203_49414}>
                <Text style={styles.Text_I203_49447_203_49414}>Started</Text>
              </View>
            </View>
            <View style={styles.View_I203_49447_203_49415}>
              <View style={styles.View_I203_49447_203_49416}>
                <Text style={styles.Text_I203_49447_203_49416}>Complete</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e44/abe7/739163b0b0e93e16f9f234c5e36e2779"
                }}
                style={styles.ImageBackground_I203_49447_203_49417}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I203_49447_203_49418}>
          <View style={styles.View_I203_49447_203_49419}>
            <Text style={styles.Text_I203_49447_203_49419}>12</Text>
          </View>
          <View style={styles.View_I203_49447_203_49420}>
            <Text style={styles.Text_I203_49447_203_49420}>Late visit</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e656/a1af/b4dca7543e18c724ce7a64ff0d0a1705"
            }}
            style={styles.ImageBackground_I203_49447_203_49421}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
            }}
            style={styles.ImageBackground_I203_49447_203_49422}
          />
          <View style={styles.View_I203_49447_203_49423}>
            <View style={styles.View_I203_49447_203_49424}>
              <Text style={styles.Text_I203_49447_203_49424}>View</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f50/dd5f/2b54a05053d960eaaf37e6ac45176224"
              }}
              style={styles.ImageBackground_I203_49447_203_49425}
            />
          </View>
        </View>
        <View style={styles.View_I203_49447_203_49426}>
          <View style={styles.View_I203_49447_203_49427}>
            <Text style={styles.Text_I203_49447_203_49427}>141</Text>
          </View>
          <View style={styles.View_I203_49447_203_49428}>
            <Text style={styles.Text_I203_49447_203_49428}>
              Action required
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b5b/9e06/044b2c85eb28fea382e00e87c9351401"
            }}
            style={styles.ImageBackground_I203_49447_203_49429}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
            }}
            style={styles.ImageBackground_I203_49447_203_49430}
          />
          <View style={styles.View_I203_49447_203_49431}>
            <View style={styles.View_I203_49447_203_49432}>
              <Text style={styles.Text_I203_49447_203_49432}>View</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f50/dd5f/2b54a05053d960eaaf37e6ac45176224"
              }}
              style={styles.ImageBackground_I203_49447_203_49433}
            />
          </View>
        </View>
        <View style={styles.View_I203_49447_203_49434}>
          <View style={styles.View_I203_49447_203_49435}>
            <Text style={styles.Text_I203_49447_203_49435}>139</Text>
          </View>
          <View style={styles.View_I203_49447_203_49436}>
            <Text style={styles.Text_I203_49447_203_49436}>Active</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0972/25f9/87b81863772e4d04bc645145b87626b1"
            }}
            style={styles.ImageBackground_I203_49447_203_49437}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fe/31ca/fc9c7193f8d19d175664a035889b63aa"
            }}
            style={styles.ImageBackground_I203_49447_203_49438}
          />
          <View style={styles.View_I203_49447_203_49439}>
            <View style={styles.View_I203_49447_203_49440}>
              <Text style={styles.Text_I203_49447_203_49440}>View</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f50/dd5f/2b54a05053d960eaaf37e6ac45176224"
              }}
              style={styles.ImageBackground_I203_49447_203_49441}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b710/9322/a7011b8c85decf567784f47960ab7466"
          }}
          style={styles.ImageBackground_I203_49447_203_49442}
        />
        <View style={styles.View_I203_49447_203_49443}>
          <View style={styles.View_I203_49447_203_49443_201_24900}>
            <View style={styles.View_I203_49447_203_49443_201_24901}>
              <Text style={styles.Text_I203_49447_203_49443_201_24901}>
                + Add job
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I203_49447_203_49444}>
          <Text style={styles.Text_I203_49447_203_49444}>Jobs</Text>
        </View>
      </View>
      <View style={styles.View_203_49448}>
        <View style={styles.View_203_49449} />
        <View style={styles.View_203_49450}>
          <View style={styles.View_I203_49450_192_41093} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b710/9322/a7011b8c85decf567784f47960ab7466"
          }}
          style={styles.ImageBackground_203_49451}
        />
        <View style={styles.View_203_49452}>
          <Text style={styles.Text_203_49452}>Today’s appointments</Text>
        </View>
        <View style={styles.View_203_49453}>
          <View style={styles.View_203_49454}>
            <View style={styles.View_203_49455} />
            <View style={styles.View_203_49456}>
              <Text style={styles.Text_203_49456}>12</Text>
            </View>
            <View style={styles.View_203_49457}>
              <Text style={styles.Text_203_49457}>$190</Text>
            </View>
            <View style={styles.View_203_49458}>
              <Text style={styles.Text_203_49458}>Total</Text>
            </View>
          </View>
          <View style={styles.View_203_49459}>
            <View style={styles.View_203_49460} />
            <View style={styles.View_203_49461}>
              <Text style={styles.Text_203_49461}>6</Text>
            </View>
            <View style={styles.View_203_49462}>
              <Text style={styles.Text_203_49462}>$180</Text>
            </View>
            <View style={styles.View_203_49463}>
              <Text style={styles.Text_203_49463}>To go</Text>
            </View>
          </View>
          <View style={styles.View_203_49464}>
            <View style={styles.View_203_49465} />
            <View style={styles.View_203_49466}>
              <Text style={styles.Text_203_49466}>3</Text>
            </View>
            <View style={styles.View_203_49467}>
              <Text style={styles.Text_203_49467}>$0</Text>
            </View>
            <View style={styles.View_203_49468}>
              <Text style={styles.Text_203_49468}>Active</Text>
            </View>
          </View>
          <View style={styles.View_203_49469}>
            <View style={styles.View_203_49470} />
            <View style={styles.View_203_49471}>
              <Text style={styles.Text_203_49471}>0</Text>
            </View>
            <View style={styles.View_203_49472}>
              <Text style={styles.Text_203_49472}>$0</Text>
            </View>
            <View style={styles.View_203_49473}>
              <Text style={styles.Text_203_49473}>Complete</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7c/5171/2d57596e9093fa64eecfb49dc9b81cf3"
            }}
            style={styles.ImageBackground_203_49474}
          />
        </View>
        <View style={styles.View_203_49476}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7c/5171/2d57596e9093fa64eecfb49dc9b81cf3"
            }}
            style={styles.ImageBackground_203_49477}
          />
          <View style={styles.View_203_49478}>
            <View style={styles.View_203_49479}>
              <Text style={styles.Text_203_49479}>Olga Smith - Re...</Text>
            </View>
            <View style={styles.View_203_49480}>
              <Text style={styles.Text_203_49480}>3:00</Text>
            </View>
            <View style={styles.View_203_49481}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc8d/5cfd/38aeb267bc6cb5b5cea0286923424e92"
                }}
                style={styles.ImageBackground_I203_49481_217_24888}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05d3/e096/6955b214a55fc65acf0c14c8f42f1343"
              }}
              style={styles.ImageBackground_203_49482}
            />
          </View>
        </View>
        <View style={styles.View_203_49483}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7c/5171/2d57596e9093fa64eecfb49dc9b81cf3"
            }}
            style={styles.ImageBackground_203_49484}
          />
          <View style={styles.View_203_49485}>
            <View style={styles.View_203_49486}>
              <Text style={styles.Text_203_49486}>Olga Smith - Re...</Text>
            </View>
            <View style={styles.View_203_49487}>
              <Text style={styles.Text_203_49487}>1:00</Text>
            </View>
            <View style={styles.View_203_49488}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc8d/5cfd/38aeb267bc6cb5b5cea0286923424e92"
                }}
                style={styles.ImageBackground_I203_49488_217_24888}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3065/5bf7/fc8091414e821eb5485c674e5eb050c0"
              }}
              style={styles.ImageBackground_203_49489}
            />
          </View>
        </View>
        <View style={styles.View_203_49490}>
          <View style={styles.View_203_49492}>
            <View style={styles.View_203_49493}>
              <Text style={styles.Text_203_49493}>Olga Smith - Re...</Text>
            </View>
            <View style={styles.View_203_49494}>
              <Text style={styles.Text_203_49494}>12:00</Text>
            </View>
            <View style={styles.View_203_49495}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc8d/5cfd/38aeb267bc6cb5b5cea0286923424e92"
                }}
                style={styles.ImageBackground_I203_49495_217_24888}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/201a/a214/4d9ad8ec1969d4d92fa40592c2ee0219"
              }}
              style={styles.ImageBackground_203_49496}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 249, 1)" },
  View_2: { height: hp("272%") },
  View_203_49390: {
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
  ImageBackground_203_49391: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  View_203_49392: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  ImageBackground_203_49396: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49397: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_203_49398: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49399: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_203_49399: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_203_49400: {
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
  ImageBackground_I203_49400_287_50850: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_203_49401: {
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
  ImageBackground_I203_49401_287_50827: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_203_49402: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_203_49403: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_49404: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49404_192_41093: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_203_49405: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("40%")
  },
  ImageBackground_203_49406: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_203_49410: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_203_49410: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49411: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_49412: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_203_49413: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49414: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_203_49414: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49415: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%")
  },
  View_203_49416: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_203_49416: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_49417: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49418: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("29%")
  },
  View_203_49419: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_203_49419: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49420: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_203_49420: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_49421: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_203_49422: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_203_49423: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_49424: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_49424: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_49425: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_203_49426: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("20%")
  },
  View_203_49427: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_203_49427: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49428: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_203_49428: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_49429: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_203_49430: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_203_49431: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_49432: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_49432: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_49433: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_203_49434: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  View_203_49435: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_203_49435: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49436: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_203_49436: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49437: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49437_217_25337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_203_49438: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_203_49439: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_49440: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_49440: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_49441: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_203_49442: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%")
  },
  View_203_49443: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("1%"),
    backgroundColor: "rgba(222, 88, 84, 1)"
  },
  View_I203_49443_201_24900: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49443_201_24901: {
    width: wp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49443_201_24901: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49444: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_203_49444: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49445: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("84%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49445_203_49404: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49445_203_49404_192_41093: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_I203_49445_203_49405: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("40%")
  },
  ImageBackground_I203_49445_203_49406: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_I203_49445_203_49410: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_49445_203_49410: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49445_203_49411: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49445_203_49412: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I203_49445_203_49413: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49445_203_49414: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_I203_49445_203_49414: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49445_203_49415: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  View_I203_49445_203_49416: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_I203_49445_203_49416: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49445_203_49417: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49445_203_49418: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("29%")
  },
  View_I203_49445_203_49419: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I203_49445_203_49419: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49445_203_49420: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_49445_203_49420: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49445_203_49421: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49445_203_49421_249_33138: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I203_49445_203_49422: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_I203_49445_203_49423: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49445_203_49424: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49445_203_49424: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49445_203_49425: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I203_49445_203_49426: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("20%")
  },
  View_I203_49445_203_49427: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I203_49445_203_49427: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49445_203_49428: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_49445_203_49428: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49445_203_49429: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49445_203_49429_249_33118: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I203_49445_203_49430: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_I203_49445_203_49431: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49445_203_49432: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49445_203_49432: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49445_203_49433: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I203_49445_203_49434: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  View_I203_49445_203_49435: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I203_49445_203_49435: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49445_203_49436: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_49445_203_49436: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49445_203_49437: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_49445_203_49437_217_25317: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I203_49445_203_49437_217_25309: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I203_49445_203_49437_217_25316: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I203_49445_203_49438: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_I203_49445_203_49439: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49445_203_49440: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49445_203_49440: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49445_203_49441: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_I203_49445_203_49442: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%")
  },
  View_I203_49445_203_49443: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("1%"),
    backgroundColor: "rgba(222, 88, 84, 1)"
  },
  View_I203_49445_203_49443_201_24900: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49445_203_49443_201_24901: {
    width: wp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49445_203_49443_201_24901: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49445_203_49444: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I203_49445_203_49444: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49446: {
    width: wp("19%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_203_49446: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49447: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("149%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49447_203_49404: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49447_203_49404_192_41093: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  View_I203_49447_203_49405: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("40%")
  },
  ImageBackground_I203_49447_203_49406: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_I203_49447_203_49410: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_49447_203_49410: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49447_203_49411: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49447_203_49412: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I203_49447_203_49413: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49447_203_49414: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_I203_49447_203_49414: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49447_203_49415: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  View_I203_49447_203_49416: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_I203_49447_203_49416: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49447_203_49417: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I203_49447_203_49418: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("29%")
  },
  View_I203_49447_203_49419: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I203_49447_203_49419: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49447_203_49420: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_49447_203_49420: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49447_203_49421: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I203_49447_203_49422: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_I203_49447_203_49423: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49447_203_49424: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49447_203_49424: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49447_203_49425: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I203_49447_203_49426: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("20%")
  },
  View_I203_49447_203_49427: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I203_49447_203_49427: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49447_203_49428: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_49447_203_49428: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49447_203_49429: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I203_49447_203_49430: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_I203_49447_203_49431: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49447_203_49432: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49447_203_49432: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49447_203_49433: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I203_49447_203_49434: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  View_I203_49447_203_49435: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I203_49447_203_49435: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49447_203_49436: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I203_49447_203_49436: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49447_203_49437: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I203_49447_203_49438: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_I203_49447_203_49439: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49447_203_49440: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49447_203_49440: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I203_49447_203_49441: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_I203_49447_203_49442: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%")
  },
  View_I203_49447_203_49443: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("1%"),
    backgroundColor: "rgba(222, 88, 84, 1)"
  },
  View_I203_49447_203_49443_201_24900: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49447_203_49443_201_24901: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I203_49447_203_49443_201_24901: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I203_49447_203_49444: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I203_49447_203_49444: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49448: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("215%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_49449: {
    width: wp("469%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_203_49450: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_49450_192_41093: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 241, 244, 1)",
    borderWidth: 1
  },
  ImageBackground_203_49451: {
    width: wp("78%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_203_49452: {
    width: wp("50%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_203_49452: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49453: {
    width: wp("78%"),
    height: hp("16%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_203_49454: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_49455: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(18, 36, 52, 1)"
  },
  View_203_49456: {
    width: wp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_203_49456: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49457: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_203_49457: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49458: {
    width: wp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_203_49458: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49459: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_49460: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(85, 157, 240, 1)"
  },
  View_203_49461: {
    width: wp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_203_49461: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49462: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_203_49462: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49463: {
    width: wp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_203_49463: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49464: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_49465: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 194, 62, 1)"
  },
  View_203_49466: {
    width: wp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_203_49466: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49467: {
    width: wp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_203_49467: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49468: {
    width: wp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_203_49468: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49469: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_49470: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(100, 195, 151, 1)"
  },
  View_203_49471: {
    width: wp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_203_49471: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49472: {
    width: wp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_203_49472: {
    color: "rgba(9, 10, 10, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49473: {
    width: wp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_203_49473: {
    color: "rgba(145, 151, 159, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_49474: {
    width: wp("78%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49476: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_203_49477: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49478: {
    width: wp("78%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49479: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_203_49479: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49480: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_203_49480: {
    color: "rgba(18, 36, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49481: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49481_217_24888: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_203_49482: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_49483: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_203_49484: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49485: {
    width: wp("78%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49486: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_203_49486: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49487: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_203_49487: {
    color: "rgba(18, 36, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49488: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49488_217_24888: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_203_49489: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_49490: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_49492: {
    width: wp("78%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_203_49493: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_203_49493: {
    color: "rgba(56, 65, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49494: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_203_49494: {
    color: "rgba(18, 36, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_49495: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I203_49495_217_24888: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_203_49496: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
