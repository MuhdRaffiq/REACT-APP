import React from 'react';
import ReactDOM from 'react-dom';

// stateless functional
// always return JSX
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every elemeny
// formatting

function Greeting() {
  return (
    <section>
      <article>
        <h3>This is serong bro</h3>
        <ul>
          <li>
            <a href='#'>macam bodo</a>
            <section>              
            </section>
          </li>
        </ul>
      </article>
      <div>

      </div>
    </section>
  
  );
}

// const Greeting = () =>{
//   return React.createElement('h1', {}, 'hello world');
// };


ReactDOM.render(<Greeting/>, document.getElementById('root'));
