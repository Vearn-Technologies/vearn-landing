import { Box, Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import NavBar from "./nav-bar";

export enum LayoutEnums {
  WITH_NAV_PLAIN = "with_nav_plain",
  WITH_SIDEBAR = "with_sidebar",
  PLAIN = "plain˝",
}

const LayoutWidget = ({
  children,
  layout,
}: {
  children: ReactNode;
  layout: LayoutEnums;
}) => {
  return (
    <>
      {layout === LayoutEnums.WITH_NAV_PLAIN ||
      layout === LayoutEnums.WITH_SIDEBAR ? (
        <>
          {/* Light mode needs an edge between the header and the page; dark keeps its seamless header.
              An inset shadow, not a border, so the 72px header height stays exact. */}
          <Box
            bg="bg.surface"
            boxShadow="inset 0 -1px 0 var(--chakra-colors-border-default)"
            _dark={{ bg: "transparent", boxShadow: "none" }}
          >
            <NavBar />
          </Box>
          <Grid
            templateColumns={{ md: "repeat(6, 1fr)", base: "repeat(1, 1fr)" }}
            width={{ xl: "80%", md: "100%" }}
            mx="auto"
            gap={{ md: 0, base: 10 }}
            justifyContent={"flex-start"}
          >
            <GridItem
              colSpan={
                layout === LayoutEnums.WITH_SIDEBAR ? { md: 5, base: 1 } : 6
              }
            >
              <Box
                height="calc(100vh - 72px)"
                overflow="auto"
                backgroundColor={
                  layout === LayoutEnums.WITH_SIDEBAR
                    ? "bg.subtle"
                    : "transparent"
                }
                borderTopRadius="8px"
                mx="auto"
                p={
                  layout === LayoutEnums.WITH_SIDEBAR ? { md: 10, base: 4 } : 0
                }
                w={{ xl:"auto", md: "90%", base: "95%" }}
              >
                {children}
              </Box>
            </GridItem>
          </Grid>
        </>
      ) : (
        children
      )}
    </>
  );
};

export default LayoutWidget;
