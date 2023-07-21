#!/usr/bin/env node

import getEven from '../src/even.js';
import getUserName from '../src/cli.js';

const name = getUserName();
getEven(name);
