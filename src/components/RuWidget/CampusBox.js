import React from "react";
import { NativeBaseProvider, Box, Actionsheet, VStack, Select, CheckIcon, ScrollView, HStack, Text, Stack, AspectRatio, Image, Center, Heading, } from 'native-base';
import { StyleSheet, TouchableOpacity, SafeAreaView, Pressable, FlatList, Dimensions } from 'react-native';

const CampusBox = (props) => {
    return (
        <Pressable margin={4} onPress={props.onPress} >
            <Box backgroundColor={"violet.500"} paddingX={5} paddingY={10} borderRadius={12}>
                <Text color="white" fontWeight="medium" fontSize="xl">
                    {props.campus}
                </Text>
            </Box>
        </Pressable>
    );
}

export default CampusBox;