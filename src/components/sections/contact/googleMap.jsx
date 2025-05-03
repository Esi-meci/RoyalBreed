import React, { forwardRef } from 'react';

const GoogleMap = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="lg:pt-15 lg;pb-15 pb-10 pt-10 overflow-x-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4144203307565!2d3.5826332740279505!3d6.469071823795438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf9e347d5c63d%3A0x88d827c063f03e4c!2sRoyal%20Breed%20International%20Schools!5e0!3m2!1sen!2sng!4v1746217802822!5m2!1sen!2sng" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
})

export default GoogleMap