import next from 'next';
import styles from '../styles/NavBar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import styles2 from '../styles/Login.module.css';
function SideNavBar() {
    const [open, setOpen] = useState(true);
    //4.6rem
    const width = open ? '18rem' : '4.4rem';
    const logow = open ? '70px' : '35px';
    return (
        <section className='flex'>
            <div className={styles.navbar} style={{ width: `${width}` }}>
                <div className='py-3 flex justify-center'>
                    <div className={styles.icon} style={{ cursor: 'pointer', backgroundImage: `url("/images/icon_menu.png")` }} onClick={() => setOpen(!open)} />
                </div>
                <div className='mt-4 flex flex-col gap-4'>
                    <div className={styles.icon} style={{ width: `${logow}`, height: `${logow}`, backgroundImage: `url("/images/logo_unl.png")` }} />
                    <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 overflow-hidden'}`} >Sistema de Gestion de Tutorias</span>
                    <h1 className={styles2.minimalistsubtitle}>Menu</h1>

                    <Link href="/tutorias" passHref className='group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-900 rounded-md'>
                        <div className={styles.icon} style={{ backgroundImage: `url("/images/icon_tutorias.png")` }} />
                        <span className={` whitespace-pre duration-500 ${!open && 'opacity-0 overflow-hidden hidden'}`}>Tutorias</span>
                    </Link>

                    <Link href="/login" passHref className='group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-900 rounded-md'>
                        <div className={styles.icon} style={{ backgroundImage: `url("/images/icon_materias.png")` }} />
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 overflow-hidden hidden'}`}>Asignaturas</span>
                    </Link>

                    <Link href="/login" passHref className='group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-900 rounded-md'>
                        <div className={styles.icon} style={{ backgroundImage: `url("/images/icon_credentials_user.png")` }} />
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 overflow-hidden hidden'}`}>Perfil</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}


export default SideNavBar;