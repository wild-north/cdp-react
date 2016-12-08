const dummyList = [
    {
        title: 'Frontend',
        opened: true,
        projects: [
            {title: 'Первая категория... ',                 done: true},
            {title: 'consectetur adipisicing elit',         done: false},
            {title: 'explicabo itaque laudantium mollitia', done: false},
            {title: 'ipsum minima nam nesciunt quas',       done: false},
            {title: 'aliquid id sed veritatis voluptatum',  done: false}
        ],
        kids: [
            {
                title: 'es6',
                projects: [
                    {title: 'Lorem ipsum dolor sit amet',           done: true},
                    {title: 'aliquid id sed veritatis voluptatum',  done: false}
                ],
            },
            {
                title: 'react',
                projects: [
                    {title: 'Lorem ipsum dolor sit amet',           done: true},
                    {title: 'consectetur adipisicing elit',         done: false}
                ],
                opened: true,
                kids: [
                    {
                        title: 'components',
                        opened: true,
                        projects: [
                            {title: 'explicabo itaque laudantium mollitia', done: false},
                            {title: 'ipsum minima nam nesciunt quas',       done: false},
                            {title: 'aliquid id sed veritatis voluptatum',  done: false}
                        ],
                        kids: [
                            {
                                title: 'stateful',
                                projects: [
                                    {title: 'Lorem ipsum dolor sit amet',           done: true},
                                    {title: 'consectetur adipisicing elit',         done: false},
                                    {title: 'explicabo itaque laudantium mollitia', done: false},
                                    {title: 'ipsum minima nam nesciunt quas',       done: false},
                                    {title: 'aliquid id sed veritatis voluptatum',  done: false},
                                ]
                            },
                            {
                                title: 'stateless',
                                projects: [
                                    {title: 'Lorem ipsum dolor sit amet',           done: true},
                                    {title: 'consectetur adipisicing elit',         done: false},
                                    {title: 'explicabo itaque laudantium mollitia', done: false},
                                    {title: 'ipsum minima nam nesciunt quas',       done: false},
                                    {title: 'aliquid id sed veritatis voluptatum',  done: false}
                                ]
                            }
                        ]
                    },
                    {
                        title: 'life cycle',
                        projects: [
                            {title: 'consectetur adipisicing elit',         done: false}
                        ]
                    },
                    {
                        title: 'routing',
                        projects: [
                            {title: 'Lorem ipsum dolor sit amet',           done: true},
                            {title: 'consectetur adipisicing elit',         done: false}
                        ]
                    }
                ]
            },
            {
                title: 'redux',
                projects: [
                    {title: 'consectetur adipisicing elit',         done: false},
                    {title: 'ipsum minima nam nesciunt quas',       done: false},
                    {title: 'aliquid id sed veritatis voluptatum',  done: false}
                ]
            }
        ]
    },
    {
        title: 'Markup',
        opened: false,
        projects: [
            {title: 'Lorem ipsum dolor sit amet',           done: true},
            {title: 'consectetur adipisicing elit',         done: false},
            {title: 'explicabo itaque laudantium mollitia', done: false},
            {title: 'ipsum minima nam nesciunt quas',       done: false},
            {title: 'aliquid id sed veritatis voluptatum',  done: false},
        ],
        kids: [
            {
                title: 'HTML5',
                projects: [
                    {title: 'Lorem ipsum dolor sit amet',           done: true},
                    {title: 'ipsum minima nam nesciunt quas',       done: false},
                    {title: 'consectetur adipisicing elit',         done: false},
                    {title: 'aliquid id sed veritatis voluptatum',  done: false}
                ]
            },
            {
                title: 'CSS3',
                opened: false,
                projects: [
                    {title: 'Lorem ipsum dolor sit amet',           done: true},
                    {title: 'consectetur adipisicing elit',         done: false},
                    {title: 'explicabo itaque laudantium mollitia', done: false},
                    {title: 'aliquid id sed veritatis voluptatum',  done: false}
                ],
                kids: [
                    {
                        title: 'Flexbox',
                        projects: [
                            {title: 'Lorem ipsum dolor sit amet',           done: true},
                            {title: 'consectetur adipisicing elit',         done: false},
                            {title: 'explicabo itaque laudantium mollitia', done: false},
                            {title: 'ipsum minima nam nesciunt quas',       done: false},
                            {title: 'aliquid id sed veritatis voluptatum',  done: false},
                        ]
                    }
                ]
            }
        ]
    }
];

export default dummyList;