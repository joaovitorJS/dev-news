import { Route, Routes } from 'react-router-dom';

/* Páginas */
import { Home } from '../pages/Home';
import { Article } from '../pages/Article';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:id" element={<Article />} />
    </Routes>
  );
}

export { Router };