import React from 'react';
import ReactDOM from 'react-dom';

// stateless functional
// always return JSX
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every elemeny
// formatting

function Booklist() {
  return (
    <section>
      <Book/>

    </section>
  );
};

const Book = () => {
  return <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
};

const Image =() => (<img src="https://images-na.ssl-images-amazon.com/images/I/61wi-B-Hi9L._SX336_BO1,204,203,200_.jpg" alt="" />
);

const Title = () => (
  <h1>The Adventure Zone</h1>
);

const Author = () => (
  <h4>Clint McFlroy</h4>
)

ReactDOM.render(<Booklist/>, document.getElementById('root'));
