import React, { useState } from 'react'
import './add.css'
const AddSanPham = () => {

    const [name, setName] = useState('')
    const [money, setmoney] = useState('')
    const [sl, setSl] = useState('')
    const [urlImage, setUrlImage] = useState('https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg')
    const [urlReset, setUrlReset] = useState()
    const onChnageName = (e) => {
        setName(e.target.value)
    }
    const onChnageMoney = (e) => {
        if (e.target.value < 1) {
            alert("Tiền phải lớn hơn 1 ")
            return
        }
        setmoney(e.target.value)
    }
    const onChnageSl = (e) => {
        if (e.target.value < 1) {
            alert("số lương phải lớn hơn  1 ")
            return
        }
        setSl(e.target.value)
    }
    const createSp = () => {
        const listSanpham = JSON.parse(localStorage.getItem('listsanpham')) || [];
        console.log(urlReset)
        const dataNewSanpham = {
            name, money, sl, urlImage
        }
        listSanpham.push(dataNewSanpham)
        localStorage.setItem('listsanpham', JSON.stringify(listSanpham));
    }
// base string
    const getUrlImage = (e) => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setUrlImage(reader.result);
        };
    }

    return (
        <React.Fragment >
            <div className="form_add">
                <h2>
                    Đây là trang add sản phẩm
                </h2>
                <div className='form_add_san_pham'>
                    <label htmlFor="">Tên sản phẩm</label><br />
                    <input type="text" id="fname" name="fname" placeholder='Nhập tên sản phẩm' onChange={onChnageName} value={name} /><br />
                    <label htmlFor="">Giá  tiền</label><br />
                    <input type="number" id="fname" name="fname" placeholder='Giá tiền' onChange={onChnageMoney} value={money} /> VNĐ<br />
                    <label htmlFor="">Số lượng</label><br />
                    <input type="number" id="fname" name="fname" placeholder='Nhập số lượng' onChange={onChnageSl} value={sl} /><br />
                    <label htmlFor="">Ảnh sản phẩm </label><br />
                    <img src={urlImage} className='image_sp' alt="Error load image" width="200" height="200" />

                </div>
                <input type="file" id="img" name="img" accept="image/*" onChange={getUrlImage} />
                <button onClick={createSp}>Thêm sản phẩm </button>
            </div>

        </React.Fragment>
    )
}
export default AddSanPham