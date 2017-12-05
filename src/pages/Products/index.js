import reducer from './ducks';
import logic from './logic';
import connect from './connect';
import component from './Container';

export { reducer, logic };
export default connect(component);
