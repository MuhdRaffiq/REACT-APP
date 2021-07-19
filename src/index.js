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
  {
  img: "https://images-na.ssl-images-amazon.com/images/I/61wi-B-Hi9L._AC_SX184_.jpg",
  title: 'The  Adventure Zone',
  author: 'Clint McFlroy'
}
,
 {
  img: "https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._AC_SX184_.jpg",
  title: 'Atomic Habits',
  author: 'James Clear'
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
        const {img, title, author} = book;
        return <div>
          <h3>{title}</h3>
          <h6>{author}</h6>
        </div>;
      })}
    </section>
  );
};


const Book = (props) => {
  const {img, title, author, children} = props;
  //console.log(props);
  return <article className='book'>
    <img src = {img} alt=''/>
    <h1>{title}</h1>
    {children}
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
