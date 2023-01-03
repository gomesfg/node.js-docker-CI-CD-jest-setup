const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('Should say Hello Gomes', () => {
        const response = sayHelloWorld.sayHello('Gomes');

        expect(response).toBe('Hello Gomes!');
    })
});