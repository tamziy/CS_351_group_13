import ReactFlow, { Background, Controls } from 'reactflow';

const FlowchartComponent = ({nodes, edges}) => {

  return (
    <div style={{ width: '100%', height: '90vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesDraggable={false}
        nodesConnectable={false}
        zoomOnScroll={false}
        panOnScroll={false}
        panOnDrag={false}
        zoomOnPinch={false}
        zoomOnDoubleClick = {false}
        fitView
      >
        {/* <Background />
        <Controls /> */}
      </ReactFlow>
    </div>

  );
}  
export default FlowchartComponent;
