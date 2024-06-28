import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface invention {
  inventName: string
  idea1: string
  idea2: string
  idea3: string
  descript: string
}

function Inventions() {
  return (
    <div className="card-group">
      <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Invention</h5>
        </div>
        <div className="card-footer">
          <small className="text-muted">Invention</small>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">idea 1</h5>
        </div>
        <div className="card-footer">
          <small className="text-muted">idea 1</small>
        </div>
      </div>
      <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">idea 2</h5>
        </div>
        <div className="card-footer">
          <small className="text-muted">idea 2</small>
        </div>
      </div>
      <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">idea 3</h5>
        </div>
        <div className="card-footer">
          <small className="text-muted">idea 3</small>
        </div>
      </div>
      <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">descrip</h5>
        </div>
        <div className="card-footer">
          <small className="text-muted">Description</small>
        </div>
      </div>
    </div>
  )
}

export default Inventions
