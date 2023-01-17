import React, {useContext} from 'react';
import { Text, Block, Button, theme } from 'galio-framework'
import { ScrollView } from 'react-native-gesture-handler';
import { RefreshControl, Pressable, View, Image} from 'react-native';
import { Box, ListItem } from "@react-native-material/core";
import API from '../../services/api';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {  ActivityIndicator } from "@react-native-material/core";
import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { ListItem } from '@rneui/themed';

//TODO: Adicionar push-refresh

export default function ServicesTabs() {
  const tabs = [
    { name: 'Solicitados', selectedColor: '#FFB81C', icon: require('../../assets/icons/Solicitados-icon.png')},
    { name: 'Concluídos', selectedColor: '#218272', icon: require('../../assets/icons/Concluidos-icon.png')},
    { name: 'Recusados', selectedColor: '#B83A41', icon: require('../../assets/icons/Recusados-icon.png')},
];
  var [selectedTab, setSelectedTab] = React.useState(0);
  var [orders, setOrders] = React.useState([]);
  var [completedOders, setCompletedOrders] = React.useState([]);
  var [refusedOders, setRefusedOrders] = React.useState([]);
  var [loading, setLoading] = React.useState(false);
  var [refreshing, setRefreshing] = React.useState(false);


  const init = async () => {
    setLoading(true);
    setRefreshing(true);
    let data = await API.getRequestedServices();

    let completed = [],closed = [],noStatus = [];

    data.forEach(element => {
      element.title = element.title.replace(/(\r\n|\n|\r)/gm, "");
      element.description = element.description.replace(/(\r\n|\n|\r)/gm, "");

      if (element.status == "completed") completed.push(element);
      else if (element.status == "closed") closed.push(element);
      else noStatus.push(element);
    });

    setCompletedOrders(completed);
    setRefusedOrders(closed);
    setOrders(noStatus);
    setLoading(false);
    setRefreshing(false);
  }

  React.useEffect(() => {
    init();
  }, []);
  
  const ServiceList = () => {
    var show;
    switch (selectedTab) {
      case 0:
        show = orders;
        break;
      case 1:
        show = completedOders;
        break;
      case 2:
        show = refusedOders;
        break;
    }

    if (show.length > 0) {
      let elements = [];
      show.forEach((element, index) => {
        elements.push(
          <ListItem key={index}
            title={element.title.length <= 30? element.title : element.title.substring(0,30)+"..."}
            trailing={props => <Icon name="chevron-right" {...props} />}
            secondaryText={element.description.length <= 50 ? element.description : element.description.substring(0, 50)  + "..."}
            meta={element.created_at}
          />
        )
      })
      return elements;
    } else {
      return (
        <ListItem key={0}
          disabled
          title="Nada por aqui ainda 😁"
        />
      );
    }
  }

  return (
    <View flex={1} style={{ flexDirection: 'column' }}>
      <Block flex={1}>
        <View style={{ justifyContent: 'space-around', height: 35, flexDirection: 'row' }}>
          {tabs.map((item, index) => {
            return(
              <Pressable key={index} onPress={() => setSelectedTab(index)}>
                <Block flex={1} paddingHorizontal={18} middle borderBottomWidth={2}
                borderColor={selectedTab == index? item.selectedColor: '#DEE4EB'} flexDirection={'row'} >
                  <Image source={item.icon} style={{ marginRight: 2, marginLeft: 2 }}/>
                  <Text size={14} color={item.selectedColor} style={{ fontWeight: '600' }} >
                    {item.name}
                  </Text>
                </Block>
              </Pressable>
            )
          })}
        </View>
      </Block>

      {loading ?
        <Block flex={6} middle>
          <ActivityIndicator size="large" color="#003753" marginBottom={20} marginTop={20} />
        </Block>
        :
        <Block flex={7}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={init}
              />
            }
          >
            <ServiceList/>
          </ScrollView>
        </Block>
      }
    </View>
  )
}