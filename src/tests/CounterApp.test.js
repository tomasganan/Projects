import CounterApp from "../CounterApp"

describe('Pruebas en el <CounterApp />', () => {

    test('Colocar el valor por defecto con el boton reset ', () => {

        const wrapper = shallow(<CounterApp value = {115} />);

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');
        
    })
    
    
    
})
