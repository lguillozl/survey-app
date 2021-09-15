import React from 'react';
import './firebase/config';
import ReactDOM from 'react-dom';
import './styles/styles.scss'
import { SurveyApp } from './SurveyApp';

ReactDOM.render(
    <SurveyApp />,
  document.getElementById('root')
);