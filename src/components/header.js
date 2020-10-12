import React from "react"
import { Button, Flex, Stack, Text } from "@chakra-ui/core"
import { Link } from "gatsby"

const Header = () => {
  return (
    <Flex align="center" justify="space-between" p="4">
      <Text>PlaylistHunt</Text>
      <Stack isInline spacing="3">
        <Button variant="ghost" as={Link} to="/new">
          New
        </Button>
        <Button variant="ghost">Top</Button>
        <Button variant="solid" variantColor="blue">
          Signup
        </Button>
      </Stack>
    </Flex>
  )
}

export default Header
