import { {{name}}Selector} from './{{name}}.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
export const {{name}}Logic = () => {
  const dispatch = useDispatch();
  const {} = useSelector({{name}}Selector);
  return {};
}