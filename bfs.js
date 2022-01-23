const bfs = (graph,source) => {
    const queue = [ source ];

    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for(let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }
};

const graph = {
    a: ['c','b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

bfs(graph,'a');
