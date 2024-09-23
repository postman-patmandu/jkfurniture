import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'John Hawke',
        email: 'hawkeyecleaning@gmail.com',
        password: bcrypt.hashSync('Hawkeye_10', 10),
        isAdmin: true,
    },
    {
        name: 'Patrick Hayes',
        email: 'patrickhayes6@gmail.com',
        password: bcrypt.hashSync('BinStridsky_10', 10),
        isAdmin: true,
    },
    {
        name: 'John Kitchener',
        email: 'jkfurniturenz@gmail.com',
        password: bcrypt.hashSync('john-kitchener_10', 10),
        isAdmin: false,
    },
];

export default users;