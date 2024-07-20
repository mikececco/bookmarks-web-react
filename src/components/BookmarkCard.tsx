import { Card, CardBody, Heading } from '@chakra-ui/react'
import { Bookmark } from '../hooks/useBookmarks'

interface Props {
  bookmark: Bookmark
}
const BookmarkCard = ({ bookmark }: Props) => {
  return (
    <Card borderRadius={10}>
      <CardBody>
        <Heading fontSize='2xl'>
          {bookmark.name}
        </Heading>
      </CardBody>
    </Card>
  )
}

export default BookmarkCard
