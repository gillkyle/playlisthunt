import React from "react"
import { Flex, Grid } from "@chakra-ui/core"
import Header from "./header"

const Layout = ({ children }) => (
  <Grid>
    <Header />
    <Flex>{children}</Flex>
    <Flex as="footer">All Rights Reserved</Flex>
  </Grid>
)

export default Layout
