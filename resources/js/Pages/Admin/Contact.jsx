
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

import DataTable from 'react-data-table-component';

const columns = [
	{
		name: 'Nombre',
		selector: row => row.name,
	},
    {
		name: 'Correo',
		selector: row => row.email,
	},
	{
		name: 'Teléfono',
		selector: row => row.telefono,
	},
    {
		name: 'Asunto',
		selector: row => row.subject,
	},
    {
		name: 'Mensaje',
		selector: row => row.message,
        cell: (row) => (
            <div className="break-words max-w-xs overflow-hidden">
              {row.message}
            </div>
        ),
	},
];

const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // Altura mínima para las filas
      },
    },
    headCells: {
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: '#BF9F63',
        textColor: 'white'
      },
    },
    cells: {
      style: {
        fontSize: '14px',
      },
    },
  };

const Contact = ({ contacts }) => {
    console.log(contacts);
    return (
        <>
            <Head title="Contacto"/>
            <div
                className="p-12"
            >
                <DataTable
                    columns={columns}
                    data={contacts}
                    highlightOnHover
                    striped
                    noDataComponent={<div style={{ padding: '10px', color: 'red' }}>No hay datos disponibles</div>}
                    customStyles={customStyles}
                />
            </div>
        </>
    )
}

Contact.layout = (page) => (
    <AdminLayout 
        children={page}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contactos</h2>}
    />
);

export default Contact;