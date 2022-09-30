import React, { useState, useEffect } from "react"

const ListSanPham = () => {
    const [listsanpham, setlistsanpham] = useState([])
    useEffect(() => {
        const listSanpham = JSON.parse(localStorage.getItem('listsanpham')) || [];
        setlistsanpham(listSanpham)
        // console.log(URL.createObjectURL(1656948138351))
    }, [])

    return (
        <React.Fragment>
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm </th>
                    <th>Số lượng</th>
                    <th>Giá tiền </th>
                    <th>Ảnh sản phẩm </th>
                </tr>

                {
                    listsanpham.map((e, index) => {
                        console.log(e.urlImage)
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{e.name}</td>
                                <td>{e.sl}</td>
                                <td>{e.money}</td>

                                <td> <img src={e.urlImage} className='image_sp' alt="Error load image" width="200" height="200" /> </td>

                            </tr>
                        )
                    })
                }

            </table>
        </React.Fragment>
    )
}

export default ListSanPham