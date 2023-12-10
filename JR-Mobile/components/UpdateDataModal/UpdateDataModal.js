import {Button, Modal, FormControl, Input, Center, NativeBaseProvider} from "native-base";
import {useState, useEffect} from 'react';
import axios from 'axios';
// Assuming you have Axios installed for making HTTP requests

export const UpdateDataModal = (props) => {
    const {showModal, setShowModal, itemId} = props;
    const [updatedItem, setUpdatedItem] = useState({});

    useEffect(() => {
        // const fetchDataById = () =>
        console.log('Item ID', itemId);
        axios.get(`/item/${itemId}`).then((response) => {
            console.log('getitem', response.data.item);
            setUpdatedItem(response.data.item);
        }).catch((error) => {
            console.log(error);
        })
    }, [showModal]);

    const handleSave = async () => {
        try {

            console.log('updated', updatedItem);
            const response = await axios.put(`/item/update/`, updatedItem);

            console.log('Item updated successfully', response.data);

            setShowModal(false);


        } catch (error) {
            // Handle errors (you may want to add more error handling logic here)
            console.error('Error updating item', error);
        }
    };

    return (<Modal isOpen={showModal} onClose={() => setShowModal(false)} size='xl'>
        <Modal.Content maxWidth="400px">
            <Modal.CloseButton/>
            <Modal.Header>Update Item</Modal.Header>

            <Modal.Body>
                <FormControl>
                    <FormControl.Label>Item Name</FormControl.Label>
                    <Input
                        size="lg"
                        value={updatedItem.name}
                        onChange={(e) => setUpdatedItem({...updatedItem, name: e.nativeEvent.text})}
                    />
                </FormControl>

                <FormControl mt="3">
                    <FormControl.Label>Item Quantity</FormControl.Label>
                    <Input
                        size="lg"
                        value={updatedItem.quantity}
                        onChange={(e) => setUpdatedItem({...updatedItem, quantity: e.nativeEvent.text})}
                    />
                </FormControl>
                <FormControl mt="3">
                    <FormControl.Label>Item Batch</FormControl.Label>
                    <Input size="lg"
                        value={updatedItem.batch}
                        onChange={(e) => setUpdatedItem({...updatedItem, batch: e.nativeEvent.text})}
                    />
                </FormControl>

                <FormControl mt="3">
                    <FormControl.Label>Other Details</FormControl.Label>
                    <Input
                        size="lg"
                        value={updatedItem.other}
                        onChange={(e) => setUpdatedItem({...updatedItem, other: e.nativeEvent.text})}
                    />
                </FormControl>

                <FormControl mt="3">
                    <FormControl.Label>Status</FormControl.Label>
                    <Input
                        size="lg"
                        value={updatedItem.status}
                        onChange={(e) => setUpdatedItem({...updatedItem, status: e.nativeEvent.text})}
                    />
                </FormControl>
            </Modal.Body>

            <Modal.Footer>
                <Button.Group space={2}>
                    <Button variant="ghost" colorScheme="blueGray" onPress={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button onPress={handleSave}>
                        Save
                    </Button>
                </Button.Group>
            </Modal.Footer>
        </Modal.Content>
    </Modal>);
};
