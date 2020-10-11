let createTree = value =>{
    return {
        data:value,
        children:null,
        parent:null
    };
};

const addChild = (node ,value)=>{
    const newNode ={
        data:value,
        children:null,
        parent:node
    }
   node.children = node.children || []//保底
   node.children.push(newNode)
   return newNode
}

const travel = (tree,fn)=>{
    fn(tree);
    if(!tree.children)
    {
        return;
    }
    for(let i=0;i<tree.children.length;i++)
    {
        travel(tree.children[i],fn);
    }
}

const removeNode = (tree,node) => {
    const sibling = node.parent.children;
    let index = 0;
    for(let i  = 1;i<sibling.length;i++)
    {
        if(sibling[i]===node)
        index = i
    }
    sibling.splice(index,1)
}

const tree = createTree(10)
addChild(tree,20)
const node2=addChild(tree,30)
addChild(tree,40)
addChild(tree,50)
addChild(tree,60)
addChild(node2,201)
addChild(node2,202)
addChild(node2,203)
console.log(tree)
const fn =node => {
    console.log(node.data)
}
travel(tree,fn)
removeNode(tree,node2)



