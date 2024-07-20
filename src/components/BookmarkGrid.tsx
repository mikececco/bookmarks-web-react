import  { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react';

interface Bookmark {
  id: number;
  link: string;
  userId: number;
  updated_at: Date;
  created_at: Date;
  content: string;
  tags: string;
  folderId: number;
  name: string;
  folder: Folder; // Include the folder object in Bookmark interface
}

interface Folder {
  id: number;
  userId: number;
  updated_at: Date;
  created_at: Date;
  name: string;
}

const BookmarkGrid = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient.get<Bookmark[]>('/bookmarks')
      .then(res => setBookmarks(res.data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {bookmarks.map(bookmark =>  <li key={bookmark.id}>{bookmark.name}</li>)}
      </ul>
    </>
  )
}

export default BookmarkGrid
