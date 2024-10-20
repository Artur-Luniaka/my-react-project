// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Product from './Product';
// import { BookList, favouriteBooks } from './BookList';
import { Alert } from './Alert';

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//      <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }

// export default function App () {
//   return (
//     <>
// 	  <h1>Books of the week</h1>
//       <BookList books={favouriteBooks} />
//     </>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };
// export default App;

const App = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
    </>
  );
};
export default App;