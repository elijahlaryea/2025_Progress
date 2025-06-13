

Install the required dependencies:

bash
npm install aos @fortawesome/fontawesome-free
In your Next.js project, make sure to include Font Awesome in your _app.js:

jsx
// pages/_app.js
import { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default MyApp;
Use the component in your page:

