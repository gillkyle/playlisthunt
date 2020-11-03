/**
 * ============================================================================
 * Persisted navigation at the top of all pages for the layout component
 * ============================================================================
 */

import React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/core"

import Logo from "../img/logo.png"
import ClientOnly from "./client-only"

const Header = () => {
  return (
    <Flex align="center" justify="space-between" p="4">
      <Text
        fontWeight="bold"
        color="blue.600"
        fontSize="lg"
        letterSpacing={1.1}
      >
        <Image src={Logo} height={12} />
      </Text>
      <Stack isInline align="center" spacing="3">
        <Button variant="ghost" as={GatsbyLink} to="/">
          New
        </Button>
        <Button variant="ghost" as={GatsbyLink} to="/top">
          Top
        </Button>
        <ClientOnly>
          {false ? (
            <Menu>
              <MenuButton as={Button} leftIcon="chevron-down">
                Profile
              </MenuButton>
              <MenuList placement="bottom-end">
                <MenuItem isDisabled>{`user?.email`}</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button
              variant="solid"
              variantColor="blue"
              fontWeight="bold"
              onClick={() => console.log("Login!")}
            >
              Sign Up
            </Button>
          )}
        </ClientOnly>
      </Stack>
    </Flex>
  )
}

export default Header
