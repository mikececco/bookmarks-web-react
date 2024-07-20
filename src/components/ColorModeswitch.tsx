import { HStack, Switch, useColorMode } from "@chakra-ui/react"

const ColorModeswitch = () => {

  const {toggleColorMode, colorMode} = useColorMode()

  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
      {/* <Text>Dark Mode</Text> */}
    </HStack>
  )
}

export default ColorModeswitch
