import ReactFlow, { Background, Controls } from 'reactflow';

const FlowchartComponent = ({nodes, edges}) => {

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesDraggable={false}
        nodesConnectable={false}
        zoomOnScroll={false}
        panOnScroll={false}
        zoomOnPinch={false}
        panOnDrag={false}
        fitView
      >
      </ReactFlow>
    </div>
  );
}  
export default FlowchartComponent;
