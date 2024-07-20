import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} />
    </HStack>
  )
}

export default Navbar
