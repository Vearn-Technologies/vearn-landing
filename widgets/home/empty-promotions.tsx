import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Footer from "../layout/footer";
import Subscribe from "./subscribe";


const promoterMessages = [
	"Hey, Advertisers! Elevate your campaign's reach with VEARN! We ensure your brand receives genuine engagement, with each interaction making a real impact. Enhance your marketing strategy in a user-friendly way. Dive into the VEARN experience today!",
	"Advertisers, skyrocket your brand's visibility with VEARN! Our platform guarantees authentic user engagement. Experience the revolution in interactive marketing. Join VEARN now!",
	"Hello, Advertisers! Extend your reach with VEARN! We promise your campaigns receive valid engagement, turning every click into a significant step forward. Explore the future of user interaction with VEARN today!",
];

const voterMessages = [
	"With VEARN, you're not just a social media user, you're a part of something bigger! Engage with tasks and content from your favorite brands, and earn rewards while doing it!",
	"On VEARN, your engagement counts and pays! Interact with exciting content, support your favorite brands, and earn rewards along the way!",
	"Join VEARN and make your interaction count! Engage with tasks, influence real-time campaigns, and earn cash rewards! Turn your social media time into a rewarding experience!",
];

function getRandomMessage(messages: string[]): string {
	return messages[Math.floor(Math.random() * messages.length)];
}

const EmptyPromotions: React.FC<{}> = () => {
	const [isPromoterMessages, setIsPromoterMessages] = useState<string>(promoterMessages[0]);
	const [isVoterMessages, setIsVoterMessages] = useState<string>(voterMessages[0]);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

  useEffect(() => {
		const interval = setInterval(() => {
			const pMessage = getRandomMessage(promoterMessages);
			const vMessage = getRandomMessage(voterMessages);
			setIsPromoterMessages(pMessage as any);
			setIsVoterMessages(vMessage as any);
		}, 20000);

		return () => {
			clearInterval(interval);
		};
  }, []);

	return (
		<section>

			<Flex
				mt={[20, 32]}
				flexWrap="wrap"
				w="full"
				justifyContent="space-between"
				flexDirection={{ md: "row", base: "column-reverse" }}
			>
				<Box
					w={{ base: "full", md: "50%" }}
					my="auto"
					px={{ "2xl": "8rem", base: 6 }}
					position="relative"
					zIndex={2}
					overflow="hidden"
					padding="30px"
					display="flex"
					justifyContent="center"
				>
					<Image src="https://res.cloudinary.com/dol2onsxl/image/upload/v1697978768/VEARN/public/engage_images_xckkgq.png" alt="banner of multiple shows" h="auto" />{" "}
					<Box className="bg-gradient-empty"></Box>
				</Box>
				<Box
					px={{ "2xl": "8rem", base: 6, md: "4rem" }}
					my="auto"
					w={{ base: "full", md: "50%" }}
					justifyContent={{ base: "center", md: "space-between" }}
					display={{ base: "flex", md: "static" }}
					flexWrap="wrap"
				>
					<Text
						fontSize="4xl"
						my={6}
						fontWeight="bold"
						textAlign={{ base: "center", md: "left" }}
						width="full"
					>
						Engage Daily, Complete Tasks, Start Earning Now!{" "}
					</Text>
					{isClient && (
						<Text
							fontSize="sm"
							color="text.muted"
							fontWeight=""
							maxW="450px"
							px={"4px"}
							textAlign={{ base: "center", md: "left" }}
						>
							{isVoterMessages}
						</Text>
					)}
				</Box>

			</Flex>

			<Flex
				mt={[20, 32]}
				flexWrap="wrap"
				w="full"
				justifyContent={{ base: "center", md: "space-between" }}
				display={{ base: "flex", md: "static" }}
			>
				<Box
					w={{ base: "full", md: "50%" }}
					my="auto"
					px={{ "2xl": "4rem", base: 3 }}
					justifyContent={{ base: "center", md: "space-between" }}
					display={{ base: "flex", md: "static" }}
					flexWrap="wrap"
				>
					<Text
						fontSize="4xl"
						my={6}
						fontWeight="bold"
						textAlign={{ base: "center", md: "left" }}
						width="full"
					>
						Advertise on VEARN, Get Real Engagement!
					</Text>
					{isClient && (
						<Text
							fontSize="sm"
							color="text.muted"
							fontWeight=""
							maxW="450px"
							px={"4px"}
							textAlign={{ base: "center", md: "left" }}
						>
							{isPromoterMessages}
						</Text>
					)}
				</Box>
				<Box
					px={{ "2xl": 6, base: 3 }}
					my={{ md: "auto", base: "2rem" }}
					w={{ base: "full", md: "50%" }}
					position="relative"
					zIndex={2}
					overflow="hidden"
					padding="30px"
					display="flex"
					justifyContent="center"
				>
					<Image src="https://res.cloudinary.com/dol2onsxl/image/upload/v1698477570/VEARN/public/advetiser_section_euqwpv.png" alt="banner of multiple shows" h="auto" />
					<Box className="bg-gradient-empty"></Box>
				</Box>
			</Flex>
			<Subscribe />
			<Footer />
		</section>
	);
};

export default EmptyPromotions;
