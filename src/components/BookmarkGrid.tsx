import { Text } from '@chakra-ui/react';
import useBookmarks, { Bookmark } from '../hooks/useBookmarks';

const BookmarkGrid = () => {
  // Call useBookmarks as a function
  const { bookmarks, error } = useBookmarks();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {/* Correctly annotate the type of bookmark */}
        {bookmarks.map((bookmark: Bookmark) => <li key={bookmark.id}>{bookmark.name}</li>)}
      </ul>
    </>
  );
}

export default BookmarkGrid;
