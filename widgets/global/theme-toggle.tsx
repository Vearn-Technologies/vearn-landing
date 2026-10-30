import { useEffect, useState } from "react";
import { Box, chakra, useColorMode } from "@chakra-ui/react";

const SunIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
		<circle cx="12" cy="12" r="4" />
		<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
	</svg>
);

const MoonIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
		<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
	</svg>
);

// On phones only the button for the other mode shows, so the header keeps its room. Driven by the
// data-theme attribute Chakra sets before paint, so it never disagrees with the stored mode.
const PHONE = "@media screen and (max-width: 47.99em)";
const hideOnPhoneIn = (mode: "light" | "dark") => ({ [PHONE]: { [`[data-theme=${mode}] &`]: { display: "none" } } });

const Option = chakra("button", {
	baseStyle: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		w: "38px",
		h: "38px",
		border: 0,
		borderRadius: "full",
		bg: "transparent",
		color: "text.muted",
		cursor: "pointer",
		transition: "background 0.15s ease, color 0.15s ease",
		_hover: { color: "text.primary" },
		"&[aria-pressed='true']": { bg: "brand.solid", color: "white" },
		_focusVisible: { outline: "2px solid", outlineColor: "brand.outline", outlineOffset: "2px" },
		// Alone on phones (no pill around it), so it carries its own edge.
		[PHONE]: { border: "1px solid", borderColor: "border.default", bg: "bg.surface" },
	},
});

/** Sun/moon pair (one button on phones), always the rightmost item in the header. Chakra keeps the choice in localStorage. */
const ThemeToggle = () => {
	const { colorMode, setColorMode } = useColorMode();
	// The server renders before it can read the stored mode, and React keeps server attributes on
	// hydration, so mark a button pressed only after mount.
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	return (
		<Box
			role="group"
			aria-label="Colour theme"
			display="inline-flex"
			flex="0 0 auto"
			p="3px"
			gap="2px"
			border="1px solid"
			borderColor="border.default"
			borderRadius="full"
			bg="bg.subtle"
            sx={{ [PHONE]: { p: 0, borderWidth: 0, bg: "transparent" } }}
		>
			<Option type="button" aria-label="Light mode"
                sx={hideOnPhoneIn("light")} aria-pressed={mounted && colorMode === "light"} onClick={() => setColorMode("light")}>
				<SunIcon />
			</Option>
			<Option type="button" aria-label="Dark mode"
                sx={hideOnPhoneIn("dark")} aria-pressed={mounted && colorMode === "dark"} onClick={() => setColorMode("dark")}>
				<MoonIcon />
			</Option>
		</Box>
	);
};

export default ThemeToggle;
