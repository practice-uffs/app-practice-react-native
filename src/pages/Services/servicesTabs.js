import React, {useContext} from 'react';
import { Text, Block, Button, theme } from 'galio-framework'
import { ScrollView } from 'react-native-gesture-handler';
import { RefreshControl, Pressable, View } from 'react-native';
import { Box, ListItem } from "@react-native-material/core";
import API from '../../services/api';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {  ActivityIndicator } from "@react-native-material/core";

//TODO: Adicionar push-refresh

export default function ServicesTabs() {
  const tabs = ['Solicitados', 'Concluídos', 'Recusados'];
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
        <ScrollView horizontal>
          {tabs.map((item, index) => {
            return(
              <Pressable onPress={() => setSelectedTab(index)} key={index}>
                <Block borderTopEndRadius={10} flex={1}  borderTopStartRadius={10} paddingHorizontal={20} middle backgroundColor={selectedTab == index? theme.COLORS.PRIMARY: null}>
                  <Text size={18} color={selectedTab == index? theme.COLORS.WHITE: theme.COLORS.BLACK} bold >
                    {item}
                  </Text>
                </Block>
              </Pressable>
            )
          })}
        </ScrollView>
      </Block>

      {loading ?
        <Block flex={6} middle>
          <ActivityIndicator size="large" />
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