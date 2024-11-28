import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react'

import PetCard from '@/Components/PetCard';
import AdminLayout from '@/Layouts/AdminLayout';


import axios from 'axios';
import Swal from 'sweetalert2';

import DataTable from 'react-data-table-component';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import Carousel from '@/Components/Carousel';

const columns = (publish, d, see) => [
	{
		name: 'Tipo',
		selector: row => row.tipo.nombre,
	},
    {
		name: 'Sexo',
		selector: row => row.sexo,
	},
	{
		name: 'Edad',
		selector: row => row.edad,
	},
    {
		name: 'Peso',
		selector: row => row.peso,
	},
    {
		name: 'Descripción',
		selector: row => row.descripcion,
        cell: (row) => (
            <div className="break-words max-w-xs overflow-hidden">
              {row.descripcion}
            </div>
        ),
	},
    {
		name: 'Usuario',
		selector: row => row.usuario.name,
	},
    {
        name: 'Acciones',
        cell: row => (
            <div className="flex gap-2">
                <button
                    onClick={() => publish(row.id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                    </svg>
                </button>
                <button
                    onClick={() => d(row.id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
                <button
                    onClick={() => see(row)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </button>
            </div>
        ),
        ignoreRowClick: true, // Ignora el clic en esta celda para no seleccionar la fila
        allowoverflow: true, // Asegura que el contenido no se corte
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


const Adoptions = ({ mascotas }) => {

    const [mascota, setMascota] = useState(null);
    const [modal, setModal] = useState(false);

    const onPublish = async (id) => {
        Swal.fire({
            title: "Publicar mascota",
            text: "La mascota será publicada para su adopción",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, publicar!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if(result.isConfirmed) {
                axios.post("/panel/admin/adopciones/publicar", { mascotaId: id })
                    .then(() => {
                        Swal.fire({
                            title: "Mascota publicada!",
                            text: "La mascota ha sida publicada para su adopción.",
                            icon: "success"
                        });
    
                        router.reload({ only: ["mascotas"] });
                    })
                    .catch((error) => {
                        console.log(error);
                        Swal.fire({
                            title: "Error!",
                            text: "Algo salió mal.",
                            icon: "error"
                        });
                    });
            }
        });
    }

    const onDelete = async (id) => {
        Swal.fire({
            title: "Eliminar mascota",
            text: "La mascota será eliminada",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if(result.isConfirmed) {
                axios.post("", { mascotaId: id })
                    .then(() => {
                        Swal.fire({
                            title: "Mascota eliminad!",
                            text: "La mascota ha sida eliminada correctamente.",
                            icon: "success"
                        });
    
                        router.reload({ only: ["mascotas"] });
                    })
                    .catch((error) => {
                        console.log(error);
                        Swal.fire({
                            title: "Error!",
                            text: "Algo salió mal.",
                            icon: "error"
                        });
                    });
            }
        })
    }

    const onSee = (mascota) => {
        setMascota(mascota);
        setModal(true);
    }

    return (
        <>
            <Head title="Mis mascotas"/>
            <Modal
              title="Mascota"
              show={modal}
              onClose={() => {
                setModal(false);
                setMascota(null);
              }}
            >
                <div className='w-full pb-5 px-5'>
                    <h5 className="text-2xl font-bold tracking-tight text-custom-brown">{mascota?.tipo?.nombre}</h5>
                    <p className="text-custom-brown text-sm leading-relaxed">
                        <strong>Edad:</strong> {mascota?.edad} meses
                    </p>
                    <p className="text-custom-brown text-sm leading-relaxed">
                        <strong>Peso:</strong> {mascota?.peso} kg
                    </p>
                    <p className="text-custom-brown text-sm leading-relaxed">
                        <strong>Sexo:</strong> {mascota?.sexo}
                    </p>
                    <p className="text-custom-brown text-sm leading-relaxed">
                        <strong>Descripción:</strong> {mascota?.descripcion}
                    </p>
                    <Carousel images={mascota?.imagenes || []}/>
                </div>
            </Modal>
            <div className="p-12">
                {/*<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3'>
                    {mascotas.map((mascota) => (
                        <PetCard
                            key={mascota.id}
                            mascota={mascota}
                            type='admin'
                            publishFunction={() => onPublish(mascota.id)}
                        />
                    ))}
                </div>*/}
                <DataTable
                    columns={columns(onPublish, onDelete, onSee)}
                    data={mascotas}
                    highlightOnHover
                    striped
                    noDataComponent={<div style={{ padding: '10px', color: 'red' }}>No hay datos disponibles</div>}
                    customStyles={customStyles}
                />
            </div>
        </>
    );
};

Adoptions.layout = (page) => (
    <AdminLayout 
        children={page}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Adopciones</h2>}
    />
);

export default Adoptions