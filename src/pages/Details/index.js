import reducer from './ducks';
import connect from './connect';
import component from './Container';

export { reducer };
export default connect(component);
