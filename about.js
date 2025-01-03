```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // Simulate a slow API call
  const data = fetch('/api/data').then(res => res.json());

  return (
    <div>About page. Data loading...</div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate a slow response
  await new Promise(resolve => setTimeout(resolve, 3000));
  res.status(200).json({ text: 'Data from API' });
}
```