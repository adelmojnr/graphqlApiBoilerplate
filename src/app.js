const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	'playground': {
		endpoint: '/graphql'
	}
});

const path = '/graphql'

server.applyMiddleware({app, path})

module.exports = app