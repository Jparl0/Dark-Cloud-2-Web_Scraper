import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Inventions({mappedInventionProp}) {
  return (
    <div class="card-group">
      <div class="card">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title 1</h5>
          <p class="card-descript"> descript 1</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">footer 1</small>
        </div>
      </div>
      <div class="card">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title 2</h5>
          <p class="card-descript">descript 2</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">footer 2</small>
        </div>
      </div>
      <div class="card">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title 3</h5>
          <p class="card-descript">descript 3</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">footer 3</small>
        </div>
      </div>
    </div>
  )
}

export default Inventions

