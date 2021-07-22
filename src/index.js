import React from 'react';
import ReactDOM from 'react-dom';


//CSS
import './index.css';

import {books} from './books';

import Book from './Book';

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




// const Image =() => (<img src={img} alt="" />
// );

// const Title = () => (
//   <h1>The Adventure Zone</h1>
// );

// const Author = () => (
//   <h4>Clint McFlroy</h4>
// )

ReactDOM.render(<Booklist/>, document.getElementById('root'));
