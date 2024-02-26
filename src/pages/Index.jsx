import { Box, Container, Heading, SimpleGrid, Text, Image, VStack, StackDivider, Button, useColorModeValue } from "@chakra-ui/react";
import { FaUtensils, FaMapMarkerAlt, FaPhone, FaInstagram } from "react-icons/fa";

const dishes = [
  {
    name: "Bandeja Paisa",
    description: "Traditional platter with beans, rice, plantain, arepa, chorizo, morcilla, chicharrón, and avocado.",
    imageSrc: 'https://images.unsplash.com/photo-1671240432518-747abe186105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kZWphJTIwcGFpc2F8ZW58MHx8fHwxNzA4OTM3NjUzfDA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    name: "Ajiaco",
    description: "Hearty soup made with chicken, potatoes, and the herb guasca, served with capers and cream.",
    imageSrc: 'https://images.unsplash.com/photo-1644753787067-d62ae70f303d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhamlhY28lMjBzb3VwfGVufDB8fHx8MTcwODkzNzY1M3ww&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    name: "Arepa de Huevo",
    description: "Cornmeal cake filled with egg and deep-fried to perfection.",
    imageSrc: 'https://images.unsplash.com/photo-1598065412434-6544dc76f81f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcmVwYSUyMGRlJTIwaHVldm98ZW58MHx8fHwxNzA4OTM3NjUzfDA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    name: "Empanadas",
    description: "Golden fried pastries filled with meat or cheese.",
    imageSrc: 'https://images.unsplash.com/photo-1519965501869-1954ff18db96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBlbXBhbmFkYXN8ZW58MHx8fHwxNzA4OTM3NjU0fDA&ixlib=rb-4.0.3&q=80&w=1080',
  },
];

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.100");

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8} divider={<StackDivider borderColor="gray.200" />}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>
            Sabor Colombiano
          </Heading>
          <Text fontSize="xl" color={textColor}>
            Authentic Colombian Cuisine
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {dishes.map((dish) => (
            <Box key={dish.name} bg={bgColor} boxShadow="lg" borderRadius="md" p={5} textAlign="center">
              <Image src={dish.imageSrc} borderRadius="md" mb={4} alt={dish.name} />
              <Heading as="h3" size="lg" mb={2}>
                {dish.name}
              </Heading>
              <Text mb={4} color={textColor}>
                {dish.description}
              </Text>
              <Button colorScheme="orange" leftIcon={<FaUtensils />}>
                Order Now
              </Button>
            </Box>
          ))}
        </SimpleGrid>

        <VStack spacing={4} as="footer" mt={12}>
          <Text fontSize="lg" fontWeight="bold">
            Visit Us
          </Text>
          <Box display="flex" alignItems="center" justifyContent="center">
            <FaMapMarkerAlt />
            <Text ml={2}>123 Avenida Bolívar, Bogotá, Colombia</Text>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <FaPhone />
            <Text ml={2}>+57 123 456 7890</Text>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <FaInstagram />
            <Text ml={2}>@saborcolombiano</Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
