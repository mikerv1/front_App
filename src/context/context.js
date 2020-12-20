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
    path: "/marginalia",
    exact: true,
    title: "Marginalia",
    main: () => "Marginalia"
  },
  {
    path: "/programming",
    exact: true,
    title: "Programming",
    main: () => "Programming"
  }
]

export const data = [
  {
    "id": "japan",
    "color": "hsl(10, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 116
      },
      {
        "x": "helicopter",
        "y": 28
      },
      {
        "x": "boat",
        "y": 182
      },
      {
        "x": "train",
        "y": 221
      },
      {
        "x": "subway",
        "y": 203
      },
      {
        "x": "bus",
        "y": 38
      },
      {
        "x": "car",
        "y": 241
      },
      {
        "x": "moto",
        "y": 226
      },
      {
        "x": "bicycle",
        "y": 72
      },
      {
        "x": "horse",
        "y": 68
      },
      {
        "x": "skateboard",
        "y": 143
      },
      {
        "x": "others",
        "y": 140
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(277, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 40
      },
      {
        "x": "helicopter",
        "y": 127
      },
      {
        "x": "boat",
        "y": 5
      },
      {
        "x": "train",
        "y": 227
      },
      {
        "x": "subway",
        "y": 204
      },
      {
        "x": "bus",
        "y": 277
      },
      {
        "x": "car",
        "y": 20
      },
      {
        "x": "moto",
        "y": 179
      },
      {
        "x": "bicycle",
        "y": 59
      },
      {
        "x": "horse",
        "y": 218
      },
      {
        "x": "skateboard",
        "y": 141
      },
      {
        "x": "others",
        "y": 36
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(354, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 4
      },
      {
        "x": "helicopter",
        "y": 255
      },
      {
        "x": "boat",
        "y": 0
      },
      {
        "x": "train",
        "y": 135
      },
      {
        "x": "subway",
        "y": 198
      },
      {
        "x": "bus",
        "y": 3
      },
      {
        "x": "car",
        "y": 79
      },
      {
        "x": "moto",
        "y": 196
      },
      {
        "x": "bicycle",
        "y": 184
      },
      {
        "x": "horse",
        "y": 58
      },
      {
        "x": "skateboard",
        "y": 277
      },
      {
        "x": "others",
        "y": 197
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(88, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 235
      },
      {
        "x": "helicopter",
        "y": 158
      },
      {
        "x": "boat",
        "y": 79
      },
      {
        "x": "train",
        "y": 282
      },
      {
        "x": "subway",
        "y": 44
      },
      {
        "x": "bus",
        "y": 297
      },
      {
        "x": "car",
        "y": 252
      },
      {
        "x": "moto",
        "y": 27
      },
      {
        "x": "bicycle",
        "y": 26
      },
      {
        "x": "horse",
        "y": 106
      },
      {
        "x": "skateboard",
        "y": 278
      },
      {
        "x": "others",
        "y": 16
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(266, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 94
      },
      {
        "x": "helicopter",
        "y": 207
      },
      {
        "x": "boat",
        "y": 80
      },
      {
        "x": "train",
        "y": 177
      },
      {
        "x": "subway",
        "y": 186
      },
      {
        "x": "bus",
        "y": 156
      },
      {
        "x": "car",
        "y": 18
      },
      {
        "x": "moto",
        "y": 92
      },
      {
        "x": "bicycle",
        "y": 156
      },
      {
        "x": "horse",
        "y": 73
      },
      {
        "x": "skateboard",
        "y": 286
      },
      {
        "x": "others",
        "y": 74
      }
    ]
  }
]
