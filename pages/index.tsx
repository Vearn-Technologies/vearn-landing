import React from "react";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";

import EmptyPromotions from "../widgets/home/empty-promotions";

const VoterPage = () => {
	return (
		<Box pb="20">
			<Grid
				bg="url('/voter-bg.png')"
				bgRepeat="no-repeat"
				bgSize="cover"
				bgPosition="center"
				h="313px"
				borderRadius="20px"
				gridTemplateColumns={{ md: "repeat(7, 1fr)" }}
				overflow="hidden"
			>
				<GridItem colSpan={4} h="full">
					<Box pt={{ md: "16", base: "10" }} w="80%" mx="auto">
						<Text fontSize="4xl" fontWeight="bold">
							Vote and Earn
						</Text>
						<Text fontSize="sm" color="#D3D3D3" maxW="400px">
							Watch your favorite TV shows, cast your vote, and earn rewards! Our platform allows you to
							earn rewards for engaging with the shows you love. Join now and start earning rewards for
							your passion for TV!
						</Text>
						<Flex>
							<Image
								src="/bb-naija-large.png"
								alt="bbnaija"
								layout="fixed"
								width="82.95px"
								height="100px"
							/>
						</Flex>
					</Box>
				</GridItem>

				<GridItem
					colSpan={3}
					h="full"
					display={{ md: "block", base: "none" }}
					bg="url('/cover-photo.png')"
					bgRepeat="no-repeat"
					bgSize="cover"
					bgPosition="left"
				></GridItem>
			</Grid>

			<EmptyPromotions />
		</Box>
	);
};

VoterPage.title = "Home";

export async function getStaticProps() {
	return {
		props: {
			layout: "WITH_NAV_PLAIN",
		},
	};
}

export default VoterPage;
