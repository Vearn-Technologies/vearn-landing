import React, { useState, useEffect } from "react";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";

import EmptyPromotions from "../widgets/home/empty-promotions";

const VoterPage = () => {
	// Timer

	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const countDownDate = new Date("July 01, 2023 00:00:00").getTime();
			const now = new Date().getTime();
			const distance = countDownDate - now;

			setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
			setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
			setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
			setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const Timer = [
		{
			id: 1,
			title: "Days",
			value: days,
		},
		{
			id: 2,
			title: "Hours",
			value: hours,
		},
		{
			id: 3,
			title: "Minutes",
			value: minutes,
		},
		{
			id: 4,
			title: "Seconds",
			value: seconds,
		},
	];
	return (
		<Box pb="20">
			<Box
				alignItems="center"
				justifyContent="center"
				gap={{ base: "0.5rem", md: "1rem" }}
				marginBottom="1rem"
				display={{ base: "flex", sm: "none" }}
			>
				{Timer.map((item) => (
					<Flex flexDirection="column" alignItems="center" key={item?.id}>
						<Text fontSize={{ base: "14px" }}>{item?.value}</Text>
						<Text fontSize={{ base: "10px" }}>{item?.title}</Text>
					</Flex>
				))}
			</Box>
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
