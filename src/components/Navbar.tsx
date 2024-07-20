import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/react.svg'
import ColorModeswitch from './ColorModeswitch'

const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} />
      <ColorModeswitch />
    </HStack>
  )
}

export default Navbar
