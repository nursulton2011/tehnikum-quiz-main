import React from 'react'

// export const Button = (properties) => {
//     const {abc, name, hello, isPrimary} = properties

//     console.log(abc)
//     console.log(name)
//     console.log(hello)
//     console.log(isPrimary)

//     return (
//         <button disabled type="submit" id="next-btn">
//             Далее
//         </button>
//     )
// }

export const Button = ({ text }) => {
    return (
        <>
            <div>hello</div>
            <button disabled type="submit" id="next-btn">
                {text}
            </button>
        </>
    )
}
