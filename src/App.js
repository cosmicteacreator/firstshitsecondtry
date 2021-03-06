import React from 'react';
import './styles/app.css'

function Kartochka(props){
  return <div><img src={props.src} className="picture" ></img><p className='text2'>{props.title} </p></div>
}

function App() {
  const ccal2=[
    {
        "id": 0,
        "title": "qweqweqw0",
        "url": "https://images.unsplash.com/photo-1656612514884-9d33fcaa8288?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMxMQ&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 1,
        "title": "qweqweqw1",
        "url": "https://images.unsplash.com/photo-1656675403608-a0815ada8622?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMxOA&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 2,
        "title": "qweqweqw2",
        "url": "https://images.unsplash.com/photo-1655813717868-16a044154df7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzI4Mw&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 3,
        "title": "qweqweqw3",
        "url": "https://images.unsplash.com/photo-1656383931514-63dbd5bca03c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMxMw&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 4,
        "title": "qweqweqw4",
        "url": "https://images.unsplash.com/photo-1657226250237-7fc5989b4d1f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMyMA&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 5,
        "title": "qweqweqw5",
        "url": "https://images.unsplash.com/photo-1655161916877-88b27bd847ee?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMyNQ&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 6,
        "title": "qweqweqw6",
        "url": "https://images.unsplash.com/photo-1656355636518-69df3f3ca0f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMyMg&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 7,
        "title": "qweqweqw7",
        "url": "https://images.unsplash.com/photo-1655125361075-61a4630facff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMyNg&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 8,
        "title": "qweqweqw8",
        "url": "https://images.unsplash.com/photo-1654802482203-0b9b0e97fdbd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMzMQ&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 9,
        "title": "qweqweqw9",
        "url": "https://images.unsplash.com/photo-1657003451583-607870ba9643?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMyOA&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 10,
        "title": "qweqweqw10",
        "url": "https://images.unsplash.com/photo-1655883815065-06262c1f3c1a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMzOA&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 11,
        "title": "qweqweqw11",
        "url": "https://images.unsplash.com/photo-1654861517111-3a265fa4a240?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMzOQ&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 12,
        "title": "qweqweqw12",
        "url": "https://images.unsplash.com/photo-1655665436888-7855cf781ea8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzM0MQ&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 13,
        "title": "qweqweqw13",
        "url": "https://images.unsplash.com/photo-1656358828391-fac84b7db711?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMzNw&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 14,
        "title": "qweqweqw14",
        "url": "https://images.unsplash.com/photo-1654861517111-3a265fa4a240?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMzOQ&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 15,
        "title": "qweqweqw15",
        "url": "https://images.unsplash.com/photo-1655404922404-abc1d0f09b9c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzM0OA&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 16,
        "title": "qweqweqw16",
        "url": "https://images.unsplash.com/photo-1656358828391-fac84b7db711?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzMzNw&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 17,
        "title": "qweqweqw17",
        "url": "https://images.unsplash.com/photo-1656182903085-fefaa554832e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzM0Mw&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 18,
        "title": "qweqweqw18",
        "url": "https://images.unsplash.com/photo-1656712472337-0ceabde20270?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzM1Mg&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 19,
        "title": "qweqweqw19",
        "url": "https://images.unsplash.com/photo-1655720845034-b8f615109b5b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzM1Mw&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 20,
        "title": "qweqweqw20",
        "url": "https://images.unsplash.com/photo-1655461078856-644758b661f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzM1NQ&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 21,
        "title": "qweqweqw21",
        "url": "https://images.unsplash.com/photo-1655795588422-4eba2945780d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzM1Ng&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 22,
        "title": "qweqweqw22",
        "url": "https://images.unsplash.com/photo-1656663584992-e1f24fe5eae5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzM0NQ&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 23,
        "title": "qweqweqw23",
        "url": "https://images.unsplash.com/photo-1655844226452-0fac4ac80628?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzM0OQ&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 24,
        "title": "qweqweqw24",
        "url": "https://images.unsplash.com/photo-1655844226452-0fac4ac80628?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzM1MA&ixlib=rb-1.2.1&q=80&w=500"
    },
    {
        "id": 25,
        "title": "qweqweqw25",
        "url": "https://images.unsplash.com/photo-1656423126735-16691e337e66?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NzM2MA&ixlib=rb-1.2.1&q=80&w=500"
    }
]

  return (
    <div className="App">
      {ccal2.map(({id, title, url})=>(
        <Kartochka className="Kartochka" title={title} src={url} />
      ))}
    </div>
  );
}

export default App;
