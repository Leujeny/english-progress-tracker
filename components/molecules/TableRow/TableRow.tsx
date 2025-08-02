import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faEye } from '@fortawesome/free-solid-svg-icons';
import IconButtonDialog from '../buttonDialog/IconbuttonDialog';

interface TableRowProps {
  item: any;
  index: number;
  deleteAction: (id: string) => void;
  deleteConfirmationMessage: string;
  viewPathPrefix: string;
  renderCells: (item: any) => React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({
  item,
  index,
  deleteAction,
  deleteConfirmationMessage,
  viewPathPrefix,
  renderCells,
}) => {
  return (
    <tr key={index}>
      <th className="hidden lg:block">{index + 1}</th>
      {renderCells(item)}
      <td className="flex justify-end">
        <IconButtonDialog title={"Supprimer une session"} iconTitle={faTrash} btnAction={() => deleteAction(item.id)} color={"error"} lableAction={"Delete"}>
          <p>{deleteConfirmationMessage}</p>
        </IconButtonDialog>
        <a href={`${viewPathPrefix}/${item.id}/update`}>
          <button className="btn btn-circle btn-ghost hidden lg:block">
            <FontAwesomeIcon icon={faPen} className="text-warning" />
          </button>
        </a>
        <a href={`${viewPathPrefix}/${item.id}`}>
          <button className="btn btn-circle btn-ghost">
            <FontAwesomeIcon icon={faEye} className="text-primary" />
          </button>
        </a>
      </td>

    </tr>
  );
};

export default TableRow;