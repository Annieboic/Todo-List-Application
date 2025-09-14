import React from 'react';
import {EditIcon, HStack, IconButton, Text} from "@chakra-ui/icons";




const Task = ({ task }) => {
    return (
        <HStack spacing={2}>
            <Text>{task.name}</Text>

           <IconButton
               variant="outline"
               colorScheme="teal"
           icon={<EditIcon />}/>


        </HStack>

    );
};

export default Task;
