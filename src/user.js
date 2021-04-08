import React from "react";

export default function User(props) {
    return <>
        <div className="col col-3 file">
            <button className="btn btn-dark file">
                <i className={props.data.fileType} id="icon"></i> | {props.data.file}
            </button>
        </div>
    </>
}