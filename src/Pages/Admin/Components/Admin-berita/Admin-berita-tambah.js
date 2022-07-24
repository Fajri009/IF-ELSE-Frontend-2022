import React,{useState} from "react";
import { Form,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addBerita } from "../../../../Data/Berita";

const TambahBerita = () => {
    const [caption,setCaption] = useState('');
    const [judul,setJudul] = useState('');
    const [img,setImg] = useState('');
    const nav = useNavigate();

    return(
        <>
        <i className="fa-solid fa-arrow-left ms-4 mt-4 text-dark" onClick={()=>nav(-1)} style={{"cursor":"pointer"}}></i>
        <div className="bg-dark m-2 p-3 m-md-4 p-md-4 text-light">
            <h3>Tambah Berita Baru</h3>
            <hr></hr>
            <Form className="px-0 px-md-5" onSubmit={e=>{
                e.preventDefault();
                addBerita({judul,img,caption});
                setJudul('');
                setImg('');
                setCaption('');
                nav('/admin$/berita')
            }}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan judul..." value={judul} onChange={e=>setJudul(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFile">
                    <Form.Label>Gambar</Form.Label>
                    <div className="w-75 m-auto my-2 border border-light">
                        {img !== '' ? <img src={img} alt="gambarBerita" className="img-fluid"></img> : null}
                    </div>
                    <Form.Control type="file" onChange={e=>setImg(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCaption">
                    <Form.Label>Caption</Form.Label>
                    <Form.Control as="textarea" rows={28} placeholder="Masukkan kepsyen..." value={caption} onChange={e=>setCaption(e.target.value)} required/>
                </Form.Group>
                <section className="justify-content-center justify-content-md-end row">
                    <Button className="m-2 col-5 col-md-2" variant="secondary" onClick={()=>nav('/admin$/berita')}>Gajadi :(</Button>
                    <Button className="m-2 col-5 col-md-2">Preview</Button>
                    <Button className="m-2 col-5 col-md-2" type="submit">Simpan</Button>
                </section>
            </Form>
        </div>
        </>
    );
}

export default TambahBerita;