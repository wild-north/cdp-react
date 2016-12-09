const dummyList = [
    {
        title: 'Frontend',
        opened: true,
        projects: [
            {title: 'Первая категория... ',                 isActive: true},
            {title: 'consectetur adipisicing elit',         isActive: false},
            {title: 'explicabo itaque laudantium mollitia', isActive: false},
            {title: 'ipsum minima nam nesciunt quas',       isActive: false},
            {title: 'aliquid id sed veritatis voluptatum',  isActive: false}
        ],
        kids: [
            {
                title: 'es6',
                projects: [
                    {title: 'Lorem ipsum dolor sit amet',           isActive: true},
                    {title: 'aliquid id sed veritatis voluptatum',  isActive: false}
                ],
            },
            {
                title: 'react',
                projects: [
                    {title: 'Lorem ipsum dolor sit amet',           isActive: true},
                    {title: 'consectetur adipisicing elit',         isActive: false}
                ],
                opened: true,
                kids: [
                    {
                        title: 'components',
                        opened: true,
                        projects: [
                            {title: 'explicabo itaque laudantium mollitia', isActive: false},
                            {title: 'ipsum minima nam nesciunt quas',       isActive: false},
                            {title: 'aliquid id sed veritatis voluptatum',  isActive: false}
                        ],
                        kids: [
                            {
                                title: 'stateful',
                                projects: [
                                    {title: 'Lorem ipsum dolor sit amet',           isActive: true},
                                    {title: 'consectetur adipisicing elit',         isActive: false},
                                    {title: 'explicabo itaque laudantium mollitia', isActive: false},
                                    {title: 'ipsum minima nam nesciunt quas',       isActive: false},
                                    {title: 'aliquid id sed veritatis voluptatum',  isActive: false},
                                ]
                            },
                            {
                                title: 'stateless',
                                projects: [
                                    {title: 'Lorem ipsum dolor sit amet',           isActive: true},
                                    {title: 'consectetur adipisicing elit',         isActive: false},
                                    {title: 'explicabo itaque laudantium mollitia', isActive: false},
                                    {title: 'ipsum minima nam nesciunt quas',       isActive: false},
                                    {title: 'aliquid id sed veritatis voluptatum',  isActive: false}
                                ]
                            }
                        ]
                    },
                    {
                        title: 'life cycle',
                        projects: [
                            {title: 'consectetur adipisicing elit',         isActive: false}
                        ]
                    },
                    {
                        title: 'routing',
                        projects: [
                            {title: 'Lorem ipsum dolor sit amet',           isActive: true},
                            {title: 'consectetur adipisicing elit',         isActive: false}
                        ]
                    }
                ]
            },
            {
                title: 'redux',
                projects: [
                    {title: 'consectetur adipisicing elit',         isActive: false},
                    {title: 'ipsum minima nam nesciunt quas',       isActive: false},
                    {title: 'aliquid id sed veritatis voluptatum',  isActive: false}
                ]
            }
        ]
    },
    {
        title: 'Markup',
        opened: false,
        projects: [
            {title: 'Lorem ipsum dolor sit amet',           isActive: true},
            {title: 'consectetur adipisicing elit',         isActive: false},
            {title: 'explicabo itaque laudantium mollitia', isActive: false},
            {title: 'ipsum minima nam nesciunt quas',       isActive: false},
            {title: 'aliquid id sed veritatis voluptatum',  isActive: false},
        ],
        kids: [
            {
                title: 'HTML5',
                projects: [
                    {title: 'Lorem ipsum dolor sit amet',           isActive: true},
                    {title: 'ipsum minima nam nesciunt quas',       isActive: false},
                    {title: 'consectetur adipisicing elit',         isActive: false},
                    {title: 'aliquid id sed veritatis voluptatum',  isActive: false}
                ]
            },
            {
                title: 'CSS3',
                opened: false,
                projects: [
                    {title: 'Lorem ipsum dolor sit amet',           isActive: true},
                    {title: 'consectetur adipisicing elit',         isActive: false},
                    {title: 'explicabo itaque laudantium mollitia', isActive: false},
                    {title: 'aliquid id sed veritatis voluptatum',  isActive: false}
                ],
                kids: [
                    {
                        title: 'Flexbox',
                        projects: [
                            {title: 'Lorem ipsum dolor sit amet',           isActive: true},
                            {title: 'consectetur adipisicing elit',         isActive: false},
                            {title: 'explicabo itaque laudantium mollitia', isActive: false},
                            {title: 'ipsum minima nam nesciunt quas',       isActive: false},
                            {title: 'aliquid id sed veritatis voluptatum',  isActive: false},
                        ]
                    }
                ]
            }
        ]
    }
];

export default dummyList;