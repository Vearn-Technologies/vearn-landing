import { Flex, Box, Text, Button } from "@chakra-ui/react";
import useReferral from "../../hooks/useReferral";

const Subscribe = () => {
	const { ref, clear } = useReferral();
	return (
		<Flex bg="bg.surface" boxShadow="card" borderRadius="20px" _dark={{ bg: "bg.band", borderRadius: 0 }} flexWrap="wrap" py={20} my={24} mx="auto" w="full" justifyContent="center">
			<Text textAlign="center" w="full" fontSize="4xl" my={6} fontWeight="bold">
				{/* Subscribe to our Newsletter */}
				The wait is over, we&apos;re live!
			</Text>
			<Text textAlign="center" fontSize="sm" w="full" fontWeight="" color="text.muted">
				Get paid cash every week for engaging and <br/> completing online tasks
				right in the comfort of your home!
				{/* Join the waitlist */}
			</Text>

			<a rel="noreferrer" target="_blank" href={`https://app.vearn.co/?refId=${ref}`}>
				<Button
					type="button"
					mt={6}
					colorScheme="brand"
					fontSize="sm"
					h="49px"
					px="4rem"
					onClick={() => clear()}
				>
					{/* Subscribe */}
					Signup Now!
				</Button>
			</a>
		</Flex>
	);
};

export default Subscribe;
