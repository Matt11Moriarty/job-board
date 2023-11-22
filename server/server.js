// server.js
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const bodyParser = require('body-parser');
const twilio = require('./utils/twilio'); // Import the Twilio module

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
//cors to let the front end send to backend
app.use(cors());
// Use body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Start Apollo Server
  await server.start();

  // Use GraphQL middleware
  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware,
  }));

  // Serve static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  // Use the Twilio endpoint
  app.post('/send-message', async (req, res) => {
    const { phoneNumber, messageBody } = req.body;

    try {
      const result = await twilio.sendMessage(phoneNumber, messageBody);
      res.json({ success: true, messageSid: result.sid });
    } catch (error) {
      console.error('Error sending message:', error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  });

  // Start the Express server
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}`);
      console.log(`Use GraphQL sandbox at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
