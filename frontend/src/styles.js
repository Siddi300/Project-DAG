// style.js

export const nodeInputStyle = {
    width: '100%',
    border: '1.5px solid #f1f5f9',
    borderRadius: '6px',
    padding: '6px 8px',
    fontSize: '12px',
    outline: 'none',
    backgroundColor: '#f8fafc',
    color: '#334155',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box',
  };
  
  export const labelStyle = { 
    fontSize: '10px', 
    fontWeight: '700', 
    color: '#64748b',
    marginBottom: '4px',
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: '0.025em'
  };
  
  export const onFieldFocus = (e) => {
    e.target.style.borderColor = '#6366f1';
    e.target.style.backgroundColor = '#ffffff';
    e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
  };
  
  export const onFieldBlur = (e) => {
    e.target.style.borderColor = '#f1f5f9';
    e.target.style.backgroundColor = '#f8fafc';
    e.target.style.boxShadow = 'none';
  };