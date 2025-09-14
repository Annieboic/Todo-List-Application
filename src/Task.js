import React from 'react';
import {DeleteIcon, EditIcon, Flex, HStack, IconButton, Text} from "@chakra-ui/icons";


const Task = ({ task }) => {
    return (

        <Flex justify="center" mt={4} >
        <HStack>





            <Text>{task.name}</Text>

            <IconButton
               variant="outline"
               colorScheme="green"
               icon={<EditIcon />}
               size="xs"
               ml={3}/>

             <IconButton
            icon={<DeleteIcon />}
            size="xs"
            ml={3}
            colorScheme="red"
            variant="outline"

            />


        </HStack>
        </Flex>

    );
};

export default Task;
