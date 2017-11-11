// setup file
import Enzyme, { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'raf/polyfill';
import './helpers/setupJsdom';

Enzyme.configure({ adapter: new Adapter() });

global.mount = mount;
global.render = render;
global.shallow = shallow;
global.sinon = sinon;
global.toJson = toJson;
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
