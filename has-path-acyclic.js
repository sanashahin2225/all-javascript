// Using Depth First Search
const has_path = (graph,source,dest) => {
    if(source == dest) return true;

    for(let neighbour of graph[source]) {
        if(has_path(graph,neighbour,dest) == true) {
            return true;
        }
    }
    return false;
};


//Using Breadth First Search
const has_path_bfs = (graph,source,dest) => {
    const queue = [ source ];
    while(queue.length > 0){
        const current = queue.shift();
        if(current == dest) return true;

        for(let neighbour of graph[current]) {
            queue.push(neighbour)
        }
    }
    return false;
};

const graph = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: []
};

console.log(has_path(graph,'f','k'));
console.log(has_path_bfs(graph,'f','k'));
