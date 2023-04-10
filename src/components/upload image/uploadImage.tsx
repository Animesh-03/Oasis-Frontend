import React from 'react';
import Button from '../button/button';

interface UploadImageProps {
    onSuccess: Function
}

const UploadImage: React.FC<UploadImageProps> = ({onSuccess}) => {
    const cloudinaryRef = React.useRef<any>();
    const widgetRef = React.useRef<any>();

    React.useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "dydvszekh",
            uploadPreset: "k5lvr3i3"
        }, (error, result) => {
            if(error)
            {
                console.error(error);
                return;
            }
                
            if(result.event === "success")
            {
                onSuccess(result.info.secure_url);
            }
        });
    },[])

    return (
        <Button label='Upload Image' variant = 'elong' onClick={(e) => {e.preventDefault(); widgetRef.current.open();}} />
    )
}

export default UploadImage;