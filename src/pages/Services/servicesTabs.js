import React, {useContext} from 'react';
import { Text, Block, Button, theme } from 'galio-framework'
import { ScrollView } from 'react-native-gesture-handler';
import { Pressable, View } from 'react-native';
import { Box, ListItem } from "@react-native-material/core";
import API from '../../services/api';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function ServicesTabs() {
  const tabs = ['Solicitados', 'Concluídos', 'Recusados'];
  var [selectedTab, setSelectedTab] = React.useState(0);
  var [orders, setOrders] = React.useState([]);
  var [completedOders, setCompletedOrders] = React.useState([]);
  var [refusedOders, setRefusedOrders] = React.useState([]);

  const init = async () => {
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
  }

  React.useEffect(() => {
    init();
  },[]);

  return (
    <View flex={1} style={{ flexDirection:'column'}}>
      <Block flex={1}>
        <ScrollView horizontal>
          {tabs.map((item, index) => {
            return(
              <Pressable onPress={() => setSelectedTab(index)} >
                <Block borderTopEndRadius={10}  borderTopStartRadius={10} height='100%' paddingHorizontal={20} middle backgroundColor={selectedTab == index? theme.COLORS.PRIMARY: null}>
                  <Text size={18} color={selectedTab == index? theme.COLORS.WHITE: theme.COLORS.BLACK} bold >
                    {item}
                  </Text>
                </Block>
              </Pressable>
            )
          })}
        </ScrollView>
      </Block>

      <Block flex={6}>
        <ScrollView>
          {
            selectedTab == 0 ? 
              orders.length > 0 ?
                orders.map((element) => {
                  return (
                    <ListItem
                      title={element.title.length <= 30? element.title : element.title.substring(0,30)+"..."}
                      trailing={props => <Icon name="chevron-right" {...props} />}
                      secondaryText={element.description.length <= 50 ? element.description : element.description.substring(0, 50)  + "..."}
                      meta={element.created_at}
                      leadingMode='icon'
                    />
                  )
                })
                :
                <ListItem
                  disabled
                  title="Nada por aqui ainda 😁"
                />
              :
              selectedTab == 1 ?
                completedOders.length > 0 ?
                  completedOders.map((element) => {
                    return (
                      <ListItem
                        title={element.title.length <= 30? element.title : element.title.substring(0,30)+"..."}
                        trailing={props => <Icon name="chevron-right" {...props} />}
                        secondaryText={element.description.length <= 50 ? element.description : element.description.substring(0, 50)  + "..."}
                        meta={element.created_at}
                      />
                    )
                  })
                  :
                  <ListItem
                    disabled
                    title="Nada por aqui ainda 😁"
                  />
                :
                refusedOders.length > 0 ?
                  refusedOders.map((element) => {
                    return (
                      <ListItem
                        title={element.title.length <= 30? element.title : element.title.substring(0,30)+"..."}
                        trailing={props => <Icon name="chevron-right" {...props} />}
                        secondaryText={element.description.length <= 50 ? element.description : element.description.substring(0, 50)  + "..."}
                        meta={element.created_at}
                      />
                    )
                  })
                  :
                  <ListItem
                    disabled
                    title="Nada por aqui ainda 😁"
                  />
          }
        </ScrollView>
      </Block>
    </View>
  )
}