import React from "react"
import { Button, Flex, Text } from "@chakra-ui/core"
import { Link } from "gatsby"

const Header = () => {
  return (
    <Flex>
      <Text>PlaylistHunt</Text>
      <Flex>
        <Button as={Link} to="/new">
          New
        </Button>
        <Button>Top</Button>
        <Button>Signup</Button>
      </Flex>
    </Flex>
  )
}

export default Header
