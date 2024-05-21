import React from 'react';
import Typist from 'react-typist';
// import 'react-typist/dist/Typist.css'; // Import Typist CSS

const Typewriter = () => {
  return (
    <Typist>
      <span>Hello, </span>
      <Typist.Delay ms={1000} />
      <Typist.Backspace count={7} />
      <span>world!</span>
    </Typist>
  );
};

export default Typewriter;
