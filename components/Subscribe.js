import { useState } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { data } = useSWR('/api/subscribers', fetcher);
  const subscriberCount = data?.count;
  
  const { data: issueData } = useSWR('/api/issues', fetcher);
  const issues = issueData?.issues;

  const subscribeMe = async (event) => {
    event.preventDefault();
    console.log(email);
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ email: email }),
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
    });

    const { error, message } = await res.json();
    setError(error);
    setSuccess(message);
  };

  const changeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  }

  return (
    <>  
      <div className="border border-blue-200 rounded p-6 my-4 w-full bg-blue-50">
        <p className="text-lg md:text-xl font-bold text-gray-900">
          Subscribe to the newsletter
        </p>
        <p className="my-1 text-gray-800">
          Get emails from me about web development, content creation, and how lead a motivated life.
        </p>
        <form className="relative my-4" onSubmit={subscribeMe}>
          <input
            onChange={changeEmail}
            aria-label="Email for newsletter"
            placeholder="john@email.com"
            type="email"
            autoComplete="email"
            required
            className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white text-gray-900"
          />
          <button
            className="flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-8 bg-gray-100 text-gray-900 rounded w-28"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        {success 
          ? <span className="flex items-center text-sm font-bold text-green-700">{success}</span> 
          : <span className="flex items-center text-sm font-bold text-red-800">{error}</span>}
        <p className="text-md text-gray-800">
          { subscriberCount } subscribers . {issues && issues.length} {issues && issues.length > 1 ? 'issues' : 'issue'}
        </p>
        <p className="text-sm  text-center p-3 text-gray-800">
          Well, you can subscribe to my upcoming Newsletter for real. Just give a valid email id above and verify 😀.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black">
              Published Issues
        </h3>
        <div className="flex flex-col bg-gray-200 p-4 underline">
          <ul>
            {issues && issues
              .sort(
                (a, b) =>
                  Number(new Date(b.publishedAt)) -
                  Number(new Date(a.publishedAt))
              )
              .map((issue, index) => (
                
                <a key={index} href={issue.url} target="_blank" rel="noopener norefer"> {issue.title} </a>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Subscribe;