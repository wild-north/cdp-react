const dummyList = [
    {
        title: 'Frontend',
        children: [
            {title: 'es6'},
            {
                title: 'react',
                children: [
                    {
                        title: 'components',
                        children: [
                            {title: 'stateful'},
                            {title: 'stateless'}

                        ]
                    },
                    {title: 'life cycle'},
                    {title: 'routing'}

                ]
            },
            {title: 'redux'}
        ]
    },
    {
        title: 'Markup',
        children: [
            {title: 'HTML5'},
            {
                title: 'CSS3',
                children: [
                    {title: 'Flexbox'}
                ]
            }
        ]
    }
];

export default dummyList;