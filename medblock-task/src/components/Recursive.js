import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Recursion({ data }) {
  const treeData = data;
  let tree = treeData.tree;
  let id = tree.id;

  function getNodes(nodes, result = []) {
    for (let i = 0; i < nodes.length; i++) {
      if (!nodes[i].children || nodes[i].children.length === 0) {
        result.push(nodes[i].aqlPath);
      } else {
        result = getNodes(nodes[i].children, result);
      }
    }
    return result;
  }
  const array = getNodes([tree]);

  function printPathHelper(node, value, result) {
    if (!node) return false;
    if (node.aqlPath === value) {
      result.push(node.id);
      return true;
    }
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        let child = printPathHelper(node.children[i], value, result);
        if (child) {
          result.push(node.id);
          return true;
        }
      }
    }
    return false;
  }

  function printPath(node, value, result = []) {
    printPathHelper(node, value, result);
    result = result.reverse().join("/");
    return result;
  }
  function copyPath(e) {
    let path = printPath(tree, e.target.value);
    alert(path);
  }

  function SubTree({ child }) {
    const nestedpaths = (child?.children || []).map((child) => {
      return <SubTree key={child.id} child={child} />;
    });

    return (
      <div>
        <div>
          {array.includes(child.aqlPath) ? (
            <div style={{ color: "grey", marginLeft: "50px" }}>
              {child.id}
              <button
                className="btn btn-info btn-sm"
                style={{
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
                value={child.aqlPath}
                onClick={copyPath}
              >
                Copy
              </button>
            </div>
          ) : (
            <div> {child.id}</div>
          )}
        </div>
        {nestedpaths}
      </div>
    );
  }
  return (
    <div>
      <h2 style={{ marginLeft: "20px" }}>Tree ID : {id}</h2>
      <div style={{ marginLeft: "20px", marginTop: "40px" }}>
        {treeData.tree?.children.map((child) => {
          return <SubTree key={child.id} child={child} />;
        })}
      </div>
    </div>
  );
}

export default Recursion;
