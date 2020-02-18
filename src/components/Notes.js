import React, {useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {TransitionGroup, CSSTransition} from "react-transition-group";


export const Notes = ({notes, onRemove}) => {
    const alert = useContext(AlertContext);
    return (
        <TransitionGroup component='ul' className='list-group'>
            {notes.map((note) => (
                <CSSTransition
                    key={note.id}
                    classNames={'note'}
                    timeout={1000}
                >
                    <li
                        className='list-group-item note'
                        key={note.id}
                    >
                        <div>
                            <strong> {note.tittle}</strong>
                            <span> {note.date}</span>
                        </div>
                        <button
                            type="button"
                            className="btn btn-danger btn-sm "
                            onClick={() => onRemove(note.id, alert)}
                        >
                            &times;
                        </button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
};