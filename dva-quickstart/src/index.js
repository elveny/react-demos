import dva from 'dva';
import './index.css';

// 1. Initialize
//const app = dva();
const app = dva({
   initialState: {
     products: [
         { name: 'dva', id: 1 },
         { name: 'antd', id: 2 },
         { name: 'antd1', id: 3 },
         { name: 'antd2', id: 4 },
         { name: 'antd3', id: 5 },
       ],
     },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/products'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
