import shortid from 'shortid';


export const NavArrayLink = [
    {
        to: '/',
        text: 'Foo',
        id: shortid.generate()
    },
    {
        to: '/male',
        text: 'male',
        id: shortid.generate()
    },
    {
        to: '/female',
        text: 'female',
        id: shortid.generate()
    },
    {
        to: '/childish',
        text: 'childish',
        id: shortid.generate()
    },

]



export const NavArrayRoute = [
    {
        path: '/',
        exact: true,
        id: shortid.generate(),
    },
    {
        path: '/male',
        id: shortid.generate(),
    },
    {
        path: '/female',
        id: shortid.generate()
    },
    {
        path: '/childish',
        id: shortid.generate()
    },

]
