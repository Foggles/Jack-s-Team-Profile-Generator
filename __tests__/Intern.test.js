const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

jest.mock('../lib/Employee');

beforeEach(() => {
    Employee.mockClear();
});

describe('../lib/Employee', () => {

it('You can check if the Engineer called the class constructor at Employee', () => {
    const intern = new Intern();

    expect(Employee).toHaveBeenCalledTimes(1);
    console.log("Intern called Employee Constructor Once");
});

});