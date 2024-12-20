// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react';
import './App.css';
// import LangSwitcher from './LangSwitcher/LangSwitcher';
// import FormLogin from './FormLogin/FormLogin';
// import SearchBar from './SearchBar/SearchBar';
// import FeedbackForm from './FeedbackForm/FeedbackForm';
import axios from 'axios';
// import Product from './Product';
// import { BookList, favouriteBooks } from './BookList';
// import { Alert } from './Alert';
// import CustomButton from './CustomButton/CustomButton';

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

// const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error" outlined>
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success" elevated>
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning" outlined elevated>
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };
// export default App;

// const App = () => {
// 	const handleClick = (evt) => {
// 		console.log(evt);
// 	};

// 	return (
// 		<>
// 			<button onClick={handleClick}>First button</button>
// 			<button onClick={evt => console.log(evt)}>Second button</button>
// 		</>
// 	);
// };

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">
//         Play some music
//       </CustomButton>
//       <CustomButton message="Uploading your data!">
//         Upload data
//       </CustomButton>
//     </>
//   );
// }

// import { useState } from 'react';
// import ClickCounter from './ClickCounter/ClickCounter';

// const App = () => {
// 	const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

// const App = () => {
//   return (
//     <>
// 			<ClickCounter />
// 			<ClickCounter />
//     </>
//   );
// };

// пример поднятия состояния
// import { useState } from 'react';

// const App = () => {
// 	const [clicks, setClicks] = useState(0);

// 	// Функція, яку будемо передавати в ClickCounter
// 	// для виклику під час кліку
// 	const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
// 			<ClickCounter value={clicks} onUpdate={handleClick} />
// 			<ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// import { useState } from 'react';
// // передаем обьект
// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
// 	  });

// 	const updateX = () => {
// 			setValues({
// 			...values,
// 			x: values.x + 1
// 		});
// 	};

// 	const updateY = () => {
// 		setValues({
// 			...values,
// 			y: values.y + 1
// 		});
// 	};

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Оголошуємо ефект
//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// import { useEffect } from "react";
// const App = () => {

//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>App</div>;
// };

// import Modal from './Modal/Modal';
// import { useState } from 'react';

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

// 	// ✅ Залежності вказані правильно
//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// import { useState, useEffect } from "react";

// const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log("First updated: ", first);
//   }, [first]);

//   useEffect(() => {
//     console.log("Second updated: ", second);
//   }, [second]);

//   useEffect(() => {
//     console.log("First or second updated: ", first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

// import { useState } from 'react';
// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// import { useState, useEffect } from 'react';
// const App = () => {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = window.localStorage.getItem("saved-clicks");
//     if (savedClicks !== null) {
//       return Number(savedClicks);
//     }
//     return 0;
//   });

//   useEffect(() => {
//     window.localStorage.setItem("saved-clicks", clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// Forms outControl

// const App = () => {
//   return (
//     <>
//       <LoginForm />
//     </>
//   );
// };

// const App = () => {
//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = userData => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   return (
//     <div>
//       <h1>Please login to your account!</h1>
//       {/* Передаємо колбек як пропс форми */}
//       <LoginForm onLogin={handleLogin} />
//     </div>
//   );
// };

// onControlElements + Select

// const App = () => {
//   return (
//     <>
//       <SearchBar />
//     </>
//   );
// };

// const App = () => {
//   const [lang, setLang] = useState('uk');

//   return (
//     <>
//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//     </>
//   );
// };

// RadioButtons
// const App = () => {
//   const [coffeeSize, setCoffeeSize] = useState('sm');

//   const handleSizeChange = evt => {
//     setCoffeeSize(evt.target.value);
//   };

//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === 'sm'}
//           onChange={handleSizeChange}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === 'md'}
//           onChange={handleSizeChange}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === 'lg'}
//           onChange={handleSizeChange}
//         />
//         Large
//       </label>
//     </>
//   );
// };

// CheckBox
// const App = () => {
//   const [hasAccepted, setHasAccepted] = useState(false);

//   const handleChange = evt => {
//     setHasAccepted(evt.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input type="checkbox" name="terms" checked={hasAccepted} onChange={handleChange} />I accept
//         terms and conditions
//       </label>
//       <button type="button" disabled={!hasAccepted}>
//         Proceed
//       </button>
//     </div>
//   );
// };
// export default App;

// Form onControl

// const App = () => {
//   return (
//     <>
//       <FormLogin />
//     </>
//   );
// };

// export default App;

// Create Form With Formik

// const App = () => {
//   return <FeedbackForm />;
// };

// export default App;

// Request on server / Save response to state / Using load indicator / SetError

// const ArticleList = ({ items }) => (
//   <ul>
//     {items.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         // 1. Встановлюємо індикатор в true перед запитом
//         setLoading(true);
//         const response = await axios.get('https://hn.algolia.com/api/v1/search?query=react');
//         setArticles(response.data.hits);
//       } catch (error) {
//         // Встановлюємо стан error в true
//         setError(true);
//       } finally {
//         // 2. Встановлюємо індикатор в false після запиту
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p>Loading data, please wait...</p>}
//       {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// Using export file with function for request
// 1. Імпортуємо HTTP-функцію
// import { fetchArticlesWithTopic } from '../articles-api.js';

// const ArticleList = ({ items }) => (
//   <ul>
//     {items.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         setLoading(true);
//         // 2. Використовуємо HTTP-функцію
//         const data = await fetchArticlesWithTopic('react');
//         setArticles(data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p>Loading data, please wait...</p>}
//       {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// Request by user (without useEffect)
// import { fetchArticlesWithTopic } from '../articles-api.js';
// import SearchForm from './SearchForm/SearchForm.jsx';

// const ArticleList = ({ items }) => (
//   <ul>
//     {items.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSearch = async topic => {
//     try {
//       setArticles([]);
//       setError(false);
//       setLoading(true);
//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       {loading && <p>Loading data, please wait...</p>}
//       {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// Мемоизация для кэширования результатов работы функции
// import { useMemo } from 'react';

// const App = () => {
//   const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
//   const [query, setQuery] = useState('');
//   const [clicks, setClicks] = useState(0);

//   const filteredPlanets = useMemo(
//     () => planets.filter(planet => planet.includes(query)),
//     [planets, query]
//   );

//   return (
//     <>
//       <button onClick={() => setClicks(clicks + 1)}>Number of clicks: {clicks}</button>
//       <ul>
//         {filteredPlanets.map(planet => (
//           <li key={planet}>{planet}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// useRef + жизненный цикл
// import { useRef } from 'react';

// const App = () => {
//   const [value, setValue] = useState(0);
//   const btnRef = useRef();

//   // Буде undefined на першому рендері
//   // і посиланням на DOM-елемент всі наступні
//   console.log('App: ', btnRef.current);

//   useEffect(() => {
//     // Ефект виконується після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log('useEffect: ', btnRef.current);
//   });

//   const handleClick = () => {
//     // Кліки будуть після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log('handleClick: ', btnRef.current);
//   };

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>Update value to trigger re-render</button>
//       <button ref={btnRef} onClick={handleClick}>
//         Button with ref
//       </button>
//     </>
//   );
// };

// import { useRef } from 'react';

// const Player = ({ source }) => {
//   const playerRef = useRef();

//   const play = () => playerRef.current.play();

//   const pause = () => playerRef.current.pause();

//   return (
//     <div>
//       <video ref={playerRef} src={source}>
//         Sorry, your browser does not support embedded videos.
//       </video>
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };

// forwardRef когда нужно достучаться до элемента внутри компонента
import { forwardRef, useRef } from 'react';

const CustomButton = forwardRef((props, ref) => <button ref={ref}>{props.children}</button>);

const App = () => {
  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

  return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
};
export default App;
