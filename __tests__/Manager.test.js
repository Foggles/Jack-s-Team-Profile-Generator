const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

jest.mock('../lib/Employee');

beforeEach(() => {
    Employee.mockClear();
});

describe('../lib/Employee', () => {

it('You can check if the Manager called the class constructor at Employee', () => {
    const manager = new Manager();

    expect(Employee).toHaveBeenCalledTimes(1);
    console.log("Manager called Employee Constructor Once");
});

it('You can check if the Manager called the class constructor at Manager', () => {
    const manager = new Manager();

    expect(Manager).toHaveBeenCalledTimes(1);
    console.log("Manager called Manager Constructor Once");
});

});