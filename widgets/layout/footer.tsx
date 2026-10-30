import { Box, Flex, Text } from "@chakra-ui/react"
import Link from "next/link"

// Stroke icons in currentColor, so they read on both the light and the dark page.
const SOCIALS = [
    {
        href: "https://www.facebook.com/vearnhq",
        label: "Facebook",
        path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    },
    { href: "https://twitter.com/vearn_hq", label: "X (Twitter)", path: "M4 4l16 16M20 4L4 20" },
    {
        href: "https://www.instagram.com/vearn_hq",
        label: "Instagram",
        path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM17.5 6.5h.01",
    },
    {
        href: "https://www.linkedin.com/company/vearn",
        label: "LinkedIn",
        path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    },
]

const Footer = () => {
    return (
        <Flex w="full" wrap="wrap" justifyContent="center">
            <Text textAlign="center" fontSize="sm" w="full" fontWeight="bold"   >
                Follow us on social media
            </Text>
            <Box maxW="450px" w="450px" py={6} display="flex" justifyContent="space-around" >
                {SOCIALS.map((social) => (
                    <Link key={social.label} href={social.href} aria-label={social.label}>
                        <Box
                            as="span"
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            w="44px"
                            h="44px"
                            borderRadius="12px"
                            border="1px solid"
                            borderColor="brand.outline"
                            color="brand.text"
                            _hover={{ bg: "brand.soft" }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d={social.path} />
                            </svg>
                        </Box>
                    </Link>
                ))}
            </Box>
        </Flex>)
}

export default Footer
