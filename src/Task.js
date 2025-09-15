import React from 'react';
import {Checkbox, DeleteIcon, EditIcon, Flex, HStack, IconButton, Text} from "@chakra-ui/icons";


const Task = ({ task,deleteTask,toggleCheckbox,editTask }) => {
    return (

        <Flex justify="center" mt={4} >
        <HStack>
            <Checkbox size="lg" isChecked={task.completed}
                      onChange={() => toggleCheckbox(task.id)}>
                <Text textDecoration={task.completed ? "line-through" : "none"}>{task.name}</Text></Checkbox>


            <IconButton
               variant="outline"
               colorScheme="green"
               icon={<EditIcon />}
               size="xs"
               ml={3}
               onClick={() => editTask(task.id)}/>

             <IconButton
            icon={<DeleteIcon />}
            size="xs"
            ml={3}
            colorScheme="red"
            variant="outline"
            onClick={() => deleteTask(task.id)}

            />


        </HStack>
        </Flex>

    );
};

export default Task;
