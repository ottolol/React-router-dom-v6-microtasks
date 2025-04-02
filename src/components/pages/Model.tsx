import { useParams } from "react-router-dom"
import { adidasArr, AdidasItem } from "./Adidas"
import { pumaArr, PumaItem } from "./Puma";

export const Model = () => {
    // Тип для брендов
    type BrandType = {
        [key: string] : (AdidasItem[] | PumaItem[])
    };

    // Получаем параметры маршрута
    let { brand, id } = useParams(); 

    // Создаем объект, где ключи — это бренды, а значения — соответствующие массивы
    const brandData: BrandType  = {
        adidas: adidasArr,
        puma: pumaArr
        // Добавьте остальные бренды и массивы сюда
    };

    // Проверяем, что brand существует и является допустимым ключом
    // if (!brand || !(brand in brandData)) {
    //     return <p>Бренд не найден</p>;
    // }

    const selectedModel = brand ? brandData[brand].find(el => el.id === id) : null;

    return (
        <div>
            {selectedModel ? 
            (
                <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", gap: "20px"}}>
                    <div>Модель: {selectedModel.model}</div>
                    <div>Цена: {selectedModel.price}</div>
                    <div><img src={selectedModel.picture} alt={selectedModel.model} style={{ width: "400px", textAlign: "center" }} /></div>
                </div>) : (<div>Модель отсутствует</div>)
            }
        </div>
    )
}