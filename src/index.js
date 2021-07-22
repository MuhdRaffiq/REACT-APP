import React from 'react';
import ReactDOM from 'react-dom';


//CSS
import './index.css';

// stateless functional
// always return JSX
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every elemeny
// formatting

//Setup vars 
const books = [
  {id: 1,
  img: "https://images-na.ssl-images-amazon.com/images/I/61wi-B-Hi9L._AC_SX184_.jpg",
  title: 'The  Adventure Zone',
  author: 'Clint McFlroy'
}
,
 {id: 2,
  img: "https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._AC_SX184_.jpg",
  title: 'Atomic Habits',
  author: 'James Clear'
},
 {id: 3,
  img: "https://images-na.ssl-images-amazon.com/images/I/51Hj-Lfw+0S._AC_SX184_.jpg",
  title: 'American Marxism',
  author: 'Mark R. Levin'
},
];

const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) =>{
  return <h1>{name}</h1>
});

console.log(newNames);

function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        //console.log(book);
        //const {img, title, author} = book;
        return (
          <Book key={book.id} book={book}></Book>
        )
      })}
    </section>
  );
};


const Book = (props) => {
  const {img, title, author, children} = props.book;
  //console.log(props);
  // attribute, eventHandler
  // onClick, onMouseOver

  const clickHandler = () => {
    alert('hello world');
  };

  const complexExample = (author) => {
    console.log(author)
  }

  return <article className='book'>
    <img src = {img} alt=''/>
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>
      reference example
    </button>
    <button type="button" onClick={complexExample(author)}>
      more complex example
    </button>
  </article>
};

// const Image =() => (<img src={img} alt="" />
// );

// const Title = () => (
//   <h1>The Adventure Zone</h1>
// );

// const Author = () => (
//   <h4>Clint McFlroy</h4>
// )

ReactDOM.render(<Booklist/>, document.getElementById('root'));
