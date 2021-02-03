const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

jest.mock('../lib/Employee');

beforeEach(() => {
    Employee.mockClear();
});

describe('../lib/Employee', () => {

it('You can check if the Engineer called the class constructor at Employee', () => {
    const manager = new Manager();

    expect(Employee).toHaveBeenCalledTimes(1);
    console.log("Intern called Employee Constructor Once");
});

});