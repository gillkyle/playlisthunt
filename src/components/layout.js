import React from "react"
import { Flex, Grid } from "@chakra-ui/core"
import Header from "./header"

const Layout = ({ children }) => (
  <Grid gridTemplateRows="64px auto" minHeight="100vh">
    <Header />
    <Flex justify="center">{children}</Flex>
    <Flex as="footer" align="center" justify="center" color="gray.400">
      All Rights Reserved
    </Flex>
  </Grid>
)

export default Layout
