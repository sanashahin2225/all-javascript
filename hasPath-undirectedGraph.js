// finding the path in graph
const hasPath = (graph,src,dst,visited) => {
    if(src==dst) return true;
    if(visited.has(src)) return false;

    visited.add(src);

    for(let neighbor of graph[src]){
    if(hasPath(graph,neighbor,dst,visited) == true){
        return true;
        }
    }
    return false;
};

//converting undirected graph to directed graph
const buildGraph = (edges) => {
    const graph = {};

    for(let neighbor of edges){
        const [a ,b] = neighbor;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};

const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
];

const undirectedPath = (edges,nodeA,nodeB) => {
    const graph = buildGraph(edges);
    return hasPath(graph,nodeA,nodeB,new Set());
};
console.log(undirectedPath(edges,'j','o'));
