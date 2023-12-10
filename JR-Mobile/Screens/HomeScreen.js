import {
    Box, Card, Center, Heading, HStack, Link, Switch, Text, useColorMode, Container,
    Header, Divider, VStack, Stack, Image, ScrollView, Button, Spacer
} from "native-base";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {RefreshControl} from "react-native";
import {ViewDataModal} from "../components/ViewDataModal/ViewDataModal";
import {UpdateDataModal} from "../components/UpdateDataModal/UpdateDataModal";

export const HomeScreen = () => {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);

        // Fetch data or perform any other async task
        axios.get('/item/all-items')
            .then((response) => {
                setItems(response.data.items);
                setRefreshing(false);
            })
            .catch((error) => {
                console.log(error);
                setRefreshing(false);
            });
    };

    useEffect(() => {
        axios.get('/item/all-items')
            .then((response) => {
                // console.log(response.data)
                setItems(response.data.items)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [showModal, showUpdateModal]);

    function ToggleDarkMode() {
        const {colorMode, toggleColorMode} = useColorMode();
        return (
            <HStack space={2} alignItems="center">
                <Text>Dark</Text>
                <Switch
                    isChecked={colorMode === "light"}
                    onToggle={toggleColorMode}
                    aria-label={
                        colorMode === "light" ? "switch to dark mode" : "switch to light mode"
                    }
                />
                <Text>Light</Text>
            </HStack>
        );
    }


    return (
        <Center
            _dark={{bg: "blueGray.900"}}
            _light={{bg: "blueGray.50"}}
            flex={1}
        >
            <ScrollView mt='7'
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
            >
                {items.map((item) => (
                    <Box key={item._id}
                         mt='2'
                         mb='2'
                         direction={["column", "column", "row"]} rounded="lg" overflow="hidden"
                         borderColor="coolGray.200" borderWidth="1" overflow="hidden" width='100%' _light={{
                        backgroundColor: "coolGray.50"
                    }} _dark={{
                        backgroundColor: "gray.700"
                    }}>

                        <Stack flex="1" px="4" py='4' space={[3, 3, 1.5]} justifyContent="space-around">
                            <Stack space="2">
                                <Heading size="xl" ml="-1">
                                    {item.name}
                                </Heading>
                                <Text fontSize="2xl" color="amber.600" fontWeight="500" ml="-0.5" mt="-1">
                                    <Text color="amber.600">Available Quantity: </Text>
                                    {item.quantity}
                                </Text>
                                <Text fontWeight="400" fontSize='lg'>
                                    Batch No : {item.batch}
                                </Text>
                                {item.other &&
                                    <Text fontWeight="400" fontSize='lg'>
                                        Other Details : {item.other}
                                    </Text>
                                }
                            </Stack>

                            <HStack>
                                <Button width='2/5' mr='2' onPress={() => { setShowModal(true); setSelectedItem(item)}}>
                                    View
                                </Button>

                                <Button width='2/5'
                                        // onPress={() => { setSelectedItem(item); setShowUpdateModal(true); }}
                                onPress={() => { console.log('Item ID', item._id); setShowUpdateModal(true); setSelectedItem(item);  }}

                                >
                                    Update
                                </Button>
                            </HStack>

                            <HStack alignItems="center" mt='7' justifyContent="space-between">
                                <Text color="coolGray.600" fontWeight="400">
                                    Last Updated : {item.lastUpdated}
                                </Text>
                                <Text color="coolGray.600" fontWeight="400">
                                    by Nimal
                                </Text>
                            </HStack>
                        </Stack>
                    </Box>
                ))}


            </ScrollView>

            {selectedItem && (
            <ViewDataModal showModal={showModal} setShowModal={setShowModal}
                           item={selectedItem}
            />
            )}
            {selectedItem && (
                <UpdateDataModal showModal={showUpdateModal} setShowModal={setShowUpdateModal}
                                 itemId={selectedItem._id}
                />
            )}
        </Center>
    )
}
