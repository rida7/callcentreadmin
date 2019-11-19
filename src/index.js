import React from 'react';
import ReactDOM from 'react-dom';
import {Provier} from './store/index';

import Main from './App';


ReactDOM.render(<div>
        <Provier>
        <Main />
        </Provier>
</div>, document.getElementById('root'));
