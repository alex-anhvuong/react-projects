// import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ask from './Api';

configure({ adapter: new Adapter() });

jest.mock('./Api'); //  Mock the ask of Api to __mocks__/Api

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('should display a text input to fill question', () => {
  const wrapper = shallow(<App />);  //  shallow compile only <App>, and not its children
  expect(wrapper.find('input[type="text"]').length).toBe(1);
});

it('should display a submit button to send question to the Internet Gods', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('button[type="submit"]').length).toBe(1);
});

it('should not display any answer by default', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.answer').length).toBe(0);
});

it('should display Internet Gods answer in both text and picture format', () => {
  const wrapper = shallow(<App />);
  wrapper.find('button').simulate('click');

  //  Use return here, so that our test wait for the end of the returned Promise
  return Promise.resolve()
    .then(() => {
      wrapper.update(); //  Re-render

      const answer = wrapper.find('.answer');
      expect(answer.find('h1').text()).toBe('no');
      expect(answer.find('img').prop('src')).toBe('https://yesno.wtf/assets/no/0-b6d3e555af2c09094def76cf2fbddf46.gif');
    });
});

describe('API Caller', () => {

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call YesNo API', () => {
    const fetchSpy = jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
        json: () => { },
      }));
    //  Instead of making api call to external system, we use mockImplementation
    //  It replaces behaviour of fetch with our customed implementation (for testing)
    // **
    //  Our implementation returns a Promise since below, our true function ask() will returns a Promise

    return ask()
      .then(() => {
        expect(fetchSpy).toHaveBeenCalledWith('https://yesno.wtf/api/')
      });
  });

  it('should return YesNo response in JSON format', () => {
    const fetchSpy = jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
        json: () => ({ foo: 'bar' }),
      }));
    //  Implement the fetch to return json

    return ask()
      .then(response => {
        expect(response).toEqual({
          answer: 'no',
          forced: false,
          image: 'https://yesno.wtf/assets/no/0-b6d3e555af2c09094def76cf2fbddf46.gif'
        });
      });
  });
});

