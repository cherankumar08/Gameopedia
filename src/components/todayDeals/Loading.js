import React from 'react'

const Loading = () => {
  return (
    <div>
      <div className="text-center mb-5">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loading