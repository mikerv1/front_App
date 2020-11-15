import { createContext } from 'react';

export const sections = [
    { title: 'Technology', url: '/login' },
    { title: 'Design', url: '/' },
    { title: 'Culture', url: '/' },
    { title: 'Business', url: '/' },
    { title: 'Politics', url: '/' },
    { title: 'Opinion', url: '/' },
    { title: 'Science', url: '/' },
    { title: 'Health', url: '/' },
    { title: 'Style', url: '/' },
    { title: 'Travel', url: '/' },
  ]
  
  export const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ]

export const HeaderContext = createContext()

export const routes = [
  {
    path: "/",
    exact: true,
    title: "News",
    main: () => "News"
  },
  {
    path: "/design",
    exact: true,
    title: "Design",
    main: () => "Design"
  },
  {
    path: "/charts",
    exact: true,
    title: "Charts",
    main: () => "Charts"
  },
  {
    path: "/blog",
    exact: true,
    title: "Blog",
    main: () => "Blog"
  },
  {
    path: "/programming",
    exact: true,
    title: "Programming",
    main: () => "Programming"
  }
]
