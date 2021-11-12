// import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import {createSerializer} from 'enzyme-to-json';




Enzyme.configure({ adapter: new Adapter() })
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

