import { useState } from 'react';
import styles from './Gallery.module.css';

export function Gallery() {
    const [images, setImages] = useState([]);

    const handleInputFile = ({target}) => {
        if(target.files.length > 0) {
            const reader = new FileReader()

            reader.readAsDataURL(target.files[0]);

            reader.onload = () => {
                setImages(prev => [...prev, reader.result]);
                // setImages([...images, reader.result]);
            }
        }
    }

    return (
        <div className={styles['container']}>
            {
                images.map(
                    (img, ind) => (
                        <img 
                            src={img} 
                            key={ind} 
                            className={styles['item']}
                        />
                    )
                )
            }
            <label 
                htmlFor='new-img' 
                className={styles['input-view']}
            >
                +
                <input 
                    id="new-img" 
                    type="file" 
                    accept=".png,.jpeg,.jpg"
                    className={styles['input-controll']}
                    onChange={handleInputFile}
                />
            </label>
            
        </div>
    )
}