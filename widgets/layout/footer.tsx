
import { Box, Flex, Text, Image } from "@chakra-ui/react" 
import Link from "next/link"


const Footer = () => {

    return (
        <Flex w="full" wrap="wrap" justifyContent="center">

            <Text textAlign="center" fontSize="sm" w="full" fontWeight="bold"   >
                Follow us on social media           
            </Text>
            <Box maxW="450px" w="450px" py={6} display="flex" justifyContent="space-around" >
                <Link href="https://www.instagram.com/vearn_hq">
                    <Image src="/fb.png" alt="facebook" width="auto" />
                </Link>
                <Link href="https://twitter.com/vearn_hq">
                    <Image src="/twitter.png" alt="twitter" width="auto" />
                </Link>
                <Link href="https://www.instagram.com/vearn_hq">
                    <Image src="/ig.png" alt="instagram" width="auto" />
                </Link>
                <Link href="https://twitter.com/vearn_hq">
                    <Image src="/linkedin.png" alt="LinkedIn" width="auto" />
                </Link>
            </Box>

        </Flex>)
}

export default Footer