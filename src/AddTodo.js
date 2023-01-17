import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function AddTodo({ addTodo }) {
  const toast = useToast();
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!content) {
      toast({
        title: "No Content",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={8}>
        <Input
          placeholder="Write Todo"
          size="md"
          variant="filled"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <Button colorScheme="pink" px={4} type="submit" onClick={handleSubmit}>
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}
