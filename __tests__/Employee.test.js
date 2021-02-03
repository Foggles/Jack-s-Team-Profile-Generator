const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

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

it('You can check if the Manager called the class constructor at Employee', () => {
    const manager = new Manager();

    expect(Employee).toHaveBeenCalledTimes(1);
    console.log("Manager called Employee Constructor Once");
});

it('You can check if the Engineer called the class constructor at Employee', () => {
    const engineer = new Engineer();

    expect(Employee).toHaveBeenCalledTimes(1);
    console.log("Engineer called Employee Constructor Once");
});

it('You can check if the Intern called the class constructor at Employee', () => {
    const intern = new Intern();

    expect(Employee).toHaveBeenCalledTimes(1);
    console.log("Intern called Employee Constructor Once");
});

});