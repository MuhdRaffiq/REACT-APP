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
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/61wi-B-Hi9L._AC_SX184_.jpg",
  title: 'The  Adventure Zone',
  author: 'Clint McFlroy'
}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._AC_SX184_.jpg",
  title: 'Atomic Habits',
  author: 'James Clear'
}

const thirdBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/5103HgmdtjS._AC_SX184_.jpg",
  title: 'The Bad Guys',
  author: 'Aaron Blabey'
}

function Booklist() {
  return (
    <section className='booklist'>
      <Book img = {firstBook.img} title = {firstBook.title} author = {firstBook.author} />
      <Book img = {secondBook.img} title = {secondBook.title} author = {secondBook.author}/>
      <Book img = {thirdBook.img} title = {thirdBook.title} author = {thirdBook.author}/>
    </section>
  );
};


const Book = (props) => {
  const {img, title, author} = props;
  //console.log(props);
  return <article className='book'>
    <img src = {img} alt=''/>
    <h1>{title}</h1>
    <h4>{author}</h4>
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
