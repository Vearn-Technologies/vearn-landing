import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Footer from "../layout/footer";
import Subscribe from "./subscribe";


const promoterMessages = [
	"Hey, Promoters! Amplify your influence with VEARN! We ensure your faves get genuine support, with each vote making a real impact. Time to up your game in a user-friendly way. Dive into the VEARN experience today!",
	"Promoters, boost your faves' visibility with VEARN! Our platform guarantees authentic voter support. Experience the revolution in user engagement. Join VEARN now!",
	"Hello, Promoters! Maximize your reach with VEARN! We promise your faves get valid voter support, turning every vote into a significant step forward. Explore the future of user engagement with VEARN today!",
];

const voterMessages = [
	"With VEARN, you're not just a fan, you're a part of the journey! Cast votes for your fave stars across a multitude of shows, and get rewarded while doing it!",
	"On VEARN, your vote counts and pays! Support your favorite stars on all your favorite shows and earn along the way!",
	"Join VEARN and make your mark! Vote for your favorite stars, influence their journey, and earn rewards! Make watching your favorite shows even more exciting!",
];

function getRandomMessage(messages: string[]): string {
	return messages[Math.floor(Math.random() * messages.length)];
}

const EmptyPromotions: React.FC<{}> = () => {
	const [isPromoterMessages, setIsPromoterMessages] = useState<string[]>([]);
	const [isVoterMessages, setIsVoterMessages] = useState<string[]>([]);
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
						Promote your Faves on VEARN
					</Text>
					{isClient && (
						<Text
							fontSize="sm"
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
					<Image src="/multi-banner.png" alt="banner of multiple shows" h="auto" />
					<Box className="bg-gradient-empty"></Box>
				</Box>
			</Flex>
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
					<Image src="/bbn-banner.png" alt="banner of multiple shows" h="auto" />{" "}
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
						Show Love to Your Favorite Stars!{" "}
					</Text>
					{isClient && (
						<Text
							fontSize="sm"
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
			<Subscribe />
			<Footer />
		</section>
	);
};

export default EmptyPromotions;
