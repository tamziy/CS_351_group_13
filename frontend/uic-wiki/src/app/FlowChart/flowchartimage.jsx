import React, { useState } from 'react';
import FlowchartComponent from './flowchartcomponent';
import { ArrowDownIcon } from 'lucide-react';

function FlowchartImage() {
    const [nodes] = useState([
        { id: '100level', data: { label: '100-Level' }, position: { x: -300, y: 160 }, style: {height: 40, width: 120, backgroundColor: 'white', color: 'black', fontSize: 16 }},
        { id: '200level', data: { label: '200-Level' }, position: { x: -300, y: 300 }, style: {height: 40, width: 120, backgroundColor: 'white', color: 'black', fontSize: 16 }},
        { id: '300level', data: { label: '300-Level' }, position: { x: -300, y: 400 }, style: {height: 40, width: 120, backgroundColor: 'white', color: 'black', fontSize: 16 }},
        { id: '400level', data: { label: '400-Level' }, position: { x: -300, y: 500 }, style: {height: 40, width: 120, backgroundColor: 'white', color: 'black', fontSize: 16 }},
        // { id: 'line', data: { label: ' ' }, position: { x: -300, y: 180 }, style: {height: 0, width: 900, color: 'black', padding: 0 }},
        { id: 'line2', data: { label: ' ' }, position: { x: -300, y: 280 }, style: {height: 0, width: 900, color: 'black', padding: 0 }},
        { id: 'line3', data: { label: ' ' }, position: { x: -300, y: 380 }, style: {height: 0, width: 900, color: 'black', padding: 0 }},
        { id: 'line4', data: { label: ' ' }, position: { x: -300, y: 480 }, style: {height: 0, width: 900, color: 'black', padding: 0 }},
        { id: 'cs111', data: { label: 'CS 111' }, position: { x: 200, y: 100 }, style: {height: 40, width: 70, backgroundColor: 'lightcoral', color: 'black' }},
        { id: 'cs141', data: { label: 'CS 141' }, position: { x: 100, y: 200 }, style: {height: 40, width: 70, backgroundColor: 'lightcoral', color: 'black' }},
        { id: 'cs151', data: { label: 'CS 151' }, position: { x: 300, y: 200 }, style: {height: 40, width: 70, backgroundColor: 'lightcoral', color: 'black' }},
        { id: 'cs211', data: { label: 'CS 211' }, position: { x: 50, y: 300 }, style: {height: 40, width: 70, backgroundColor: 'lightblue', color: 'black' }},
        { id: 'cs251', data: { label: 'CS 251' }, position: { x: 150, y: 300 }, style: {height: 40, width: 70, backgroundColor: 'lightblue', color: 'black' }},
        { id: 'cs261', data: { label: 'CS 261' }, position: { x: 250, y: 300 }, style: {height: 40, width: 70, backgroundColor: 'lightblue', color: 'black' }},
        { id: 'cs277', data: { label: 'CS 277' }, position: { x: 350, y: 300 }, style: {height: 40, width: 70, backgroundColor: 'lightblue', color: 'black' }},
        { id: 'cs301', data: { label: 'CS 301' }, position: { x: 0, y: 400 }, style: {height: 40, width: 70, backgroundColor: 'lightgreen', color: 'black' }},
        { id: 'cs341', data: { label: 'CS 341' }, position: { x: 100, y: 400 }, style: {height: 40, width: 70, backgroundColor: 'lightgreen', color: 'black' }},
        { id: 'cs342', data: { label: 'CS 342' }, position: { x: 200, y: 400 }, style: {height: 40, width: 70, backgroundColor: 'lightgreen', color: 'black' }},
        { id: 'cs361', data: { label: 'CS 361' }, position: { x: 300, y: 400 }, style: {height: 40, width: 70, backgroundColor: 'lightgreen', color: 'black' }},
        { id: 'cs362', data: { label: 'CS 362' }, position: { x: 400, y: 400 }, style: {height: 40, width: 70, backgroundColor: 'lightgreen', color: 'black' }},
        { id: 'cs377', data: { label: 'CS 377' }, position: { x: 500, y: 400 }, style: {height: 40, width: 70, backgroundColor: 'lightgreen', color: 'black' }},
        { id: 'cs401', data: { label: 'CS 401' }, position: { x: 100, y: 500 }, style: {height: 40, width: 70, backgroundColor: 'lightpink', color: 'black' }},
        { id: 'cs499', data: { label: 'CS 499' }, position: { x: 200, y: 500 }, style: {height: 40, width: 70, backgroundColor: 'lightpink', color: 'black' }},
        { id: 'engr100', data: { label: 'ENGR 100' }, position: { x: 50, y: 100 }, style: {height: 40, width: 90, backgroundColor: 'teal', color: 'black' }},
        { id: 'math180', data: { label: 'MATH 180' }, position: { x: 200, y: 200 }, style: {height: 40, width: 80, backgroundColor: 'magenta', color: 'black' }},
    ]);

    const [edges] = useState([
        { id: 'e1-2', source: 'cs111', target: 'cs141', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-3', source: 'cs111', target: 'cs151', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-4', source: 'cs141', target: 'cs211', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-5', source: 'cs141', target: 'cs251', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-6', source: 'cs141', target: 'cs261', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-7', source: 'cs141', target: 'cs277', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-9', source: 'cs151', target: 'cs251', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-10', source: 'cs151', target: 'cs301', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-11', source: 'cs211', target: 'cs401', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-12', source: 'cs211', target: 'cs341', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-13', source: 'cs211', target: 'cs342', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-14', source: 'cs251', target: 'cs341', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-15', source: 'cs251', target: 'cs342', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-16', source: 'cs251', target: 'cs377', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-17', source: 'cs261', target: 'cs361', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-18', source: 'cs261', target: 'cs362', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black'}},
        { id: 'e1-19', source: 'math180', target: 'cs141', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black', strokeDasharray: '5,5'}},
        { id: 'e1-20', source: 'math180', target: 'cs151', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black', strokeDasharray: '5,5'}},
        { id: 'e1-21', source: 'cs211', target: 'cs251', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black', strokeDasharray: '5,5'}},
        { id: 'e1-22', source: 'cs251', target: 'cs301', animated: false, markerEnd:{ type: 'arrowclosed', color: 'black'}, style: { stroke: 'black', strokeDasharray: '5,5'}},
    ]);

    return (
        <div style = {{ width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', top: 65, right: 50, zIndex: 10, backgroundColor: 'black', padding: '10px', border: '1px solid black', borderRadius: '5px' }}>
                <h4 style = {{ margin: '5px', fontSize: 18 }}>Legend</h4>
                <div><span style = {{ borderBorrom: '2px dashed black'}}>---</span> Co-requisite</div>
                <div><span style = {{ borderBorrom: '2px dashed black'}}>→</span> Prequisite</div>
                {/* <div><span style = {{ backgroundColor: 'lightcoral', color: 'white', padding: '2px 5px' }}>100-Level</span></div>
                <div><span style = {{ backgroundColor: 'lightblue', color: 'white', padding: '2px 5px' }}>200-Level</span></div>
                <div><span style = {{ backgroundColor: 'lightgreen', color: 'white', padding: '2px 5px' }}>300-Level</span></div>
                <div><span style = {{ backgroundColor: 'lightpink', color: 'white', padding: '2px 5px' }}>400-Level</span></div>
                <div><span style = {{ backgroundColor: 'teal', color: 'white', padding: '2px 5px' }}>Engineering Requirement</span></div>
                <div><span style = {{ backgroundColor: 'magenta', color: 'white', padding: '2px 5px' }}>Math Requirement</span></div> */}
            </div>
            <FlowchartComponent nodes={nodes} edges={edges} />
        </div>
    );
}

export default FlowchartImage;