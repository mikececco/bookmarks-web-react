import { Box, Link, VStack } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box
      as="nav"
      h="100vh"
      p={4}
    >
      <VStack spacing={4} align="start">
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Services</Link>
        <Link href="#">Contact</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
