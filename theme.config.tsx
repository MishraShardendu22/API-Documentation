import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img
        src="https://avatars.githubusercontent.com/u/175409658?s=400&u=03630c626a5b42c91532e1ff0a7f20ff623cb602&v=4"
        alt="Image of The Creator"
        style={{
          height: '40px',
          width: '40px', // Set a fixed width for a perfect circle
          borderRadius: '50%', // Make the image circular
          objectFit: 'cover', // Ensure the image covers the circle properly
        }}
      />
      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#f56565' }}>
        Application Programming Interface - Hub
      </span>
    </div>
  ),
  project: {
    link: 'https://github.com/MishraShardendu22/API-Documentation',
  },
  chat: {
    link: 'https://discord.com/users/shardendumishra22',
  },
  footer: {
    text: 'IIIT Dharwad - Shardendu Mishra, Computer Science Engineering',
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  gitTimestamp: <span>{new Date().toLocaleString()}</span>,
};

export default config;
