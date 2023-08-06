import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Subscribe = () => {
	return (
		<Flex bg="black" flexWrap="wrap" py={20} my={24} mx="auto" w="full" justifyContent="center">
			<Text textAlign="center" w="full" fontSize="4xl" my={6} fontWeight="bold">
				{/* Subscribe to our Newsletter */}
				Get Early Access
			</Text>
			<Text textAlign="center" fontSize="sm" w="full" fontWeight="">
				Get notified when VEARN app is live!
				{/* Join the waitlist */}
			</Text>

			<a
				rel="noreferrer"
				target="_blank"
				href="https://forms.gle/6oukAaohvi3dchJ89"
			>
				<Button type="button" mt={6} colorScheme="brand" fontSize="sm" h="49px" px="4rem">
					{/* Subscribe */}
					Signup Now!
				</Button>
			</a>
		</Flex>
	);
};

export default Subscribe;
