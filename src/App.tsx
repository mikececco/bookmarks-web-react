import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'  // Importing the Navbar component
import Sidebar from './components/Sidebar'  // Importing the Navbar component
import BookmarkGrid from './components/BookmarkGrid'  // Importing the Navbar component

function App() {

  return (
    <>
      <Grid
        templateAreas={{
          base: `"header"
                  "main"
                  "footer"`,
          lg: `"header header"
                "nav main"
                "nav footer"`,
          sm: `"header"
                "main"
                "footer"`,
        }}
        gridTemplateColumns={'150px 1fr'}
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' area={'header'}>
          <Navbar/>
        </GridItem>
        <Show above="lg">
          <GridItem pl='2' bg='pink.300' area={'nav'}>
            <Sidebar/>
          </GridItem>
        </Show>
        <GridItem pl='2' bg='green.300' area={'main'}>
          <BookmarkGrid/>
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
      </Grid>
          </>
  )
}

export default App
