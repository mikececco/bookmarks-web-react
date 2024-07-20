import { SimpleGrid, Text } from '@chakra-ui/react';
import useBookmarks, { Bookmark } from '../hooks/useBookmarks';
import BookmarkCard from './BookmarkCard';

const BookmarkGrid = () => {
  // Call useBookmarks as a function
  const { bookmarks, error } = useBookmarks();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 6}} spacing={10} padding={10}>
        {/* Correctly annotate the type of bookmark */}
        {bookmarks.map((bookmark: Bookmark) => (
          <BookmarkCard key={bookmark.id} bookmark={bookmark}/>
        ))}
      </SimpleGrid>
    </>
  );
}

export default BookmarkGrid;
