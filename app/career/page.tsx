import React from 'react';

const Page: React.FC = () => {
  return (
    <div>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appcRLi3R3qIFyPIU/pagRhDtt6qX4O0LZ7/form"
        frameBorder={0}
        width="100%"
        height="2933"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
        title="Airtable Form"
      ></iframe>
    </div>
  );
};

export default Page;
