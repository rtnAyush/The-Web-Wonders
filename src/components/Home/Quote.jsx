import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';



const Quote = () => {
    return (
        <div className='quote__section'>

            <section className="icon">
                <FormatQuoteIcon />
            </section>
            <section className='quote-text'>
                Food helps us to live our live
            </section>

        </div>
    )
}

export default Quote