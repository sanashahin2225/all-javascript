// Using Iterative Method
const dfs = (graph,source) => {
    const stack = [ source ]

    while(stack.length > 0){
        const current = stack.pop();
        console.log(current);
    

    for( let neighbour of graph[current]){
        stack.push(neighbour);
    }
}
};

// Using Recurrsion
const dfs_recurrsion = (graph,source) => {
    console.log(source);
    for(let neighbour of graph[source]) {
        dfs_recurrsion(graph,neighbour);
    }
};
const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

dfs(graph,'a');
dfs_recurrsion(graph,'a');
