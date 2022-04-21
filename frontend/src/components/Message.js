import React from 'react';
import { ALERT } from '../styles/styleComponents';
import { createPortal } from 'react-dom';


export default function Message({ className, variant, children }) {

    return createPortal(
            <ALERT className={className} variant={variant}>
                {children}
            </ALERT>,
        document.getElementById("messages")
    )

}

