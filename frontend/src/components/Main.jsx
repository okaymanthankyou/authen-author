import React from 'react'
import Buttton from './Buttton'

const Main = () => {
  return (
    <>
        <div className="container">
            <div className='p-5 rounded text-center bg-light-dark '>
                <h2>AUTHENTICATION AUTHORIZATION DEMO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum atque necessitatibus, totam aspernatur minima mollitia at unde quos nihil laboriosam exercitationem quo libero. Placeat, autem labore! Repudiandae, fugiat facere nam quae iste assumenda, explicabo quidem pariatur necessitatibus enim autem dolore officia corporis a, dolor beatae non ipsam aliquam. Voluptatibus.</p>
                <Buttton name='Login' class='btn btn-outline-info' />
            </div>
        </div>
    </>
  )
}

export default Main