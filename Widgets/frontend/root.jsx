import React from 'react';
import Clock from './clock';
import Tabs from './tab';

const tabsArr = [
{title: 'guardians of the galaxy',
content: 'i am root'},
{title: 'two',
content: 'second'},
{title: 'three',
content: 'third'}
];

const Root = () => (
<div>i am root
  I AM CLOCK
  <Clock></Clock>
  <Tabs banana={tabsArr}/>
</div>
)

export default Root;