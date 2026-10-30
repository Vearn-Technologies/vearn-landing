import React, { useState, useEffect } from "react";
import { Box, Flex, Grid, GridItem, Text, Image } from "@chakra-ui/react";

import EmptyPromotions from "../widgets/home/empty-promotions";

const VoterPage = () => {
	return (
		<Flex flexDirection="column" pb="20" marginTop="1rem" my="3rem" overflowY="scroll">
			<Grid
				// Light mode gets the soft pastel mesh; the dark gold-line artwork only suits dark mode.
				// _dark is a CSS selector, so the static export never paints the wrong one on reload.
				bg="radial-gradient(at 12% 18%, #E3EDFF 0, rgba(227, 237, 255, 0) 48%), radial-gradient(at 88% 22%, #FFF0D2 0, rgba(255, 240, 210, 0) 42%), radial-gradient(at 72% 96%, #DDF5EA 0, rgba(221, 245, 234, 0) 50%), #FFFFFF"
				border="1px solid"
				borderColor="#D6DEE6"
				_dark={{
					bgImage: "url('https://res.cloudinary.com/dol2onsxl/image/upload/v1697796985/VEARN/public/background_di4a6u.png')",
					bgColor: "transparent",
					borderColor: "transparent",
				}}
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
							Engage and Earn
						</Text>
						<Text fontSize="sm" color="text.muted" maxW="400px">
							Earn rewards effortlessly by engaging with and completing simple tasks on your favorite social media platforms,
							right from the comfort of your home.
							Turn your online activities into profits and enjoy the perks of a side hustle without the hustle!
						</Text>
						<Grid
                                templateColumns="repeat(3, 1fr)"
                                gap={7}
                                w="400px"
                                alignItems="center"
                                display={{ md: "grid", base: "none" }}
                                marginTop={{ xl: "0.5rem", base: "0" }}
                            >
                                <Image
                                    src="https://res.cloudinary.com/dol2onsxl/image/upload/v1697796982/VEARN/public/tiktok_logo_dabcw3.png"
                                    alt="tiktok"
                                    boxSize="70%"
                                    objectFit="contain"
                                    position="relative"
                                />

                                <Image
                                    src="https://res.cloudinary.com/dol2onsxl/image/upload/v1697844493/VEARN/public/ENGAGE_AND_EARN_ICON_2_zbzvi9.png"
                                    alt="phone"
                                    boxSize="70%"
                                    objectFit="contain"
                                    position="relative"
                                />

                                <Image
                                    alt="x twitter"
                                    src="https://res.cloudinary.com/dol2onsxl/image/upload/v1697844493/VEARN/public/ENGAGE_ICON_bt3uuo.png"
                                    boxSize="70%"
                                    objectFit="contain"
                                    position="relative"
                                />
                            </Grid>

					</Box>
				</GridItem>

				<GridItem
					colSpan={3}
					h="full"
					display={{ md: "block", base: "none" }}
					bg="url('https://res.cloudinary.com/dol2onsxl/image/upload/v1697798703/VEARN/public/image_placeholder_ej7rgo.png')"
					bgRepeat="no-repeat"
					bgSize="cover"
					bgPosition="left"
				></GridItem>
			</Grid>

			<EmptyPromotions />
		</Flex>
	);
};

VoterPage.title = "Paid to Vote, Paid To Click, Paid To Watch Videos, Paid To do Surveys | VEARN";

export async function getStaticProps() {
	return {
		props: {
			layout: "WITH_NAV_PLAIN",
		},
	};
}

export default VoterPage;
