import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import VLogo from "../global/logo";

let timer: ReturnType<typeof setTimeout> | any;
const debounce = (func: Function, timeout = 500) => {
	clearTimeout(timer);
	timer = setTimeout(func, timeout);
};

const NavBar = () => {
	const router = useRouter();

	// Referral
	const [ref, setRef] = useState<string | null>(null);
	// Clear url after saving refId query to localstorage
	useEffect(() => {
		// Get the query parameter from the URL
		const refId = router.query.refId;

		// Check if it's the first mount
		const isFirstMount = localStorage.getItem("isFirstMount") === null;

		if (isFirstMount && refId) {
			// Save the query parameter to localStorage
			localStorage.setItem("refId", refId as any);

			// Attach the saved item to a tag (e.g., body or document.documentElement)
			// document.documentElement.setAttribute("data-my-query-param", queryParam);

			// Clear the query parameter from the URL
			const { pathname, query } = router;
			delete query.refId;

			// Replace the URL without preserving the browser history
			router.replace({ pathname, query }, undefined, { shallow: true });

			// Set isFirstMount to false in localStorage
			localStorage.setItem("isFirstMount", "false");
		}
		// Retrieve the saved query parameter from localStorage
		const savedRef = localStorage.getItem("refId");
		setRef(savedRef);
	}, [router]);
	const clear = () => {
		localStorage.removeItem("refId");
		localStorage.removeItem("isFirstMount");
	};

	// Timer

	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const countDownDate = new Date("August 21, 2023 20:00:00").getTime();
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
		<Flex
			justifyContent="space-between"
			height={{ md: "117px" }}
			py={{ base: 6, md: 0 }}
			px={{ base: "1rem", md: 0 }}
			alignItems="center"
			w={{ base: "90%", xl: "80%" }}
			mx="auto"
			gap={6}
		>
			<Box>
				<VLogo />
			</Box>
			<Flex gap={{ lg: "29px", base: "10px" }} ml={{ md: 2 }} width="max-content">
				{/* <a
						href={`https://app.vearn.co/?refId=${ref}`}
						target="_blank"
						rel="noreferrer noopener"
						onClick={() => clear()}
					>
						<Button
							type="submit"
							w="full"
							colorScheme="brand"
							fontSize="xs"
							fontWeight="medium"
							h="38px"
							minW={{ md: "118px" }}
						>
							Create Account
						</Button>
					</a>

					<Link href="/login">
						<Button
							type="submit"
							w="full"
							bg="transparent"
							border="1px"
							fontSize="xs"
							fontWeight="medium"
							h="38px"
							minW={{ md: "118px" }}
						>
							Sign in
						</Button>
					</Link> */}
				<a
					target="_blank"
					rel="noreferrer noopener"
					// href="https://forms.gle/6oukAaohvi3dchJ89"
					href={`https://app.vearn.co/?refId=${ref}`}
				>
					<Button
						type="submit"
						// w="full"
						colorScheme="brand"
						fontSize="xs"
						fontWeight="medium"
						h="38px"
						// minW={{ md: "118px" }}
						onClick={() => clear()}
					>
						Signup now!
					</Button>
				</a>
			</Flex>
		</Flex>
	);
};

export default NavBar;
