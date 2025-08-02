import {type TaskCardProps } from "../libs/types";

export function Task({id, title, description, isDone }: TaskCardProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-4">
            <h5 className="card-title">{title}</h5>
          </div>
          <div className="col-lg-4">
            <p className="card-text">{description}</p>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-success me-2">Done</button>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
