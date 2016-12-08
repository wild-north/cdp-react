const dummyList = [
    {
        title: 'Frontend',
        opened: true,
        kids: [
            {
                title: 'es6'
            },
            {
                title: 'react',
                opened: true,
                kids: [
                    {
                        title: 'components',
                        opened: true,
                        kids: [
                            {
                                title: 'stateful'
                            },
                            {
                                title: 'stateless'
                            }
                        ]
                    },
                    {
                        title: 'life cycle'
                    },
                    {
                        title: 'routing'
                    }
                ]
            },
            {
                title: 'redux'
            }
        ]
    },
    {
        title: 'Markup',
        opened: false,
        kids: [
            {
                title: 'HTML5'
            },
            {
                title: 'CSS3',
                opened: false,
                kids: [
                    {
                        title: 'Flexbox'
                    }
                ]
            }
        ]
    }
];

export default dummyList;