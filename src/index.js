import React from 'react';
import ReactDOM from 'react-dom'
import { CircleAndText } from './components/CircleAndText';
import { BarChart } from "./components/BarChart";

ReactDOM.render(<CircleAndText/>, document.getElementById('circle-and-text-container'));

ReactDOM.render(<BarChart/>, document.getElementById('barchart-container'));