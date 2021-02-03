const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

jest.mock('../lib/Employee');

beforeEach(() => {
    Employee.mockClear();
});

describe('../lib/Employee', () => {

it('You can check if the Engineer called the class constructor at Employee', () => {
    const engineer = new Engineer();

    expect(Employee).toHaveBeenCalledTimes(1);
    console.log("Engineer called Employee Constructor Once");
});

it('You can check if the Engineer called the class constructor at Engineer', () => {
    const engineer = new Engineer();

    expect(Engineer).toHaveBeenCalledTimes(1);
    console.log("Engineer called Engineer Constructor Once");
});

});