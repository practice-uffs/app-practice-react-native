import React from "react";
import { NativeBaseProvider, Box, Actionsheet, VStack, Select, CheckIcon, ScrollView, HStack, Text, Stack, AspectRatio, Image, Center, Heading, } from 'native-base';
import CampusBox from "./CampusBox";

const RuWidget = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <Box alignItems="center">
                <Box  width="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                    }} _web={{
                    shadow: 2,
                    borderWidth: 0
                    }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="lg" ml="-1">
                                Cardápio do RU
                            </Heading>
                            <Text fontSize="xs" _light={{
                                color: "violet.500"
                            }} _dark={{
                                color: "violet.400"
                            }} fontWeight="500" ml="-0.5" mt="-1">
                            Saiba os cardápios da Semana.
                            </Text>
                        </Stack>
                        <ScrollView horizontal={true}>
                            <CampusBox campus="Cerro Largo" onPress={() => navigation.navigate('Cardápio RU', {campus: "cerro-largo", campusName:"Cerro Largo"})} />
                            <CampusBox campus="Chapecó" onPress={() => navigation.navigate('Cardápio RU', {campus: "chapeco", campusName:"Chapecó"})}/>
                            <CampusBox campus="Erechim" onPress={() => navigation.navigate('Cardápio RU', {campus: "erechim", campusName:"Erechim"})}/>
                            <CampusBox campus="Laranjeiras do Sul" onPress={() => navigation.navigate('Cardápio RU', {campus: "laranjeiras-do-sul", campusName:"Laranjeiras do Sul"})}/>
                            <CampusBox campus="Passo Fundo" onPress={() => navigation.navigate('Cardápio RU', {campus: "passo-fundo", campusName:"Passo Fundo"})}/>
                            <CampusBox campus="Realeza" onPress={() => navigation.navigate('Cardápio RU', {campus: "realeza", campusName:"Realeza"})}/>
                        </ScrollView>
                    </Stack>
                </Box>
            </Box>
        </NativeBaseProvider>
    )
}

export default RuWidget;