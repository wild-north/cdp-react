const dummyList = [
    {
        title: 'Frontend',
        kids: [
            {
                title: 'es6'
            },
            {
                title: 'react',
                kids: [
                    {
                        title: 'components',
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
        kids: [
            {
                title: 'HTML5'
            },
            {
                title: 'CSS3',
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