// submit.js

import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({
      nodes: state.nodes,
      edges: state.edges,
    }),
    shallow
  );

  const handleSubmit = async () => {
    if (nodes.length === 0) {
      MySwal.fire({
        icon: 'warning',
        title: 'Pipeline Empty',
        html: `
          <div class="swal-html">
            Please add at least one node before submitting the pipeline.
          </div>
        `,
        confirmButtonText: 'Okay',
        customClass: {
          popup: 'swal-popup',
          title: 'swal-title',
          htmlContainer: 'swal-html',
          confirmButton: 'swal-confirm-btn',
        },
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await response.json();

      MySwal.fire({
        icon: 'success',
        title: 'Pipeline Analysis',
        html: `
          <div class="swal-html">
            <div><b>Nodes:</b> ${data.num_nodes}</div>
            <div><b>Edges:</b> ${data.num_edges}</div>
            <div>
              <b>Is DAG:</b> 
              <span style="color:${data.is_dag ? '#16a34a' : '#dc2626'}">
                ${data.is_dag ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        `,
        confirmButtonText: 'Done',
        customClass: {
          popup: 'swal-popup',
          title: 'swal-title',
          htmlContainer: 'swal-html',
          confirmButton: 'swal-confirm-btn',
        },
      });

    } catch (error) {
      console.error("Error submitting pipeline:", error);

      MySwal.fire({
        icon: 'error',
        title: 'Connection Failed',
        html: `
          <div class="swal-html">
            Unable to connect to the backend server.<br/>
            Please make sure it is running.
          </div>
        `,
        confirmButtonText: 'Retry',
        customClass: {
          popup: 'swal-popup',
          title: 'swal-title',
          htmlContainer: 'swal-html',
          confirmButton: 'swal-confirm-btn',
        },
      });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderTop: '1px solid #e2e8f0',
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          padding: '12px 24px',
          cursor: 'pointer',
          backgroundColor: '#6366f1',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: '600',
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.4)',
          outline: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.boxShadow =
            '0 6px 10px -2px rgba(99, 102, 241, 0.45)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow =
            '0 4px 6px -1px rgba(99, 102, 241, 0.4)';
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
};
