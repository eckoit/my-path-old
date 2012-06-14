exports.rewrites = [
    {from: '/', to: 'm.html'},
    {from:"/api", to:'../../'},
    {from:"/api/*", to:'../../*'},
    {from: '/*', to: '*'}
];

