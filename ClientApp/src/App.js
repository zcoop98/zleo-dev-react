import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';
import { About } from './components/About';

export default function App() {
	return (
		<Layout>
			<Route exact path='/' component={Home} />
			<Route path='/counter' component={Counter} />
			<Route path='/fetch-data' component={FetchData} />
			<Route path='/resume' component={Resume} />
			<Route path='/projects' component={Projects} />
			<Route path='/about' component={About} />
		</Layout>
	);
}
