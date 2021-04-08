import * as React from 'react';

import { ExampleComponent } from 'react-ts-package-eslint-github-actions';
import 'react-ts-package-eslint-github-actions/dist/index.css';

class App extends React.Component {
    public render(): React.ReactElement {
        return <ExampleComponent text='Create React Library Example 😄' />;
    }
}

export default App;
