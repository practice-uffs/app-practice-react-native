import React from "react";
import API from "../../services/api";
import { View, ActivityIndicator } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Actionsheet, useDisclose, NativeBaseProvider } from "native-base";


const RuMenu = ({ route, navigation }) => {
    const { campus, campusName } = route.params;
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const { isOpen, onOpen, onClose } = useDisclose();
    const [menuSelected, setMenuSelected] = React.useState(null);
    const [menuContent, setMenuContent] = React.useState([]);

    React.useEffect( () => {
        getRuData(campus);
    }, []);

    const getRuData = async (value) => {
        if (value) {
            setLoading(true);
            let req = await API.getRuMenu(value);
            let newData = []
            for (let date of Object.keys(req)) {
                newData.push({
                    title: date,
                    content: req[date],
                })   
            }
            setData(newData);
            setLoading(false);

            let d = new Date();
            let today = ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" +
                d.getFullYear();
            if (req[today]) {
                setMenuContent(req[today]);
                setMenuSelected(today);
                onOpen();
            }
        }
    }
    
    return (
        <NativeBaseProvider>
            <View height='100%'>
                <Block padding={7} center>
                    <Text bold h5 >{campusName}</Text>
                </Block>
                {
                    loading ? 
                    <Block height='100%' middle >
                        <ActivityIndicator size="large" color={theme.COLORS.PRIMARY} />
                    </Block>
                    :
                    <Block padding={7} shadow backgroundColor={theme.COLORS.WHITE} style={{borderRadius: 20}}>
                            {data.map(element => <ListItem
                            title={element.title}
                            leading={<Icon name="calendar" size={24} />}
                            trailing={props => <Icon name="chevron-right" {...props} />}
                            onPress={() => {
                                setMenuContent(element.content);
                                setMenuSelected(element.title);
                                onOpen();
                            }}
                        />)}        
                    </Block>
                }
                <Actionsheet isOpen={isOpen} onClose={onClose} useRNModal>
                    <Actionsheet.Content>
                        <Block w="100%" h={60} padding={4} center>
                            <Text size={20} bold color={theme.COLORS.BLACK}>
                                Cardápio - {menuSelected}
                            </Text>
                        </Block>
                        {menuContent.map(
                            element => <Actionsheet.Item isDisabled>
                                {element}
                            </Actionsheet.Item>
                        )}
                    </Actionsheet.Content>
                </Actionsheet>
            </View>
        </NativeBaseProvider>
    )
}

export default RuMenu;