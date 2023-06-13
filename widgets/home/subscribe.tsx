import { Flex, Box, Text, Button } from "@chakra-ui/react"


const Subscribe = () => {
 
    return (
        <Flex bg="black" flexWrap="wrap" py={20} my={24} mx="auto" w="full" justifyContent="center">
            <Text textAlign="center" w="full" fontSize="4xl" my={6} fontWeight="bold">Subscribe to our Newsletter</Text>
            <Text textAlign="center" fontSize="sm" w="full" fontWeight=""   >
                Get the latest updates on running shows and spotlights
            </Text>

            <a target="_blank" href="https://09a828c3.sibforms.com/serve/MUIEABq1fOo7P57LafXBc2eqCe3fgQmATVxiT9XCQmzi53lifrKEj3s9-n8RxyRZN8j3S5mZgBGXcs4Xa2sIivGNm6EEGAKEwlTRNaKE9H0Rgt2Swywycxn8s6iTfbyouExzRWpQsvmTkVVMKp0I6JzmKlPnd1mja7tsdjzbB_WXU-p9x6l8jjPQyIJBiMk0xQD4MPFmyeOf7BGb">
            <Button 
                type="button"
                mt={6}
                colorScheme="brand"
                fontSize="sm"
                h="49px"
                px="4rem"
            >
                Subscribe
            </Button>

            </a>


        </Flex>
    )
}

export default Subscribe