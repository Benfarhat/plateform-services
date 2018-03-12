[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    fr: {
      name: '{{firstName()}} {{surname()}}',
      description: '{{lorem()}}'
    },
    ar: {
      name: '{{firstName()}} {{surname()}}',
      description: '{{lorem()}}'
    },
    isActive: '{{bool()}}',
    picture: 'http://placehold.it/32x32'
  }
]