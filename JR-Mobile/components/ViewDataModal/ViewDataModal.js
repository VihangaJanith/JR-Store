import {Button, Modal, FormControl, Input, Center, NativeBaseProvider} from "native-base";

export const ViewDataModal = (props) => {
    const {showModal, setShowModal, item} = props;

    return (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size='xl'>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton/>
                <Modal.Header>{item.name}</Modal.Header>

                <Modal.Body>
                    <FormControl>
                        <FormControl.Label>Item Name</FormControl.Label>
                        <Input size="lg"  variant="filled" value={item.name} isReadOnly/>
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Item Quantity</FormControl.Label>
                        <Input size="lg"  variant="filled" value={item.quantity.toString()} isReadOnly/>
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Item Batch</FormControl.Label>
                        <Input size="lg"  variant="filled" value={item.batch} isReadOnly/>
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Item Last Updated</FormControl.Label>
                        <Input size="lg"  variant="filled" value={item.lastUpdated} isReadOnly/>
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Status</FormControl.Label>
                        <Input size="lg"  variant="filled"value={item.status} isReadOnly/>
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Other Details</FormControl.Label>
                        <Input size="lg"  variant="filled" value={item.other} isReadOnly/>
                    </FormControl>
                </Modal.Body>

                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => setShowModal(false)}>
                            Close
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
};
