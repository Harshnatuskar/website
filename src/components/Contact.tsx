import React from 'react';

const Contact: React.FC = () => {
  const emailId = 'harshnatuskar10@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailId).then(() => {
      alert('Email ID copied to clipboard!');
    }).catch((err) => {
      console.error('Error copying to clipboard:', err);
    });
  };

  return (
    <div className="flex items-center justify-center space-x-5 text-center pt-20 pb-6">
  <button onClick={copyToClipboard} className="no-underline hover:underline rounded-sm bg-grey-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-grey-100" >
    Contact
  </button>
  <a  className='no-underline hover:underline rounded-sm bg-grey-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-grey-100' href='https://github.com/Harshnatuskar' target="_blank">Github</a>
  <a  className='no-underline hover:underline rounded-sm bg-grey-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-grey-100' href='https://www.behance.net/harshnatuskar' target="_blank">Behance</a>
  <a  className='no-underline hover:underline rounded-sm bg-grey-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-grey-100' href='https://www.getairchat.com/hurrrsh. ' target="_blank">Airchat</a>
  <a  className='no-underline hover:underline rounded-sm bg-grey-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-grey-100' href='https://twitter.com/hurrrsh ' target="_blank">X</a>
</div>

  );
};

export default Contact;


 
