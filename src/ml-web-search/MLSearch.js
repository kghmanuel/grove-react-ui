import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { MLSearchBar } from './MLSearchBar.js';
import  MLSearchResults  from './MLSearchResults.js';

const results = [
  {
    label: 'A Search Result',
    matches: [
      {
        'match-text': [
          'We found the word ',
          {highlight: 'clandestine '},
          'for you.'
        ]
      }
    ],
    uri: '/uri/1.json'
  },
  {
    label: 'Another Search Result',
    matches: [
      {
        'match-text': [
          {highlight: 'Waldo'},
          '\'s over here.'
        ]
      },
      {
        'match-text': [
          'He (',
          {highlight: 'Waldo'},
          ') is over here too.'
        ]
      }
    ],
    uri: '/uri/2.json'
  },
  {
    label: 'A Search Result With a Particularly Long Label, Don\'t You Think?',
    matches: [],
    uri: '/uri/3.json'
  },
  {
    label: 'Result',
    matches: [],
    uri: '/uri/4.json'
  },
  {
    label: 'A Search Result',
    matches: [],
    uri: '/uri/5.json'
  },
  {
    label: 'A Search Result',
    matches: [],
    uri: '/uri/6.json'
  },
  {
    label: 'A Search Result',
    matches: [],
    uri: '/uri/7.json'
  },
  {
    label: 'A Search Result',
    matches: [],
    uri: '/uri/8.json'
  },
  {
    label: 'A Search Result',
    matches: [],
    uri: '/uri/9.json'
  },
  {
    label: 'A Search Result',
    matches: [],
    uri: '/uri/10.json'
  },
];

export class MLSearch extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={3}/>
          <Col md={9}>
            <Row>
              <MLSearchBar />
            </Row>
            <Row>
              <MLSearchResults results={results}/>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
