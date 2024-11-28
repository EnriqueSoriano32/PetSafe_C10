import OrgFormModal from '@/Components/Modals/OrgFormModal';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react'

import DataTable from 'react-data-table-component';

const columns = [
	{
		name: 'Nombre',
		selector: row => row.nombre_organizacion,
	},
	{
		name: 'Teléfono',
		selector: row => row.telefono,
	},
  {
		name: 'Dirección',
		selector: row => row.ubicacion,
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

const Orgs = ({ orgs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCreateClick = () => {
    setIsOpen(true); // Cambia el estado al hacer clic en el botón
  };

  console.log(orgs);

  return (
    <>
      <Head
        title="Organizaciones"
      />
      <OrgFormModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <AdminLayout
        header={
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Organizaciones</h2>
            <button
              className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600"
              onClick={handleCreateClick}
            >Crear</button>
          </div>
        }
      >
        <div className="p-12">
          <DataTable
            columns={columns}
            data={orgs}
            highlightOnHover
            striped
            noDataComponent={<div style={{ padding: '10px', color: 'red' }}>No hay datos disponibles</div>}
            customStyles={customStyles}
          />
        </div>
      </AdminLayout>
    </>
  );
}

export default Orgs