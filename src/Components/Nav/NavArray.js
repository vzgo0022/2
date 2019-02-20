import shortid from 'shortid';


export const NavArrayLink = [
    {
        to: '/Women',
        text: '1',
        id: shortid.generate()
    },
    {
        to: '/Women',
        text: '2',
        id: shortid.generate()
    },
    {
        to: '/Women',
        text: '3',
        id: shortid.generate()
    },

]



export const NavArrayRoute = [
    {
        path: '/',
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
