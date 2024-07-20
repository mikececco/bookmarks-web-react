import  { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios';

export interface Bookmark {
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

const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController();

    apiClient.get<Bookmark[]>('/bookmarks', { signal: controller.signal })
      .then(res => setBookmarks(res.data))
      .catch(err => {
        if (err instanceof CanceledError) return ; //for react mounting twice in dev
        setError(err.message)
      });

    return () => controller.abort();
  }, []);

  return { bookmarks, error }
}

export default useBookmarks
