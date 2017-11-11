// setup file
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'raf/polyfill';
import './helpers/setupJsdom';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
