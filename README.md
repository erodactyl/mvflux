# Mvflux

To install run:

```
npm install --save mvflux
```

or

```
yarn add mvflux
```

# Usage

Store code:

```
import { Store } from 'mvflux'

class CustomStore extends Store {
	data = {
		counter: 0
	}
	increment = () => {
		this.setData(data => ({ counter: data.counter + 1 }));
	}
}

export default new CustomStore;
```

Component code:

```
import React from 'react'
import { connect } from 'mvflux'
import MyCustomStore from './customStore'

class MyComponent extends React.Component {
...
}

export default connect(MyCustomStore)(MyComponent)
```

Inside MyComponent you can use the data from the store (in this case this.props.counter) and running MyCustomStore.increment() will rerender the component with the new, incremented counter.
