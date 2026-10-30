import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import VLogo from "../global/logo";
import ThemeToggle from "../global/theme-toggle";
import useReferral from "../../hooks/useReferral";

let timer: ReturnType<typeof setTimeout> | any;
const debounce = (func: Function, timeout = 500) => {
	clearTimeout(timer);
	timer = setTimeout(func, timeout);
};

const NavBar = () => {
	const { ref, clear} = useReferral();

	return (
		<Flex
			justifyContent="space-between"
			height={{ md: "72px" }}
			py={{ base: 3, md: 0 }}
			px={{ base: "1rem", md: 0 }}
			alignItems="center"
			w={{ base: "90%", xl: "80%" }}
			mx="auto"
			gap={6}
		>
			<Box>
				<VLogo />
			</Box>
			<Flex gap={{ lg: "16px", base: "10px" }} ml={{ md: 2 }} width="max-content" alignItems="center">
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
				<ThemeToggle />
			</Flex>
		</Flex>
	);
};

export default NavBar;
