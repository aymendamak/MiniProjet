import React from "react";
import deleteLogo from './delete_outline-24px.svg';
import ModifyLogo from './modify.png';

export default props => (
    <tr>
      <td>
          {props.todo.title}
      </td>

      <td>
          {props.todo.description}
      </td>
    
      <td>
          {props.todo.status}
      </td>

      <td>
      <button onClick={props.onDelete}> <img src={deleteLogo} alt="Logo" /> </button>
      </td>

    </tr>
);
